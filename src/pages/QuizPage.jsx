import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { useGameStore } from '@/stores/gameStore'
import { getAdaptiveQuestions, getAdaptiveDifficulty } from '@/data/adaptiveQuiz'
import { getAIExplanation } from '@/data/aiAssistant'
import { cn } from '@/lib/utils'

export function QuizPage() {
  const { packageId, chapterId } = useParams()
  const navigate = useNavigate()
  const addCoins = useGameStore((s) => s.addCoins)
  const addXP = useGameStore((s) => s.addXP)
  const completeChapter = useGameStore((s) => s.completeChapter)
  const streakCount = useGameStore((s) => s.streakCount)

  // Adaptive state
  const [phase, setPhase] = useState('estimate') // estimate → scenario → result
  const [estimate, setEstimate] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [currentDifficulty, setCurrentDifficulty] = useState('medium')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [aiExplanation, setAiExplanation] = useState(null)
  const [loadingAI, setLoadingAI] = useState(false)

  const questions = getAdaptiveQuestions(chapterId, currentDifficulty, streakCount)
  const currentQ = questions[questionIndex]
  const isLastQuestion = questionIndex === questions.length - 1

  // Reset on chapter change
  useEffect(() => {
    setPhase('estimate')
    setEstimate('')
    setQuestionIndex(0)
    setCorrectCount(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setAiExplanation(null)
  }, [chapterId])

  // Phase 1: Submit estimate
  const handleEstimateSubmit = async () => {
    if (!estimate.trim()) return
    setLoadingAI(true)
    const ai = await getAIExplanation({
      type: 'estimate',
      estimate,
      question: currentQ.estimatePrompt,
      chapterId,
    })
    setAiExplanation(ai)
    setLoadingAI(false)
    setTimeout(() => {
      setPhase('scenario')
      setAiExplanation(null)
    }, 3000)
  }

  // Phase 2: Submit scenario answer
  const handleAnswerSubmit = async (optionId) => {
    setSelectedAnswer(optionId)
    setShowFeedback(true)
    const isCorrect = optionId === currentQ.correctAnswer
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
      addXP(20)
    } else {
      addXP(5) // vẫn cho chút XP vì đã thử
    }

    // Get AI explanation
    setLoadingAI(true)
    const ai = await getAIExplanation({
      type: 'answer',
      question: currentQ,
      userAnswer: optionId,
      isCorrect,
      correctAnswer: currentQ.correctAnswer,
      chapterId,
    })
    setAiExplanation(ai)
    setLoadingAI(false)

    // Adaptive: tăng/giảm độ khó
    setTimeout(() => {
      const newDifficulty = getAdaptiveDifficulty(
        currentDifficulty,
        isCorrect,
        streakCount
      )
      setCurrentDifficulty(newDifficulty)
    }, 100)
  }

  // Next question or finish
  const handleNext = () => {
    setSelectedAnswer(null)
    setShowFeedback(false)
    setAiExplanation(null)
    if (isLastQuestion) {
      finishQuiz()
    } else {
      setQuestionIndex((i) => i + 1)
      setPhase('estimate')
      setEstimate('')
    }
  }

  const finishQuiz = () => {
    const totalCoins = questions.reduce(
      (sum, q, i) =>
        sum + (correctCount >= i ? q.reward.coin : Math.floor(q.reward.coin / 4)),
      0
    )
    addCoins(totalCoins)
    completeChapter(chapterId)
    navigate(`/result/${packageId}/${chapterId}`)
  }

  if (!currentQ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Đang tải câu hỏi...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24 lg:pb-8 relative">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" /> Thoát
          </button>
          <div className="flex items-center gap-3">
            <Badge variant="purple">⭐ Câu {questionIndex + 1}/{questions.length}</Badge>
            <Badge variant={currentDifficulty === 'easy' ? 'mint' : currentDifficulty === 'medium' ? 'gold' : 'coral'}>
              {currentDifficulty === 'easy' && '⭐ Dễ'}
              {currentDifficulty === 'medium' && '⭐⭐ TB'}
              {currentDifficulty === 'hard' && '⭐⭐⭐ Khó'}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 pt-6">
        {/* Progress bar */}
        <ProgressBar
          value={((questionIndex + 1) / questions.length) * 100}
          color="primary"
          className="mb-6"
        />

        <AnimatePresence mode="wait">
          {phase === 'estimate' && (
            <motion.div
              key={`estimate-${questionIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-finteen-sunny/50 bg-gradient-to-br from-finteen-cream to-yellow-50 shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-finteen-sunny mb-3 shadow-lg">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-display font-black mb-2">
                      Bước 1: Ước lượng của bạn
                    </h2>
                    <p className="text-sm text-muted-foreground italic">
                      Hãy dự đoán trước khi tính toán - đây là bước quan trọng nhất!
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-inner mb-6">
                    <p className="text-base lg:text-lg leading-relaxed text-gray-800 font-medium">
                      {currentQ.estimatePrompt}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700">
                      Bạn ước lượng khoảng bao nhiêu?
                    </label>
                    <input
                      type="text"
                      value={estimate}
                      onChange={(e) => setEstimate(e.target.value)}
                      placeholder="Ví dụ: khoảng 50 xu, hay 30%, hay rẻ hơn 10 xu..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-finteen-sunny/40 focus:border-finteen-sunny outline-none text-base"
                      onKeyDown={(e) => e.key === 'Enter' && handleEstimateSubmit()}
                    />
                    <Button
                      onClick={handleEstimateSubmit}
                      disabled={!estimate.trim() || loadingAI}
                      className="w-full"
                      size="lg"
                    >
                      {loadingAI ? (
                        <>
                          <span className="animate-spin">🤖</span> AI đang phản hồi...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Gửi ước lượng
                        </>
                      )}
                    </Button>
                  </div>

                  {aiExplanation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">🤖</div>
                        <div>
                          <div className="text-xs font-bold text-blue-700 mb-1">AI TUTOR NÓI:</div>
                          <p className="text-sm leading-relaxed text-gray-800">
                            {aiExplanation.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {phase === 'scenario' && (
            <motion.div
              key={`scenario-${questionIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-white/60 shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-finteen-coral mb-3 shadow-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-display font-black mb-2">
                      Bước 2: Tình huống thực tế
                    </h2>
                  </div>

                  <div className="bg-gradient-to-br from-finteen-cream to-pink-50 rounded-2xl p-5 mb-4">
                    <p className="text-base lg:text-lg leading-relaxed text-gray-800">
                      {currentQ.scenario}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 mb-6 border-l-4 border-finteen-mint">
                    <p className="text-sm font-bold text-gray-700">
                      💡 Câu hỏi: {currentQ.question}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {currentQ.options.map((option) => {
                      const isSelected = selectedAnswer === option.id
                      const isCorrect = option.id === currentQ.correctAnswer
                      const showResult = showFeedback

                      return (
                        <motion.button
                          key={option.id}
                          onClick={() => !showFeedback && handleAnswerSubmit(option.id)}
                          disabled={showFeedback}
                          whileHover={!showFeedback ? { scale: 1.02, x: 4 } : {}}
                          whileTap={!showFeedback ? { scale: 0.98 } : {}}
                          className={cn(
                            'w-full text-left p-4 lg:p-5 rounded-2xl transition-all border-2',
                            showResult && isCorrect && 'bg-gradient-to-r from-finteen-mint to-emerald-400 border-white text-white shadow-xl ring-4 ring-finteen-mint/30',
                            showResult && isSelected && !isCorrect && 'bg-gradient-to-r from-finteen-coral to-red-400 border-white text-white shadow-xl',
                            !showResult && 'bg-white hover:bg-finteen-cream/50 border-gray-200 hover:border-finteen-coral'
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className={cn(
                              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm',
                              showResult && isCorrect ? 'bg-white text-finteen-mint' :
                              showResult && isSelected && !isCorrect ? 'bg-white text-finteen-coral' :
                              'bg-gradient-to-br from-finteen-coral to-finteen-sunny text-white'
                            )}>
                              {option.id.toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <p className={cn(
                                'font-semibold text-base',
                                showResult ? 'text-white' : 'text-gray-800'
                              )}>
                                {option.text}
                              </p>
                              {showResult && (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="mt-2 text-sm text-white/95"
                                >
                                  {option.explanation}
                                </motion.p>
                              )}
                            </div>
                            {showResult && isCorrect && (
                              <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <XCircle className="h-6 w-6 text-white flex-shrink-0" />
                            )}
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>

                  {/* AI Explanation */}
                  {(loadingAI || aiExplanation) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-blue-200 shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="text-4xl"
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          🤖
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-blue-700 mb-1 flex items-center gap-2">
                            AI TUTOR
                            {loadingAI && <span className="animate-pulse">đang suy nghĩ...</span>}
                          </div>
                          {loadingAI ? (
                            <div className="space-y-2">
                              <div className="h-3 bg-blue-200 rounded animate-pulse"></div>
                              <div className="h-3 bg-blue-200 rounded animate-pulse w-3/4"></div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm leading-relaxed text-gray-800 mb-3">
                                {aiExplanation?.text}
                              </p>
                              {aiExplanation?.tip && (
                                <div className="bg-white/70 rounded-xl p-3 mt-2">
                                  <p className="text-xs font-bold text-purple-700">💡 MẸO:</p>
                                  <p className="text-xs text-gray-700">{aiExplanation.tip}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Next button */}
                  {showFeedback && !loadingAI && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 flex justify-end"
                    >
                      <Button onClick={handleNext} size="lg" className="px-8">
                        {isLastQuestion ? '🎉 Xem kết quả' : 'Câu tiếp theo →'}
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
