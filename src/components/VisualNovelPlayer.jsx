import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, SkipForward, Pause, Sparkles, Trophy, CheckCircle2, RotateCcw, Home, Frown, Volume2, VolumeX } from 'lucide-react'
import { getSprite } from '../data/sprites'
import { getBackground } from '../data/backgrounds'

// VisualNovelPlayer - Engine chính
export default function VisualNovelPlayer({ chapter, onComplete, onExit, onRestart, restartSceneId, _sessionKey, _restartCounter }) {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showChoices, setShowChoices] = useState(false)
  const [bgTransition, setBgTransition] = useState(false)
  const [paused, setPaused] = useState(false)
  // 🆕 Modal flow: ending BG → lesson modal → cup modal → onComplete
  const [showLessonModal, setShowLessonModal] = useState(false)
  const [showCupModal, setShowCupModal] = useState(false)
  // 🆕 Bad ending flow: ending BG → fail modal (hỏi chơi lại / về trang chính)
  const [showFailModal, setShowFailModal] = useState(false)
  const typingRef = useRef(null)
  // 🔊 Lồng tiếng: phát wav đã render sẵn, tra theo scene.id. KHÔNG gọi TTS lúc chạy.
  const [muted, setMuted] = useState(false)
  const [voices, setVoices] = useState(null)
  const voiceRef = useRef(null)

  const currentScene = chapter.scenes[sceneIndex]

  // 🔄 Xử lý restart: khi _restartCounter thay đổi → reset về scene restartSceneId
  useEffect(() => {
    if (_restartCounter === undefined || _restartCounter === 0) return // Bỏ qua lần mount đầu
    console.log('[DEBUG-VN-RESTART] _restartCounter changed:', _restartCounter, 'restartSceneId:', restartSceneId)
    setDisplayedText('')
    setShowChoices(false)
    setShowLessonModal(false)
    setShowCupModal(false)
    setShowFailModal(false)
    if (restartSceneId && chapter?.scenes) {
      const idx = chapter.scenes.findIndex((s) => s.id === restartSceneId)
      console.log('[DEBUG-VN-RESTART] Jump to scene idx:', idx)
      if (idx >= 0) {
        setSceneIndex(idx)
        return
      }
    }
    setSceneIndex(0)
  }, [_restartCounter])

  // Nạp bảng tra audio một lần. Thiếu file thì game vẫn chạy, chỉ là không có tiếng.
  useEffect(() => {
    fetch('/audio/thang-bom/manifest.json')
      .then((r) => (r.ok ? r.json() : null))
      .then(setVoices)
      .catch(() => setVoices(null))
  }, [])

  // Phát lời thoại của scene hiện tại. Đổi scene / tắt tiếng / tạm dừng đều cắt ngay.
  useEffect(() => {
    voiceRef.current?.pause()
    voiceRef.current = null
    if (muted || paused || !voices || !currentScene?.id) return

    const line = voices[currentScene.id]
    if (!line) return

    const audio = new Audio(line.src)
    voiceRef.current = audio
    // Trình duyệt chặn autoplay nếu chưa có tương tác — nuốt lỗi, đừng để vỡ scene.
    audio.play().catch(() => {})

    return () => audio.pause()
  }, [sceneIndex, currentScene, voices, muted, paused])

  // Typewriter effect
  useEffect(() => {
    if (!currentScene || currentScene.type === 'choice' || paused) return
    if (currentScene.type === 'narrator' && !currentScene.text) return

    const text = currentScene.text || ''
    setDisplayedText('')
    setIsTyping(true)
    let i = 0

    const typeNext = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
        typingRef.current = setTimeout(typeNext, 30) // 30ms mỗi ký tự
      } else {
        setIsTyping(false)
      }
    }
    typeNext()

    return () => clearTimeout(typingRef.current)
  }, [sceneIndex, currentScene, paused])

  // Skip typewriter khi click
  const handleClick = () => {
    if (isTyping) {
      clearTimeout(typingRef.current)
      setDisplayedText(currentScene.text || '')
      setIsTyping(false)
    } else if (currentScene.type === 'choice') {
      // Choices có UI riêng
    } else {
      handleNext()
    }
  }

  const handleNext = () => {
    // 🆕 Check endingType NGAY ở scene hiện tại (không chờ scene cuối array)
    // Vì bad/good ending có thể nằm giữa array, các scene sau là nhánh khác
    if (currentScene?.endingType === 'bad') {
      setBgTransition(true)
      setTimeout(() => setBgTransition(false), 200)
      setShowFailModal(true)
      return
    }
    if (currentScene?.endingType === 'good') {
      setBgTransition(true)
      setTimeout(() => setBgTransition(false), 200)
      setShowLessonModal(true)
      return
    }

    if (sceneIndex < chapter.scenes.length - 1) {
      setBgTransition(true)
      setTimeout(() => {
        setSceneIndex((i) => i + 1)
        setBgTransition(false)
      }, 400)
    } else {
      // Fallback cho scene cuối không có endingType
      const lastScene = chapter.scenes[sceneIndex]
      if (lastScene?.lessonData) {
        setShowLessonModal(true)
      } else {
        onComplete?.()
      }
    }
  }

  const handleChoice = (choice) => {
    if (choice.nextScene) {
      const targetIdx = chapter.scenes.findIndex((s) => s.id === choice.nextScene)
      if (targetIdx >= 0) {
        setBgTransition(true)
        setTimeout(() => {
          setSceneIndex(targetIdx)
          setShowChoices(false)
          setBgTransition(false)
        }, 400)
      }
    } else {
      handleNext()
    }
  }

  if (!currentScene) return null

  const CharacterComponent = currentScene.character ? getSprite(currentScene.character, currentScene.expression || 'happy') : null
  const BackgroundComponent = getBackground(currentScene.background)

  // ===== SPRITE POSE HANDLING (multi-state animation) =====
  // Mỗi scene có thể chỉ định pose để animate nhân vật
  // Ví dụ: Bờm neutral → Phú Ông đưa tiền → Bờm vươn tay cầm
  const pose = currentScene.pose || 'idle'

  // Map pose → CSS transform (translate, rotate, scale)
  const POSE_ANIMATIONS = {
    idle:         { x: 0,  y: 0,  rotate: 0,   scale: 1,    armPose: 'down' },
    reachOut:     { x: 30, y: -8, rotate: -3,  scale: 1.05, armPose: 'right-out' },   // Vươn tay phải ra
    grabMoney:    { x: 25, y: -12,rotate: -2,  scale: 1.08, armPose: 'holding' },     // Cầm tiền
    countMoney:   { x: 0,  y: -5, rotate: 0,   scale: 1.05, armPose: 'counting' },    // 🆕 Đếm tiền (ngồi trước hũ vàng)
    celebrate:    { x: 0,  y: -25,rotate: 0,   scale: 1.1,  armPose: 'up' },          // Nhảy mừng
    shocked:      { x: 0,  y: 0,  rotate: 0,   scale: 0.95, armPose: 'down' },        // Sốc
    bowed:        { x: 0,  y: 5,  rotate: 0,   scale: 0.95, armPose: 'down' },        // Cúi đầu
    leanForward:  { x: 0,  y: -5, rotate: 5,   scale: 1.02, armPose: 'pointing' },    // Nghiêng về phía trước
    leanBack:     { x: 0,  y: 0,  rotate: -5,  scale: 0.98, armPose: 'down' },        // Ngả ra sau
    offerMoney:   { x: -30,y: -8, rotate: 3,   scale: 1.05, armPose: 'left-out' },    // Đưa tiền (ngược chiều)
    proud:        { x: 0,  y: -3, rotate: 0,   scale: 1.03, armPose: 'hips' },        // Khoanh tay tự mãn
    explain:      { x: 0,  y: 0,  rotate: 0,   scale: 1,    armPose: 'gesturing' },   // Giải thích
  }

  const poseAnim = POSE_ANIMATIONS[pose] || POSE_ANIMATIONS.idle

  // ===== DIALOGUE HIGHLIGHT: nhân vật to lên + BG mờ khi có dialogue =====
  const isDialogue = currentScene.type === 'dialogue'
  const dialogueBgOpacity = isDialogue ? 0.62 : 1.0       // BG mờ xuống khi dialogue
  const dialogueScaleBoost = isDialogue ? 1.12 : 1.0      // Character to hơn khi dialogue
  const dialogueHeightBoost = isDialogue ? 1.1 : 1.0     // Chiều cao tăng thêm

  // ===== SPRITE INTERACTION: tạo hiệu ứng "đưa tiền" giữa 2 nhân vật =====
  // Khi Phú Ông pose=offerMoney + Bờm pose=grabMoney trong 2 scene liên tiếp → có hiệu ứng tiền bay
  const showMoneyTransfer =
    currentScene.moneyTransfer === true ||
    (pose === 'grabMoney' && currentScene.expression === 'happy')

  // BG có sẵn nhân vật (do Gemini vẽ) → KHÔNG render sprite riêng để tránh đè
  const BG_HAS_CHARACTER = [
    'thangbom-bom-buon',              // Bờm đứng trước nhà trống đổ nát (ending xấu)
    'thangbom-canh-dong-giat-lua',   // Bờm gặt lúa composite (hòa vào BG)
  ].includes(currentScene.background)
  const showSprite = CharacterComponent && !BG_HAS_CHARACTER
  // Illustration chỉ hiện khi KHÔNG có sprite (BG có sẵn nhân vật) để tránh đè
  const showIllustration = currentScene.illustration &&
    currentScene.illustration.startsWith('/images/') &&
    !BG_HAS_CHARACTER

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Container full màn hình */}
      <div className="relative w-full h-full bg-black overflow-hidden">
        {/* Background - dùng layer riêng cho mỗi scene, crossfade nhanh */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={`bg-${sceneIndex}-${currentScene.background}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: dialogueBgOpacity }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {BackgroundComponent}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dark overlay mỏng làm nổi bật nhân vật khi dialogue */}
        {isDialogue && (
          <motion.div
            key={`dialogue-overlay-${sceneIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.25) 100%)',
              // Làm mờ viền ngoài, giữ sáng ở giữa chỗ nhân vật
            }}
          />
        )}

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: 'inset 0 0 200px rgba(0,0,0,0.4)'
        }} />

        {/* Character sprite - size cố định để đồng đều giữa các scene, hỗ trợ pose animation */}
        {showSprite && (
          <motion.div
            key={`${currentScene.character}-${currentScene.expression}-${sceneIndex}`}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, type: 'spring' }}
            data-pose={pose}
            data-character={currentScene.character}
            className={`absolute bottom-32 lg:bottom-40 ${
              currentScene.characterPosition === 'left' ? 'left-[8%]' :
              currentScene.characterPosition === 'right' ? 'right-[8%]' :
              'left-1/2 -translate-x-1/2'
            } z-20 ${
              // Chiều cao tăng thêm khi dialogue để nhân vật to lên
              isDialogue ? 'h-[60vh] lg:h-[72vh]' : 'h-[55vh] lg:h-[65vh]'
            } aspect-[3/4]`}
          >
            {/* Pose animation layer - di chuyển, xoay, scale theo pose */}
            <motion.div
              key={`pose-${sceneIndex}-${pose}`}
              initial={{ x: poseAnim.x * 0.3, y: poseAnim.y * 0.3, rotate: poseAnim.rotate * 0.5, scale: poseAnim.scale * 0.95 }}
              animate={{
                x: poseAnim.x,
                y: [poseAnim.y, poseAnim.y - 6, poseAnim.y],
                rotate: poseAnim.rotate,
                scale: poseAnim.scale * dialogueScaleBoost,
              }}
              exit={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 0 }}
              transition={{
                x: { duration: 0.6, ease: 'easeOut' },
                y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 0.6, ease: 'easeOut' },
                scale: { duration: 0.6, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              {/* CharacterComponent với CSS pose class */}
              <div
                className={`sprite-pose-${poseAnim.armPose} w-full h-full`}
                style={{
                  filter: pose === 'grabMoney' || pose === 'reachOut'
                    ? 'drop-shadow(0 8px 20px rgba(255, 215, 0, 0.4))'
                    : 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                }}
              >
                {CharacterComponent}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ===== MONEY TRANSFER EFFECT: Tiền bay giữa 2 nhân vật ===== */}
        {showMoneyTransfer && showSprite && (
          <motion.div
            key={`money-${sceneIndex}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              x: currentScene.character === 'bom'
                ? [100, 0, -50]
                : [-100, 0, 50],
              y: [-30, -60, -30],
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.4, 0.7, 1],
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 z-30 text-6xl pointer-events-none"
          >
            💰
          </motion.div>
        )}

        {/* ===== SPARKLES cho pose celebrate/excited ===== */}
        {(pose === 'celebrate' || currentScene.expression === 'excited') && showSprite && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 1.5] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute top-[20%] left-[15%] z-10 text-4xl"
            >
              ✨
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 1.5] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
              className="absolute top-[25%] right-[15%] z-10 text-4xl"
            >
              ⭐
            </motion.div>
          </>
        )}

        {/* Illustration - hình minh họa phân cảnh (object, không có người) */}
        {showIllustration && (
          <motion.div
            key={`illust-${sceneIndex}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[10%] right-[5%] lg:top-[12%] lg:right-[8%] z-20 w-[35%] max-w-[320px]"
          >
            <img
              src={currentScene.illustration}
              alt="Scene illustration"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))' }}
            />
          </motion.div>
        )}

        {/* 🆕 Cast Card - Hiển thị khi scene có field `cast` (giới thiệu nhân vật) */}
        {currentScene.cast && (
          <motion.div
            key={`cast-${sceneIndex}`}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ delay: 0.4, type: 'spring', damping: 18 }}
            className="absolute top-20 left-4 lg:top-24 lg:left-8 z-30 max-w-[280px] lg:max-w-[320px]"
          >
            <div className="relative bg-gradient-to-br from-amber-900/90 via-amber-800/95 to-yellow-900/90 backdrop-blur-md rounded-2xl border-2 border-yellow-400/50 p-4 lg:p-5 shadow-2xl">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-yellow-300/70 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-yellow-300/70 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-yellow-300/70 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-yellow-300/70 rounded-br-2xl" />

              {/* Header badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-white font-bold text-xs mb-2 shadow-md uppercase tracking-wider">
                ⭐ Giới thiệu nhân vật
              </div>

              {/* Tên nhân vật */}
              <div className="text-yellow-100 font-bold text-xl lg:text-2xl mb-1 flex items-center gap-2">
                <span className="text-2xl">{currentScene.cast.emoji}</span>
                <span>{currentScene.cast.name}</span>
              </div>

              {/* Tuổi */}
              {currentScene.cast.age && (
                <div className="text-amber-200/90 text-sm mb-2 italic">
                  {currentScene.cast.age} tuổi
                </div>
              )}

              {/* Vai trò */}
              <div className="text-yellow-50/90 text-sm leading-relaxed border-t border-yellow-400/30 pt-2 mt-2">
                {currentScene.cast.role}
              </div>
            </div>
          </motion.div>
        )}

        {/* Top UI - chỉ chapter title nhỏ ở góc */}
        <div className="absolute top-4 left-4 z-40 flex items-center gap-2">
          <div className="text-xs lg:text-sm bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white/80 border border-white/10">
            📖 {chapter.title}
          </div>
        </div>

        {/* Bottom UI - Exit + Scene counter + Pause - ẩn khi modal đang hiện */}
        {!showLessonModal && !showCupModal && (
        <div className="absolute bottom-4 left-4 right-4 z-40 flex items-end justify-between pointer-events-none">
          {/* Exit button - góc dưới trái */}
          <button
            onClick={(e) => { e.stopPropagation(); onExit?.() }}
            className="pointer-events-auto px-4 py-2 lg:px-5 lg:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-sm lg:text-base rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 border-2 border-white/20"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Thoát</span>
          </button>

          {/* Scene counter - góc dưới phải */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setMuted(!muted) }}
              className="p-2 lg:p-2.5 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition border border-white/20"
              title={muted ? 'Bật lời thoại' : 'Tắt lời thoại'}
            >
              {muted ? (
                <VolumeX className="h-4 w-4 text-white/60" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setPaused(!paused) }}
              className="p-2 lg:p-2.5 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition border border-white/20"
              title={paused ? "Tiếp tục" : "Tạm dừng"}
            >
              {paused ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <Pause className="h-4 w-4 text-white" />
              )}
            </button>

            <div className="px-3 py-2 lg:px-4 lg:py-2.5 bg-black/50 backdrop-blur-md rounded-full text-white text-xs lg:text-sm font-bold border border-white/20 flex items-center gap-2">
              <span>{sceneIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{chapter.scenes.length}</span>
            </div>
          </div>
        </div>
        )}

        {/* Dialogue box - ẩn khi lesson/cup modal đang hiện */}
        {currentScene.type !== 'choice' && currentScene.text && !showLessonModal && !showCupModal && (
          <motion.div
            key={`dialogue-${sceneIndex}`}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', damping: 20 }}
            className="absolute bottom-20 left-4 right-4 lg:bottom-24 lg:left-8 lg:right-8 z-40"
          >
            <div className="relative bg-gradient-to-b from-black/85 to-black/95 backdrop-blur-md rounded-2xl border-2 border-white/20 p-6 lg:p-8 shadow-2xl">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/40 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-white/40 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-white/40 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/40 rounded-br-2xl" />

              {/* Speaker name */}
              {currentScene.speakerName && (
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-finteen-coral to-finteen-sunny rounded-full text-white font-bold text-sm mb-3 shadow-lg">
                  {currentScene.speakerName}
                </div>
              )}

              {/* Text with typewriter */}
              <div className="text-white text-base lg:text-xl leading-relaxed font-medium min-h-[3rem]">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-white ml-1"
                  />
                )}
              </div>

              {/* Continue indicator */}
              {!isTyping && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-3 right-4 text-white/60 flex items-center gap-1 text-xs"
                >
                  <span>Nhấn để tiếp tục</span>
                  <ChevronRight className="h-3 w-3" />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Choice UI */}
        {currentScene.type === 'choice' && (
          <motion.div
            key={`choice-${sceneIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 px-4 lg:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {currentScene.prompt && (
              <div className="text-center mb-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-finteen-coral via-finteen-sunny to-finteen-mint text-white font-display font-black text-lg lg:text-2xl rounded-2xl shadow-2xl border-2 border-white/30">
                  🤔 {currentScene.prompt}
                </div>
              </div>
            )}

            <div className="space-y-3 max-w-3xl mx-auto">
              {currentScene.choices.map((choice, i) => (
                <motion.button
                  key={choice.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleChoice(choice)
                  }}
                  className="group w-full text-left p-4 lg:p-5 bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-md rounded-2xl shadow-xl border-2 border-white/50 hover:border-finteen-sunny transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-finteen-coral to-finteen-sunny text-white font-black text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {choice.id}
                    </div>
                    <p className="text-gray-800 font-semibold text-base lg:text-lg flex-1">
                      {choice.text}
                    </p>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-finteen-coral group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 🆕 Fail Modal (Bad Ending) - hiện SAU khi ending BG, hỏi chơi lại / về trang chính */}
        <AnimatePresence>
          {showFailModal && currentScene?.endingType === 'bad' && (
            <motion.div
              key="fail-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-[60] flex items-center justify-center p-4 lg:p-8 bg-black/80 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.5, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', damping: 18 }}
                className="bg-gradient-to-br from-gray-100 to-red-50 rounded-3xl p-6 lg:p-10 max-w-lg w-full shadow-2xl border-4 border-red-300 text-center max-h-[90vh] overflow-y-auto"
              >
                {/* Icon buồn */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 text-6xl shadow-xl mb-4"
                >
                  {currentScene.endingMessage?.icon || '😢'}
                </motion.div>

                {/* Title - lấy từ endingMessage hoặc fallback */}
                <h2 className="text-3xl lg:text-4xl font-display font-black text-red-700 mb-4">
                  {currentScene.endingMessage?.title || 'Bạn đã thất bại!'}
                </h2>

                {/* Hậu quả - lấy từ endingMessage */}
                {currentScene.endingMessage?.consequence && (
                  <p className="text-gray-700 text-base lg:text-lg mb-4 leading-relaxed text-left">
                    {currentScene.endingMessage.consequence}
                  </p>
                )}

                {/* Bài học - lấy từ endingMessage */}
                {currentScene.endingMessage?.lesson && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6 text-left">
                    <p className="text-gray-800 text-sm lg:text-base font-semibold leading-relaxed">
                      💡 <strong>Bài học:</strong> {currentScene.endingMessage.lesson}
                    </p>
                  </div>
                )}

                {/* Câu hỏi cuối */}
                <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed font-semibold">
                  Bạn có muốn chơi lại để giúp Bờm đưa ra quyết định tốt hơn không?
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log('[DEBUG-VN] Button "Có, chơi lại" clicked!')
                      setShowFailModal(false)
                      // Chơi lại: parent sẽ tăng key → remount component → reset state về scene b8
                      onRestart?.()
                    }}
                    className="flex-1 py-4 bg-gradient-to-r from-finteen-coral to-finteen-sunny hover:from-red-500 hover:to-orange-500 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Có, chơi lại
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowFailModal(false)
                      // Về trang chính (parent navigate /package)
                      onExit?.()
                    }}
                    className="flex-1 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border-2 border-gray-300"
                  >
                    <Home className="h-5 w-5" />
                    Không, về trang chính
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🆕 Lesson Modal - hiện SAU khi ending BG đã hiện xong, user bấm 'Tiếp tục' */}
        <AnimatePresence>
          {showLessonModal && currentScene.lessonData && (
            <motion.div
              key="lesson-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-[60] flex items-center justify-center p-4 lg:p-8 bg-black/70 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.7, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.7, y: 50, opacity: 0 }}
                transition={{ type: 'spring', damping: 18 }}
                className="bg-gradient-to-br from-white to-finteen-cream rounded-3xl p-6 lg:p-10 max-w-3xl w-full shadow-2xl border-4 border-finteen-sunny"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-finteen-sunny to-yellow-400 text-5xl shadow-xl mb-3">
                    {currentScene.lessonData.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-display font-black text-gray-800 mb-2">
                    {currentScene.lessonData.title}
                  </h2>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Những điều Bờm đã học được từ câu chuyện hôm nay
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {currentScene.lessonData.points?.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-finteen-coral to-finteen-sunny text-white font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-800 leading-relaxed text-base lg:text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowLessonModal(false)
                    setShowCupModal(true)
                  }}
                  className="w-full py-4 bg-gradient-to-r from-finteen-coral via-finteen-sunny to-finteen-mint text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Hoàn thành chapter
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🆕 Cup Modal - hiện SAU lesson modal, thông báo nhận cup */}
        <AnimatePresence>
          {showCupModal && currentScene.lessonData && (
            <motion.div
              key="cup-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-[70] flex items-center justify-center p-4 lg:p-8 bg-black/80 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 rounded-3xl p-8 lg:p-12 max-w-md w-full shadow-2xl border-4 border-yellow-200 text-center"
              >
                {/* Animated cup */}
                <motion.div
                  animate={{
                    rotate: [0, -15, 15, -10, 10, 0],
                    scale: [1, 1.15, 1.1, 1.2, 1],
                    y: [0, -10, 0, -8, 0],
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.5 }}
                  className="text-8xl mb-4 inline-block drop-shadow-2xl"
                >
                  🏆
                </motion.div>

                {/* Sparkles */}
                <div className="relative">
                  <motion.div
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.3 }}
                    className="absolute top-0 left-8 text-3xl"
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8, delay: 0.3 }}
                    className="absolute top-2 right-8 text-3xl"
                  >
                    ⭐
                  </motion.div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-black text-amber-900 mb-2 drop-shadow-sm">
                  Chúc mừng bạn!
                </h2>
                <p className="text-amber-900/90 text-base lg:text-lg mb-1 font-semibold">
                  Bạn đã nhận được chiếc cup
                </p>
                <p className="text-amber-950 text-xl lg:text-2xl font-black mb-6 drop-shadow-sm">
                  {currentScene.lessonData.cupName}
                </p>

                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 mb-6 border-2 border-white/60">
                  <div className="flex items-center justify-center gap-2 text-amber-900 font-bold">
                    <Trophy className="h-5 w-5" />
                    <span>Phần thưởng đã được lưu vào bộ sưu tập</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowCupModal(false)
                    // Gọi onComplete để parent (PackagePlayPage) xử lý navigate
                    onComplete?.()
                  }}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Chấp nhận
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background transition overlay */}
        <AnimatePresence>
          {bgTransition && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black z-50"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
