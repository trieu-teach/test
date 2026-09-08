import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { characters, encouragements } from '../data/stories';

export default function StoryPlayer({ story, onComplete, onExit }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentScene = story.scenes[sceneIndex];
  const isLastScene = sceneIndex === story.scenes.length - 1;
  const character = currentScene?.character ? characters[currentScene.character] : null;

  // Reset khi đổi story
  useEffect(() => {
    setSceneIndex(0);
    setSelectedChoice(null);
    setShowFeedback(false);
  }, [story?.id]);

  const handleNext = () => {
    if (currentScene.type === 'choice' && !selectedChoice) return;
    if (isLastScene) {
      onComplete?.(story);
      return;
    }
    setSceneIndex((i) => i + 1);
    setSelectedChoice(null);
    setShowFeedback(false);
  };

  const handleChoice = (choice) => {
    setSelectedChoice(choice.id);
    setShowFeedback(true);
    // Auto advance sau 2.5s cho choice đúng
    setTimeout(() => {
      if (choice.nextScene && choice.nextScene !== currentScene.id) {
        const targetIdx = story.scenes.findIndex((s) => s.id === choice.nextScene);
        if (targetIdx >= 0) {
          setSceneIndex(targetIdx);
          setSelectedChoice(null);
          setShowFeedback(false);
        }
      }
    }, 2500);
  };

  if (!currentScene) return null;

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: currentScene.background || 'linear-gradient(180deg, #FFE5B4 0%, #FFB4A2 100%)',
      }}
    >
      {/* Background illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="text-[400px]">{currentScene.illustration || story.illustration}</div>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md">
        <button
          onClick={onExit}
          className="px-4 py-2 rounded-full bg-white/60 hover:bg-white/80 font-semibold text-sm transition"
        >
          ← Thoát
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">
            Cảnh {sceneIndex + 1}/{story.scenes.length}
          </span>
          <div className="w-32 h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-coral to-sunny"
              initial={{ width: 0 }}
              animate={{ width: `${((sceneIndex + 1) / story.scenes.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Scene content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Illustration card */}
            <motion.div
              className="text-center mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/80 shadow-2xl text-7xl">
                {currentScene.illustration || story.illustration}
              </div>
            </motion.div>

            {/* Narrator / Dialogue / Lesson */}
            {currentScene.type === 'narrator' && (
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <p className="text-lg leading-relaxed text-gray-800 text-center">
                  {currentScene.text}
                </p>
              </div>
            )}

            {currentScene.type === 'dialogue' && character && (
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-20 h-20 rounded-full shadow-xl flex items-center justify-center text-4xl"
                  style={{ backgroundColor: character.color }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {character.emoji}
                </motion.div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white bg-black/30 backdrop-blur px-3 py-1 rounded-full inline-block mb-2">
                    {character.name}
                  </div>
                  <div className="bg-white/95 rounded-3xl rounded-tl-none p-6 shadow-xl relative">
                    {/* Speech bubble tail */}
                    <div className="absolute -left-3 top-4 w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-white/95"></div>
                    <p className="text-lg leading-relaxed text-gray-800">{currentScene.text}</p>
                    {currentScene.mood && (
                      <div className="mt-3 text-xs text-gray-500 italic">
                        *{currentScene.mood}*
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentScene.type === 'lesson' && (
              <motion.div
                className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-2xl border-4 border-sunny"
                initial={{ rotate: -2 }}
                animate={{ rotate: 0 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sunny text-4xl mb-3">
                    {currentScene.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{currentScene.title}</h2>
                </div>
                <ul className="space-y-3">
                  {currentScene.points.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-gray-800 leading-relaxed">{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {currentScene.type === 'choice' && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                    🤔 {currentScene.prompt}
                  </h2>
                  <div className="text-6xl">{currentScene.illustration}</div>
                </div>
                <div className="space-y-3">
                  {currentScene.choices.map((choice, i) => {
                    const isSelected = selectedChoice === choice.id;
                    const showResult = showFeedback && isSelected;

                    return (
                      <motion.button
                        key={choice.id}
                        onClick={() => !showFeedback && handleChoice(choice)}
                        disabled={showFeedback}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={!showFeedback ? { scale: 1.02, x: 8 } : {}}
                        whileTap={!showFeedback ? { scale: 0.98 } : {}}
                        className={`w-full text-left p-5 rounded-2xl shadow-xl transition-all ${
                          showResult && choice.isCorrect
                            ? 'bg-gradient-to-r from-mint to-mint/80 ring-4 ring-white'
                            : showResult && !choice.isCorrect
                            ? 'bg-gradient-to-r from-coral to-red-300 ring-4 ring-white'
                            : 'bg-white hover:bg-white/95'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                              showResult && choice.isCorrect
                                ? 'bg-white text-mint'
                                : showResult && !choice.isCorrect
                                ? 'bg-white text-coral'
                                : 'bg-gradient-to-br from-coral to-sunny'
                            }`}
                          >
                            {choice.id}
                          </div>
                          <div className="flex-1">
                            <p
                              className={`font-semibold text-lg ${
                                showResult ? 'text-white' : 'text-gray-800'
                              }`}
                            >
                              {choice.text}
                            </p>
                            {showResult && (
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-2 text-sm text-white/95"
                              >
                                💡 {choice.reasoning || choice.consequence}
                              </motion.p>
                            )}
                          </div>
                          {showResult && choice.isCorrect && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="text-3xl"
                            >
                              ✅
                            </motion.div>
                          )}
                          {showResult && !choice.isCorrect && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-3xl"
                            >
                              💭
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action button */}
        {currentScene.type !== 'choice' && (
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-gradient-to-r from-coral via-sunny to-mint text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              {isLastScene ? '🎉 Hoàn thành!' : 'Tiếp tục →'}
            </button>
          </motion.div>
        )}

        {showFeedback && currentScene.type === 'choice' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <p className="text-white font-semibold text-lg drop-shadow-lg">
              {encouragements[Math.floor(Math.random() * encouragements.length)]}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
