// Visual Novel Backgrounds - SVG chuyên nghiệp với gradients + filters phức tạp
// Detail cao nhưng ổn định, không crash

// ============== VILLAGE ==============
const VillageScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      {/* Sky gradient sunset */}
      <linearGradient id="vSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2C3E50" />
        <stop offset="30%" stopColor="#5B4B8A" />
        <stop offset="60%" stopColor="#E67E22" />
        <stop offset="100%" stopColor="#FDC97A" />
      </linearGradient>
      {/* Sun radial */}
      <radialGradient id="vSun" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFF5E1" />
        <stop offset="50%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
      </radialGradient>
      {/* Ground gradient */}
      <linearGradient id="vGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7FA86B" />
        <stop offset="50%" stopColor="#5C7C3E" />
        <stop offset="100%" stopColor="#2A3A1F" />
      </linearGradient>
      {/* Mountain gradient */}
      <linearGradient id="vMt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6B4F8C" />
        <stop offset="100%" stopColor="#3E2D5C" />
      </linearGradient>
      {/* Wall gradient */}
      <linearGradient id="vWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A0826D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
      {/* Roof gradient */}
      <linearGradient id="vRoof" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8B2842" />
        <stop offset="100%" stopColor="#5C1828" />
      </linearGradient>
      {/* Glow filter */}
      <filter id="vGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="1200" height="800" fill="url(#vSky)" />

    {/* Sun with halo */}
    <circle cx="850" cy="280" r="180" fill="url(#vSun)" opacity="0.6" filter="url(#vGlow)" />
    <circle cx="850" cy="280" r="60" fill="#FFE5B4" />
    <circle cx="850" cy="280" r="40" fill="#FFFFFF" opacity="0.8" />

    {/* Clouds - layers */}
    <g opacity="0.7">
      <ellipse cx="200" cy="150" rx="80" ry="20" fill="#FFE5D9" filter="url(#vGlow)" />
      <ellipse cx="250" cy="140" rx="60" ry="18" fill="#FFFFFF" />
      <ellipse cx="500" cy="200" rx="100" ry="22" fill="#FFE5D9" filter="url(#vGlow)" />
      <ellipse cx="550" cy="190" rx="70" ry="20" fill="#FFFFFF" />
    </g>

    {/* Far mountains layer */}
    <path d="M 0 450 L 0 350 L 150 280 L 300 340 L 450 270 L 600 320 L 750 280 L 900 310 L 1050 270 L 1200 300 L 1200 450 Z" fill="url(#vMt)" opacity="0.5" />

    {/* Mid mountains */}
    <path d="M 0 500 L 0 380 L 200 310 L 400 360 L 580 290 L 780 340 L 980 300 L 1200 340 L 1200 500 Z" fill="url(#vMt)" opacity="0.75" />

    {/* Hills */}
    <path d="M 0 550 Q 300 500 600 530 Q 900 510 1200 540 L 1200 600 L 0 600 Z" fill="#4A6B4A" opacity="0.8" />

    {/* Ground */}
    <rect y="550" width="1200" height="250" fill="url(#vGround)" />

    {/* Trees silhouette */}
    <g>
      {[80, 200, 350, 950, 1100].map((x, i) => (
        <g key={i} transform={`translate(${x}, 480)`}>
          <rect x="-3" y="0" width="6" height="80" fill="#1a2415" />
          <ellipse cx="0" cy="0" rx="30" ry="40" fill="#2A3A2C" />
          <ellipse cx="-10" cy="-5" rx="20" ry="25" fill="#3E4E3E" opacity="0.7" />
        </g>
      ))}
    </g>

    {/* House 1 */}
    <g transform="translate(150, 460)">
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="65" ry="8" fill="rgba(0,0,0,0.3)" />
      {/* Wall */}
      <rect x="5" y="20" width="110" height="85" fill="url(#vWall)" />
      {/* Wall texture */}
      <line x1="5" y1="40" x2="115" y2="40" stroke="#000" strokeWidth="0.5" opacity="0.3" />
      <line x1="5" y1="60" x2="115" y2="60" stroke="#000" strokeWidth="0.5" opacity="0.3" />
      <line x1="5" y1="80" x2="115" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.3" />
      {/* Roof */}
      <path d="M -10 20 L 60 -25 L 130 20 Z" fill="url(#vRoof)" />
      <path d="M -10 20 L 60 -25 L 130 20 Z" fill="none" stroke="#3E1820" strokeWidth="1" />
      {/* Door */}
      <rect x="45" y="55" width="30" height="50" fill="#3E2417" rx="15" />
      <circle cx="68" cy="80" r="2" fill="#FFD700" />
      {/* Windows glowing */}
      <rect x="15" y="40" width="20" height="20" fill="#FFD93D" stroke="#5C3317" strokeWidth="2" filter="url(#vGlow)" />
      <rect x="85" y="40" width="20" height="20" fill="#FFD93D" stroke="#5C3317" strokeWidth="2" filter="url(#vGlow)" />
      {/* Chimney */}
      <rect x="85" y="-10" width="10" height="20" fill="#3E2417" />
    </g>

    {/* House 2 - bigger */}
    <g transform="translate(800, 440)">
      <ellipse cx="70" cy="125" rx="75" ry="10" fill="rgba(0,0,0,0.3)" />
      <rect x="10" y="30" width="120" height="95" fill="#8B6F47" />
      <path d="M -5 30 L 70 -20 L 145 30 Z" fill="#6B3410" />
      <rect x="50" y="70" width="35" height="55" fill="#3E2417" rx="17" />
      <circle cx="78" cy="98" r="2.5" fill="#FFD700" />
      <rect x="20" y="50" width="22" height="22" fill="#FFD93D" stroke="#5C3317" strokeWidth="2" filter="url(#vGlow)" />
      <rect x="100" y="50" width="22" height="22" fill="#FFD93D" stroke="#5C3317" strokeWidth="2" filter="url(#vGlow)" />
    </g>

    {/* Path winding */}
    <path d="M 580 800 Q 600 700 620 600 Q 640 550 650 500" stroke="#D4A574" strokeWidth="50" fill="none" opacity="0.5" />
    <path d="M 580 800 Q 600 700 620 600 Q 640 550 650 500" stroke="#E8C39E" strokeWidth="40" fill="none" />

    {/* Flowers */}
    <g>
      {[
        { x: 100, y: 700, c: '#FF6B9D' },
        { x: 150, y: 720, c: '#FFD93D' },
        { x: 200, y: 700, c: '#A78BFA' },
        { x: 950, y: 720, c: '#FF6B9D' },
        { x: 1000, y: 700, c: '#FFD93D' },
        { x: 1050, y: 720, c: '#FF6B6B' },
        { x: 1100, y: 700, c: '#A78BFA' },
        { x: 400, y: 750, c: '#FFD93D' },
        { x: 700, y: 740, c: '#FF6B9D' },
      ].map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y})`}>
          <circle r="6" fill={f.c} filter="url(#vGlow)" />
          <circle r="2" fill="#FFD93D" />
        </g>
      ))}
    </g>

    {/* Light particles */}
    <g opacity="0.6">
      {Array.from({ length: 15 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 79 + 30) % 1200}
          cy={(i * 53 + 50) % 500}
          r={i % 2 === 0 ? 1.5 : 1}
          fill="#FFE5B4"
        >
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
        </circle>
      ))}
    </g>

    {/* Birds */}
    <g stroke="#2C1810" strokeWidth="2" fill="none">
      <path d="M 300 180 Q 305 175 310 180 Q 315 175 320 180" />
      <path d="M 700 150 Q 705 145 710 150 Q 715 145 720 150" />
      <path d="M 950 220 Q 955 215 960 220 Q 965 215 970 220" />
    </g>
  </svg>
)

// ============== SHOP ==============
const ShopScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <linearGradient id="sSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#87CEEB" />
        <stop offset="60%" stopColor="#FFE5B4" />
        <stop offset="100%" stopColor="#FFB4A2" />
      </linearGradient>
      <radialGradient id="sSun" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FCD5CE" />
        <stop offset="100%" stopColor="#E89B95" />
      </linearGradient>
      <linearGradient id="sRoof" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#C44569" />
      </linearGradient>
      <linearGradient id="sGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D4A574" />
        <stop offset="100%" stopColor="#8B6F47" />
      </linearGradient>
      <linearGradient id="sSign" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFE5B4" />
      </linearGradient>
      <radialGradient id="sCandy" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#FFA500" />
      </radialGradient>
      <filter id="sGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="1200" height="800" fill="url(#sSky)" />

    {/* Sun */}
    <circle cx="1050" cy="150" r="120" fill="url(#sSun)" />
    <circle cx="1050" cy="150" r="50" fill="#FFFFFF" />

    {/* Clouds */}
    <g opacity="0.85">
      <ellipse cx="150" cy="120" rx="80" ry="25" fill="#FFFFFF" />
      <ellipse cx="190" cy="110" rx="60" ry="22" fill="#FFFFFF" />
      <ellipse cx="500" cy="160" rx="90" ry="28" fill="#FFFFFF" />
      <ellipse cx="540" cy="150" rx="70" ry="25" fill="#FFFFFF" />
    </g>

    {/* Ground */}
    <rect y="600" width="1200" height="200" fill="url(#sGround)" />
    {/* Cobblestone pattern */}
    <g opacity="0.4">
      {Array.from({ length: 80 }).map((_, i) => {
        const row = Math.floor(i / 10)
        const col = i % 10
        return (
          <ellipse
            key={i}
            cx={col * 120 + 60 + (row % 2 === 0 ? 0 : 60)}
            cy={650 + row * 25}
            rx="55" ry="12"
            fill="#6B5437"
          />
        )
      })}
    </g>

    {/* Building shadow */}
    <ellipse cx="600" cy="680" rx="400" ry="30" fill="rgba(0,0,0,0.3)" filter="url(#sGlow)" />

    {/* Shop building */}
    <g transform="translate(200, 180)">
      {/* Main wall */}
      <rect x="0" y="80" width="800" height="340" fill="url(#sWall)" stroke="#C44569" strokeWidth="3" />

      {/* Wall texture lines */}
      <g opacity="0.15" stroke="#8B2842" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0" y1={100 + i * 32} x2="800" y2={100 + i * 32} />
        ))}
      </g>

      {/* Big sign */}
      <rect x="250" y="0" width="300" height="80" rx="10" fill="url(#sSign)" stroke="#C44569" strokeWidth="4" />
      <text x="400" y="55" fontSize="38" fill="#C44569" textAnchor="middle" fontWeight="bold" fontFamily="Georgia">🍬 KẸO NGỌT 🍭</text>

      {/* Awning stripes */}
      <g>
        <rect x="-20" y="80" width="840" height="60" fill="#FF6B9D" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={-20 + i * 84} y="80" width="42" height="60" fill={i % 2 === 0 ? '#FFFFFF' : 'transparent'} opacity={i % 2 === 0 ? 1 : 0} />
        ))}
        {/* Scalloped bottom */}
        <path d="M -20 140 Q 30 160 80 140 Q 130 160 180 140 Q 230 160 280 140 Q 330 160 380 140 Q 430 160 480 140 Q 530 160 580 140 Q 630 160 680 140 Q 730 160 780 140 Q 800 145 820 140 L 820 140 L -20 140 Z" fill="#FF6B9D" />
      </g>

      {/* Display windows */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${50 + i * 250}, 180)`}>
          <rect width="150" height="140" fill="#FFD93D" stroke="#8B4513" strokeWidth="4" rx="4" opacity="0.85" />
          <rect width="150" height="140" fill="none" stroke="#8B4513" strokeWidth="4" rx="4" />
          {/* Window frame */}
          <line x1="75" y1="0" x2="75" y2="140" stroke="#8B4513" strokeWidth="2" />
          <line x1="0" y1="70" x2="150" y2="70" stroke="#8B4513" strokeWidth="2" />
          {/* Candies inside */}
          {[
            { x: 30, y: 30, c: '#FF6B9D' },
            { x: 100, y: 35, c: '#A78BFA' },
            { x: 60, y: 100, c: '#6BCB77' },
            { x: 110, y: 105, c: '#FFD93D' },
          ].map((candy, j) => (
            <circle key={j} cx={candy.x} cy={candy.y} r="10" fill={candy.c} filter="url(#sGlow)">
              <animate attributeName="r" values="10;12;10" dur={`${2 + j * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      ))}

      {/* Door */}
      <g transform="translate(360, 270)">
        <rect width="80" height="150" fill="#5C3317" rx="40" />
        <rect x="15" y="10" width="50" height="70" fill="#87CEEB" rx="25" />
        <line x1="40" y1="10" x2="40" y2="80" stroke="#2C1810" strokeWidth="2" />
        <line x1="15" y1="45" x2="65" y2="45" stroke="#2C1810" strokeWidth="2" />
        <circle cx="65" cy="100" r="4" fill="#FFD700" filter="url(#sGlow)" />
      </g>

      {/* Roof */}
      <path d="M -20 80 L 400 0 L 820 80 Z" fill="#C44569" />
      <path d="M -20 80 L 400 0 L 820 80 Z" fill="none" stroke="#8B2842" strokeWidth="2" />
    </g>

    {/* Floating candies */}
    <g>
      {['🍬', '🍭', '🍫', '🍩'].map((emoji, i) => (
        <text key={i} x={150 + i * 250} y={600} fontSize="32" opacity="0.8">
          {emoji}
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-200" dur={`${3 + i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + i}s`} repeatCount="indefinite" />
        </text>
      ))}
    </g>
  </svg>
)

// ============== MAGIC GARDEN ==============
const MagicGardenScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <linearGradient id="mgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a0a2e" />
        <stop offset="40%" stopColor="#2a1a5e" />
        <stop offset="70%" stopColor="#5e2c8c" />
        <stop offset="100%" stopColor="#FF6B9D" />
      </linearGradient>
      <radialGradient id="mgMoon" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FFE5B4" />
        <stop offset="100%" stopColor="#FFD93D" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="mgFruit" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#FFA500" />
      </radialGradient>
      <radialGradient id="mgFoliage" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#4A7C2C" />
        <stop offset="70%" stopColor="#2D5016" />
        <stop offset="100%" stopColor="#1a3a0a" />
      </radialGradient>
      <filter id="mgGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="mgBigGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="15" />
      </filter>
    </defs>

    {/* Sky */}
    <rect width="1200" height="800" fill="url(#mgSky)" />

    {/* Aurora */}
    <ellipse cx="600" cy="250" rx="700" ry="100" fill="rgba(102, 252, 241, 0.15)" filter="url(#mgBigGlow)">
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
    </ellipse>
    <ellipse cx="300" cy="180" rx="500" ry="80" fill="rgba(167, 139, 250, 0.2)" filter="url(#mgBigGlow)">
      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="8s" repeatCount="indefinite" />
    </ellipse>

    {/* Stars */}
    <g fill="white">
      {Array.from({ length: 60 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 73 + 13) % 1200}
          cy={(i * 47 + 7) % 350}
          r={i % 3 === 0 ? 1.5 : 1}
        >
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1 + (i % 3)}s`} repeatCount="indefinite" begin={`${(i % 5) * 0.3}s`} />
        </circle>
      ))}
    </g>

    {/* Moon crescent */}
    <g>
      <circle cx="200" cy="150" r="80" fill="url(#mgMoon)" filter="url(#mgGlow)" />
      <circle cx="220" cy="135" r="70" fill="#0a0a2e" />
    </g>

    {/* Mountain silhouette */}
    <path d="M 0 500 L 0 380 Q 200 320 400 360 Q 600 310 800 350 Q 1000 320 1200 360 L 1200 500 Z" fill="#1a1a3e" opacity="0.8" />

    {/* Forest silhouette */}
    <path
      d="M 0 600 L 0 480 L 50 450 L 100 470 L 150 430 L 200 460 L 250 440 L 300 470 L 350 450 L 400 480 L 450 460 L 500 490 L 550 470 L 600 500 L 650 480 L 700 510 L 750 490 L 800 520 L 850 500 L 900 530 L 950 510 L 1000 540 L 1050 520 L 1100 550 L 1150 530 L 1200 550 L 1200 600 Z"
      fill="#0f1f0a"
    />

    {/* Ground */}
    <rect y="600" width="1200" height="200" fill="#0a1a0a" />

    {/* Big magic tree - center */}
    <g transform="translate(600, 580)">
      {/* Trunk shadow */}
      <ellipse cx="0" cy="120" rx="80" ry="10" fill="rgba(0,0,0,0.5)" />
      {/* Trunk */}
      <path d="M -40 100 Q -50 0 -30 -100 L 30 -100 Q 50 0 40 100 Z" fill="#1a0f0a" />
      <path d="M -35 80 Q -40 0 -25 -80 L 0 -80 Q 0 0 0 80 Z" fill="#3E2417" opacity="0.8" />
      <line x1="-30" y1="-50" x2="30" y2="-50" stroke="#1a0f0a" strokeWidth="2" opacity="0.5" />
      <line x1="-25" y1="-20" x2="25" y2="-20" stroke="#1a0f0a" strokeWidth="2" opacity="0.5" />
      <line x1="-30" y1="20" x2="30" y2="20" stroke="#1a0f0a" strokeWidth="2" opacity="0.5" />

      {/* Foliage - layered */}
      <circle cx="0" cy="-180" r="180" fill="url(#mgFoliage)" filter="url(#mgGlow)">
        <animate attributeName="r" values="180;185;180" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="-60" cy="-200" r="100" fill="#3A6420" opacity="0.7" />
      <circle cx="60" cy="-190" r="110" fill="#3A6420" opacity="0.7" />

      {/* Glowing fruits */}
      {[
        { x: -80, y: -200, c: '#FFD93D' },
        { x: 60, y: -220, c: '#FF6B9D' },
        { x: 0, y: -160, c: '#A78BFA' },
        { x: -50, y: -130, c: '#6BCB77' },
        { x: 80, y: -150, c: '#FFD93D' },
        { x: -100, y: -170, c: '#FF6B6B' },
        { x: 90, y: -250, c: '#A78BFA' },
      ].map((fruit, i) => (
        <circle key={i} cx={fruit.x} cy={fruit.y} r="8" fill="url(#mgFruit)" filter="url(#mgGlow)">
          <animate attributeName="r" values="8;10;8" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
        </circle>
      ))}
    </g>

    {/* Side trees */}
    <g transform="translate(200, 600)">
      <ellipse cx="0" cy="100" rx="40" ry="6" fill="rgba(0,0,0,0.5)" />
      <path d="M -20 80 L -25 -40 L 25 -40 L 20 80 Z" fill="#1a0f0a" />
      <circle cx="0" cy="-100" r="100" fill="url(#mgFoliage)" />
      <circle cx="-30" cy="-110" r="20" fill="#FFD93D" filter="url(#mgGlow)">
        <animate attributeName="r" values="20;23;20" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="-90" r="18" fill="#FF6B9D" filter="url(#mgGlow)">
        <animate attributeName="r" values="18;21;18" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>

    <g transform="translate(1000, 590)">
      <ellipse cx="0" cy="110" rx="45" ry="7" fill="rgba(0,0,0,0.5)" />
      <path d="M -22 90 L -28 -50 L 28 -50 L 22 90 Z" fill="#1a0f0a" />
      <circle cx="0" cy="-110" r="110" fill="url(#mgFoliage)" />
      <circle cx="30" cy="-120" r="22" fill="#FFD93D" filter="url(#mgGlow)">
        <animate attributeName="r" values="22;25;22" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="-40" cy="-100" r="20" fill="#A78BFA" filter="url(#mgGlow)">
        <animate attributeName="r" values="20;23;20" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Glowing mushrooms */}
    {[
      { x: 350, y: 720 }, { x: 850, y: 720 }, { x: 500, y: 740 }, { x: 700, y: 730 },
    ].map((m, i) => (
      <g key={i} transform={`translate(${m.x}, ${m.y})`}>
        <ellipse cx="0" cy="20" rx="15" ry="8" fill="#FFE5B4" />
        <path d="M -25 0 Q 0 -25 25 0 Z" fill="#FF6B9D" filter="url(#mgGlow)" />
        <circle cx="-10" cy="-5" r="2" fill="white" />
        <circle cx="8" cy="-3" r="2" fill="white" />
        <circle cx="0" cy="2" r="2" fill="white" />
      </g>
    ))}

    {/* Fireflies */}
    <g fill="#FFD93D">
      {Array.from({ length: 25 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 89 + 50) % 1200}
          cy={300 + (i * 73) % 400}
          r="3"
          filter="url(#mgGlow)"
        >
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" begin={`${(i % 7) * 0.4}s`} />
          <animate attributeName="cy" values={`${300 + (i * 73) % 400};${280 + (i * 73) % 400};${300 + (i * 73) % 400}`} dur={`${4 + (i % 3)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>

    {/* Sparkles */}
    <g fill="#FFD93D">
      {Array.from({ length: 10 }).map((_, i) => (
        <text key={i} x={(i * 137) % 1200} y={(i * 89) % 600 + 100} fontSize="20" opacity="0.7">
          ✨
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur={`${5 + (i % 3)}s`} repeatCount="indefinite" />
        </text>
      ))}
    </g>
  </svg>
)

// ============== BANK ==============
const BankScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="60%" stopColor="#87CEEB" />
        <stop offset="100%" stopColor="#B0E0E6" />
      </linearGradient>
      <linearGradient id="bWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5F5DC" />
        <stop offset="100%" stopColor="#D4D4A8" />
      </linearGradient>
      <linearGradient id="bColumn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E8E8C8" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D4D4A8" />
      </linearGradient>
      <linearGradient id="bPediment" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFE5B4" />
        <stop offset="100%" stopColor="#D4A574" />
      </linearGradient>
      <radialGradient id="bSun" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFD93D" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="bGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A8A878" />
        <stop offset="100%" stopColor="#6B6B45" />
      </linearGradient>
      <filter id="bGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="1200" height="800" fill="url(#bSky)" />

    {/* Sun */}
    <circle cx="1050" cy="150" r="100" fill="url(#bSun)" />
    <circle cx="1050" cy="150" r="40" fill="#FFFFFF" />

    {/* Clouds */}
    <g fill="#FFFFFF" opacity="0.85">
      <ellipse cx="150" cy="120" rx="70" ry="22" />
      <ellipse cx="200" cy="110" rx="55" ry="20" />
      <ellipse cx="600" cy="100" rx="80" ry="25" />
      <ellipse cx="650" cy="90" rx="60" ry="22" />
    </g>

    {/* Ground */}
    <rect y="600" width="1200" height="200" fill="url(#bGround)" />
    {/* Tiles */}
    <g opacity="0.4" stroke="#6B6B45" strokeWidth="1">
      {Array.from({ length: 12 }).map((_, col) =>
        Array.from({ length: 8 }).map((_, row) => (
          <rect key={`${col}-${row}`} x={col * 100} y={600 + row * 25} width="100" height="25" fill="none" />
        ))
      )}
    </g>

    {/* Building shadow */}
    <ellipse cx="600" cy="660" rx="350" ry="20" fill="rgba(0,0,0,0.3)" />

    {/* Steps */}
    <rect x="200" y="640" width="800" height="20" fill="#D4C4A0" />
    <rect x="180" y="660" width="840" height="20" fill="#B8A584" />
    <rect x="160" y="680" width="880" height="15" fill="#9C8A6E" />

    {/* Main wall */}
    <rect x="200" y="300" width="800" height="340" fill="url(#bWall)" stroke="#8B7355" strokeWidth="2" />

    {/* Pediment triangle */}
    <path d="M 180 300 L 600 130 L 1020 300 Z" fill="url(#bPediment)" stroke="#8B4513" strokeWidth="3" />
    <path d="M 180 300 L 600 130 L 1020 300 Z" fill="none" stroke="#5C3317" strokeWidth="2" />

    {/* Dollar symbol in pediment */}
    <circle cx="600" cy="240" r="40" fill="#FFD700" stroke="#8B4513" strokeWidth="3" filter="url(#bGlow)" />
    <text x="600" y="260" fontSize="50" fill="#8B4513" textAnchor="middle" fontWeight="bold">$</text>

    {/* Columns - 6 columns */}
    {[240, 360, 480, 600, 720, 840].map((x, i) => (
      <g key={i}>
        <rect x={x - 15} y="320" width="30" height="320" fill="url(#bColumn)" />
        <rect x={x - 5} y="320" width="10" height="320" fill="#FFFFFF" opacity="0.5" />
        {/* Capital */}
        <rect x={x - 22} y="310" width="44" height="15" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1" />
        {/* Base */}
        <rect x={x - 22} y="635" width="44" height="12" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1" />
      </g>
    ))}

    {/* Sign */}
    <rect x="400" y="370" width="400" height="50" rx="8" fill="#FFFFFF" stroke="#8B4513" strokeWidth="3" filter="url(#bGlow)" />
    <text x="600" y="405" fontSize="26" fill="#8B4513" textAnchor="middle" fontWeight="bold">🏦 NGÂN HÀNG THỎ TRẮNG</text>

    {/* Door */}
    <rect x="540" y="450" width="120" height="190" fill="#5C3317" rx="60" stroke="#2C1810" strokeWidth="2" />
    <rect x="555" y="465" width="90" height="80" fill="#87CEEB" rx="45" />
    <line x1="600" y1="465" x2="600" y2="545" stroke="#2C1810" strokeWidth="2" />
    <line x1="555" y1="505" x2="645" y2="505" stroke="#2C1810" strokeWidth="2" />
    <circle cx="640" cy="555" r="5" fill="#FFD700" filter="url(#bGlow)" />

    {/* Trees */}
    <g transform="translate(60, 460)">
      <rect x="-5" y="60" width="10" height="120" fill="#5C3317" />
      <circle cx="0" cy="60" r="50" fill="#4A7C2C" />
      <circle cx="-15" cy="50" r="30" fill="#5C8C3C" />
      <circle cx="15" cy="55" r="28" fill="#5C8C3C" />
    </g>
    <g transform="translate(1140, 460)">
      <rect x="-5" y="60" width="10" height="120" fill="#5C3317" />
      <circle cx="0" cy="60" r="50" fill="#4A7C2C" />
      <circle cx="-15" cy="50" r="30" fill="#5C8C3C" />
      <circle cx="15" cy="55" r="28" fill="#5C8C3C" />
    </g>
  </svg>
)

// ============== HOME ROOM ==============
const HomeRoomScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <linearGradient id="hWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFE5D9" />
        <stop offset="100%" stopColor="#F5B5B0" />
      </linearGradient>
      <linearGradient id="hFloor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C4A574" />
        <stop offset="100%" stopColor="#8B6F47" />
      </linearGradient>
      <radialGradient id="hWindow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFE5B4" />
        <stop offset="100%" stopColor="#87CEEB" />
      </radialGradient>
      <linearGradient id="hTable" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
      <linearGradient id="hShelf" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#5C3317" />
      </linearGradient>
      <radialGradient id="hCoin" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#D4A574" />
      </radialGradient>
      <radialGradient id="hPiggy" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#FFB3CD" />
        <stop offset="100%" stopColor="#FF6B9D" />
      </radialGradient>
      <filter id="hGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>

    {/* Wall */}
    <rect width="1200" height="600" fill="url(#hWall)" />

    {/* Wallpaper pattern */}
    <g opacity="0.2">
      {Array.from({ length: 40 }).map((_, i) => (
        <circle key={i} cx={(i % 10) * 120 + 60} cy={Math.floor(i / 10) * 150 + 75} r="15" fill="#FFB4A2" />
      ))}
    </g>

    {/* Floor */}
    <rect y="600" width="1200" height="200" fill="url(#hFloor)" />
    {/* Floor planks */}
    <g stroke="#5C3317" strokeWidth="2" opacity="0.4">
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1="0" y1={600 + i * 10} x2="1200" y2={600 + i * 10} />
      ))}
    </g>

    {/* Window with sun light */}
    <g transform="translate(450, 80)">
      {/* Window glow */}
      <ellipse cx="150" cy="100" rx="200" ry="150" fill="rgba(255, 217, 61, 0.3)" filter="url(#hGlow)" />
      {/* Frame */}
      <rect width="300" height="200" fill="url(#hWindow)" stroke="#5C3317" strokeWidth="8" rx="4" />
      {/* Sun */}
      <circle cx="100" cy="80" r="25" fill="#FFD93D" filter="url(#hGlow)" />
      <circle cx="100" cy="80" r="15" fill="#FFFFFF" />
      {/* Cross frame */}
      <line x1="150" y1="0" x2="150" y2="200" stroke="#5C3317" strokeWidth="4" />
      <line x1="0" y1="100" x2="300" y2="100" stroke="#5C3317" strokeWidth="4" />
      {/* Curtains */}
      <path d="M -30 -10 Q -20 50 -30 100 Q -25 150 -30 210 L 0 210 L 0 -10 Z" fill="#C44569" />
      <path d="M 330 -10 Q 320 50 330 100 Q 325 150 330 210 L 300 210 L 300 -10 Z" fill="#C44569" />
    </g>

    {/* Light ray through window */}
    <path d="M 450 280 L 850 800 L 350 800 L 600 280 Z" fill="rgba(255, 217, 61, 0.15)" />

    {/* Shelf with books & piggy */}
    <g transform="translate(120, 380)">
      {/* Shelf */}
      <rect x="-10" y="100" width="320" height="15" fill="url(#hShelf)" />
      <rect x="0" y="115" width="5" height="180" fill="url(#hShelf)" />
      <rect x="295" y="115" width="5" height="180" fill="url(#hShelf)" />

      {/* Books */}
      <rect x="20" y="50" width="20" height="50" fill="#C44569" />
      <rect x="42" y="40" width="20" height="60" fill="#6BCB77" />
      <rect x="64" y="55" width="20" height="45" fill="#FFD93D" />
      <rect x="86" y="45" width="20" height="55" fill="#A78BFA" />
      <rect x="108" y="50" width="20" height="50" fill="#FF6B9D" />

      {/* Piggy bank */}
      <g transform="translate(220, 70)">
        <ellipse cx="0" cy="20" rx="35" ry="22" fill="url(#hPiggy)" stroke="#C44569" strokeWidth="2" />
        <rect x="-10" y="5" width="20" height="3" fill="#2C1810" />
        <circle cx="-12" cy="15" r="3" fill="#2C1810" />
        <circle cx="12" cy="15" r="3" fill="#2C1810" />
        <ellipse cx="20" cy="18" rx="3" ry="2" fill="#C44569" />
        <ellipse cx="0" cy="42" rx="8" ry="4" fill="#FF6B9D" />
        <ellipse cx="-25" cy="42" rx="8" ry="4" fill="#FF6B9D" />
      </g>
    </g>

    {/* Table with coins */}
    <g transform="translate(800, 480)">
      <rect x="0" y="0" width="280" height="20" fill="url(#hTable)" />
      <rect x="0" y="20" width="280" height="200" fill="url(#hTable)" opacity="0.7" />
      <rect x="20" y="20" width="10" height="200" fill="#5C3317" />
      <rect x="250" y="20" width="10" height="200" fill="#5C3317" />

      {/* Coins on table */}
      {[
        { x: 50, y: 5 }, { x: 90, y: 0 }, { x: 130, y: 3 }, { x: 170, y: -2 }, { x: 210, y: 1 },
      ].map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r="15" fill="url(#hCoin)" stroke="#D4A574" strokeWidth="2" filter="url(#hGlow)" />
          <text x={c.x} y={c.y + 5} fontSize="14" fill="#8B4513" textAnchor="middle" fontWeight="bold">¢</text>
        </g>
      ))}
    </g>

    {/* Picture frame */}
    <g transform="translate(950, 100)">
      <rect width="160" height="200" fill="#FFE5B4" stroke="#8B4513" strokeWidth="6" rx="4" />
      <text x="80" y="120" fontSize="60" textAnchor="middle">👨‍👩‍👧</text>
    </g>
  </svg>
)

// ============== TREE (Big old tree) ==============
const TreeScene = (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <defs>
      <linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="50%" stopColor="#87CEEB" />
        <stop offset="100%" stopColor="#FFE5B4" />
      </linearGradient>
      <linearGradient id="tTrunk" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1a0f0a" />
        <stop offset="40%" stopColor="#3E2417" />
        <stop offset="60%" stopColor="#5C3317" />
        <stop offset="100%" stopColor="#1a0f0a" />
      </linearGradient>
      <radialGradient id="tFoliage" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#5C8C3C" />
        <stop offset="60%" stopColor="#2D5016" />
        <stop offset="100%" stopColor="#1a3a0a" />
      </radialGradient>
      <radialGradient id="tSun" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFD93D" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="tGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5C7C3E" />
        <stop offset="100%" stopColor="#2A3A1F" />
      </linearGradient>
      <filter id="tGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="1200" height="800" fill="url(#tSky)" />

    {/* Sun */}
    <circle cx="950" cy="180" r="100" fill="url(#tSun)" />
    <circle cx="950" cy="180" r="40" fill="#FFFFFF" />

    {/* Clouds */}
    <g fill="#FFFFFF" opacity="0.8">
      <ellipse cx="200" cy="120" rx="70" ry="22" />
      <ellipse cx="240" cy="110" rx="50" ry="20" />
      <ellipse cx="500" cy="140" rx="60" ry="20" />
    </g>

    {/* Distant forest */}
    <path d="M 0 480 L 0 380 L 50 360 L 100 380 L 150 340 L 200 370 L 250 350 L 300 380 L 350 360 L 400 390 L 450 370 L 500 400 L 550 380 L 600 410 L 650 390 L 700 420 L 750 400 L 800 430 L 850 410 L 900 440 L 950 420 L 1000 450 L 1050 430 L 1100 460 L 1150 440 L 1200 460 L 1200 600 L 0 600 Z" fill="#2D5016" opacity="0.8" />

    {/* Ground */}
    <rect y="550" width="1200" height="250" fill="url(#tGround)" />

    {/* Light rays */}
    <g opacity="0.25">
      <path d="M 950 220 L 700 800 L 500 800 Z" fill="#FFD93D" filter="url(#tGlow)" />
      <path d="M 800 200 L 500 800 L 300 800 Z" fill="#FFD93D" filter="url(#tGlow)" />
    </g>

    {/* Massive tree */}
    <g transform="translate(600, 600)">
      {/* Trunk shadow */}
      <ellipse cx="0" cy="100" rx="150" ry="15" fill="rgba(0,0,0,0.5)" />

      {/* Trunk */}
      <path d="M -80 100 Q -100 0 -70 -150 Q -50 -250 -20 -300 L 20 -300 Q 50 -250 70 -150 Q 100 0 80 100 Z" fill="url(#tTrunk)" />
      {/* Bark texture */}
      <g stroke="#1a0f0a" strokeWidth="3" fill="none" opacity="0.5">
        <path d="M -60 -50 Q -30 -100 -50 -200" />
        <path d="M 0 0 Q -20 -100 10 -200" />
        <path d="M 50 -50 Q 30 -100 60 -180" />
        <path d="M -30 50 Q -40 0 -20 -100" />
      </g>

      {/* Roots */}
      <path d="M -80 80 Q -150 60 -200 80" stroke="#3E2417" strokeWidth="20" fill="none" />
      <path d="M 80 80 Q 150 60 200 80" stroke="#3E2417" strokeWidth="20" fill="none" />

      {/* Foliage - massive layered */}
      <circle cx="0" cy="-350" r="280" fill="url(#tFoliage)" filter="url(#tGlow)">
        <animate attributeName="r" values="280;285;280" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="-100" cy="-380" r="150" fill="#3A6420" opacity="0.8" />
      <circle cx="100" cy="-370" r="160" fill="#3A6420" opacity="0.8" />
      <circle cx="0" cy="-280" r="200" fill="#4A7C2C" opacity="0.6" />

      {/* Highlight on foliage */}
      <ellipse cx="-50" cy="-400" rx="60" ry="40" fill="#5C8C3C" opacity="0.5" />
    </g>

    {/* Falling leaves */}
    <g>
      {['🍃', '🍃', '🍂', '🍃', '🍂'].map((leaf, i) => (
        <text key={i} x={200 + i * 200} y={50} fontSize="24" opacity="0.7">
          {leaf}
          <animateTransform attributeName="transform" type="translate" values={`0,0; ${100 + i * 50},750`} dur={`${5 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 1}s`} />
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${5 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 1}s`} />
        </text>
      ))}
    </g>

    {/* Small flowers */}
    <g>
      {[
        { x: 100, y: 650, c: '#FF6B9D' },
        { x: 200, y: 670, c: '#FFD93D' },
        { x: 950, y: 660, c: '#A78BFA' },
        { x: 1050, y: 680, c: '#FF6B9D' },
        { x: 1100, y: 670, c: '#FFD93D' },
      ].map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r="8" fill={f.c} filter="url(#tGlow)" />
          <circle cx={f.x} cy={f.y} r="3" fill="#FFD93D" />
        </g>
      ))}
    </g>
  </svg>
)

export const BACKGROUNDS = {
  village: VillageScene,
  shop: ShopScene,
  magicGarden: MagicGardenScene,
  bank: BankScene,
  homeRoom: HomeRoomScene,
  tree: TreeScene,
}

// Map ảnh JPG thực tế từ Gemini - dùng cho truyện Thằng Bờm
// (Tên file đã được đổi theo nội dung thực tế của ảnh, không theo prompt)
const IMAGE_BACKGROUNDS = {
  // Làng quê buổi sáng
  'thangbom-lang-que': '/images/thang-bom/backgrounds/bg-lang-que.jpg',
  // Gốc cây đa (Bờm giấu vàng) - 2 phiên bản
  'thangbom-goc-da': '/images/thang-bom/backgrounds/bg-goc-da.jpg',
  'thangbom-goc-da-empty': '/images/thang-bom/backgrounds/bg-goc-da-empty.jpg', // BG trống, overlay sprite Bờm
  'thangbom-goc-da-bom': '/images/thang-bom/backgrounds/bg-goc-da-bom.jpg', // BG composite có sẵn Bờm
  // Nhà Phú Ông (cổng nhà to giàu có)
  'thangbom-nha-phu-ong': '/images/thang-bom/backgrounds/bg-nha-phu-ong.jpg',
  // Phòng của Phú Ông (nội thất)
  'thangbom-phong-phu-ong': '/images/thang-bom/backgrounds/bg-phong-phu-ong.jpg',
  // Ngoại cảnh sân nhà Bờm buổi chiều - dùng cho cảnh Phú Ông đến dụ dỗ
  'thangbom-nha-bom-hien': '/images/thang-bom/backgrounds/bg-nha-bom-hien.jpg',
  // Ngoại cảnh nhà Bờm + Phú Ông xuất hiện (Narrator b4 - composite, không có sprite)
  'thangbom-nha-bom-phuong-den': '/images/thang-bom/backgrounds/bg-nha-bom-phuong-den.jpg',
  // Nhà Bờm với giấy tờ hợp đồng, bàn ghế - cảnh đếm tiền/đọc hợp đồng
  'thangbom-nha-bom-dem-phi': '/images/thang-bom/backgrounds/bg-phong-bom-hop-dong.png',
  // Cánh đồng lúa rộng
  'thangbom-canh-dong-lua': '/images/thang-bom/backgrounds/bg-canh-dong-lua.jpg',
  // Cánh đồng lúa gặt lúa — Bờm hòa vào BG composite
  'thangbom-canh-dong-giat-lua': '/images/thang-bom/backgrounds/bg-canh-dong-giat-lua.jpg',
  // Cảnh Bờm buồn bã trước nhà trống (ending xấu)
  'thangbom-bom-buon': '/images/thang-bom/backgrounds/bg-bom-buon-nha-trong.jpg',
  // Cảnh Bờm vui vẻ cùng bạn bè (ending tốt)
  'thangbom-bom-vui': '/images/thang-bom/backgrounds/bg-bom-vui-ban-be.jpg',
}

export function getBackground(sceneId) {
  // Nếu có ảnh thật → trả về <img>
  if (sceneId && IMAGE_BACKGROUNDS[sceneId]) {
    return (
      <img
        src={IMAGE_BACKGROUNDS[sceneId]}
        alt={sceneId}
        className="w-full h-full object-cover"
      />
    )
  }
  return BACKGROUNDS[sceneId] || VillageScene
}
