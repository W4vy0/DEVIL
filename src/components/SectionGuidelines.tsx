import { useState } from 'react';
import { GUIDELINES } from '../data/passportData';
import AppleEmoji from './AppleEmoji';

interface SectionGuidelinesProps {
  showNotes: boolean;
}

export default function SectionGuidelines({ showNotes }: SectionGuidelinesProps) {
  const [activeRuleIndex, setActiveRuleIndex] = useState<number | null>(null);

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Section Header */}
      <div className="border-b border-pink-200/80 pb-3">
        <span className="font-serif-kr text-[11px] sm:text-xs font-bold tracking-wider text-rose-600 flex items-center gap-1">
          <AppleEmoji char="📜" size={14} />
          <span>02. 행동 지침</span>
        </span>
        <h2 className="font-serif-kr text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-0.5 break-keep">
          인간계 생활수칙
        </h2>
        <p className="font-serif-kr text-xs sm:text-sm text-stone-600 mt-0.5 break-keep">
          대한민국 파견 서큐버스가 의무적으로 숙지하고 지켜야 할 기본 규칙
        </p>
      </div>

      {/* Official Handbook Document Container */}
      <div className="paper-pattern guilloche-border rounded-2xl p-4 sm:p-8 shadow-sm relative text-stone-900 border border-pink-200 bg-white">
        {/* Handbook Header */}
        <div className="border-b border-pink-100 pb-3 sm:pb-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-pink-800 mb-1 gap-1">
            <span className="font-serif-kr font-bold">
              지옥관리국 복무 규정집
            </span>
            <span className="font-mono-doc text-[11px] text-stone-500">NO. SC-2026-KR</span>
          </div>

          <h3 className="font-serif-kr text-lg sm:text-2xl font-black text-stone-900 tracking-tight break-keep">
            신임 서큐버스 인간계 생활수칙
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-serif-kr mt-1 break-keep leading-relaxed">
            본 수칙은 인간계 체류 시 일상의 안전과 원활한 임무 수행을 위한 공식 가이드라인입니다.
          </p>
        </div>

        {/* Rules List - Properly spaced and formatted for smooth mobile reading */}
        <div className="space-y-2.5 sm:space-y-3">
          {GUIDELINES.map((item, idx) => {
            const isEmotionalRule = item.num === '07' || item.num === '08';
            const isActive = activeRuleIndex === idx;

            return (
              <div
                key={item.num}
                onClick={() => setActiveRuleIndex(isActive ? null : idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer min-h-[48px] ${
                  isEmotionalRule
                    ? 'bg-rose-50/60 border-rose-200 hover:border-rose-300'
                    : 'bg-white border-pink-100 hover:border-pink-300'
                } ${isActive ? 'ring-2 ring-rose-400 shadow-xs' : 'shadow-2xs'}`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Article Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-100/90 border border-pink-200 text-pink-700 flex items-center justify-center font-cinzel font-bold text-sm shadow-2xs">
                    {item.num}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1 gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-pink-800 tracking-tight">
                        {item.category}
                      </span>
                      {isEmotionalRule && (
                        <span className="text-[10px] font-bold text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200 flex items-center gap-1">
                          <AppleEmoji char="💕" size={11} />
                          <span>특별 주의 조항</span>
                        </span>
                      )}
                    </div>

                    <p className="font-serif-kr text-stone-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium break-keep">
                      {item.rule}
                    </p>
                  </div>
                </div>

                {/* Sub annotations */}
                {isActive && (
                  <div className="mt-2.5 pt-2.5 border-t border-dashed border-pink-200 text-xs text-stone-700 font-serif-kr bg-pink-50/50 p-3 rounded-xl break-keep leading-relaxed">
                    <span className="font-bold text-pink-900">지옥관리국 규정 해설:</span> 인간계의 자연스러운 규범을 우선시하며, 중대한 위반 사항 발생 시 본국 소환 및 면허 정지 처분이 내려질 수 있습니다.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
