// Adaptive Quiz System - điều chỉnh độ khó dựa trên performance
// Thuật toán: Item Response Theory (IRT) đơn giản hóa
// - Đúng liên tiếp → tăng độ khó
// - Sai liên tiếp → giảm độ khó
// - Có "yin-yang" để tránh quá dễ hoặc quá khó

// 4 levels: warmup → easy → medium → hard → master
const DIFFICULTY_ORDER = ['warmup', 'easy', 'medium', 'hard']

export function getAdaptiveDifficulty(currentDifficulty, isCorrect, streakCount) {
  // Nếu streak cao và đúng liên tiếp -> tăng độ khó
  // Nếu sai liên tiếp -> giảm độ khó

  const currentIdx = DIFFICULTY_ORDER.indexOf(currentDifficulty)

  if (isCorrect) {
    // Tăng độ khó nếu streak >= 2 và chưa ở max
    if (streakCount >= 2 && currentIdx < DIFFICULTY_ORDER.length - 1) {
      return DIFFICULTY_ORDER[currentIdx + 1]
    }
    return currentDifficulty
  } else {
    // Giảm độ khó nếu sai (trừ warmup)
    if (currentIdx > 0) {
      return DIFFICULTY_ORDER[currentIdx - 1]
    }
    return currentDifficulty
  }
}

// Lấy câu hỏi theo độ khó
export function getAdaptiveQuestions(chapterId, difficulty = 'medium', streakCount = 0) {
  const bank = QUESTION_BANK[chapterId] || QUESTION_BANK['default']

  // Filter theo difficulty
  let filtered = bank.filter((q) => q.difficulty === difficulty)

  // Nếu không đủ câu, lấy thêm từ level gần nhất
  if (filtered.length < 3) {
    const idx = DIFFICULTY_ORDER.indexOf(difficulty)
    const nearby = bank.filter((q) =>
      Math.abs(DIFFICULTY_ORDER.indexOf(q.difficulty) - idx) <= 1
    )
    filtered = [...filtered, ...nearby].slice(0, 5)
  }

  // Shuffle (deterministic theo chapter)
  const shuffled = filtered.sort(() => 0.5 - Math.random).slice(0, 5)

  // Warmup đầu tiên (luôn là warmup)
  const warmup = bank.find((q) => q.difficulty === 'warmup')
  return warmup ? [warmup, ...shuffled].slice(0, 5) : shuffled
}

// Adaptive config cho mỗi chapter
export const ADAPTIVE_CONFIG = {
  'pkg-1-ch1': {
    name: 'Khởi đầu tiết kiệm',
    theme: 'coin-saving',
    starterDifficulty: 'warmup',
  },
  'pkg-1-ch2': {
    name: 'Cần vs Muốn',
    theme: 'needs-wants',
    starterDifficulty: 'warmup',
  },
  'pkg-1-ch3': {
    name: 'Quy tắc 50-30-20',
    theme: 'budgeting',
    starterDifficulty: 'easy',
  },
  'pkg-2-ch1': {
    name: 'Mua sắm thông minh',
    theme: 'smart-shopping',
    starterDifficulty: 'medium',
  },
  'pkg-2-ch2': {
    name: 'So sánh giá',
    theme: 'comparison',
    starterDifficulty: 'medium',
  },
  'pkg-3-ch1': {
    name: 'Lãi kép',
    theme: 'compound-interest',
    starterDifficulty: 'medium',
  },
  'pkg-3-ch2': {
    name: 'Tiết kiệm dài hạn',
    theme: 'long-term',
    starterDifficulty: 'hard',
  },
  'pkg-4-ch1': {
    name: 'Ngân hàng cơ bản',
    theme: 'banking',
    starterDifficulty: 'medium',
  },
  'pkg-4-ch2': {
    name: 'Đầu tư nhỏ',
    theme: 'investment',
    starterDifficulty: 'hard',
  },
  'pkg-5-ch1': {
    name: 'Bảo hiểm',
    theme: 'insurance',
    starterDifficulty: 'hard',
  },
}

// Câu hỏi theo chapter (mỗi chapter có 5-10 câu cho mỗi độ khó)
export const QUESTION_BANK = {
  'pkg-1-ch1': [
    // Warmup - ước lượng cơ bản
    {
      id: 'pkg-1-ch1-w1',
      difficulty: 'warmup',
      estimatePrompt: 'Bạn có 10 xu. Bạn thấy kẹo giá 3 xu. Ước lượng: bạn có mua được kẹo không và còn dư bao nhiêu?',
      scenario: 'Bạn Mint có 10 đồng xu tiêu vặt tuần này. Trên đường đi học về, Mint thấy tiệm kẹo mở cửa và có rất nhiều loại kẹo ngộ nghĩnh đang sale!',
      question: 'Nếu Mint mua 2 cái kẹo giá 3 xu mỗi cái, Mint còn lại bao nhiêu xu?',
      options: [
        { id: 'a', text: '4 xu', explanation: '10 - 6 = 4. Đúng rồi!' },
        { id: 'b', text: '3 xu', explanation: 'Sai rồi. 10 - 6 = 4, không phải 3.' },
        { id: 'c', text: '7 xu', explanation: 'Sai. 10 - 6 = 4 chứ không phải 7.' },
      ],
      correctAnswer: 'a',
      reward: { coin: 5, xp: 10 },
      concept: 'subtraction',
    },
    // Easy
    {
      id: 'pkg-1-ch1-e1',
      difficulty: 'easy',
      estimatePrompt: 'Một hộp sữa giá 8 xu. Bạn có 20 xu. Ước lượng: bạn có mua được mấy hộp sữa?',
      scenario: 'Mint muốn mua sữa cho cả tuần (mỗi ngày 1 hộp, 7 ngày). Mỗi hộp sữa giá 8 xu. Mint có 20 xu trong ví.',
      question: '20 xu đủ mua mấy hộp sữa?',
      options: [
        { id: 'a', text: '2 hộp (còn 4 xu)', explanation: '20 / 8 = 2 dư 4. Đúng!' },
        { id: 'b', text: '3 hộp (còn 4 xu)', explanation: 'Sai. 3 × 8 = 24, vượt quá 20.' },
        { id: 'c', text: '2.5 hộp', explanation: 'Không thể mua nửa hộp sữa!' },
      ],
      correctAnswer: 'a',
      reward: { coin: 10, xp: 15 },
      concept: 'division',
    },
    // Medium
    {
      id: 'pkg-1-ch1-m1',
      difficulty: 'medium',
      estimatePrompt: 'Bạn tiết kiệm 5 xu/ngày. Ước lượng: sau 1 tuần (7 ngày) bạn có bao nhiêu xu?',
      scenario: 'Mint quyết định mỗi ngày tiết kiệm 5 xu bằng cách không mua kẹo. Heo Heo gợi ý: "Sau một tuần, bạn sẽ có một khoản kha khá đấy!"',
      question: 'Sau 7 ngày tiết kiệm 5 xu/ngày, Mint có bao nhiêu xu?',
      options: [
        { id: 'a', text: '25 xu', explanation: 'Sai. 5 × 7 = 35.' },
        { id: 'b', text: '30 xu', explanation: 'Sai. 5 × 7 = 35.' },
        { id: 'c', text: '35 xu', explanation: 'Đúng! 5 × 7 = 35 xu. Tuyệt vời!' },
      ],
      correctAnswer: 'c',
      reward: { coin: 15, xp: 20 },
      concept: 'multiplication',
    },
    // Hard
    {
      id: 'pkg-1-ch1-h1',
      difficulty: 'hard',
      estimatePrompt: 'Bạn tiết kiệm 5 xu/ngày, sau 7 ngày bạn có 35 xu. Nếu tiết kiệm tiếp thêm 1 tuần nữa thì tổng cộng bao nhiêu? Và nếu Heo Heo thưởng thêm 20 xu thì sao?',
      scenario: 'Sau 7 ngày, Mint có 35 xu. Mint tiếp tục tiết kiệm thêm 7 ngày nữa. Heo Heo thấy Mint kiên trì nên thưởng thêm 20 xu!',
      question: 'Tổng cộng Mint có bao nhiêu xu sau 2 tuần + thưởng?',
      options: [
        { id: 'a', text: '70 xu', explanation: 'Sai. Bạn quên thưởng 20 xu.' },
        { id: 'b', text: '90 xu', explanation: 'Đúng! 35 + 35 + 20 = 90 xu!' },
        { id: 'c', text: '85 xu', explanation: 'Sai. 35 + 35 + 20 = 90, không phải 85.' },
      ],
      correctAnswer: 'b',
      reward: { coin: 25, xp: 30 },
      concept: 'multi-step',
    },
  ],

  'pkg-1-ch2': [
    // Warmup
    {
      id: 'pkg-1-ch2-w1',
      difficulty: 'warmup',
      estimatePrompt: 'Bạn đang đói bụng và thấy quả táo. Đây là CẦN hay MUỐN?',
      scenario: 'Mint đi học về, bụng đói cồn cào. Mẹ để sẵn trái cây trên bàn cho Mint ăn.',
      question: 'Trái cây là CẦN hay MUỐN?',
      options: [
        { id: 'a', text: 'CẦN - vì mình đang đói', explanation: 'Đúng! Đồ ăn khi đói là nhu cầu CẦN thiết.' },
        { id: 'b', text: 'MUỐN - vì có nhiều thứ khác', explanation: 'Sai. Khi đói thì ăn là CẦN, không phải MUỐN.' },
      ],
      correctAnswer: 'a',
      reward: { coin: 5, xp: 10 },
      concept: 'needs-wants',
    },
    // Easy
    {
      id: 'pkg-1-ch2-e1',
      difficulty: 'easy',
      estimatePrompt: 'Bạn có đủ đồ dùng học tập. Bạn thấy cây bút đẹp giá 15 xu. Đây là CẦN hay MUỐN?',
      scenario: 'Mint có đầy đủ bút viết, vở, cặp sách. Đi ngang cửa hàng, Mint thấy cây bút glitter hồng rất đẹp giá 15 xu.',
      question: 'Cây bút glitter này là CẦN hay MUỐN?',
      options: [
        { id: 'a', text: 'CẦN - vì mình thích', explanation: 'Sai. "Thích" không có nghĩa là "cần".' },
        { id: 'b', text: 'MUỐN - vì đã có bút rồi', explanation: 'Đúng! Đã có đồ dùng rồi thì đây là MUỐN, không phải CẦN.' },
      ],
      correctAnswer: 'b',
      reward: { coin: 10, xp: 15 },
      concept: 'needs-wants',
    },
    // Medium
    {
      id: 'pkg-1-ch2-m1',
      difficulty: 'medium',
      estimatePrompt: 'Bạn có 30 xu. Sách truyện 25 xu và bánh mì 10 xu. Bạn đang đói. Ước lượng: mua cái nào trước?',
      scenario: 'Mint có 30 xu tiêu vặt. Trước mặt có 2 cửa hàng: tiệm sách (sách truyện 25 xu) và tiệm bánh (bánh mì 10 xu). Mint đang đói bụng.',
      question: 'Mint nên mua gì trước?',
      options: [
        { id: 'a', text: 'Mua sách vì thích đọc', explanation: 'Sai. Đang đói thì ăn trước - đó là CẦN.' },
        { id: 'b', text: 'Mua bánh vì đang đói', explanation: 'Đúng! Ăn no là CẦN trước, mua sách là MUỐN để sau.' },
      ],
      correctAnswer: 'b',
      reward: { coin: 15, xp: 20 },
      concept: 'priorities',
    },
    // Hard
    {
      id: 'pkg-1-ch2-h1',
      difficulty: 'hard',
      estimatePrompt: 'Bạn có 50 xu. Cần mua: cặp mới (40 xu) vì cặp cũ rách. Thấy bóng rổ mới (30 xu). Ước lượng: mua được cả hai không?',
      scenario: 'Mint có 50 xu. Cặp sách cũ đã rách khóa, không dùng được. Mẹ nói cặp mới 40 xu. Mint thấy quả bóng rổ 30 xu trong cửa hàng thể thao.',
      question: 'Mint nên làm gì?',
      options: [
        { id: 'a', text: 'Mua cả hai (70 xu) - không đủ tiền!', explanation: 'Sai. 50 < 70, không đủ tiền mua cả hai.' },
        { id: 'b', text: 'Chỉ mua cặp (40 xu) - vì đó là CẦN', explanation: 'Đúng! Cặp mới là CẦN, bóng rổ là MUỐN. Ưu tiên CẦN trước.' },
        { id: 'c', text: 'Chỉ mua bóng rổ - vì thích hơn', explanation: 'Sai. Cặp sách rách không học được, đó là CẦN thiết.' },
      ],
      correctAnswer: 'b',
      reward: { coin: 25, xp: 30 },
      concept: 'budgeting',
    },
  ],

  'pkg-1-ch3': [
    {
      id: 'pkg-1-ch3-w1',
      difficulty: 'warmup',
      estimatePrompt: 'Bạn có 100 xu. Theo quy tắc 50-30-20, bao nhiêu cho lọ TIÊU?',
      scenario: 'Mint học được quy tắc 50-30-20 từ Cú Khôn Ngoan: 50% tiêu, 30% tiết kiệm, 20% cho đi. Mint có 100 xu tuần này.',
      question: 'Lọ TIÊU được bao nhiêu xu?',
      options: [
        { id: 'a', text: '50 xu', explanation: 'Đúng! 50% × 100 = 50 xu.' },
        { id: 'b', text: '30 xu', explanation: 'Sai. 30% là cho lọ TIẾT KIỆM.' },
        { id: 'c', text: '20 xu', explanation: 'Sai. 20% là cho lọ CHO ĐI.' },
      ],
      correctAnswer: 'a',
      reward: { coin: 5, xp: 10 },
    },
    {
      id: 'pkg-1-ch3-e1',
      difficulty: 'easy',
      estimatePrompt: 'Bạn có 200 xu. Theo quy tắc 50-30-20, lọ TIẾT KIỆM được bao nhiêu?',
      scenario: 'Mint có 200 xu tiền mừng tuổi. Mint muốn áp dụng quy tắc 50-30-20.',
      question: 'Lọ TIẾT KIỆM được bao nhiêu?',
      options: [
        { id: 'a', text: '60 xu', explanation: 'Đúng! 30% × 200 = 60 xu.' },
        { id: 'b', text: '100 xu', explanation: 'Sai. 100 xu = 50% (lọ TIÊU).' },
        { id: 'c', text: '40 xu', explanation: 'Sai. 40 xu = 20% (lọ CHO ĐI).' },
      ],
      correctAnswer: 'a',
      reward: { coin: 10, xp: 15 },
    },
    {
      id: 'pkg-1-ch3-m1',
      difficulty: 'medium',
      estimatePrompt: 'Bạn có 150 xu. Sau khi chia theo 50-30-20, lọ CHO ĐI được bao nhiêu?',
      scenario: 'Mint có 150 xu từ việc giúp mẹ bán hàng cuối tuần. Mint muốn chia theo quy tắc 50-30-20.',
      question: 'Lọ CHO ĐI có bao nhiêu xu?',
      options: [
        { id: 'a', text: '75 xu', explanation: 'Sai. 75 = 50% × 150, đó là lọ TIÊU.' },
        { id: 'b', text: '30 xu', explanation: 'Đúng! 20% × 150 = 30 xu.' },
        { id: 'c', text: '45 xu', explanation: 'Sai. 45 = 30% × 150, đó là lọ TIẾT KIỆM.' },
      ],
      correctAnswer: 'b',
      reward: { coin: 15, xp: 20 },
    },
    {
      id: 'pkg-1-ch3-h1',
      difficulty: 'hard',
      estimatePrompt: 'Bạn muốn mua sách 60 xu nhưng lọ TIÊU chỉ có 45 xu. Ước lượng: phải làm sao?',
      scenario: 'Mint muốn mua sách "Doraemon" tập mới giá 60 xu. Lọ TIÊU hiện có 45 xu. Lọ TIẾT KIỆM có 30 xu.',
      question: 'Mint nên làm gì để mua được sách?',
      options: [
        { id: 'a', text: 'Lấy thêm 15 xu từ lọ TIẾT KIỆM', explanation: 'Đúng! Sách là đầu tư cho tri thức, có thể dùng lọ TIẾT KIỆM.' },
        { id: 'b', text: 'Bỏ tiền thêm vào lọ TIÊU rồi mua', explanation: 'Đúng nếu có thêm tiền, nhưng phương án 1 nhanh hơn.' },
        { id: 'c', text: 'Không mua, đợi có đủ tiền', explanation: 'Hợp lý, nhưng có thể linh hoạt dùng TIẾT KIỆM.' },
      ],
      correctAnswer: 'a',
      reward: { coin: 25, xp: 30 },
    },
  ],

  'default': [
    {
      id: 'default-w1',
      difficulty: 'warmup',
      estimatePrompt: 'Ước lượng: tiết kiệm quan trọng như thế nào?',
      scenario: 'Câu hỏi mặc định khi không có data',
      question: 'Tiết kiệm có quan trọng không?',
      options: [
        { id: 'a', text: 'Rất quan trọng', explanation: 'Đúng! Tiết kiệm giúp ta có tiền khi cần.' },
        { id: 'b', text: 'Không quan trọng', explanation: 'Sai. Tiết kiệm rất cần thiết.' },
      ],
      correctAnswer: 'a',
      reward: { coin: 5, xp: 10 },
    },
  ],
}
