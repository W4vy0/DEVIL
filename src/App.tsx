/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import HeaderNav, { SectionTab } from './components/HeaderNav';
import MobileBottomNav from './components/MobileBottomNav';
import PassportCover from './components/PassportCover';
import SectionPassport from './components/SectionPassport';
import SectionGuidelines from './components/SectionGuidelines';
import SectionEnergyManual from './components/SectionEnergyManual';
import { sound } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('cover');
  const [isCoverDismissed, setIsCoverDismissed] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [bgmPlaying, setBgmPlaying] = useState<boolean>(false);

  // Initialize and handle BGM toggle
  const toggleSound = () => {
    const isPlaying = sound.toggleBgm();
    setBgmPlaying(isPlaying);
  };

  const handleOpenPassport = () => {
    sound.playCutePop();
    sound.playPageTurn();
    sound.playBgm();
    setBgmPlaying(true);
    setIsCoverDismissed(true);
    setActiveTab('01');
  };

  // Attempt to start BGM on first user interaction if not already playing
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!sound.isBgmPlaying) {
        sound.playBgm();
        setBgmPlaying(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffbfb] via-[#fff5f7] to-[#fff0f3] text-stone-900 flex flex-col font-serif-kr selection:bg-pink-200 selection:text-rose-950">
      {/* Top Bar navigation */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
        soundEnabled={bgmPlaying}
        onToggleSound={toggleSound}
        isCoverDismissed={isCoverDismissed}
      />

      {/* Main Administrative Desk Workspace */}
      <main className="flex-1 py-4 sm:py-8 px-2.5 sm:px-6 relative overflow-hidden flex flex-col items-center pb-24 md:pb-12">
        {/* Soft cozy desk ambient glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-300/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-5xl space-y-4 sm:space-y-6 relative z-10">
          {/* Notes Legend Bar: ONLY the single clean handwriting indicator */}
          <div className="flex flex-row items-center justify-between gap-2 px-3 sm:px-4 py-2 rounded-2xl bg-white/90 border border-pink-200 shadow-2xs backdrop-blur-sm text-xs">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto py-0.5">
              <span className="text-pink-900 font-serif-kr font-bold text-xs">
                손글씨:
              </span>
              <span className="inline-flex items-center gap-1 bg-lime-50 text-lime-900 px-2 py-0.5 rounded-full border border-lime-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 inline-block"></span>
                <span className="font-hand-kr text-sm sm:text-base">한서윤 (연두색)</span>
              </span>
              <span className="text-pink-300 font-bold">·</span>
              <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-900 px-2 py-0.5 rounded-full border border-rose-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block"></span>
                <span className="font-hand-kr text-sm sm:text-base">한서아 (붉은색)</span>
              </span>
            </div>
          </div>

          {/* Tab 0: Passport Cover */}
          {activeTab === 'cover' && (
            <PassportCover
              isOpen={false}
              onOpen={handleOpenPassport}
            />
          )}

          {/* Tab 01: Passport */}
          {activeTab === '01' && <SectionPassport showNotes={showNotes} />}

          {/* Tab 02: Guidelines */}
          {activeTab === '02' && <SectionGuidelines showNotes={showNotes} />}

          {/* Tab 03: Energy Manual */}
          {activeTab === '03' && <SectionEnergyManual showNotes={showNotes} />}
        </div>
      </main>

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isCoverDismissed={isCoverDismissed}
      />

      {/* Soft & Lovely Bureaucratic Footer */}
      <footer className="border-t border-pink-200 bg-white/80 backdrop-blur-sm py-4 sm:py-5 px-4 text-center text-xs text-stone-600 font-serif-kr pb-24 md:pb-5">
        <div className="max-w-4xl mx-auto space-y-1">
          <div className="text-[10px] sm:text-xs font-mono-doc text-pink-700">
            HELL ADMINISTRATION · SUCCUBUS PASSPORT DOSSIER HL-2026
          </div>
          <div className="text-[11px] sm:text-xs text-stone-500 font-serif-kr">
            대한민국 파견 인가 서류철 · 정식 서큐버스 파견 허가증
          </div>
        </div>
      </footer>
    </div>
  );
}
