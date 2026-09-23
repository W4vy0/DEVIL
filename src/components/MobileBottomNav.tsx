import { SectionTab } from './HeaderNav';
import { sound } from '../utils/audio';
import AppleEmoji from './AppleEmoji';

interface MobileBottomNavProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
  isCoverDismissed: boolean;
}

export default function MobileBottomNav({
  activeTab,
  onSelectTab,
  isCoverDismissed,
}: MobileBottomNavProps) {
  const handleNav = (tab: SectionTab) => {
    sound.playCutePop();
    sound.playPageTurn();
    onSelectTab(tab);
  };

  const navItems: { id: SectionTab; label: string; icon: string }[] = [];

  // Only include Cover if cover hasn't been dismissed
  if (!isCoverDismissed) {
    navItems.push({ id: 'cover', label: '커버', icon: '📕' });
  }

  navItems.push(
    { id: '01', label: '여권', icon: '📋' },
    { id: '02', label: '수칙', icon: '📜' },
    { id: '03', label: '정기', icon: '⚡' },
  );

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-pink-200 px-2 py-1.5 pb-safe shadow-lg"
      aria-label="Mobile Navigation"
    >
      <div className="flex items-center justify-around gap-1 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all min-h-[48px] touch-manipulation cursor-pointer ${
                isActive
                  ? 'bg-rose-50 text-rose-700 font-bold shadow-2xs border border-rose-300'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <span className="leading-none mb-1 flex items-center justify-center">
                <AppleEmoji char={item.icon} size={18} />
              </span>
              <span className="text-[11px] font-serif-kr tracking-tight leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
