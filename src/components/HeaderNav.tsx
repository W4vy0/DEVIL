import { sound } from '../utils/audio';
import AppleEmoji from './AppleEmoji';

export type SectionTab = 'cover' | '01' | '02' | '03';

interface HeaderNavProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  isCoverDismissed: boolean;
}

export default function HeaderNav({
  activeTab,
  onSelectTab,
  showNotes,
  onToggleNotes,
  soundEnabled,
  onToggleSound,
  isCoverDismissed,
}: HeaderNavProps) {
  const handleNav = (tab: SectionTab) => {
    sound.playCutePop();
    sound.playPageTurn();
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-200 text-stone-800 shadow-2xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Wordmark in Display Face */}
        <button
          onClick={() => handleNav(isCoverDismissed ? '01' : 'cover')}
          className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-[0.14em] text-pink-900 hover:text-pink-700 transition-colors whitespace-nowrap shrink-0 text-left flex items-center gap-1.5 cursor-pointer min-h-[44px]"
        >
          <AppleEmoji char="💖" size={18} />
          <span className="tracking-wider">HELL ADMIN</span>
          <span className="hidden sm:inline tracking-[0.14em]">ISTRATION</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 text-xs font-serif-kr font-medium tracking-wide">
          {/* Only show Cover tab if cover is NOT dismissed yet */}
          {!isCoverDismissed && (
            <button
              onClick={() => handleNav('cover')}
              className={`transition-colors cursor-pointer whitespace-nowrap min-h-[44px] flex items-center px-2 ${
                activeTab === 'cover'
                  ? 'text-rose-600 font-bold underline decoration-rose-400 underline-offset-8'
                  : 'text-stone-600 hover:text-rose-600'
              }`}
            >
              여권 커버
            </button>
          )}

          <button
            onClick={() => handleNav('01')}
            className={`transition-colors cursor-pointer whitespace-nowrap min-h-[44px] flex items-center px-2 ${
              activeTab === '01'
                ? 'text-rose-600 font-bold underline decoration-rose-400 underline-offset-8'
                : 'text-stone-600 hover:text-rose-600'
            }`}
          >
            01. 파견 여권
          </button>
          <button
            onClick={() => handleNav('02')}
            className={`transition-colors cursor-pointer whitespace-nowrap min-h-[44px] flex items-center px-2 ${
              activeTab === '02'
                ? 'text-rose-600 font-bold underline decoration-rose-400 underline-offset-8'
                : 'text-stone-600 hover:text-rose-600'
            }`}
          >
            02. 생활수칙
          </button>
          <button
            onClick={() => handleNav('03')}
            className={`transition-colors cursor-pointer whitespace-nowrap min-h-[44px] flex items-center px-2 ${
              activeTab === '03'
                ? 'text-rose-600 font-bold underline decoration-rose-400 underline-offset-8'
                : 'text-stone-600 hover:text-rose-600'
            }`}
          >
            03. 정기 매뉴얼
          </button>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Notes toggle */}
          <button
            onClick={onToggleNotes}
            title="자매의 손글씨 메모 켜기/끄기"
            className={`h-9 px-3 text-[11px] sm:text-xs font-serif-kr rounded-full border transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 min-h-[44px] ${
              showNotes
                ? 'bg-rose-50 border-rose-300 text-rose-700 font-bold shadow-2xs'
                : 'bg-white border-stone-200 text-stone-500 hover:text-stone-800'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                showNotes ? 'bg-rose-500 animate-pulse' : 'bg-stone-300'
              }`}
            />
            <span>메모 {showNotes ? 'ON' : 'OFF'}</span>
          </button>

          {/* Sound / BGM Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? '배경음악 (BGM) 끄기' : '배경음악 (BGM) 켜기'}
            className="w-10 h-10 min-h-[44px] min-w-[44px] text-sm rounded-full border border-pink-200 bg-white hover:bg-pink-50 text-stone-700 transition-colors cursor-pointer flex items-center justify-center shadow-2xs"
          >
            <AppleEmoji char={soundEnabled ? '🔊' : '🔇'} size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
