// Fairy Tale Story Engine - Rich narratives with dialogues, illustrations, choices
// Mỗi chapter là một mini-story với scenes, characters và branching paths

export const characters = {
  mint: {
    id: 'mint',
    name: 'Bạn Mint',
    emoji: '🧒',
    color: '#FFB4A2',
    role: 'Nhân vật chính - tò mò, dũng cảm',
  },
  piggy: {
    id: 'piggy',
    name: 'Heo Heo',
    emoji: '🐷',
    color: '#FFD6A5',
    role: 'Người bạn đồng hành, khôn ngoan',
  },
  wiseOwl: {
    id: 'wiseOwl',
    name: 'Cú Khôn Ngoan',
    emoji: '🦉',
    color: '#B5C7EB',
    role: 'Thầy giáo tài chính',
  },
  shopkeeper: {
    id: 'shopkeeper',
    name: 'Bác Bán Kẹo',
    emoji: '🍬',
    color: '#FCD5CE',
    role: 'Người bán hàng trong làng',
  },
  phuOng: {
    id: 'phuOng',
    name: 'Phú Ông',
    emoji: '🧔',
    color: '#8B4513',
    role: 'Người giàu cho vay - hay lừa bằng lãi suất thấp',
  },
  thangBom: {
    id: 'thangBom',
    name: 'Thằng Bờm',
    emoji: '👦',
    color: '#FFD6A5',
    role: 'Chàng trai nghèo chăm chỉ - nhân vật chính trong truyện nợ',
  },
};

export const stories = {
  'pkg-1-ch1': {
    title: 'Ngôi làng Bốn Mùa - Phần 1: Đồng xu thần kỳ',
    package: 'Gói Khởi Đầu',
    estimatedTime: '8 phút',
    illustration: '🌅',
    scenes: [
      {
        id: 'scene-1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #FFE5B4 0%, #FFB4A2 100%)',
        text: 'Thuở xưa, ở một ngôi làng nhỏ ven sông có bạn Mint sống cùng mẹ. Mint năm nay 10 tuổi, rất thích những viên kẹo ngọt ở tiệm bác Bán Kẹo. Mỗi ngày, Mint được mẹ cho 10 đồng xu tiêu vặt.',
        character: null,
        illustration: '🏘️',
      },
      {
        id: 'scene-2',
        type: 'dialogue',
        character: 'mint',
        text: 'Hôm nay mình mua kẹo luôn nhé! 10 xu mua được 2 cái kẹo to!',
        mood: 'excited',
      },
      {
        id: 'scene-3',
        type: 'dialogue',
        character: 'piggy',
        text: 'Ối bạn ơi, đợi đã! Mình có một ý hay hơn đó. Hãy nghe mình kể nhé!',
        mood: 'thoughtful',
      },
      {
        id: 'scene-4',
        type: 'narrator',
        text: 'Piggy - chú heo đất nhỏ trên kệ sách nhà Mint - bỗng cựa mình rồi nhảy xuống. Bạn Mint ngạc nhiên lắm vì chưa bao giờ thấy heo đất biết nói!',
        illustration: '✨',
      },
      {
        id: 'scene-5',
        type: 'dialogue',
        character: 'piggy',
        text: 'Mình là Heo Heo - người giữ kho tàng! Nếu bạn tiết kiệm, mình sẽ dẫn bạn đến Vườn Xù - nơi có rất nhiều kẹo ngọt và cả kho báu nữa!',
        mood: 'magical',
      },
      {
        id: 'scene-6',
        type: 'choice',
        prompt: 'Bạn Mint nên làm gì?',
        illustration: '🤔',
        choices: [
          {
            id: 'A',
            text: 'Mua kẹo luôn, vì kẹo ngon nhất!',
            consequence: 'consequence-immediate',
            nextScene: 'bad-end',
          },
          {
            id: 'B',
            text: 'Hỏi Heo Heo về Vườn Xù trước đã',
            consequence: 'consequence-curious',
            nextScene: 'scene-7',
            isCorrect: true,
            reasoning: 'Tò mò và tìm hiểu trước khi quyết định là đức tính tốt!',
          },
        ],
      },
      {
        id: 'scene-7',
        type: 'narrator',
        text: 'Heo Heo cười tít mắt: "Tuyệt vời! Bạn đúng là người bạn mình tìm kiếm. Hãy bắt đầu hành trình tiết kiệm nhé!"',
        illustration: '🌟',
      },
      {
        id: 'scene-8',
        type: 'lesson',
        title: 'Bài học rút ra',
        icon: '💡',
        points: [
          'Tiết kiệm không phải là keo kiệt - mà là khôn ngoan',
          'Trước khi tiêu tiền, hãy dành thời gian suy nghĩ về mục tiêu lớn hơn',
          'Một đồng xu nhỏ hôm nay có thể thành kho báu lớn ngày mai',
        ],
      },
    ],
  },

  'pkg-1-ch2': {
    title: 'Ngôi làng Bốn Mùa - Phần 2: Bài học đầu tiên',
    package: 'Gói Khởi Đầu',
    estimatedTime: '10 phút',
    illustration: '🦉',
    scenes: [
      {
        id: 's1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #C9E4F5 0%, #B5C7EB 100%)',
        text: 'Sáng sớm hôm sau, Heo Heo dẫn Mint đến gốc cây cổ thụ trong làng. Trên cành cao nhất, một chú cú đang đọc sách. Đó chính là Cú Khôn Ngoan - thầy giáo tài chính nổi tiếng nhất vương quốc!',
        illustration: '🌳',
      },
      {
        id: 's2',
        type: 'dialogue',
        character: 'wiseOwl',
        text: 'Chào bạn trẻ! Ta nghe nói bạn muốn học cách tiết kiệm. Hãy ngồi xuống đây, ta sẽ dạy cho bạn ba điều quý giá.',
        mood: 'wise',
      },
      {
        id: 's3',
        type: 'lesson',
        title: 'Ba điều Cú Khôn Ngoan dạy',
        icon: '📜',
        points: [
          '🔹 Điều 1: PHÂN BIỆT CẦN và MUỐN - Cần là cái không có thì khổ, Muốn là cái có thì vui',
          '🔹 Điều 2: ĐỪNG MUA NGAY - Chờ 24 giờ trước khi mua đồ muốn',
          '🔹 Điều 3: ĐẦU TƯ VÀO TRI THỨC - Sách và học luôn sinh lời',
        ],
      },
      {
        id: 's4',
        type: 'dialogue',
        character: 'mint',
        text: 'Con muốn mua cái kẹo 5 xu đó thuộc nhóm nào hả thầy?',
        mood: 'curious',
      },
      {
        id: 's5',
        type: 'dialogue',
        character: 'wiseOwl',
        text: 'Tùy vào bạn thôi! Nếu bạn ĐÓI - thì đó là CẦN. Nếu bạn chỉ thèm ngọt - đó là MUỐN. Tự hỏi mình nhé!',
        mood: 'wise',
      },
      {
        id: 's6',
        type: 'choice',
        prompt: 'Mint nên mua kẹo 5 xu khi nào?',
        illustration: '🍬',
        choices: [
          {
            id: 'A',
            text: 'Mua ngay vì đang thèm',
            consequence: 'Đây là MUỐN - không cần mua vội',
            nextScene: 'lesson-review',
          },
          {
            id: 'B',
            text: 'Chờ đến khi đói thật rồi mới mua',
            consequence: 'Đúng rồi! Đó mới là CẦN',
            nextScene: 'lesson-review',
            isCorrect: true,
            reasoning: 'Phân biệt cần - muốn giúp bạn tiêu tiền thông minh hơn',
          },
        ],
      },
      {
        id: 'lesson-review',
        type: 'lesson',
        title: 'Tổng kết',
        icon: '🎓',
        points: [
          'CẦN: thức ăn, sách vở, đồ dùng học tập',
          'MUỐN: đồ chơi, kẹo, sticker, quà sinh nhật',
          'Cả hai đều tốt - nhưng CẦN phải ưu tiên trước!',
        ],
      },
    ],
  },

  'pkg-1-ch3': {
    title: 'Ngôi làng Bốn Mùa - Phần 3: Phép chia thần kỳ',
    package: 'Gói Khởi Đầu',
    estimatedTime: '12 phút',
    illustration: '🪙',
    scenes: [
      {
        id: 'p1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #FFE5B4 0%, #FCD5CE 100%)',
        text: 'Mint có 20 xu tiêu vặt tuần này. Heo Heo đề nghị: "Hãy chia tiền vào 3 lọ thần kỳ!"',
        illustration: '🏺',
      },
      {
        id: 'p2',
        type: 'lesson',
        title: 'Phép chia 3 lọ',
        icon: '🏺',
        points: [
          '🏺 Lọ 1 - TIÊU: nửa số tiền (10 xu) - mua đồ mình thích',
          '🏺 Lọ 2 - TIẾT KIỆM: ba phần mười (6 xu) - cho mục tiêu lớn',
          '🏺 Lọ 3 - CHO ĐI: hai phần mười (4 xu) - giúp người khác',
        ],
      },
      {
        id: 'p3',
        type: 'dialogue',
        character: 'piggy',
        text: 'Quy tắc 50-30-20 này được cả vương quốc áp dụng! Dù ít dù nhiều, cứ chia đều như vậy nhé!',
        mood: 'happy',
      },
      {
        id: 'p4',
        type: 'choice',
        prompt: 'Mint muốn mua sách mới 15 xu. Nên lấy từ lọ nào?',
        illustration: '📚',
        choices: [
          {
            id: 'A',
            text: 'Lọ TIÊU (10 xu) - nhưng không đủ!',
            consequence: '10 xu không đủ mua sách 15 xu',
            nextScene: 'end',
          },
          {
            id: 'B',
            text: 'Lọ TIẾT KIỆM - dùng cho mục tiêu lớn',
            consequence: 'Sách là đầu tư cho tương lai!',
            nextScene: 'end',
            isCorrect: true,
            reasoning: 'Sách vở là khoản đầu tư - nên dùng lọ tiết kiệm hoặc kết hợp cả hai',
          },
        ],
      },
      {
        id: 'end',
        type: 'lesson',
        title: 'Hoàn thành chương 3!',
        icon: '🎉',
        points: [
          'Bạn đã học quy tắc 50-30-20',
          'Bạn hiểu sách là đầu tư, không phải chi tiêu',
          'Phần thưởng: +25 xu vào lọ Tiết kiệm!',
        ],
      },
    ],
  },

  'pkg-2-ch1': {
    title: 'Cuộc phiêu lưu ở Chợ Làng - Mua sắm khôn ngoan',
    package: 'Gói Mua Sắm',
    estimatedTime: '10 phút',
    illustration: '🏪',
    scenes: [
      {
        id: 'm1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #FFEAA7 0%, #FAB1A0 100%)',
        text: 'Hôm nay là phiên chợ cuối tuần! Mint có 30 xu và được mẹ cho đi chợ cùng. Chợ làng có rất nhiều gian hàng hấp dẫn.',
        illustration: '🏪',
      },
      {
        id: 'm2',
        type: 'dialogue',
        character: 'shopkeeper',
        text: 'Kẹo mới về nè cháu! Mua 1 tặng 1, chỉ 5 xu thôi!',
        mood: 'salesman',
      },
      {
        id: 'm3',
        type: 'dialogue',
        character: 'piggy',
        text: 'Đợi đã bạn ơi! Hãy nhìn quanh trước đã. Có nhiều thứ hay hơn kẹo đó!',
        mood: 'cautious',
      },
      {
        id: 'm4',
        type: 'lesson',
        title: 'Chiến lược mua sắm thông minh',
        icon: '🛒',
        points: [
          '🛒 Bước 1: LIỆT KÊ trước khi đi - cần mua gì?',
          '🛒 Bước 2: SO SÁNH GIÁ - 3 gian hàng trước khi mua',
          '🛒 Bước 3: KIỂM TRA KHUYẾN MẠI - "Mua 1 tặng 1" có thật sự rẻ?',
          '🛒 Bước 4: KHÔNG MUA NGAY - về hỏi mẹ trước',
        ],
      },
      {
        id: 'm5',
        type: 'choice',
        prompt: 'Mint thấy đồ chơi 20 xu. Có nên mua ngay không?',
        illustration: '🧸',
        choices: [
          {
            id: 'A',
            text: 'Mua ngay vì đang sale!',
            consequence: 'Sale chưa chắc đã là giá tốt',
            nextScene: 'end-m',
          },
          {
            id: 'B',
            text: 'Về hỏi mẹ và chờ 24h',
            consequence: 'Quy tắc 24 giờ rất quan trọng!',
            nextScene: 'end-m',
            isCorrect: true,
            reasoning: 'Chờ 24h giúp bạn không mua đồ chơi theo cảm xúc',
          },
        ],
      },
      {
        id: 'end-m',
        type: 'lesson',
        title: 'Hoàn thành!',
        icon: '✨',
        points: [
          'Quy tắc 24 giờ: chờ một ngày trước khi mua đồ không cần thiết',
          'Đọc kỹ khuyến mại: "Mua 1 tặng 1" đôi khi ép bạn mua 2',
          'So sánh giá ở ít nhất 3 nơi',
        ],
      },
    ],
  },

  'pkg-3-ch1': {
    title: 'Vườn Xù - Hành trình tìm kho báu',
    package: 'Gói Tiết Kiệm',
    estimatedTime: '15 phút',
    illustration: '🌳',
    scenes: [
      {
        id: 'v1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #C9E4F5 0%, #95E1D3 100%)',
        text: 'Sau 3 tháng tiết kiệm, Mint đã có 100 xu trong lọ. Heo Heo reo lên: "Đủ rồi! Hôm nay mình đi Vườn Xù nào!"',
        illustration: '✨',
      },
      {
        id: 'v2',
        type: 'dialogue',
        character: 'piggy',
        text: 'Vườn Xù là nơi mọi thứ bạn tiết kiệm được sẽ mọc lên thành cây. Bạn càng tiết kiệm, cây càng cao!',
        mood: 'magical',
      },
      {
        id: 'v3',
        type: 'narrator',
        text: 'Khi đến Vườn Xù, Mint thấy hàng trăm cây phát sáng. Mỗi cây có tên một bạn nhỏ và ghi số tiền tiết kiệm. Cây của Mint mới chỉ là một mầm non nhỏ xíu.',
        illustration: '🌱',
      },
      {
        id: 'v4',
        type: 'dialogue',
        character: 'wiseOwl',
        text: 'Mầm non này sẽ lớn nhanh nếu bạn tiếp tục tiết kiệm. Cây càng lâu năm, hoa trái càng nhiều. Đó gọi là LÃI KÉP - sức mạnh của thời gian!',
        mood: 'wise',
      },
      {
        id: 'v5',
        type: 'lesson',
        title: 'Lãi kép - Phép màu thứ 8 của thế giới',
        icon: '🌳',
        points: [
          '🌱 Đồng xu bỏ lọ cả năm, cuối năm sinh thêm một phần mười — thành một trăm mười xu',
          '🌿 Năm sau, một trăm mười xu lại sinh thêm một phần mười — thành một trăm hai mốt xu',
          '🌳 Cứ thế, tiền đẻ ra tiền - càng lâu càng nhiều!',
        ],
      },
      {
        id: 'v6',
        type: 'choice',
        prompt: 'Mint muốn cây mình lớn nhanh. Nên làm gì?',
        illustration: '🌳',
        choices: [
          {
            id: 'A',
            text: 'Tiếp tục tiết kiệm đều đặn mỗi tuần',
            consequence: 'Đúng rồi! Kiên trì là chìa khóa',
            nextScene: 'end-v',
            isCorrect: true,
            reasoning: 'Tiết kiệm đều đặn + lãi kép = kho báu lớn',
          },
          {
            id: 'B',
            text: 'Bỏ tiết kiệm vì lâu quá',
            consequence: 'Tiếc quá! Cây sẽ không lớn được',
            nextScene: 'end-v',
          },
        ],
      },
      {
        id: 'end-v',
        type: 'lesson',
        title: 'Tìm thấy kho báu!',
        icon: '🏆',
        points: [
          'Kho báu thật sự là THÓI QUEN TIẾT KIỆM',
          'Lãi kép giúp tiền lớn lên theo thời gian',
          'Kiên nhẫn là chìa khóa của thành công',
        ],
      },
    ],
  },

  'pkg-5-ch1': {
    title: 'Bảo hiểm thần kỳ - Khi rủi ro gõ cửa',
    package: 'Gói Bảo Hiểm',
    estimatedTime: '14 phút',
    illustration: '🛡️',
    scenes: [
      {
        id: 'i1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #B5C7EB 0%, #C9E4F5 100%)',
        text: 'Một ngày đẹp trời, Mint đang chơi ngoài sân thì trượt chân ngã xe đạp. May sao chỉ xước tay, nhưng chiếc xe đạp bị cong vành.',
        illustration: '🚲',
      },
      {
        id: 'i2',
        type: 'dialogue',
        character: 'mint',
        text: 'Ôi không! Xe đạp của mình bị hư rồi! Sửa chắc phải mất 50 xu. Mà mình chỉ có 30 xu tiết kiệm...',
        mood: 'sad',
      },
      {
        id: 'i3',
        type: 'dialogue',
        character: 'wiseOwl',
        text: 'Đây là lúc bảo hiểm phát huy tác dụng! Nếu Mint mua bảo hiểm xe đạp, công ty bảo hiểm sẽ trả tiền sửa xe cho bạn!',
        mood: 'wise',
      },
      {
        id: 'i4',
        type: 'lesson',
        title: 'Bảo hiểm là gì?',
        icon: '🛡️',
        points: [
          '🛡️ Bảo hiểm: bạn trả một khoản nhỏ đều đặn (phí bảo hiểm)',
          '💰 Khi có rủi ro (xe hư, ốm đau), công ty bảo hiểm sẽ trả tiền giúp bạn',
          '🤝 Đây là chia sẻ rủi ro - một người gặp rủi ro, cả nhóm giúp đỡ',
        ],
      },
      {
        id: 'i5',
        type: 'choice',
        prompt: 'Nên mua bảo hiểm cho những thứ nào?',
        illustration: '🛡️',
        choices: [
          {
            id: 'A',
            text: 'Xe đạp đắt tiền và sức khỏe',
            consequence: 'Đúng! Đó là thứ cần bảo hiểm nhất',
            nextScene: 'end-i',
            isCorrect: true,
            reasoning: 'Đồ có giá trị lớn và sức khỏe nên được bảo hiểm',
          },
          {
            id: 'B',
            text: 'Kẹo và sticker',
            consequence: 'Không cần thiết - quá rẻ',
            nextScene: 'end-i',
          },
        ],
      },
      {
        id: 'end-i',
        type: 'lesson',
        title: 'Hoàn thành!',
        icon: '🎓',
        points: [
          'Bảo hiểm giúp bạn yên tâm khi có rủi ro',
          'Không phải cái gì cũng cần bảo hiểm - chỉ cái có giá trị lớn',
          'Phí bảo hiểm rẻ hơn nhiều so với chi phí khi có rủi ro',
        ],
      },
    ],
  },

  'pkg-2-ch2': {
    title: 'So sánh giá - Ba cửa hàng, một chiếc áo',
    package: 'Gói Mua Sắm',
    estimatedTime: '10 phút',
    illustration: '👕',
    scenes: [
      {
        id: 'c1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #FAB1A0 0%, #FFEAA7 100%)',
        text: 'Mint muốn mua một chiếc áo thun mới. Có ba cửa hàng trong làng, mỗi nơi có giá khác nhau.',
        illustration: '👕',
      },
      {
        id: 'c2',
        type: 'lesson',
        title: 'Ba mức giá',
        icon: '🏷️',
        points: [
          '🏪 Cửa hàng A: 45 xu - cửa hàng gần nhà',
          '🏪 Cửa hàng B: 40 xu - cửa hàng trung tâm',
          '🏪 Cửa hàng C: 50 xu - cửa hàng cao cấp',
        ],
      },
      {
        id: 'c3',
        type: 'dialogue',
        character: 'piggy',
        text: 'Đừng vội mua ở chỗ quen! Hãy so sánh ít nhất 3 nơi. Cửa hàng B đang rẻ nhất đó!',
        mood: 'thoughtful',
      },
      {
        id: 'c4',
        type: 'choice',
        prompt: 'Mint nên mua áo ở đâu?',
        illustration: '🛍️',
        choices: [
          {
            id: 'A',
            text: 'Mua ở A (45 xu) - vì gần nhà',
            consequence: 'Gần nhà tiện nhưng đắt hơn 5 xu',
            nextScene: 'end-c',
          },
          {
            id: 'B',
            text: 'Mua ở B (40 xu) - vì rẻ nhất',
            consequence: 'Đúng! Tiết kiệm 10 xu so với C',
            nextScene: 'end-c',
            isCorrect: true,
            reasoning: 'So sánh giá giúp tiết kiệm đáng kể',
          },
        ],
      },
      {
        id: 'end-c',
        type: 'lesson',
        title: 'Hoàn thành!',
        icon: '💰',
        points: [
          'Luôn so sánh giá ở ít nhất 3 nơi',
          'Tiết kiệm 5-10 xu mỗi lần = kho báu lớn theo thời gian',
          'Đừng ngại đi xa hơn nếu giá rẻ hơn',
        ],
      },
    ],
  },

  'pkg-3-ch2': {
    title: 'Bí mật của lãi kép - 1 năm, 5 năm, 10 năm',
    package: 'Gói Tiết Kiệm',
    estimatedTime: '12 phút',
    illustration: '📈',
    scenes: [
      {
        id: 'k1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #C9E4F5 0%, #95E1D3 100%)',
        text: 'Heo Heo giải thích về sức mạnh kỳ diệu của lãi kép qua 3 mốc thời gian.',
        illustration: '📊',
      },
      {
        id: 'k2',
        type: 'lesson',
        title: 'Sức mạnh của thời gian (mỗi năm tiền sinh thêm một phần mười)',
        icon: '📈',
        points: [
          '🌱 Một trăm xu gửi một năm — cuối năm thành một trăm mười xu (lãi mười xu)',
          '🌿 Một trăm xu gửi năm năm — thành một trăm sáu mốt xu (lãi sáu mốt xu)',
          '🌳 Một trăm xu gửi mười năm — thành hai trăm năm chín xu (lãi một trăm năm chín xu!)',
        ],
      },
      {
        id: 'k3',
        type: 'dialogue',
        character: 'piggy',
        text: 'Cùng số tiền ban đầu, nhưng thời gian dài hơn thì lãi nhiều hơn gấp 2-3 lần! Đó là lý do tiết kiệm sớm là chìa khóa!',
        mood: 'magical',
      },
      {
        id: 'k4',
        type: 'choice',
        prompt: 'Bạn mười tuổi, mỗi năm bỏ lọ một trăm xu. Tới hai mươi tuổi, bạn có khoảng bao nhiêu xu? (mỗi năm tiền sinh thêm một phần mười)',
        illustration: '📊',
        choices: [
          {
            id: 'A',
            text: 'Khoảng một ngàn xu',
            consequence: 'Sai rồi. Sức mạnh thời gian còn lớn hơn thế!',
            nextScene: 'end-k',
          },
          {
            id: 'B',
            text: 'Khoảng một ngàn năm trăm chín mươi ba xu',
            consequence: 'Đúng rồi! Lãi kép quả là kỳ diệu!',
            nextScene: 'end-k',
            isCorrect: true,
            reasoning: 'Công thức cổ tích: mỗi năm tiền sinh thêm một phần mười, mười năm liền thành kho báu lớn',
          },
        ],
      },
      {
        id: 'end-k',
        type: 'lesson',
        title: 'Hoàn thành!',
        icon: '🏆',
        points: [
          'Tiết kiệm sớm = lợi thế lớn',
          'Lãi kép là "phép màu thứ 8 của thế giới"',
          'Kiên nhẫn là chìa khóa thành công',
        ],
      },
    ],
  },

  'pkg-4-ch2': {
    title: 'Đầu tư nhỏ - Hạt giống tài chính',
    package: 'Gói Đầu Tư',
    estimatedTime: '15 phút',
    illustration: '🌱',
    scenes: [
      {
        id: 'inv1',
        type: 'narrator',
        background: 'linear-gradient(180deg, #95E1D3 0%, #B5C7EB 100%)',
        text: 'Mint có 200 xu tiết kiệm. Cú Khôn Ngoan dạy về đầu tư: "Đừng để tiền ngủ yên trong lọ!"',
        illustration: '💼',
      },
      {
        id: 'inv2',
        type: 'lesson',
        title: 'Các cách đầu tư cho người nhỏ tuổi',
        icon: '📈',
        points: [
          '📚 Mua sách: kiến thức tăng giá trị theo thời gian',
          '🎨 Mua dụng cụ học năng khiếu: kỹ năng sinh lời',
          '💰 Gửi tiết kiệm có kỳ hạn: an toàn + có lãi',
        ],
      },
      {
        id: 'inv3',
        type: 'dialogue',
        character: 'wiseOwl',
        text: 'Đầu tư tốt nhất là đầu tư vào bản thân. Sách, kỹ năng, sức khỏe - những thứ này không ai lấy mất!',
        mood: 'wise',
      },
      {
        id: 'inv4',
        type: 'choice',
        prompt: 'Mint có 200 xu. Đầu tư nào tốt nhất?',
        illustration: '🌱',
        choices: [
          {
            id: 'A',
            text: 'Mua 5 gói kẹo để bán lại',
            consequence: 'Buôn bán nhỏ cũng là đầu tư, nhưng rủi ro',
            nextScene: 'end-inv',
          },
          {
            id: 'B',
            text: 'Mua bộ sách hay + khóa học vẽ',
            consequence: 'Đúng! Đầu tư vào tri thức luôn có lãi',
            nextScene: 'end-inv',
            isCorrect: true,
            reasoning: 'Kiến thức và kỹ năng là tài sản vô giá',
          },
        ],
      },
      {
        id: 'end-inv',
        type: 'lesson',
        title: 'Hoàn thành!',
        icon: '🌟',
        points: [
          'Đầu tư thông minh = đầu tư vào bản thân',
          'Sách, kỹ năng, sức khỏe = tài sản vĩnh viễn',
          'Bắt đầu nhỏ, kiên trì lớn',
        ],
      },
    ],
  },

  // ============================================================
  // 📚 TRUYỆN: THẰNG BỜM - BẪY NỢ XOAY VÒNG (Gói debt)
  // ============================================================
  'debt-ch1': {
    title: 'Thằng Bờm và Phú Ông - Bài học về nợ',
    package: 'Gói Bẫy Nợ Xoay Vòng',
    estimatedTime: '12 phút',
    illustration: '💰',
    scenes: [
      // ===== MỞ ĐẦU: MINT DẪN CHUYỆN (ảnh Mint mới tách nền) =====
      {
        id: 'b0-intro',
        type: 'narrator',
        background: 'thangbom-lang-que',
        text: 'Xin chào các bạn nhỏ! Mình là Mint - cô bé dẫn chuyện hôm nay. Hôm nay mình sẽ kể cho các bạn nghe câu chuyện về Thằng Bờm và Phú Ông - một câu chuyện về BẪY NỢ XOAY VÒNG mà ai cũng cần phải biết để bảo vệ mình nhé!',
        // 🆕 Sprite Mint dẫn chuyện (ảnh mới tách nền - tóc đuôi sam, áo hồng hoa, cầm heo đất)
        character: 'mint',
        characterPosition: 'center',
        expression: 'curious',
      },
      // ===== CẢNH GIỚI THIỆU NHÂN VẬT: BỜM =====
      {
        id: 'b0b-cast-bom',
        type: 'narrator',
        background: 'thangbom-lang-que',
        text: '✨ NHÂN VẬT CHÍNH ✨\n\nThằng Bờm - 18 tuổi, con nhà nghèo nhưng chăm chỉ hiền lành. Hằng ngày Bờm đi cày thuê, gặt lúa, tích cóp từng đồng vàng một. Bờm có nụ cười hiền và đôi tay chai sạn vì lao động.',
        // 🆕 Hiển thị chân dung Bờm ở giữa (pose 'portrait' dùng bom-happy.png)
        character: 'bom',
        characterPosition: 'center',
        expression: 'portrait',
        pose: 'idle',
        cast: {
          name: 'Thằng Bờm',
          age: 18,
          role: 'Chàng trai nghèo chăm chỉ',
          emoji: '👦',
        },
      },
      // ===== CẢNH GIỚI THIỆU NHÂN VẬT: PHÚ ÔNG =====
      {
        id: 'b0c-cast-phuong',
        type: 'narrator',
        background: 'thangbom-phong-phu-ong',
        text: '✨ PHẢN DIỆN ✨\n\nPhú Ông - 50 tuổi, nhà giàu nhất vùng. Mặc áo dài đỏ thêu hạc, đeo nhẫn vàng, cổ đeo dây chuyền. Phú Ông cười tươi nhưng trong bụng toan tính lừa người khác. Bằng cách cho vay lãi rẻ, Phú Ông dụ dỗ người nghèo rơi vào BẪY NỢ XOAY VÒNG.',
        // 🆕 Dùng portrait pose (đứng thẳng, pose quyền lực) thay vì smug (đang cầm hợp đồng cười toe toét)
        character: 'phuong',
        characterPosition: 'center',
        expression: 'portrait',
        pose: 'proud',
        cast: {
          name: 'Phú Ông',
          age: 50,
          role: 'Người giàu cho vay lừa đảo',
          emoji: '🧔',
        },
      },
      // ===== CẢNH 1: LÀNG QUÊ - GIỚI THIỆU BỜM =====
      {
        id: 'b1',
        type: 'narrator',
        background: 'thangbom-lang-que',
        text: 'Làng Lang Quê có một chàng trai nghèo khổ tên Bờm. Mồ hôi bao nhiêu, Bờm đổ bấy nhiêu vào đồng ruộng quanh năm. Có tiền là Bờm lại bỏ hũ, có hũ lại đem giấu — tích cóp từng đồng vàng một, mơ một ngày được mua thêm vài sào ruộng.',
        character: 'bom',
        characterPosition: 'center',
        expression: 'happy',
        pose: 'idle',
      },
      // ===== CẢNH 2: BỜM GẶT LÚA GIỮA TRƯA =====
      {
        id: 'b2',
        type: 'narrator',
        background: 'thangbom-canh-dong-giat-lua',
        text: 'Từ sáng sớm đến trưa, Bờm đội nón lá ra đồng. Trưa nắng chang chang, Bờm cúi mình giữa thửa ruộng, tay cầm liềm lướt từng nhát qua lớp lúa vàng. Mồ hôi nhễ nhại thấm ướt áo, nhưng nụ cười hiền vẫn nở trên môi — năm nay lúa tốt lắm.',
        // 🆕 BG composite có sẵn Bờm trong ảnh → no sprite
      },
      // ===== CẢNH 2b: BỜM NGHỈ DƯỚI GỐC ĐA (BG COMPOSITE - KHÔNG SPRITE) =====
      {
        id: 'b2b',
        type: 'narrator',
        background: 'thangbom-goc-da-bom',
        text: 'Gặt xong một thửa ruộng, Bờm cởi nón, ghé vào gốc đa cổ thụ đầu làng ngồi nghỉ. Bóng mát rợp, gió heo hắt, lúa vàng trải dài đến tận chân trời. Bờm lau mồ hôi, tự hào nhìn lại thửa ruộng mình vừa gặt xong.',
      },
// ===== CẢNH 2c: BỜM TỰ HÀO NÓI CHUYỆN =====
      {
        id: 'b2c',
        type: 'dialogue',
        background: 'thangbom-goc-da-empty',
        text: '"Hiu hiu... năm nay lúa tốt ghê!" — Bờm mỉm cười, tính nhẩm trong đầu. "Có thêm ít tiền bán lúa nữa là đủ mua thêm sào nữa hay không nhỉ?"',
        character: 'bom',
        characterPosition: 'center',
        expression: 'sitSmile',
        pose: 'standing',
      },
      // ===== CẢNH 3: VỀ NHÀ ĐẾM VÀNG =====
      {
        id: 'b3',
        type: 'narrator',
        background: 'thangbom-nha-bom-dem-phi',
        text: 'Chiều về đến nhà, Bờm khóa cửa, ngồi vào bàn. Một năm chăm chỉ, gặt thuê khắp vùng — cả gia tài 100 đồng vàng của Bờm đều nằm trên bàn. Bờm đếm đi đếm lại, rồi lại thở dài — vẫn chưa đủ mua thêm sào ruộng.',
        character: null,
      },
      // ===== CẢNH 4: PHÚ ÔNG ĐI NGANG QUA NHÀ BỜM =====
      {
        id: 'b4',
        type: 'narrator',
        background: 'thangbom-nha-bom-phuong-den',
        text: 'Đang lúc Bờm ngồi thở dài một mình thì Phú Ông — người giàu nhất vùng — đi ngang qua. Áo dài thêu hạc bay phần phật, nhẫn vàng lấp lánh. Phú Ông liếc thấy Bờm ôm hũ vàng, mắt sáng rực, cười toe toét tiến lại.',
        // ⚠️ Narrator scene — không có sprite (BG đã có sẵn Bờm + Phú Ông composite)
      },
      {
        id: 'b5',
        type: 'dialogue',
        background: 'thangbom-nha-bom-hien',
        character: 'phuong',
        characterPosition: 'left',
        expression: 'smug',
        pose: 'offerMoney',
        text: '"Này Bờm! Tao đi ngang thấy mày ôm hũ vàng kìa. Có phải mày đang tính mua thêm ruộng không? Tao cho mày vay một trăm đồng vàng nha! Mỗi năm chỉ trả thêm một phần mười thôi — rẻ lắm!"',
      },
      {
        id: 'b6',
        type: 'dialogue',
        background: 'thangbom-nha-bom-hien',
        character: 'bom',
        characterPosition: 'center',
        expression: 'thinking',
        pose: 'leanForward',
        text: 'Bờm nghe vậy, gãi đầu, tính nhẩm trong bụng: "Một trăm vàng, mỗi năm thêm một phần mười... tức là năm sau trả một trăm mười. Nhiều hơn một chút thôi." Bờm ngước lên: "Vậy... được không ạ?"',
      },
      // ===== CẢNH 6b: PHÚ ÔNG ĐỒNG Ý =====
      {
        id: 'b6-phuong-reply',
        type: 'dialogue',
        background: 'thangbom-nha-bom-hien',
        character: 'phuong',
        characterPosition: 'left',
        expression: 'smug',
        pose: 'reachOut',
        text: 'Phú Ông gật đầu lia lịa: "Được chứ! Được chứ! Sang ngày mai, mày cứ ghé nhà tao, tao sẽ ký hợp đồng với mày."',
      },
      // ===== CẢNH 6c: BỜM ĐẾN NHÀ PHÚ ÔNG (narrator — composite BG có sẵn 2 nhân vật) =====
      {
        id: 'b6b',
        type: 'narrator',
        background: 'thangbom-nha-phu-ong-san',
        text: 'Hôm sau, Bờm đội nón, lội bộ sang nhà Phú Ông — căn nhà lớn nhất làng. Bước qua cổng sắt, Bờm choáng ngợp trước sân gạch sạch bong, hai chậu bonsai to, đèn đá, nghê đá... Trên hiên, Phú Ông ngồi trên ghế mây, hai chân đan lên nhau, tay vuốt râu mép, đang nhấp chén trà — không buồn đứng dậy, chỉ liếc xuống Bờm bằng ánh mắt cáo già đang xem mồi.',
      },
      // ===== CẢNH 6d: PHÚ ÔNG NHÌN BỜM TỪ TRÊN HIÊN (cười gian - overlay sprite Phú Ông) =====
      {
        id: 'b6-phuong-lookdown',
        type: 'dialogue',
        background: 'thangbom-nha-phu-ong-hien-trong',
        character: 'phuong',
        characterPosition: 'right',
        expression: 'smug',
        pose: 'crossArms',
        text: 'Phú Ông nhìn xuống từ hiên, cười nhếch mép: "Hm... mày tới thật hả Bờm? Tao tưởng mày hết gan rồi chứ. Thôi vào đi, đừng có đứng ngoài nắng — chân đất vô sân tao không buồn lau đâu."',
      },
      // ===== CẢNH 7: VÀO NHÀ, KÝ HỢP ĐỒNG =====
      {
        id: 'b7',
        type: 'dialogue',
        background: 'thangbom-phong-phu-ong',
        character: 'phuong',
        characterPosition: 'right',
        expression: 'proud',
        pose: 'explain',
        text: '"Ngồi đây. Đọc cho kỹ trước khi ký — tao không ép mày đâu." Phú Ông đẩy tờ hợp đồng qua, tay vẫn vuốt râu mép. "Một trăm vàng, mỗi năm lãi thêm một phần mười. Sang năm mày có thóc dư, tao lấy thóc. Mày không trả được... thì ruộng đó là của tao. Công bằng mà, đúng không Bờm?"',
      },
      // ===== CẢNH 7b: VÀO PHÒNG KÝ HỢP ĐỒNG =====
      {
        id: 'b7b',
        type: 'narrator',
        background: 'thangbom-phong-phu-ong',
        text: 'Phú Ông đưa Bờm vào phòng trong. Trên bàn gỗ đã có sẵn giấy bút, mực, và một tờ hợp đồng in sẵn. Phú Ông rót trà mời Bờm rồi đặt hợp đồng lên bàn: "Đây, ký đi Bờm ơi! Ký xong là có vàng liền!"',
        character: 'phuong',
        characterPosition: 'right',
        expression: 'proud',
        pose: 'explain',
      },
      // ===== CẢNH 8: LỰA CHỌN =====
      {
        id: 'b8',
        type: 'choice',
        background: 'thangbom-phong-phu-ong',
        prompt: 'Trên tay Bờm là tờ hợp đồng. Phú Ông đang nóng lòng đợi. Bờm sẽ làm gì?',
        illustration: '💭',
        choices: [
          {
            id: 'A',
            text: 'Ký ngay! Lãi chỉ một phần mười thôi, trả có một trăm mười đồng vàng.',
            consequence: 'Bờm không đọc kỹ hợp đồng...',
            nextScene: 'b9-trap',
          },
          {
            id: 'B',
            text: 'Đọc kỹ hợp đồng trước đã.',
            consequence: 'Bờm suy nghĩ thấu đáo trước khi ký.',
            nextScene: 'b10-smart',
            isCorrect: true,
            reasoning: 'Đọc kỹ hợp đồng trước khi ký là bước quan trọng nhất!',
          },
        ],
      },
      // ===== BAD ENDING: PHÚ ÔNG RA ĐIỀU KIỆN =====
      {
        id: 'b9-trap',
        type: 'narrator',
        background: 'thangbom-phong-phu-ong',
        text: 'Bờm cầm bút, ký tên. Phú Ông cười tươi, đưa ngay 100 đồng vàng. Bờm mang tiền đi mua thêm ruộng, rồi chăm chỉ làm ruộng suốt một năm. Đến kỳ thu hoạch, Bờm phấn khởi mang tiền đến trả nợ. Phú Ông tiếp nhận rồi lật tờ hợp đồng...',
        character: 'bom',
        characterPosition: 'left',
        expression: 'shocked',
        pose: 'grabMoney',
        moneyTransfer: true,
      },
      {
        id: 'b10-trap',
        type: 'dialogue',
        background: 'thangbom-phong-phu-ong',
        character: 'phuong',
        characterPosition: 'right',
        expression: 'trap-smug',
        pose: 'explain',
        text: 'Phú Ông cười nhạt: "Nợ gốc một trăm đồng. Lãi một phần mười là mười. Phí quản lý năm. Phí trễ hạn ba. Phí tư vấn hai. Tổng cộng... một trăm hai mươi đồng." Bờm ngẩn người. Phú Ông lại nói thêm: "Mà năm nay mày trả chưa kịp hạn rồi, phí trễ tăng lên năm nha. Sang năm nữa là phí phạt cộng dồn luôn."',
      },
      {
        id: 'b11-trap',
        type: 'narrator',
        background: 'thangbom-bom-buon',
        text: 'Một năm trôi qua, Bờm gom tiền đi trả — nhưng nợ lại tăng. Hai năm, ba năm... Tiền lời chồng lên tiền lời. Ruộng bán, nhà bán, cuối cùng Bờm đứng trước căn nhà trống đổ nát, ôm đứa em nhỏ, không biết ngày mai sẽ ra sao. Đó là BẪY NỢ XOAY VÒNG — nơi người nghèo mãi mãi không thoát ra được.',
        endingType: 'bad',
        // Data cho Fail Modal (popup báo thất bại + hỏi chơi lại / về trang chính)
        endingMessage: {
          title: 'Bạn đã bị Phú Ông lừa!',
          icon: '😢',
          consequence: 'Bờm đã rơi vào bẫy nợ xoay vòng của Phú Ông. Vì không đọc kỹ hợp đồng trước khi ký, Bờm phải gánh chịu hàng loạt phí ẩn: phí quản lý, phí tư vấn, phí trễ hạn... Ruộng bán, nhà bán, Bờm mất trắng tất cả.',
          lesson: '📜 LUÔN đọc kỹ hợp đồng trước khi ký — đặc biệt là các điều khoản về phí ẩn, lãi suất và hình phạt trễ hạn.',
        },
      },
      // ===== GOOD ENDING: BỜM HỎI KỸ =====
      {
        id: 'b10-smart',
        type: 'narrator',
        background: 'thangbom-phong-phu-ong',
        text: 'Bờm nhận hợp đồng nhưng chưa ký. Thay vào đó, cậu đưa lên đọc kỹ, rồi ngước lên hỏi: "Cho hỏi, lãi này là lãi đơn hay lãi kép ạ? Có phí gì thêm không? Phạt trễ hạn bao nhiêu? Có điều khoản ẩn gì không ạ?"',
        character: 'bom',
        characterPosition: 'left',
        expression: 'thinking',
        pose: 'leanForward',
      },
      {
        id: 'b11-smart',
        type: 'dialogue',
        background: 'thangbom-phong-phu-ong',
        character: 'phuong',
        characterPosition: 'right',
        expression: 'sad',
        pose: 'explain',
        text: 'Phú Ông ngẩn người. Ánh mắt Bờm không sợ hãi, chỉ bình tĩnh chờ câu trả lời. "Ờ... ờ..." — Phú Ông ấp úng, rồi cố nói tiếp: "...thôi, hay là mình thương lượng lại nhé?"',
      },
      {
        id: 'b12-smart',
        type: 'dialogue',
        background: 'thangbom-phong-phu-ong',
        character: 'bom',
        characterPosition: 'left',
        expression: 'excited',
        pose: 'celebrate',
        text: 'Bờm lắc đầu, nói rõ: "Dạ không, ông Phú à. Nếu trong hợp đồng có ghi rõ thì cho cháu đọc lại toàn bộ điều khoản. Cháu không ký nếu không hiểu hết ạ."',
      },
      {
        id: 'b13-ending',
        type: 'narrator',
        background: 'thangbom-bom-vui',
        text: 'Phú Ông ấp úng xin lỗi, Bờm cảm ơn rồi ra về. Quay về làng, Bờm kể lại chuyện cho bà con nghe. Ai nấy đều gật gù nể phục — một chàng trai nghèo mà biết tự bảo vệ mình trước những lời ngon ngọt. Từ đó, Bờm tiếp tục chăm chỉ làm ruộng, sống đời bình yên bên gia đình.',
        endingType: 'good',
        // Data cho Lesson Modal (sẽ hiện sau khi user bấm 'Tiếp tục')
        lessonData: {
          title: 'Bài học về nợ',
          icon: '⚠️',
          cupName: 'Bài học về nợ',
          points: [
            '📜 LUÔN đọc kỹ hợp đồng trước khi ký',
            '💸 "Lãi rẻ" có thể kèm theo hàng tá phí ẩn',
            '🔄 Hỏi rõ lãi đơn hay lãi kép — lãi kép có thể nhân đôi số nợ',
            '👨‍👩‍👧 Nếu hợp đồng phức tạp, hãy nhờ ba mẹ hoặc người lớn đáng tin cậy đọc giúp',
            '💰 Chỉ vay khi thực sự cần và có kế hoạch trả nợ rõ ràng',
          ],
        },
      },
    ],
  },
};

// Helper: get a random encouragement
export const encouragements = [
  'Tuyệt vời! 🌟',
  'Bạn giỏi quá! 🎉',
  'Đúng rồi! 👏',
  'Xuất sắc! ✨',
  'Heo Heo tự hào về bạn! 🐷',
  'Cú Khôn Ngoan gật đầu khen! 🦉',
  'Mint đang trở thành chuyên gia tài chính! 🧒',
];

// Helper: lấy story theo chapterId
export function getStoryByChapterId(chapterId) {
  // Map chapterId của game → storyId
  const storyMap = {
    'savings-1': 'pkg-1-ch1',
    'savings-2': 'pkg-1-ch2',
    'savings-3': 'pkg-1-ch3',
    'interest-1': 'pkg-2-ch1',
    'interest-2': 'pkg-2-ch2',
    'debt-1': 'debt-ch1',
    'debt-2': 'pkg-3-ch1',
    'debt-3': 'pkg-3-ch2',
    'inflation-1': 'pkg-4-ch2',
    'installment-1': 'pkg-5-ch1',
  }
  const storyId = storyMap[chapterId]
  if (storyId) return stories[storyId] || null
  return stories[chapterId] || null
}

// Helper: lấy danh sách chapter/story thuộc 1 gói (theo thứ tự)
export const PACKAGE_STORIES = {
  savings: ['pkg-1-ch1', 'pkg-1-ch2', 'pkg-1-ch3'],
  interest: ['pkg-2-ch1', 'pkg-2-ch2'],
  debt: ['debt-ch1', 'pkg-3-ch1', 'pkg-3-ch2'],
  inflation: ['pkg-4-ch2'],
  installment: ['pkg-5-ch1'],
  fraud: ['pkg-6-ch1'],
}

// Lấy story đầu tiên (chưa hoàn thành) của gói
export function getFirstStoryOfPackage(packageId, completedChapters = []) {
  const list = PACKAGE_STORIES[packageId] || []
  for (const sid of list) {
    if (!completedChapters.includes(sid)) return stories[sid] || null
  }
  // Nếu hết rồi thì trả story đầu tiên để chơi lại
  return stories[list[0]] || null
}

// Lấy story kế tiếp trong gói (sau khi hoàn thành 1 story)
export function getNextStoryOfPackage(packageId, currentStoryId, completedChapters = []) {
  const list = PACKAGE_STORIES[packageId] || []
  const idx = list.indexOf(currentStoryId)
  if (idx === -1 || idx === list.length - 1) return null
  return stories[list[idx + 1]] || null
}

// Helper: lấy next scene
export function getNextScene(story, currentSceneId, choiceId) {
  const currentScene = story.scenes.find((s) => s.id === currentSceneId);
  if (!currentScene) return null;

  if (currentScene.type === 'choice') {
    const choice = currentScene.choices.find((c) => c.id === choiceId);
    if (choice && choice.nextScene) {
      return story.scenes.find((s) => s.id === choice.nextScene);
    }
  }
  // sequential
  const idx = story.scenes.findIndex((s) => s.id === currentSceneId);
  if (idx < story.scenes.length - 1) {
    return story.scenes[idx + 1];
  }
  return null;
}
