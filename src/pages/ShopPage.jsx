import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShoppingBag, Lock, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CoinDisplay, CupDisplay } from '@/components/game/CurrencyDisplay'
import { useGameStore } from '@/stores/gameStore'
import { cn } from '@/lib/utils'

const SHOP_ITEMS = [
  {
    id: 'theme-mint',
    category: 'coin',
    name: 'Theme Lá Mint',
    description: 'Giao diện xanh mát mắt',
    cost: { coins: 100 },
    icon: '🌿',
    rarity: 'common',
  },
  {
    id: 'theme-sunset',
    category: 'coin',
    name: 'Theme Hoàng Hôn',
    description: 'Màu cam tím lãng mạn',
    cost: { coins: 250 },
    icon: '🌅',
    rarity: 'rare',
  },
  {
    id: 'avatar-panda',
    category: 'coin',
    name: 'Avatar Gấu Trúc',
    description: 'Đáng yêu vô cùng!',
    cost: { coins: 150 },
    icon: '🐼',
    rarity: 'common',
  },
  {
    id: 'avatar-unicorn',
    category: 'coin',
    name: 'Avatar Kỳ Lân',
    description: 'Huyền thoại & thần thánh',
    cost: { coins: 500 },
    icon: '🦄',
    rarity: 'epic',
  },
  {
    id: 'effect-sparkle',
    category: 'coin',
    name: 'Hiệu ứng Lấp Lánh',
    description: 'Mỗi lần đúng câu đều có sao!',
    cost: { coins: 300 },
    icon: '✨',
    rarity: 'rare',
  },
  {
    id: 'avatar-vip',
    category: 'cup',
    name: 'Avatar VIP Độc Quyền',
    description: 'Chỉ dành cho cao thủ!',
    cost: { cups: 3 },
    icon: '👑',
    rarity: 'epic',
    cupReward: true,
  },
  {
    id: 'voucher-shopee',
    category: 'cup',
    name: 'Voucher Shopee 50K',
    description: 'Mua sắm thả ga!',
    cost: { cups: 6 },
    icon: '🛍️',
    rarity: 'legendary',
    cupReward: true,
  },
  {
    id: 'course-pro',
    category: 'cup',
    name: 'Khóa học Tài Chính Pro',
    description: 'Học nâng cao miễn phí',
    cost: { cups: 6 },
    icon: '🎓',
    rarity: 'legendary',
    cupReward: true,
  },
  {
    id: 'software-license',
    category: 'cup',
    name: 'Phần mềm bản quyền',
    description: 'Bộ Office 1 năm',
    cost: { cups: 6 },
    icon: '💻',
    rarity: 'legendary',
    cupReward: true,
  },
]

const RARITY_COLORS = {
  common: 'from-gray-300 to-gray-400',
  rare: 'from-finteen-sky to-blue-500',
  epic: 'from-finteen-purple to-violet-500',
  legendary: 'from-finteen-gold to-orange-500',
}

export function ShopPage() {
  const coins = useGameStore((s) => s.coins)
  const cups = useGameStore((s) => s.cups)
  const ownedItems = useGameStore((s) => s.ownedItems)
  const purchaseItem = useGameStore((s) => s.purchaseItem)
  const [filter, setFilter] = useState('all')

  const filteredItems =
    filter === 'all'
      ? SHOP_ITEMS
      : SHOP_ITEMS.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-3xl lg:text-4xl font-display font-black mb-2">
          Cửa hàng 🛍️
        </h1>
        <p className="text-muted-foreground">
          Dùng xu và Cup để đổi những phần quà cực xịn!
        </p>
      </motion.div>

      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card className="bg-gradient-to-r from-finteen-coral to-finteen-purple text-white border-2 border-white/60 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 right-2 text-6xl animate-bounce-slow">🪙</div>
            <div className="absolute bottom-2 left-2 text-4xl animate-bounce-slow" style={{ animationDelay: '1s' }}>🏆</div>
          </div>
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Số dư của bạn</p>
                <div className="flex items-center gap-4">
                  <CoinDisplay amount={coins} size="md" />
                  <CupDisplay amount={cups} size="md" />
                </div>
              </div>
              <ShoppingBag className="h-12 w-12 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Tất cả', icon: '🛍️' },
          { id: 'coin', label: 'Đổi bằng Xu', icon: '🪙' },
          { id: 'cup', label: 'Đổi bằng Cup', icon: '🏆' },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(tab.id)}
            className={cn(
              'px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all border-2',
              filter === tab.id
                ? 'bg-gradient-to-r from-finteen-coral to-finteen-purple text-white shadow-lg border-white'
                : 'bg-white text-foreground border-white/60 hover:border-primary'
            )}
          >
            {tab.icon} {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {filteredItems.map((item, i) => {
          const isOwned = ownedItems.includes(item.id)
          const canAfford =
            coins >= (item.cost.coins || 0) &&
            cups >= (item.cost.cups || 0)

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Card className={cn(
                'overflow-hidden border-2 border-white/60 relative',
                isOwned && 'opacity-70'
              )}>
                {/* Rarity ribbon */}
                <div className={cn(
                  'absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold text-white',
                  `bg-gradient-to-r ${RARITY_COLORS[item.rarity]}`
                )}>
                  {item.rarity === 'common' && 'Thường'}
                  {item.rarity === 'rare' && 'Hiếm'}
                  {item.rarity === 'epic' && 'Cực Hiếm'}
                  {item.rarity === 'legendary' && 'Huyền Thoại'}
                </div>

                {/* Item icon */}
                <div className={cn(
                  'h-32 flex items-center justify-center text-6xl bg-gradient-to-br',
                  RARITY_COLORS[item.rarity],
                  'opacity-90'
                )}>
                  <span className="animate-bounce-slow">{item.icon}</span>
                </div>

                <CardContent className="p-3">
                  <h4 className="font-bold text-sm mb-1 line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2 min-h-[32px]">
                    {item.description}
                  </p>

                  {/* Cost */}
                  <div className="flex items-center gap-1 mb-2">
                    {item.cost.coins && (
                      <Badge variant="gold" className="!text-xs">
                        🪙 {item.cost.coins}
                      </Badge>
                    )}
                    {item.cost.cups && (
                      <Badge variant="purple" className="!text-xs">
                        🏆 {item.cost.cups}
                      </Badge>
                    )}
                  </div>

                  {/* Action button */}
                  {isOwned ? (
                    <Button size="sm" disabled className="w-full !h-9 text-xs">
                      <Check className="h-3 w-3 mr-1" /> Đã sở hữu
                    </Button>
                  ) : canAfford ? (
                    <Button
                      size="sm"
                      onClick={() => purchaseItem(item.id, item.cost)}
                      className="w-full !h-9 text-xs"
                    >
                      Đổi ngay
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="w-full !h-9 text-xs"
                    >
                      <Lock className="h-3 w-3 mr-1" /> Chưa đủ
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
