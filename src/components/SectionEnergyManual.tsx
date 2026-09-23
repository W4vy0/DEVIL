import { useState } from 'react';
import { ENERGY_STAGES, INTAKE_METHODS } from '../data/passportData';
import SisterMemo from './SisterMemo';
import { sound } from '../utils/audio';
import AppleEmoji from './AppleEmoji';

interface SectionEnergyManualProps {
  showNotes: boolean;
}

export default function SectionEnergyManual({ showNotes }: SectionEnergyManualProps) {
  const [currentLevel, setCurrentLevel] = useState<number>(75);

  const getStage = (val: number) => {
    return (
      ENERGY_STAGES.find((st) => val >= st.minVal && val <= st.maxVal) ||
      ENERGY_STAGES[0]
    );
  };

  const currentStage = getStage(currentLevel);

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Section Header */}
      <div className="border-b border-pink-200/80 pb-3">
        <span className="font-serif-kr text-[11px] sm:text-xs font-bold tracking-wider text-rose-600 flex items-center gap-1">
          <AppleEmoji char="⚡" size={14} />
          <span>03. 생체 마력 규정</span>
        </span>
        <h2 className="font-serif-kr text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-0.5 break-keep">
          정기 섭취 및 마력 보존 규정
        </h2>
        <p className="font-serif-kr text-xs sm:text-sm text-stone-600 mt-0.5 break-keep">
          서큐버스 개체의 생체 마력 감쇄에 따른 정기 잔류량 지표 및 흡수 기준
        </p>
      </div>

      <div className="paper-pattern guilloche-border rounded-2xl p-4 sm:p-8 shadow-sm border border-pink-200 bg-white text-stone-900 space-y-6 sm:space-y-8">
        {/* Section Header in Document */}
        <div className="border-b border-pink-100 pb-3 sm:pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-pink-800 mb-1 gap-1">
            <span className="font-serif-kr font-bold">
              지옥관리국 생체에너지 관리과
            </span>
            <span className="font-mono-doc text-[11px] text-stone-500">CODE: EM-SUC-03</span>
          </div>
          <h3 className="font-serif-kr text-lg sm:text-2xl font-black text-stone-900 tracking-tight break-keep">
            서큐버스 정기 관리 지침
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-serif-kr mt-1 break-keep leading-relaxed">
            인간계 체류 시 지속적으로 생체 마력이 감쇄하므로 정기 잔류량을 안전하게 유지하십시오.
          </p>
        </div>

        {/* 1. ENERGY CAPACITY GAUGE */}
        <div className="bg-pink-50/30 border border-pink-200/80 rounded-2xl p-4 sm:p-6 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-serif-kr text-xs font-bold text-pink-700 block tracking-wider">
                ENERGY CAPACITY [ 0 ━━━━━━━━ 100 ]
              </span>
              <span className="font-serif-kr text-base sm:text-lg font-bold text-stone-900 break-keep">
                실시간 정기 용량 인디케이터
              </span>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-stone-500 font-serif-kr">현재 잔여량:</span>
              <span
                className="font-mono-doc text-lg sm:text-xl font-black px-3 py-1 rounded-xl border shadow-2xs"
                style={{
                  color: currentStage.color,
                  borderColor: currentStage.color,
                  backgroundColor: currentStage.badgeBg,
                }}
              >
                {currentLevel}%
              </span>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-2 py-2">
            <input
              type="range"
              min={0}
              max={100}
              value={currentLevel}
              onChange={(e) => setCurrentLevel(Number(e.target.value))}
              aria-label="정기 잔류량 조절 슬라이더"
              className="w-full h-3.5 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-rose-500 touch-pan-x"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] font-serif-kr text-stone-500 font-semibold px-0.5">
              <span>0% (고갈)</span>
              <span>30% (위험)</span>
              <span>70% (경계)</span>
              <span>100% (안정)</span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-pink-100">
            {ENERGY_STAGES.map((st) => (
              <button
                key={st.status}
                onClick={() => {
                  sound.playPageTurn();
                  setCurrentLevel(st.minVal === 0 ? 0 : Math.round((st.minVal + st.maxVal) / 2));
                }}
                className={`min-h-[44px] p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  currentStage.status === st.status
                    ? 'ring-2 ring-rose-400 font-bold bg-white border-rose-300 shadow-2xs'
                    : 'hover:bg-white bg-white/70 border-pink-100'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono-doc font-bold text-xs" style={{ color: st.color }}>
                    [{st.range}]
                  </span>
                  <span className="font-serif-kr text-[10px] font-bold text-stone-600">
                    {st.status}
                  </span>
                </div>
                <div className="font-serif-kr text-stone-900 font-medium break-keep">
                  {st.labelKo}
                </div>
              </button>
            ))}
          </div>

          {/* Current Stage Detailed Advisory */}
          <div
            className="mt-3 p-3.5 sm:p-4 rounded-xl border text-xs font-serif-kr space-y-1 transition-colors"
            style={{
              backgroundColor: currentStage.badgeBg,
              borderColor: currentStage.color,
            }}
          >
            <div className="flex items-center gap-1.5 font-bold" style={{ color: currentStage.color }}>
              <span>●</span>
              <span className="break-keep">상태 진단: {currentStage.labelKo} [{currentStage.status}]</span>
            </div>
            <p className="text-stone-800 leading-relaxed font-medium break-keep">
              {currentStage.desc}
            </p>
          </div>
        </div>

        {/* 2. ENERGY INTAKE METHODS & EFFICIENCY */}
        <div className="space-y-3 sm:space-y-4">
          <div className="border-b border-pink-100 pb-2">
            <span className="font-serif-kr text-xs font-bold text-pink-700 block tracking-wider">
              섭취 프로토콜
            </span>
            <h4 className="font-serif-kr text-base sm:text-lg font-black text-stone-900 break-keep">
              정기 흡수 방식 및 효율 등급
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {INTAKE_METHODS.map((method) => (
              <div
                key={method.name}
                className="p-4 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span className="font-serif-kr text-base font-bold text-stone-950 break-keep">
                      {method.name}
                    </span>
                    <span className="font-serif-kr text-xs font-bold text-pink-800 bg-pink-100/70 px-2.5 py-0.5 rounded-full border border-pink-200">
                      {method.efficiency}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-mono-doc text-rose-500 font-bold text-base tracking-widest">
                      {method.gauge}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 font-serif-kr mt-1.5 leading-relaxed break-keep">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Official intake warning caveats */}
          <div className="bg-rose-50/70 border border-rose-200 p-3.5 sm:p-4 rounded-2xl text-xs font-serif-kr text-stone-800 space-y-1">
            <span className="font-bold text-rose-800 block mb-1">
              [지옥관리국 공식 유의사항]
            </span>
            <p className="break-keep leading-relaxed">※ 접촉시간·밀도·상대와의 상태에 따라 흡수량 변동</p>
            <p className="break-keep leading-relaxed">※ 단순접촉만으로 대량회복 불가</p>
            <p className="break-keep leading-relaxed">※ 과도한 흡수 주의 (인간 측의 급격한 쇠약 유발 시 규정 위반 처리)</p>
          </div>
        </div>

        {/* 3. SISTER MEMOS */}
        {showNotes && (
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-dashed border-pink-200 bg-rose-50/50 p-4 sm:p-5 rounded-2xl border border-rose-200">
            <div className="flex items-center gap-2 mb-3">
              <AppleEmoji char="💕" size={16} />
              <h4 className="font-serif-kr font-bold text-stone-900 text-xs sm:text-sm break-keep">
                섭취 매뉴얼 여백의 자매 필적 메모
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-start">
              <div className="flex flex-col">
                <SisterMemo
                  author="서윤"
                  text="“손만 잡아도 조금은 차는 거지...?”"
                  rotation={-1}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col">
                <SisterMemo
                  author="서아"
                  text="“그걸로 언제 채워? 그냥 키스하면 빠르잖아 ♥”"
                  rotation={1}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
