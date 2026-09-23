interface SisterMemoProps {
  author: '서윤' | '서아';
  text: string;
  className?: string;
  rotation?: number; // e.g. -2, 1, 3
}

export default function SisterMemo({
  author,
  text,
  className = '',
  rotation = 0,
}: SisterMemoProps) {
  const isSeoyun = author === '서윤';

  // Seoyun: soft lime/moss green hand-drawn note
  // Seoa: bold crimson/pink marker note
  const authorStyle = isSeoyun
    ? {
        textColor: 'text-lime-800',
        authorBadge: 'bg-lime-100 text-lime-900 border-lime-300',
        penColor: '#3f6212',
        accentBorder: 'border-lime-300/80',
        bg: 'bg-lime-50/90',
      }
    : {
        textColor: 'text-rose-700',
        authorBadge: 'bg-rose-100 text-rose-900 border-rose-300',
        penColor: '#be123c',
        accentBorder: 'border-rose-300/80',
        bg: 'bg-rose-50/90',
      };

  return (
    <div
      className={`inline-block relative p-2.5 sm:p-3 rounded-lg border backdrop-blur-xs transition-transform hover:scale-102 active:scale-98 max-w-full ${authorStyle.accentBorder} ${authorStyle.bg} shadow-xs ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Tape mark on top corner */}
      <div className="absolute -top-2 left-4 w-7 h-3 bg-amber-100/80 border border-amber-200/80 rotate-2 rounded-xs shadow-2xs pointer-events-none" />

      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
        <span
          className={`text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-xs border tracking-tight ${authorStyle.authorBadge}`}
        >
          {isSeoyun ? '서윤 Memo' : '서아 Memo'}
        </span>
      </div>

      <p
        className={`font-hand-kr text-lg sm:text-xl leading-relaxed tracking-normal select-none break-keep ${authorStyle.textColor}`}
        style={{
          color: authorStyle.penColor,
          textShadow: '0 0.5px 0.5px rgba(0,0,0,0.03)',
        }}
      >
        {text}
      </p>
    </div>
  );
}
