// AI Assistant - giải thích và hỗ trợ học tập
// Sử dụng rule-based AI mô phỏng (có thể thay bằng API thật sau)
// Pattern matching + pedagogical reasoning

const EXPLANATION_TEMPLATES = {
  estimate: {
    encouraging: [
      'Tuyệt vời! Ước lượng của bạn rất sát. Bạn đang tư duy như một nhà toán học nhí! 🧠',
      'Hay lắm! Bạn đã suy nghĩ trước khi tính - đó là thói quen của chuyên gia!',
      'Ước lượng khá chính xác! Bạn có con số ngầm định trong đầu rất tốt.',
      'Tốt! Bạn không nhảy vào tính ngay mà dừng lại suy nghĩ. Đó là đức tính quan trọng!',
    ],
    needs_work: [
      'Ừm, ước lượng của bạn hơi xa. Đừng lo - mình sẽ giúp bạn hình dung rõ hơn nhé!',
      'Ước lượng là một kỹ năng, cần luyện tập. Hãy thử làm tròn số hoặc dùng số gần đúng.',
      'Không sao! Ước lượng sai là bình thường. Quan trọng là bạn đã thử. Cùng xem đáp án nhé!',
    ],
    default: [
      'Cảm ơn bạn đã chia sẻ ước lượng! Đây là bước rất quan trọng trong tư duy tài chính.',
      'Tốt lắm! Việc dừng lại để ước lượng trước khi tính giúp bạn không bị "say sóng" bởi con số.',
    ],
  },
  answer: {
    correct: [
      '🎯 Chính xác! Bạn đã tư duy rất logic. Đây là cách chuyên gia tài chính nghĩ!',
      '✅ Đúng rồi! Bạn đã áp dụng công thức đúng và lý giải thuyết phục.',
      'Tuyệt vời! Đáp án của bạn thể hiện sự hiểu biết sâu sắc.',
      'Đỉnh quá! Bạn nhớ kiến thức rất tốt.',
    ],
    incorrect: [
      '❌ Chưa đúng, nhưng đừng nản! Sai lầm là cách học tốt nhất.',
      'Hmm, gần đúng rồi. Hãy đọc lại đề kỹ hơn nhé - có chi tiết quan trọng.',
      'Sai rồi, nhưng bạn đã thử. Đó mới là điều quan trọng nhất! Cùng xem đáp án đúng nhé.',
      'Không sao! Đáp án đúng sẽ giúp bạn hiểu sâu hơn. Đừng bỏ cuộc!',
    ],
  },
}

const TIPS = {
  subtraction: '💡 MẸO: Khi trừ, hãy tưởng tượng mình có bao nhiêu xu rồi bỏ bớt ra. Ví dụ: 10 - 6 = tưởng tượng 10 viên bi, bỏ 6 viên, còn 4.',
  addition: '💡 MẸO: Khi cộng, đếm từ số lớn rồi cộng thêm. Ví dụ: 35 + 35 = 35, đếm thêm 35 nữa.',
  multiplication: '💡 MẸO: Phép nhân chính là phép cộng lặp lại. 5 × 7 = 5+5+5+5+5+5+5.',
  division: '💡 MẸO: Phép chia là chia đều. 20 / 8 = chia 20 cái kẹo cho 8 người, mỗi người 2 cái dư 4.',
  'needs-wants': '💡 MẸO CẦN vs MUỐN: Cần là thứ không có thì KHỔ (ăn, uống, học). Muốn là thứ có thì VUI nhưng không có cũng không sao (đồ chơi, kẹo).',
  priorities: '💡 MẸO ưu tiên: Luôn mua CẦN trước, MUỐN để sau. Đừng bao giờ để MUỐN lấn át CẦN.',
  budgeting: '💡 MẸO lập ngân sách: Quy tắc 50-30-20: 50% TIÊU, 30% TIẾT KIỆM, 20% CHO ĐI. Áp dụng ngay khi có tiền!',
  'compound-interest': '💡 MẸO lãi kép: Tiền sinh ra tiền. Càng để lâu, lãi càng nhiều. Kiên nhẫn = giàu có!',
}

// Main function - get AI explanation
export async function getAIExplanation({
  type, // 'estimate' | 'answer'
  estimate,
  question,
  userAnswer,
  isCorrect,
  correctAnswer,
  chapterId,
}) {
  // Simulate async (có thể thay bằng API call thật)
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700))

  if (type === 'estimate') {
    return generateEstimateFeedback(estimate, question)
  }

  if (type === 'answer') {
    return generateAnswerFeedback(question, userAnswer, isCorrect, correctAnswer, chapterId)
  }

  return {
    text: 'Mình đang học cùng bạn đây! Cùng khám phá nhé.',
    tip: null,
  }
}

function generateEstimateFeedback(estimate, question) {
  const estimateNum = parseFloat(estimate)
  const isReasonable = estimate && estimate.length > 2

  let template
  if (isReasonable) {
    template = pickRandom(EXPLANATION_TEMPLATES.estimate.encouraging)
  } else {
    template = pickRandom(EXPLANATION_TEMPLATES.estimate.needs_work)
  }

  // Phân tích ước lượng
  let analysis = ''
  if (estimateNum && !isNaN(estimateNum)) {
    if (estimateNum < 10) {
      analysis = ' Bạn ước lượng con số nhỏ - có thể bạn đang tập trung vào phần nhỏ của vấn đề. Hãy nhìn toàn cảnh hơn!'
    } else if (estimateNum < 100) {
      analysis = ' Con số của bạn ở mức vừa phải. Tốt lắm!'
    } else {
      analysis = ' Con số khá lớn - bạn đang nghĩ đến bức tranh toàn cảnh. Xuất sắc!'
    }
  }

  return {
    text: template + analysis,
    tip: '💡 Ước lượng giúp bạn phát triển trực giác số học - một kỹ năng quan trọng trong tài chính!',
  }
}

function generateAnswerFeedback(question, userAnswer, isCorrect, correctAnswer, chapterId) {
  const correctOption = question.options.find((o) => o.id === correctAnswer)
  const userOption = question.options.find((o) => o.id === userAnswer)

  let template
  if (isCorrect) {
    template = pickRandom(EXPLANATION_TEMPLATES.answer.correct)
  } else {
    template = pickRandom(EXPLANATION_TEMPLATES.answer.incorrect)
  }

  let explanation = `\n\n📝 Đáp án đúng: "${correctOption?.text}"`

  if (userOption && !isCorrect) {
    explanation += `\n🧐 Bạn chọn: "${userOption.text}" - ${userOption.explanation || 'Hãy xem lại nhé!'}`
  }

  if (correctOption?.explanation) {
    explanation += `\n💡 Vì sao đúng: ${correctOption.explanation}`
  }

  const tip = TIPS[question.concept] || TIPS[getRandomTipCategory()]

  return {
    text: template + explanation,
    tip: tip,
  }
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomTipCategory() {
  const keys = Object.keys(TIPS)
  return keys[Math.floor(Math.random() * keys.length)]
}

// Hàm phân tích sức học của học sinh
export function analyzeLearningPattern(history) {
  // history: array of { isCorrect, concept, timestamp }
  if (!history || history.length === 0) {
    return { message: 'Hãy bắt đầu học nào!', weakConcepts: [], strongConcepts: [] }
  }

  const conceptStats = {}
  history.forEach((h) => {
    if (!h.concept) return
    if (!conceptStats[h.concept]) {
      conceptStats[h.concept] = { correct: 0, total: 0 }
    }
    conceptStats[h.concept].total++
    if (h.isCorrect) conceptStats[h.concept].correct++
  })

  const weakConcepts = []
  const strongConcepts = []

  Object.entries(conceptStats).forEach(([concept, stats]) => {
    const accuracy = stats.correct / stats.total
    if (accuracy < 0.6 && stats.total >= 2) {
      weakConcepts.push({ concept, accuracy })
    } else if (accuracy >= 0.8 && stats.total >= 3) {
      strongConcepts.push({ concept, accuracy })
    }
  })

  let message = ''
  if (weakConcepts.length > 0) {
    message = `🤖 Mình nhận thấy bạn cần luyện thêm về ${weakConcepts[0].concept}. Đừng lo, mình sẽ gợi ý thêm bài tập cho bạn!`
  } else if (strongConcepts.length > 0) {
    message = `🎉 Bạn làm chủ ${strongConcepts[0].concept} rất tốt! Thử thách bản thân với bài khó hơn nhé!`
  } else {
    message = `👍 Bạn đang tiến bộ đều đặn! Tiếp tục nào!`
  }

  return { message, weakConcepts, strongConcepts }
}

// Gợi ý bài học tiếp theo dựa trên pattern
export function suggestNextLesson(history, currentChapterId) {
  const analysis = analyzeLearningPattern(history)

  if (analysis.weakConcepts.length > 0) {
    return {
      type: 'review',
      topic: analysis.weakConcepts[0].concept,
      message: `Ôn lại chủ đề ${analysis.weakConcepts[0].concept} trước khi tiếp tục nhé!`,
    }
  }

  return {
    type: 'continue',
    topic: 'next-chapter',
    message: 'Sẵn sàng cho chương tiếp theo chưa? 🚀',
  }
}
