import { sound } from '../utils/audio';
import AppleEmoji from './AppleEmoji';

interface PassportCoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function PassportCover({ onOpen, isOpen }: PassportCoverProps) {
  const handleOpen = () => {
    sound.playCutePop();
    sound.playPageTurn();
    onOpen();
  };

  if (isOpen) return null;

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-6 animate-fadeIn">
      {/* Soft & Cute Pastel Strawberry-Cream Leather Passport Booklet */}
      <div
        onClick={handleOpen}
        className="w-full max-w-md sm:max-w-lg cursor-pointer rounded-3xl p-6 sm:p-9 relative border-2 border-pink-200/90 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-pink-300 group min-h-[500px] sm:min-h-[560px] bg-gradient-to-b from-[#fff2f6] via-[#ffe4ee] to-[#fed6e4]"
      >
        {/* Soft rose-gold dashed stitching */}
        <div className="absolute inset-2.5 sm:inset-3 rounded-2xl border-2 border-dashed border-pink-300/60 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-4.5 rounded-xl border border-pink-200/50 pointer-events-none" />

        {/* Passport Spine indicator on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-pink-400/20 via-pink-300/10 to-transparent rounded-l-3xl pointer-events-none" />

        {/* Content inside cover */}
        <div className="flex flex-col items-center justify-between h-full min-h-[460px] sm:min-h-[500px] text-center py-2 sm:py-4">
          {/* Top Bureau Title */}
          <div className="space-y-1.5 pt-1 sm:pt-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-pink-200 text-pink-700 text-[11px] sm:text-xs font-serif-kr font-medium shadow-2xs">
              <AppleEmoji char="✨" size={14} />
              <span>지옥관리국 정식 인가 문서</span>
              <AppleEmoji char="✨" size={14} />
            </div>
            <h1 className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.16em] text-pink-950 mt-1">
              HELL ADMINISTRATION
            </h1>
            <p className="font-serif-kr text-xs sm:text-sm text-pink-800 tracking-wide font-semibold">
              서큐버스 인간계 파견 여권
            </p>
          </div>

          {/* Central Pink Emblem Pattern (파견 여권 분홍색 무늬) */}
          <div className="relative my-4 sm:my-6 flex flex-col items-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-b from-white via-pink-50 to-pink-100 border-2 border-pink-300 shadow-md flex items-center justify-center relative group-hover:border-pink-400 transition-colors">
              {/* Decorative Pink Concentric Circles & Succubus Crest SVG */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-pink-500 fill-current drop-shadow-xs"
                aria-label="지옥관리국 서큐버스 분홍색 문양"
              >
                {/* Outer decorative ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="84"
                  fill="none"
                  stroke="#f9a8d4"
                  strokeWidth="1.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="76"
                  fill="#fdf2f8"
                  stroke="#f472b6"
                  strokeWidth="2"
                />

                {/* Circular Latin Lettering */}
                <path
                  id="circlePath"
                  d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  fill="none"
                />
                <text
                  fontSize="7.5"
                  letterSpacing="2.5"
                  fill="#be185d"
                  fontWeight="bold"
                  fontFamily="Cinzel, serif"
                >
                  <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                    ★ HELL ADMINISTRATION · SUCCUBUS DIVISION ★
                  </textPath>
                </text>

                {/* Inner cute crest: Winged Heart & Devil Horns in Pink */}
                <g transform="translate(100, 100) scale(0.9)">
                  {/* Left Devil Wing */}
                  <path
                    d="M-10,-5 C-25,-30 -55,-25 -65,0 C-50,0 -40,15 -25,25 C-32,15 -35,-5 -10,-5 Z"
                    fill="#ec4899"
                    opacity="0.85"
                  />
                  {/* Right Devil Wing */}
                  <path
                    d="M10,-5 C25,-30 55,-25 65,0 C50,0 40,15 25,25 C32,15 35,-5 10,-5 Z"
                    fill="#ec4899"
                    opacity="0.85"
                  />
                  {/* Left Horn */}
                  <path
                    d="M-14,-28 C-18,-45 -8,-52 2,-55 C-2,-45 -6,-35 -8,-28 Z"
                    fill="#db2777"
                  />
                  {/* Right Horn */}
                  <path
                    d="M14,-28 C18,-45 8,-52 -2,-55 C2,-45 6,-35 8,-28 Z"
                    fill="#db2777"
                  />
                  {/* Central Heart */}
                  <path
                    d="M0,-18 C-18,-38 -42,-14 -22,12 C-12,25 0,38 0,38 C0,38 12,25 22,12 C42,-14 18,-38 0,-18 Z"
                    fill="#f43f5e"
                  />
                  {/* Sparkle star in heart */}
                  <path
                    d="M0,-2 L2,4 L8,6 L2,8 L0,14 L-2,8 L-8,6 L-2,4 Z"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  {/* Little Devil Tail under heart */}
                  <path
                    d="M0,36 C5,46 15,48 18,55 C12,54 8,56 6,60 L14,64 L8,68 C2,64 3,55 -2,42 Z"
                    fill="#ec4899"
                  />
                </g>
              </svg>

              <div className="absolute inset-0 rounded-full border border-pink-300/40 pointer-events-none" />
            </div>
          </div>

          {/* Bottom Title & Action Button (소지품 mention removed) */}
          <div className="space-y-3 pb-1 sm:pb-2 w-full">
            <div className="border-t border-b border-pink-200/90 py-2.5 mx-2 sm:mx-4 bg-white/40 rounded-lg">
              <h2 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.14em] text-pink-900">
                SUCCUBUS PASSPORT
              </h2>
              <div className="font-serif-kr text-xs sm:text-sm text-pink-800 font-medium mt-0.5 break-keep">
                인간계 파견 허가서 및 생활수칙
              </div>
            </div>

            <div className="pt-1.5 sm:pt-2">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 border border-pink-200 text-white text-xs sm:text-sm font-serif-kr font-bold transition-all shadow-md group-hover:scale-105">
                <span>클릭해서 여권 펼치기</span>
                <AppleEmoji char="💖" size={16} />
              </div>
            </div>

            <div className="text-[10px] font-mono-doc text-pink-600/70 pt-1 tracking-wider">
              CLICK TO OPEN DOSSIER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
