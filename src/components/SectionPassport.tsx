import { SEOYUN_DATA, SEOA_DATA, SuccubusProfile } from '../data/passportData';
import OfficialStamps from './OfficialStamps';
import SisterMemo from './SisterMemo';
import AppleEmoji from './AppleEmoji';

interface SectionPassportProps {
  showNotes: boolean;
}

export default function SectionPassport({ showNotes }: SectionPassportProps) {
  const renderPassportPage = (profile: SuccubusProfile, pageSide: 'left' | 'right') => {
    const isLeft = pageSide === 'left';

    return (
      <div className="flex-1 paper-pattern guilloche-border rounded-2xl p-4 sm:p-7 relative flex flex-col justify-between min-h-[560px] sm:min-h-[620px] shadow-sm overflow-hidden border border-pink-200 bg-white">
        {/* Page Top Header */}
        <div className="border-b border-pink-100 pb-2.5 sm:pb-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="font-mono-doc text-[9px] sm:text-[10px] text-pink-600 font-semibold tracking-wider">
              PAGE {isLeft ? '01' : '02'} · PASSPORT
            </span>
            <span className="font-mono-doc text-[9.5px] sm:text-[10px] text-stone-700 font-bold bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
              {profile.documentNo}
            </span>
          </div>

          <div className="text-center mt-1.5 sm:mt-2">
            <div className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.14em] text-pink-900">
              HELL ADMINISTRATION
            </div>
            <div className="font-serif-kr text-base sm:text-lg font-black tracking-tight text-stone-900 mt-0.5 break-keep">
              서큐버스 인간계 파견 여권
            </div>
          </div>
        </div>

        {/* Profile Card Body */}
        <div className="my-3 sm:my-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center sm:items-start">
            {/* Photo Column - 1:1 Aspect Ratio with direct URLs & NO stamp over photo */}
            <div className="sm:col-span-5 flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 aspect-square rounded-2xl border-2 border-pink-200 p-1.5 bg-white shadow-sm">
                {/* Cute corner accents */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-pink-300 rounded-tl-sm" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-pink-300 rounded-tr-sm" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-pink-300 rounded-bl-sm" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-pink-300 rounded-br-sm" />

                <img
                  src={profile.photoUrl}
                  alt={`증명사진 - ${profile.nameKo}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl aspect-square"
                />
              </div>

              {/* Photo Caption & Signature */}
              <div className="w-full mt-2 sm:mt-3 text-center border-t border-dashed border-pink-100 pt-1.5 sm:pt-2">
                <span className="text-[9px] sm:text-[10px] text-pink-700/80 font-mono-doc block tracking-wider">
                  SIGNATURE / 서명
                </span>
                <div className="font-hand-en text-2xl sm:text-3xl text-pink-950 font-bold my-0.5 h-8 flex items-center justify-center">
                  {profile.signature}
                </div>
              </div>
            </div>

            {/* Official Data Fields Column - Formatted for clean mobile reading */}
            <div className="sm:col-span-7 space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2 border-b border-pink-100/90 pb-1.5">
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    성명 (Name)
                  </span>
                  <span className="font-serif-kr text-xs sm:text-sm font-bold text-stone-900 block break-keep">
                    {profile.nameKo}
                  </span>
                  <span className="font-cinzel text-[10px] text-pink-700 font-semibold block">
                    {profile.nameEn}
                  </span>
                </div>
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    성별 (Sex)
                  </span>
                  <span className="font-serif-kr font-bold text-stone-900 text-xs sm:text-sm">
                    {profile.sex} (여)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-pink-100/90 pb-1.5">
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    종족 (Species)
                  </span>
                  <span className="font-serif-kr font-bold text-stone-900 break-keep">
                    {profile.species} (서큐버스)
                  </span>
                </div>
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    자격 인가
                  </span>
                  <span className="font-serif-kr font-bold text-emerald-700">
                    {profile.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-pink-100/90 pb-1.5">
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    외형 의태
                  </span>
                  <span className="font-serif-kr font-bold text-stone-900 break-keep">
                    {profile.disguise} (인간)
                  </span>
                </div>
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    주동력
                  </span>
                  <span className="font-serif-kr font-bold text-stone-900 break-keep">
                    {profile.energyType} (생기)
                  </span>
                </div>
              </div>

              <div className="border-b border-pink-100/90 pb-1.5">
                <span className="text-[9.5px] text-stone-500 block break-keep">
                  파견지 (Destination)
                </span>
                <span className="font-serif-kr font-bold text-stone-900 text-xs sm:text-sm break-keep">
                  {profile.destinationKo}
                </span>
                <span className="font-cinzel text-[10.5px] text-pink-700 ml-1">
                  ({profile.destination})
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    체류 목적
                  </span>
                  <span className="font-serif-kr font-semibold text-[11px] sm:text-xs text-stone-800 break-keep">
                    {profile.purpose}
                  </span>
                </div>
                <div>
                  <span className="text-[9.5px] text-stone-500 block break-keep">
                    인가 상태
                  </span>
                  <span className="font-serif-kr font-black text-rose-600 text-xs sm:text-sm">
                    {profile.validity}
                  </span>
                </div>
              </div>

              {/* Machine / Resident Code */}
              <div className="mt-2 bg-pink-50/60 border border-pink-200/80 p-2 sm:p-2.5 rounded-xl">
                <span className="text-[9px] text-pink-800 font-bold block mb-0.5 break-keep">
                  인간계 주민등록 가상 신분코드
                </span>
                <span className="font-mono-doc text-[11px] sm:text-xs font-bold text-stone-800 break-all select-all">
                  {profile.assignedDisguiseId}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Stamp & Sister Handwritten Note Area */}
        <div className="border-t border-pink-100 pt-3 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Stamps */}
          <div className="flex items-center justify-center gap-3">
            {isLeft ? (
              <OfficialStamps type="hell_departed" rotation={-3} />
            ) : (
              <OfficialStamps type="rok_entry" rotation={2} />
            )}
          </div>

          {/* Handwritten memo */}
          {showNotes && (
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <SisterMemo
                author={profile.handwrittenMemo.author as '서윤' | '서아'}
                text={profile.handwrittenMemo.text}
                rotation={isLeft ? -1 : 1.5}
                className="w-full sm:max-w-xs"
              />
            </div>
          )}
        </div>

        {/* Machine Readable Zone (MRZ) Passport Footer */}
        <div className="mt-3 sm:mt-4 pt-1.5 sm:pt-2 border-t border-pink-200/80 bg-pink-50/40 p-2 rounded-xl text-[9px] sm:text-[10px] leading-tight font-mono-doc text-stone-600 tracking-wider overflow-x-auto select-all">
          <div className="whitespace-nowrap">{`P<HELL${profile.nameEn.replace(' ', '<<')}<<<<<<<<<<<<<<<<<<<<<<<<<<`}</div>
          <div className="whitespace-nowrap">{`${profile.documentNo.replace(/[^A-Z0-9]/g, '')}<5KOR2609230F9802<<<<<<<<<<<<<<04`}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Section Header */}
      <div className="border-b border-pink-200/80 pb-3">
        <span className="font-serif-kr text-[11px] sm:text-xs font-bold tracking-wider text-rose-600 flex items-center gap-1">
          <AppleEmoji char="📋" size={14} />
          <span>01. 정식 인가 서류</span>
        </span>
        <h2 className="font-serif-kr text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-0.5 break-keep">
          서큐버스 인간계 파견 여권
        </h2>
        <p className="font-serif-kr text-xs sm:text-sm text-stone-600 mt-0.5 break-keep">
          지옥출입국관리국 발행 · 한서윤 / 한서아 자매 여권
        </p>
      </div>

      {/* Bright Pastel Strawberry-Cream Passport Outer Booklet Case */}
      <div className="p-3 sm:p-6 rounded-3xl border-2 border-pink-200/90 shadow-xl relative bg-gradient-to-b from-[#fff2f6] via-[#ffe4ee] to-[#fed6e4]">
        {/* Soft spine crease for double page booklet */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-3 -translate-x-1/2 bg-gradient-to-r from-pink-300/40 via-pink-400/30 to-pink-300/40 rounded-full z-20 pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 relative">
          {renderPassportPage(SEOYUN_DATA, 'left')}
          {renderPassportPage(SEOA_DATA, 'right')}
        </div>
      </div>
    </section>
  );
}
