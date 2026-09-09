// Character Sprites - SVG chi tiết cao với gradients + filters phức tạp
// Detail như anime art, ổn định

// ============== MINT - HAPPY ==============
const MintHappy = (
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="mh-face" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="60%" stopColor="#FFD4C4" />
        <stop offset="100%" stopColor="#F5C5B0" />
      </radialGradient>
      <linearGradient id="mh-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="50%" stopColor="#E94578" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="mh-hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="50%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
      <linearGradient id="mh-bow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF1493" />
        <stop offset="100%" stopColor="#C71585" />
      </linearGradient>
      <radialGradient id="mh-cheek" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFB4A2" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFB4A2" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mh-eye" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F5DC" />
      </radialGradient>
    </defs>

    {/* Shadow */}
    <ellipse cx="150" cy="440" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />

    {/* Legs */}
    <rect x="120" y="350" width="25" height="90" fill="linear-gradient(#FFE5F1, #FFD4E5)" rx="10" />
    <rect x="155" y="350" width="25" height="90" fill="linear-gradient(#FFE5F1, #FFD4E5)" rx="10" />

    {/* Shoes */}
    <ellipse cx="132" cy="440" rx="22" ry="10" fill="linear-gradient(#8B4513, #5C3317)" />
    <ellipse cx="167" cy="440" rx="22" ry="10" fill="linear-gradient(#8B4513, #5C3317)" />

    {/* Dress */}
    <path
      d="M 90 220 L 70 380 Q 70 400 90 400 L 210 400 Q 230 400 230 380 L 210 220 Z"
      fill="url(#mh-dress)"
    />
    {/* Dress highlight */}
    <path
      d="M 100 230 L 85 380 L 100 380 L 110 230 Z"
      fill="white"
      opacity="0.2"
    />
    {/* Dress pattern - hearts */}
    <g opacity="0.4">
      <text x="120" y="280" fontSize="14" fill="#FFB3CD">♥</text>
      <text x="160" y="320" fontSize="14" fill="#FFB3CD">♥</text>
      <text x="180" y="270" fontSize="14" fill="#FFB3CD">♥</text>
      <text x="130" y="350" fontSize="14" fill="#FFB3CD">♥</text>
    </g>
    {/* Belt */}
    <rect x="90" y="220" width="120" height="15" fill="url(#mh-bow)" />
    <circle cx="150" cy="227" r="8" fill="#FFD700" stroke="#D4A574" strokeWidth="1" />

    {/* Arms */}
    <rect x="60" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(-10 75 285)" />
    <rect x="210" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(10 225 285)" />
    {/* Hands */}
    <circle cx="65" cy="350" r="15" fill="#FFE5D9" />
    <circle cx="235" cy="350" r="15" fill="#FFE5D9" />

    {/* Neck */}
    <rect x="135" y="170" width="30" height="30" fill="#FFD4C4" />

    {/* Hair back */}
    <ellipse cx="150" cy="120" rx="100" ry="110" fill="url(#mh-hair)" />

    {/* Head */}
    <ellipse cx="150" cy="125" rx="75" ry="85" fill="url(#mh-face)" />

    {/* Bangs (fringe) */}
    <path
      d="M 80 90 Q 100 50 150 50 Q 200 50 220 90 L 215 130 L 195 110 L 175 135 L 155 105 L 135 130 L 115 105 L 95 130 L 80 110 Z"
      fill="url(#mh-hair)"
    />

    {/* Side hair */}
    <path d="M 80 100 Q 70 200 90 250 L 100 250 Q 90 200 100 110 Z" fill="url(#mh-hair)" />
    <path d="M 220 100 Q 230 200 210 250 L 200 250 Q 210 200 200 110 Z" fill="url(#mh-hair)" />

    {/* Hair highlight */}
    <path d="M 100 70 Q 130 50 170 60" stroke="#D4A574" strokeWidth="3" fill="none" opacity="0.6" />

    {/* Cheeks */}
    <circle cx="115" cy="150" r="15" fill="url(#mh-cheek)" />
    <circle cx="185" cy="150" r="15" fill="url(#mh-cheek)" />

    {/* Eyes - happy (closed crescents) */}
    <path d="M 110 130 Q 120 120 130 130" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 170 130 Q 180 120 190 130" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Eyelashes */}
    <line x1="108" y1="125" x2="105" y2="120" stroke="#2C1810" strokeWidth="2" />
    <line x1="132" y1="125" x2="135" y2="120" stroke="#2C1810" strokeWidth="2" />
    <line x1="168" y1="125" x2="165" y2="120" stroke="#2C1810" strokeWidth="2" />
    <line x1="192" y1="125" x2="195" y2="120" stroke="#2C1810" strokeWidth="2" />

    {/* Mouth - big smile */}
    <path d="M 130 175 Q 150 195 170 175 Q 150 185 130 175 Z" fill="#FF6B6B" stroke="#2C1810" strokeWidth="2" />
    <path d="M 135 178 Q 150 188 165 178" fill="#FFB4A2" />

    {/* Hair bow */}
    <g transform="translate(95, 60)">
      <path d="M 0 0 L -20 -15 L -10 5 Z" fill="url(#mh-bow)" />
      <path d="M 0 0 L 20 -15 L 10 5 Z" fill="url(#mh-bow)" />
      <circle cx="0" cy="-3" r="5" fill="#FFD700" />
    </g>
  </svg>
)

const MintCurious = (
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="mc-face" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="100%" stopColor="#F5C5B0" />
      </radialGradient>
      <linearGradient id="mc-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="mc-hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
    </defs>

    {/* Shadow & body */}
    <ellipse cx="150" cy="440" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />
    <rect x="120" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <rect x="155" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <ellipse cx="132" cy="440" rx="22" ry="10" fill="#8B4513" />
    <ellipse cx="167" cy="440" rx="22" ry="10" fill="#8B4513" />

    <path d="M 90 220 L 70 380 Q 70 400 90 400 L 210 400 Q 230 400 230 380 L 210 220 Z" fill="url(#mc-dress)" />
    <rect x="90" y="220" width="120" height="15" fill="#FF1493" />

    {/* Arms */}
    <rect x="60" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(-10 75 285)" />
    <rect x="210" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(10 225 285)" />

    {/* Head & hair */}
    <ellipse cx="150" cy="120" rx="100" ry="110" fill="url(#mc-hair)" />
    <ellipse cx="150" cy="125" rx="75" ry="85" fill="url(#mc-face)" />
    <path d="M 80 90 Q 100 50 150 50 Q 200 50 220 90 L 215 130 L 195 110 L 175 135 L 155 105 L 135 130 L 115 105 L 95 130 L 80 110 Z" fill="url(#mc-hair)" />
    <path d="M 80 100 Q 70 200 90 250 L 100 250 Q 90 200 100 110 Z" fill="url(#mc-hair)" />
    <path d="M 220 100 Q 230 200 210 250 L 200 250 Q 210 200 200 110 Z" fill="url(#mc-hair)" />

    {/* Cheeks */}
    <circle cx="115" cy="150" r="12" fill="#FFB4A2" opacity="0.5" />
    <circle cx="185" cy="150" r="12" fill="#FFB4A2" opacity="0.5" />

    {/* BIG curious eyes */}
    <circle cx="120" cy="130" r="20" fill="white" stroke="#2C1810" strokeWidth="2" />
    <circle cx="180" cy="130" r="20" fill="white" stroke="#2C1810" strokeWidth="2" />
    <circle cx="124" cy="135" r="11" fill="#4A90E2" />
    <circle cx="184" cy="135" r="11" fill="#4A90E2" />
    <circle cx="124" cy="135" r="6" fill="#000" />
    <circle cx="184" cy="135" r="6" fill="#000" />
    <circle cx="127" cy="130" r="3" fill="white" />
    <circle cx="187" cy="130" r="3" fill="white" />

    {/* Eyebrows raised */}
    <path d="M 100 100 Q 120 90 140 100" stroke="#5C3317" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 160 100 Q 180 90 200 100" stroke="#5C3317" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Small mouth "o" */}
    <ellipse cx="150" cy="180" rx="6" ry="8" fill="#FF6B6B" stroke="#2C1810" strokeWidth="1.5" />

    {/* Hair bow */}
    <g transform="translate(95, 60)">
      <path d="M 0 0 L -20 -15 L -10 5 Z" fill="#FF1493" />
      <path d="M 0 0 L 20 -15 L 10 5 Z" fill="#FF1493" />
      <circle cx="0" cy="-3" r="5" fill="#FFD700" />
    </g>
  </svg>
)

const MintExcited = (
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="me-face" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="100%" stopColor="#F5C5B0" />
      </radialGradient>
      <linearGradient id="me-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="me-hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
    </defs>

    {/* Shadow */}
    <ellipse cx="150" cy="440" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />

    {/* Legs */}
    <rect x="120" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <rect x="155" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <ellipse cx="132" cy="440" rx="22" ry="10" fill="#8B4513" />
    <ellipse cx="167" cy="440" rx="22" ry="10" fill="#8B4513" />

    {/* Dress */}
    <path d="M 90 220 L 70 380 Q 70 400 90 400 L 210 400 Q 230 400 230 380 L 210 220 Z" fill="url(#me-dress)" />
    <rect x="90" y="220" width="120" height="15" fill="#FF1493" />

    {/* Arms RAISED excited */}
    <g transform="rotate(-50 60 250)">
      <rect x="40" y="220" width="30" height="130" rx="15" fill="#FFE5D9" />
      <circle cx="55" cy="220" r="16" fill="#FFE5D9" />
    </g>
    <g transform="rotate(50 240 250)">
      <rect x="230" y="220" width="30" height="130" rx="15" fill="#FFE5D9" />
      <circle cx="245" cy="220" r="16" fill="#FFE5D9" />
    </g>

    {/* Head */}
    <ellipse cx="150" cy="120" rx="100" ry="110" fill="url(#me-hair)" />
    <ellipse cx="150" cy="125" rx="75" ry="85" fill="url(#me-face)" />
    <path d="M 80 90 Q 100 50 150 50 Q 200 50 220 90 L 215 130 L 195 110 L 175 135 L 155 105 L 135 130 L 115 105 L 95 130 L 80 110 Z" fill="url(#me-hair)" />
    <path d="M 80 100 Q 70 200 90 250 L 100 250 Q 90 200 100 110 Z" fill="url(#me-hair)" />
    <path d="M 220 100 Q 230 200 210 250 L 200 250 Q 210 200 200 110 Z" fill="url(#me-hair)" />

    {/* Sparkle eyes */}
    <g transform="translate(120, 130)">
      <path d="M -12 0 L -8 -8 L 0 -12 L 8 -8 L 12 0 L 8 8 L 0 12 L -8 8 Z" fill="#FFD700" stroke="#2C1810" strokeWidth="2" />
    </g>
    <g transform="translate(180, 130)">
      <path d="M -12 0 L -8 -8 L 0 -12 L 8 -8 L 12 0 L 8 8 L 0 12 L -8 8 Z" fill="#FFD700" stroke="#2C1810" strokeWidth="2" />
    </g>

    {/* Big open mouth */}
    <ellipse cx="150" cy="180" rx="12" ry="15" fill="#2C1810" />
    <ellipse cx="150" cy="175" rx="8" ry="5" fill="#FF1493" />
    <path d="M 142 175 Q 150 185 158 175" fill="#FF6B6B" />

    {/* Sparkles around */}
    <text x="20" y="60" fontSize="30" fill="#FFD700">✨</text>
    <text x="260" y="80" fontSize="30" fill="#FFD700">✨</text>
    <text x="150" y="20" fontSize="30" fill="#FFD700">⭐</text>

    {/* Hair bow */}
    <g transform="translate(95, 60)">
      <path d="M 0 0 L -20 -15 L -10 5 Z" fill="#FF1493" />
      <path d="M 0 0 L 20 -15 L 10 5 Z" fill="#FF1493" />
      <circle cx="0" cy="-3" r="5" fill="#FFD700" />
    </g>
  </svg>
)

const MintSad = (
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="ms-face" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="100%" stopColor="#F5C5B0" />
      </radialGradient>
      <linearGradient id="ms-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="ms-hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
    </defs>

    <ellipse cx="150" cy="440" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />
    <rect x="120" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <rect x="155" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <ellipse cx="132" cy="440" rx="22" ry="10" fill="#8B4513" />
    <ellipse cx="167" cy="440" rx="22" ry="10" fill="#8B4513" />

    <path d="M 90 220 L 70 380 Q 70 400 90 400 L 210 400 Q 230 400 230 380 L 210 220 Z" fill="url(#ms-dress)" />
    <rect x="90" y="220" width="120" height="15" fill="#FF1493" />

    {/* Arms hanging down */}
    <rect x="60" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(-5 75 285)" />
    <rect x="210" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(5 225 285)" />

    <ellipse cx="150" cy="120" rx="100" ry="110" fill="url(#ms-hair)" />
    <ellipse cx="150" cy="125" rx="75" ry="85" fill="url(#ms-face)" />
    <path d="M 80 90 Q 100 50 150 50 Q 200 50 220 90 L 215 130 L 195 110 L 175 135 L 155 105 L 135 130 L 115 105 L 95 130 L 80 110 Z" fill="url(#ms-hair)" />
    <path d="M 80 100 Q 70 200 90 250 L 100 250 Q 90 200 100 110 Z" fill="url(#ms-hair)" />
    <path d="M 220 100 Q 230 200 210 250 L 200 250 Q 210 200 200 110 Z" fill="url(#ms-hair)" />

    {/* Sad eyes - droopy */}
    <path d="M 105 130 Q 120 140 135 130" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 165 130 Q 180 140 195 130" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Sad eyebrows */}
    <path d="M 100 105 Q 120 100 135 110" stroke="#5C3317" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 165 110 Q 180 100 200 105" stroke="#5C3317" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Tear drop */}
    <ellipse cx="125" cy="155" rx="3" ry="6" fill="#87CEEB" opacity="0.8" />

    {/* Frown */}
    <path d="M 130 185 Q 150 175 170 185" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />

    <g transform="translate(95, 60)">
      <path d="M 0 0 L -20 -15 L -10 5 Z" fill="#FF1493" />
      <path d="M 0 0 L 20 -15 L 10 5 Z" fill="#FF1493" />
      <circle cx="0" cy="-3" r="5" fill="#FFD700" />
    </g>
  </svg>
)

const MintThinking = (
  <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="mt-face" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="100%" stopColor="#F5C5B0" />
      </radialGradient>
      <linearGradient id="mt-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="mt-hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
    </defs>

    <ellipse cx="150" cy="440" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />
    <rect x="120" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <rect x="155" y="350" width="25" height="90" rx="10" fill="#FFE5F1" />
    <ellipse cx="132" cy="440" rx="22" ry="10" fill="#8B4513" />
    <ellipse cx="167" cy="440" rx="22" ry="10" fill="#8B4513" />

    <path d="M 90 220 L 70 380 Q 70 400 90 400 L 210 400 Q 230 400 230 380 L 210 220 Z" fill="url(#mt-dress)" />
    <rect x="90" y="220" width="120" height="15" fill="#FF1493" />

    {/* One arm on chin (thinking pose) */}
    <g transform="rotate(-90 65 280)">
      <rect x="50" y="220" width="30" height="100" rx="15" fill="#FFE5D9" />
      <circle cx="65" cy="220" r="16" fill="#FFE5D9" />
    </g>
    <rect x="210" y="225" width="30" height="120" rx="15" fill="#FFE5D9" transform="rotate(5 225 285)" />

    <ellipse cx="150" cy="120" rx="100" ry="110" fill="url(#mt-hair)" />
    <ellipse cx="150" cy="125" rx="75" ry="85" fill="url(#mt-face)" />
    <path d="M 80 90 Q 100 50 150 50 Q 200 50 220 90 L 215 130 L 195 110 L 175 135 L 155 105 L 135 130 L 115 105 L 95 130 L 80 110 Z" fill="url(#mt-hair)" />
    <path d="M 80 100 Q 70 200 90 250 L 100 250 Q 90 200 100 110 Z" fill="url(#mt-hair)" />
    <path d="M 220 100 Q 230 200 210 250 L 200 250 Q 210 200 200 110 Z" fill="url(#mt-hair)" />

    {/* Thinking eyes - looking up */}
    <circle cx="120" cy="125" r="15" fill="white" stroke="#2C1810" strokeWidth="2" />
    <circle cx="180" cy="125" r="15" fill="white" stroke="#2C1810" strokeWidth="2" />
    <circle cx="122" cy="118" r="7" fill="#4A90E2" />
    <circle cx="182" cy="118" r="7" fill="#4A90E2" />
    <circle cx="122" cy="118" r="4" fill="#000" />
    <circle cx="182" cy="118" r="4" fill="#000" />

    {/* Mouth - small line */}
    <line x1="140" y1="180" x2="160" y2="180" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />

    {/* Thought bubble */}
    <g transform="translate(230, 50)">
      <circle cx="0" cy="0" r="25" fill="white" opacity="0.95" stroke="#2C1810" strokeWidth="1.5" />
      <circle cx="-30" cy="30" r="6" fill="white" opacity="0.95" />
      <circle cx="-40" cy="45" r="4" fill="white" opacity="0.95" />
      <text x="0" y="8" fontSize="28" fill="#FF6B9D" textAnchor="middle">?</text>
    </g>

    <g transform="translate(95, 60)">
      <path d="M 0 0 L -20 -15 L -10 5 Z" fill="#FF1493" />
      <path d="M 0 0 L 20 -15 L 10 5 Z" fill="#FF1493" />
      <circle cx="0" cy="-3" r="5" fill="#FFD700" />
    </g>
  </svg>
)

// ============== PIGGY ==============
const PiggyHappy = (
  <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="pg-body" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#FFC5DA" />
        <stop offset="60%" stopColor="#FF9EBB" />
        <stop offset="100%" stopColor="#C44569" />
      </radialGradient>
      <radialGradient id="pg-snout" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#FFD4E5" />
        <stop offset="100%" stopColor="#FF9EBB" />
      </radialGradient>
      <filter id="pgGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Shadow */}
    <ellipse cx="160" cy="270" rx="120" ry="8" fill="rgba(0,0,0,0.3)" />

    {/* Legs */}
    <ellipse cx="80" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="130" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="190" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="240" cy="265" rx="20" ry="10" fill="#C44569" />

    {/* Body */}
    <ellipse cx="160" cy="170" rx="130" ry="80" fill="url(#pg-body)" />
    {/* Body highlight */}
    <ellipse cx="130" cy="140" rx="60" ry="30" fill="white" opacity="0.3" />

    {/* Coin slot */}
    <rect x="135" y="100" width="50" height="6" rx="3" fill="#2C1810" />

    {/* Tail */}
    <path d="M 280 160 Q 300 150 295 170 Q 305 185 290 185 Q 285 175 280 185" stroke="#C44569" strokeWidth="6" fill="none" strokeLinecap="round" />

    {/* Head */}
    <ellipse cx="160" cy="100" rx="90" ry="75" fill="url(#pg-body)" />

    {/* Ears */}
    <path d="M 90 60 L 75 25 L 110 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />
    <path d="M 230 60 L 245 25 L 210 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />

    {/* Snout */}
    <ellipse cx="160" cy="115" rx="50" ry="30" fill="url(#pg-snout)" stroke="#C44569" strokeWidth="2" />
    <ellipse cx="148" cy="113" rx="5" ry="8" fill="#2C1810" />
    <ellipse cx="172" cy="113" rx="5" ry="8" fill="#2C1810" />

    {/* Eyes happy */}
    <path d="M 120 90 Q 128 82 136 90" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 184 90 Q 192 82 200 90" stroke="#2C1810" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Cheeks */}
    <circle cx="115" cy="110" r="8" fill="#FF6B9D" opacity="0.4" />
    <circle cx="205" cy="110" r="8" fill="#FF6B9D" opacity="0.4" />

    {/* Mouth */}
    <path d="M 145 140 Q 160 152 175 140" stroke="#2C1810" strokeWidth="2" fill="#C44569" strokeLinecap="round" />

    {/* Gold coin near piggy */}
    <g transform="translate(50, 200)">
      <circle r="15" fill="#FFD700" stroke="#D4A574" strokeWidth="2" filter="url(#pgGlow)" />
      <text y="5" fontSize="14" fill="#8B4513" textAnchor="middle" fontWeight="bold">$</text>
    </g>
  </svg>
)

const PiggyWise = (
  <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="pw-body" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#FFC5DA" />
        <stop offset="100%" stopColor="#C44569" />
      </radialGradient>
    </defs>

    <ellipse cx="160" cy="270" rx="120" ry="8" fill="rgba(0,0,0,0.3)" />
    <ellipse cx="80" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="130" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="190" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="240" cy="265" rx="20" ry="10" fill="#C44569" />

    <ellipse cx="160" cy="170" rx="130" ry="80" fill="url(#pw-body)" />
    <rect x="135" y="100" width="50" height="6" rx="3" fill="#2C1810" />

    {/* Tail curly */}
    <path d="M 280 160 Q 305 150 295 175 Q 310 195 285 190" stroke="#C44569" strokeWidth="6" fill="none" strokeLinecap="round" />

    <ellipse cx="160" cy="100" rx="90" ry="75" fill="url(#pw-body)" />

    <path d="M 90 60 L 75 25 L 110 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />
    <path d="M 230 60 L 245 25 L 210 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />

    <ellipse cx="160" cy="115" rx="50" ry="30" fill="#FFD4E5" stroke="#C44569" strokeWidth="2" />
    <ellipse cx="148" cy="113" rx="5" ry="8" fill="#2C1810" />
    <ellipse cx="172" cy="113" rx="5" ry="8" fill="#2C1810" />

    {/* Glasses */}
    <g>
      <circle cx="125" cy="95" r="20" fill="none" stroke="#2C1810" strokeWidth="3" />
      <circle cx="195" cy="95" r="20" fill="none" stroke="#2C1810" strokeWidth="3" />
      <line x1="145" y1="95" x2="175" y2="95" stroke="#2C1810" strokeWidth="3" />
      {/* Glass shine */}
      <ellipse cx="118" cy="88" rx="6" ry="3" fill="white" opacity="0.6" />
      <ellipse cx="188" cy="88" rx="6" ry="3" fill="white" opacity="0.6" />
      {/* Eyes inside */}
      <circle cx="125" cy="95" r="8" fill="#2C1810" />
      <circle cx="195" cy="95" r="8" fill="#2C1810" />
      <circle cx="127" cy="92" r="2" fill="white" />
      <circle cx="197" cy="92" r="2" fill="white" />
    </g>

    {/* Wise mouth */}
    <path d="M 145 145 Q 160 152 175 145" stroke="#2C1810" strokeWidth="2" fill="#C44569" strokeLinecap="round" />

    {/* Graduation cap on head */}
    <g transform="translate(160, 25)">
      <rect x="-50" y="0" width="100" height="15" fill="#1a1a1a" />
      <path d="M -60 0 L 0 -25 L 60 0 Z" fill="#1a1a1a" />
      <rect x="-3" y="-40" width="6" height="20" fill="#FFD700" />
      <circle cx="0" cy="-45" r="6" fill="#FFD700" />
    </g>
  </svg>
)

const PiggyMagical = (
  <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="pm-body" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#FFC5DA" />
        <stop offset="100%" stopColor="#C44569" />
      </radialGradient>
      <filter id="pmGlow">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>

    <ellipse cx="160" cy="270" rx="120" ry="8" fill="rgba(0,0,0,0.3)" />
    <ellipse cx="80" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="130" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="190" cy="265" rx="20" ry="10" fill="#C44569" />
    <ellipse cx="240" cy="265" rx="20" ry="10" fill="#C44569" />

    {/* Magic glow around body */}
    <ellipse cx="160" cy="170" rx="140" ry="90" fill="#FFD93D" opacity="0.3" filter="url(#pmGlow)">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
    </ellipse>

    <ellipse cx="160" cy="170" rx="130" ry="80" fill="url(#pm-body)" />
    <rect x="135" y="100" width="50" height="6" rx="3" fill="#2C1810" />

    <ellipse cx="160" cy="100" rx="90" ry="75" fill="url(#pm-body)" />

    <path d="M 90 60 L 75 25 L 110 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />
    <path d="M 230 60 L 245 25 L 210 50 Z" fill="#FF9EBB" stroke="#C44569" strokeWidth="2" />

    <ellipse cx="160" cy="115" rx="50" ry="30" fill="#FFD4E5" stroke="#C44569" strokeWidth="2" />
    <ellipse cx="148" cy="113" rx="5" ry="8" fill="#2C1810" />
    <ellipse cx="172" cy="113" rx="5" ry="8" fill="#2C1810" />

    {/* Star eyes */}
    <text x="115" y="105" fontSize="24" fill="#FFD700">⭐</text>
    <text x="185" y="105" fontSize="24" fill="#FFD700">⭐</text>

    {/* Magical smile */}
    <path d="M 140 145 Q 160 160 180 145" stroke="#2C1810" strokeWidth="2" fill="#FF6B9D" strokeLinecap="round" />

    {/* Sparkles */}
    <text x="30" y="50" fontSize="24" fill="#FFD700">✨</text>
    <text x="280" y="60" fontSize="24" fill="#FFD700">✨</text>
    <text x="160" y="20" fontSize="20" fill="#FFD700">⭐</text>
    <text x="50" y="180" fontSize="20" fill="#FFD700">✨</text>
    <text x="270" y="180" fontSize="20" fill="#FFD700">✨</text>
  </svg>
)

// ============== WISE OWL ==============
const OwlWise = (
  <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="owl-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A08968" />
        <stop offset="60%" stopColor="#8B7355" />
        <stop offset="100%" stopColor="#5C4A35" />
      </linearGradient>
      <radialGradient id="owl-belly" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#C4A88B" />
        <stop offset="100%" stopColor="#8B7355" />
      </radialGradient>
      <radialGradient id="owl-eye" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F5DC" />
      </radialGradient>
      <linearGradient id="owl-cap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2C1810" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
    </defs>

    <ellipse cx="150" cy="370" rx="100" ry="8" fill="rgba(0,0,0,0.3)" />

    {/* Feet */}
    <ellipse cx="110" cy="355" rx="20" ry="10" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />
    <ellipse cx="190" cy="355" rx="20" ry="10" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />

    {/* Wings */}
    <ellipse cx="50" cy="200" rx="25" ry="100" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" transform="rotate(-5 50 200)" />
    <ellipse cx="250" cy="200" rx="25" ry="100" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" transform="rotate(5 250 200)" />

    {/* Body */}
    <ellipse cx="150" cy="220" rx="100" ry="130" fill="url(#owl-body)" />
    {/* Belly */}
    <ellipse cx="150" cy="240" rx="65" ry="90" fill="url(#owl-belly)" />
    {/* Feather lines */}
    {[180, 210, 240, 270].map((y, i) => (
      <path key={i} d={`M 100 ${y} Q 150 ${y - 5} 200 ${y}`} stroke="#5C4A35" strokeWidth="2" fill="none" opacity="0.5" />
    ))}

    {/* Head */}
    <ellipse cx="150" cy="110" rx="90" ry="85" fill="url(#owl-body)" />

    {/* Ear tufts */}
    <path d="M 80 75 L 70 30 L 100 60 Z" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />
    <path d="M 220 75 L 230 30 L 200 60 Z" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />

    {/* Eye discs */}
    <circle cx="115" cy="110" r="32" fill="url(#owl-eye)" stroke="#5C4A35" strokeWidth="2" />
    <circle cx="185" cy="110" r="32" fill="url(#owl-eye)" stroke="#5C4A35" strokeWidth="2" />

    {/* Eyes */}
    <circle cx="115" cy="110" r="15" fill="#1a1a1a" />
    <circle cx="185" cy="110" r="15" fill="#1a1a1a" />
    <circle cx="118" cy="105" r="5" fill="white" />
    <circle cx="188" cy="105" r="5" fill="white" />

    {/* Eyebrows */}
    <path d="M 90 85 Q 115 75 140 90" stroke="#3E2D1F" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 160 90 Q 185 75 210 85" stroke="#3E2D1F" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Beak */}
    <path d="M 140 145 L 150 165 L 160 145 Z" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />

    {/* Graduation cap */}
    <g transform="translate(150, 25)">
      <rect x="-55" y="0" width="110" height="15" fill="url(#owl-cap)" />
      <path d="M -65 0 L 0 -30 L 65 0 Z" fill="url(#owl-cap)" />
      <rect x="-4" y="-50" width="8" height="25" fill="#FFD700" />
      <circle cx="0" cy="-55" r="8" fill="#FFD700" stroke="#D4A574" strokeWidth="1" />
    </g>
  </svg>
)

const OwlTeaching = (
  <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ot-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A08968" />
        <stop offset="100%" stopColor="#5C4A35" />
      </linearGradient>
    </defs>

    <ellipse cx="150" cy="370" rx="100" ry="8" fill="rgba(0,0,0,0.3)" />
    <ellipse cx="110" cy="355" rx="20" ry="10" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />
    <ellipse cx="190" cy="355" rx="20" ry="10" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />

    {/* Wing pointing */}
    <g transform="rotate(-30 50 180)">
      <ellipse cx="50" cy="200" rx="25" ry="100" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />
    </g>
    <ellipse cx="250" cy="200" rx="25" ry="100" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />

    {/* Pointer stick */}
    <line x1="20" y1="130" x2="80" y2="170" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
    <circle cx="15" cy="125" r="10" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />

    <ellipse cx="150" cy="220" rx="100" ry="130" fill="url(#ot-body)" />
    <ellipse cx="150" cy="240" rx="65" ry="90" fill="#C4A88B" />

    <ellipse cx="150" cy="110" rx="90" ry="85" fill="url(#ot-body)" />

    <path d="M 80 75 L 70 30 L 100 60 Z" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />
    <path d="M 220 75 L 230 30 L 200 60 Z" fill="#6B5340" stroke="#3E2D1F" strokeWidth="2" />

    <circle cx="115" cy="110" r="32" fill="#F5F5DC" stroke="#5C4A35" strokeWidth="2" />
    <circle cx="185" cy="110" r="32" fill="#F5F5DC" stroke="#5C4A35" strokeWidth="2" />

    <circle cx="115" cy="110" r="15" fill="#1a1a1a" />
    <circle cx="185" cy="110" r="15" fill="#1a1a1a" />
    <circle cx="118" cy="105" r="5" fill="white" />
    <circle cx="188" cy="105" r="5" fill="white" />

    {/* Open beak (teaching) */}
    <path d="M 135 140 L 150 170 L 165 140 Z" fill="#FFD700" stroke="#D4A574" strokeWidth="2" />
    <path d="M 140 150 L 150 170 L 160 150 Z" fill="#2C1810" />

    <g transform="translate(150, 25)">
      <rect x="-55" y="0" width="110" height="15" fill="#1a1a1a" />
      <path d="M -65 0 L 0 -30 L 65 0 Z" fill="#1a1a1a" />
      <rect x="-4" y="-50" width="8" height="25" fill="#FFD700" />
      <circle cx="0" cy="-55" r="8" fill="#FFD700" />
    </g>
  </svg>
)

// ============== Sprite Map ==============
// Helper tạo <img> từ file thật
const ImageSprite = (src, alt) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-contain"
    style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}
  />
)

export const SPRITES = {
  mint: {
    happy: MintHappy,
    curious: MintCurious,
    excited: MintExcited,
    sad: MintSad,
    thinking: MintThinking,
  },
  piggy: {
    happy: PiggyHappy,
    wise: PiggyWise,
    magical: PiggyMagical,
  },
  wiseOwl: {
    wise: OwlWise,
    teaching: OwlTeaching,
  },
  // ============== NHÂN VẬT THẰNG BỜM ==============
  // Ưu tiên PNG (đã tách nền), fallback JPG nếu PNG chưa có
  bom: {
    // 🆕 Portrait chân dung - dùng cho scene giới thiệu nhân vật (full body)
    // Dùng bom-neutral.png (Bờm đứng thẳng, áo nâu, 2 tay buông) thay vì happy
    portrait: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm - chân dung'),
    happy: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm vui'),
    thinking: ImageSprite('/images/thang-bom/characters/bom/bom-thinking.png', 'Bờm suy nghĩ'),
    excited: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm hào hứng'),
    neutral: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm bình thường'),
    worried: ImageSprite('/images/thang-bom/characters/bom/bom-thinking.png', 'Bờm lo lắng'),
    sitSmile: ImageSprite('/images/thang-bom/characters/bom/bom-standing-neutral.png', 'Bờm - ngồi chống cằm vui nhẹ'), // 🆕 Expression riêng để dùng pose ngồi cười

    // ============ Các pose khác ============
    idle: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm - pose idle'),
    reachOut: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm - vươn tay'),
    grabMoney: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm - cầm tiền'),
    countMoney: ImageSprite('/images/thang-bom/characters/bom/bom-counting.png', 'Bờm - đếm tiền'),  // 🆕 Cảnh đếm vàng
    standing: ImageSprite('/images/thang-bom/characters/bom/bom-standing-neutral.png', 'Bờm - ngồi chống cằm vui nhẹ'), // 🆕 Pose ngồi chống cằm mỉm cười (sit & smile)
    celebrate: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm - ăn mừng'),
    shocked: ImageSprite('/images/thang-bom/characters/bom/bom-thinking.png', 'Bờm - sốc'),
    bowed: ImageSprite('/images/thang-bom/characters/bom/bom-thinking.png', 'Bờm - cúi đầu'),
    leanForward: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm - nghiêng tới'),
    leanBack: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm - nghiêng lùi'),
    offerMoney: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm - đưa tiền'),
    proud: ImageSprite('/images/thang-bom/characters/bom/bom-happy.png', 'Bờm - tự hào'),
    explain: ImageSprite('/images/thang-bom/characters/bom/bom-neutral.png', 'Bờm - giải thích'),
  },
  // ============== NHÂN VẬT PHÚ ÔNG ==============
  phuong: {
    portrait: ImageSprite('/images/thang-bom/characters/phuong/phuong-neutral.png', 'Phú Ông - chân dung'),
    neutral: ImageSprite('/images/thang-bom/characters/phuong/phuong-neutral.png', 'Phú Ông bình thường'),
    smug: ImageSprite('/images/thang-bom/characters/phuong/phuong-smug.png', 'Phú Ông tự mãn'),
    'trap-smug': ImageSprite('/images/thang-bom/characters/phuong/phuong-trap-smug.png', 'Phú Ông - xiên bẫy Bờm xong, đắc ý'),
    sad: ImageSprite('/images/thang-bom/characters/phuong/phuong-sad.png', 'Phú Ông buồn/ngại'),
    happy: ImageSprite('/images/thang-bom/characters/phuong/phuong-smug.png', 'Phú Ông vui'),
    proud: ImageSprite('/images/thang-bom/characters/phuong/phuong-smug.png', 'Phú Ông kiêu ngạo'),
    angry: ImageSprite('/images/thang-bom/characters/phuong/phuong-sad.png', 'Phú Ông giận'),
  },
  // ============== NHÂN VẬT HEO HEO ==============
  piggy: {
    happy: ImageSprite('/images/thang-bom/characters/heo-heo/heo-heo-proud.png', 'Heo Heo'),
  },
  // ============== NHÂN VẬT MINT ==============
  mint: {
    curious: ImageSprite('/images/thang-bom/characters/mint-curious.png', 'Mint dẫn chuyện'),
  },
}

export function getSprite(characterId, expression = 'happy') {
  return SPRITES[characterId]?.[expression] || SPRITES.mint.happy
}
