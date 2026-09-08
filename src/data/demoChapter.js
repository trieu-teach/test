// Demo Visual Novel Chapter - "Ngôi làng Bốn Mùa - Tập 1"
// Chapter này minh họa đầy đủ các tính năng của Visual Novel engine

export const demoChapter = {
  id: 'vn-demo-1',
  title: 'Ngôi làng Bốn Mùa - Tập 1: Đồng xu thần kỳ',
  estimatedTime: '8 phút',
  scenes: [
    // ===== MỞ ĐẦU =====
    {
      id: 'opening',
      type: 'narrator',
      background: 'village',
      text: 'Thuở xưa, ở một ngôi làng nhỏ ven sông có bạn Mint sống cùng mẹ. Mint năm nay 10 tuổi, rất thích những viên kẹo ngọt. Mỗi ngày, Mint được mẹ cho 10 đồng xu tiêu vặt.',
    },

    // Mint xuất hiện vui vẻ
    {
      id: 'meet-mint',
      type: 'dialogue',
      background: 'homeRoom',
      character: 'mint',
      expression: 'excited',
      characterPosition: 'center',
      speakerName: 'Mint',
      text: 'Hôm nay mình có 10 xu tiêu vặt! 10 xu mua được 2 cái kẹo to luôn! Đi mua kẹo nào!',
    },

    // Piggy xuất hiện
    {
      id: 'meet-piggy',
      type: 'dialogue',
      background: 'homeRoom',
      character: 'piggy',
      expression: 'wise',
      characterPosition: 'right',
      speakerName: 'Heo Heo',
      text: 'Ối bạn ơi, đừng vội! Mình là Heo Heo - người giữ kho tàng. Hãy nghe mình kể chuyện hay ho này!',
    },

    // Mint tò mò
    {
      id: 'mint-curious',
      type: 'dialogue',
      background: 'homeRoom',
      character: 'mint',
      expression: 'curious',
      characterPosition: 'left',
      speakerName: 'Mint',
      text: 'Heo đất biết nói á?! Chuyện gì vậy bạn? Kể cho mình nghe đi!',
    },

    // Piggy kể chuyện magical
    {
      id: 'piggy-magical',
      type: 'dialogue',
      background: 'magicGarden',
      character: 'piggy',
      expression: 'magical',
      characterPosition: 'center',
      speakerName: 'Heo Heo',
      text: 'Nếu bạn tiết kiệm tiền, mình sẽ dẫn bạn đến Vườn Xù - nơi có rất nhiều kẹo ngọt và cả kho báu nữa! Bạn có muốn đi cùng mình không?',
    },

    // Mint suy nghĩ
    {
      id: 'mint-thinking',
      type: 'dialogue',
      background: 'magicGarden',
      character: 'mint',
      expression: 'thinking',
      characterPosition: 'left',
      speakerName: 'Mint',
      text: 'Hmm... Mua kẹo luôn hay đi tìm kho báu nhỉ? Phải suy nghĩ thôi...',
    },

    // ===== CHOICE - BRANCHING =====
    {
      id: 'first-choice',
      type: 'choice',
      background: 'magicGarden',
      prompt: 'Bạn Mint nên làm gì?',
      choices: [
        {
          id: 'A',
          text: '🛒 Mua kẹo luôn đi! Kẹo ngon nhất!',
          nextScene: 'buy-candy-end',
        },
        {
          id: 'B',
          text: '🌳 Đi tìm kho báu cùng Heo Heo!',
          nextScene: 'adventure-begins',
        },
      ],
    },

    // ===== BRANCH A: MUA KẸO =====
    {
      id: 'buy-candy-end',
      type: 'dialogue',
      background: 'shop',
      character: 'piggy',
      expression: 'sad',
      characterPosition: 'right',
      speakerName: 'Heo Heo',
      text: 'Bạn mua kẹo rồi hết tiền... Mình buồn quá. Kho báu thì đợi bạn lần sau vậy...',
    },

    {
      id: 'buy-candy-lesson',
      type: 'lesson',
      background: 'shop',
      icon: '💡',
      title: 'Bạn đã học được gì?',
      points: [
        'Tiêu hết tiền ngay = không còn gì để tiết kiệm',
        'Hôm nay mua kẹo vui, nhưng ngày mai không có tiền mua đồ cần thiết',
        'Hãy thử lại và chọn khác nhé!',
      ],
    },

    // Quay lại choice
    {
      id: 'retry-choice',
      type: 'choice',
      background: 'shop',
      prompt: 'Thử lại lần nữa nào!',
      choices: [
        {
          id: 'A',
          text: '🌳 Lần này mình đi tìm kho báu!',
          nextScene: 'adventure-begins',
        },
      ],
    },

    // ===== BRANCH B: ADVENTURE =====
    {
      id: 'adventure-begins',
      type: 'dialogue',
      background: 'magicGarden',
      character: 'piggy',
      expression: 'happy',
      characterPosition: 'right',
      speakerName: 'Heo Heo',
      text: 'Tuyệt vời! Bạn đúng là người bạn mình tìm kiếm. Hành trình tiết kiệm bắt đầu nào!',
    },

    // Mint hào hứng
    {
      id: 'mint-excited-2',
      type: 'dialogue',
      background: 'magicGarden',
      character: 'mint',
      expression: 'excited',
      characterPosition: 'left',
      speakerName: 'Mint',
      text: 'Yeah! Mình sẽ tiết kiệm để đi tìm kho báu. Cảm ơn bạn Heo Heo!',
    },

    // Owl xuất hiện
    {
      id: 'meet-owl',
      type: 'dialogue',
      background: 'tree',
      character: 'wiseOwl',
      expression: 'wise',
      characterPosition: 'right',
      speakerName: 'Cú Khôn Ngoan',
      text: 'Chào hai bạn trẻ! Ta là Cú Khôn Ngoan. Ta sẽ dạy cho các bạn ba điều quý giá về tiền bạc.',
    },

    // Owl dạy bài học
    {
      id: 'owl-teaches',
      type: 'dialogue',
      background: 'tree',
      character: 'wiseOwl',
      expression: 'teaching',
      characterPosition: 'center',
      speakerName: 'Cú Khôn Ngoan',
      text: 'Điều thứ nhất: PHÂN BIỆT CẦN và MUỐN. Cần là cái không có thì khổ. Muốn là cái có thì vui nhưng không có cũng không sao.',
    },

    {
      id: 'mint-understand',
      type: 'dialogue',
      background: 'tree',
      character: 'mint',
      expression: 'thinking',
      characterPosition: 'left',
      speakerName: 'Mint',
      text: 'Vậy kẹo ngọt là MUỐN đúng không thầy? Vì không có kẹo thì mình vẫn sống vui được!',
    },

    {
      id: 'owl-praise',
      type: 'dialogue',
      background: 'tree',
      character: 'wiseOwl',
      expression: 'wise',
      characterPosition: 'right',
      speakerName: 'Cú Khôn Ngoan',
      text: 'Khôn lắm! Đúng rồi. Còn cơm, nước, sách vở - đó là CẦN. Kẹo, đồ chơi - đó là MUỐN. Luôn ưu tiên CẦN trước nhé!',
    },

    // Lesson card
    {
      id: 'lesson-summary',
      type: 'lesson',
      background: 'tree',
      icon: '🎓',
      title: 'Bài học chương 1',
      points: [
        '⭐ Phân biệt CẦN (cơm, sách) và MUỐN (kẹo, đồ chơi)',
        '⭐ Luôn ưu tiên CẦN trước khi chi cho MUỐN',
        '⭐ Tiết kiệm không phải keo kiệt - mà là khôn ngoan',
        '⭐ Một đồng xu nhỏ hôm nay = kho báu lớn ngày mai',
      ],
    },

    {
      id: 'ending',
      type: 'dialogue',
      background: 'village',
      character: 'mint',
      expression: 'excited',
      characterPosition: 'center',
      speakerName: 'Mint',
      text: 'Cảm ơn thầy Cú và bạn Heo! Mình đã học được rất nhiều. Mình sẽ bắt đầu tiết kiệm ngay hôm nay!',
    },

    {
      id: 'piggy-goodbye',
      type: 'dialogue',
      background: 'village',
      character: 'piggy',
      expression: 'happy',
      characterPosition: 'right',
      speakerName: 'Heo Heo',
      text: 'Hẹn gặp bạn ở Vườn Xù nhé! Kho báu đang đợi bạn đó!',
    },
  ],
}

// Helper: lấy next scene theo choice
export function getNextSceneVN(chapter, currentSceneId, choiceId) {
  const currentScene = chapter.scenes.find((s) => s.id === currentSceneId)
  if (!currentScene || currentScene.type !== 'choice') return null

  const choice = currentScene.choices.find((c) => c.id === choiceId)
  if (!choice) return null

  return chapter.scenes.find((s) => s.id === choice.nextScene)
}
