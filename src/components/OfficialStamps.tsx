import { useState } from 'react';
import { sound } from '../utils/audio';
import AppleEmoji from './AppleEmoji';

interface StampProps {
  type: 'hell_departed' | 'rok_entry' | 'division_approved';
  className?: string;
  rotation?: number;
  interactive?: boolean;
}

export default function OfficialStamps({
  type,
  className = '',
  rotation = 0,
  interactive = true,
}: StampProps) {
  const [, setStampedCount] = useState(0);

  const handleClick = () => {
    if (!interactive) return;
    sound.playStamp();
    setStampedCount((prev) => prev + 1);
  };

  if (type === 'hell_departed') {
    return (
      <div
        onClick={handleClick}
        title="HELL IMMIGRATION 출국인 (클릭 시 날인 소리)"
        className={`inline-flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-full border-2 border-rose-600 text-rose-600 select-none cursor-pointer transition-transform hover:scale-105 active:scale-95 shrink-0 min-h-[44px] min-w-[44px] ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          width: '124px',
          height: '124px',
          boxShadow: 'inset 0 0 10px rgba(225, 29, 72, 0.08)',
        }}
      >
        <div className="w-full h-full rounded-full border border-dashed border-rose-500/80 p-1 flex flex-col items-center justify-center text-center">
          <span className="font-cinzel text-[8px] sm:text-[8.5px] font-bold tracking-widest leading-none text-rose-800">
            HELL IMMIGRATION
          </span>
          <div className="my-0.5 flex items-center justify-center gap-1">
            <AppleEmoji char="🦇" size={12} />
            <AppleEmoji char="💕" size={10} />
            <AppleEmoji char="🦇" size={12} />
          </div>
          <span className="font-cinzel text-[11px] sm:text-xs font-black tracking-widest text-rose-900 border-y border-rose-500/60 py-0.5 px-2 my-0.5">
            DEPARTED
          </span>
          <span className="font-mono-doc text-[10px] sm:text-[11px] font-bold text-rose-700 tracking-wider">
            2026.09.23
          </span>
          <span className="text-[7.5px] tracking-tight font-serif-kr text-rose-700 leading-none mt-0.5">
            지옥출입국관리청
          </span>
        </div>
      </div>
    );
  }

  if (type === 'rok_entry') {
    return (
      <div
        onClick={handleClick}
        title="REPUBLIC OF KOREA 입국인 (클릭 시 날인 소리)"
        className={`inline-flex flex-col items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-sky-700 text-sky-800 select-none cursor-pointer transition-transform hover:scale-105 active:scale-95 shrink-0 min-h-[44px] min-w-[44px] ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          boxShadow: 'inset 0 0 10px rgba(3, 105, 161, 0.08)',
        }}
      >
        <div className="border border-sky-600/70 px-2.5 sm:px-3 py-1 sm:py-1.5 flex flex-col items-center text-center rounded-lg">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-cinzel text-[8.5px] sm:text-[9px] font-bold tracking-wider text-sky-950">
              HUMAN WORLD
            </span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-[11px] font-black tracking-widest text-sky-900">
            REPUBLIC OF KOREA
          </span>
          <div className="h-px w-full bg-sky-600/40 my-0.5 sm:my-1" />
          <span className="font-mono-doc text-[9.5px] sm:text-[10px] font-bold text-sky-800 tracking-wider">
            2026.09.24 · INCHEON
          </span>
          <span className="font-cinzel text-[9.5px] sm:text-[10px] font-bold tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 border border-emerald-300">
            ENTRY APPROVED
          </span>
          <span className="text-[7.5px] font-serif-kr text-sky-900 mt-0.5">
            대한민국 출입국외국인청
          </span>
        </div>
      </div>
    );
  }

  return null;
}
