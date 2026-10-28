import React from 'react';
import { BookOpen, CheckSquare } from 'lucide-react';
import { InkpotIcon } from './ArtIcons';

export type TabType = 'rules' | 'setup';

interface NavigationProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onNewGameRequest: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  onNewGameRequest
}) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'rules', label: 'Pravila', icon: <BookOpen size={20} /> },
    { id: 'setup', label: 'Postavka (2P)', icon: <CheckSquare size={20} /> }
  ];

  return (
    <>
      {/* Top Header Navigation - Strict 3-zone contract */}
      <header className="sticky top-0 z-30 bg-[#19100c]/95 backdrop-blur-md border-b border-[#3e271a] px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#c8963e]">
              <InkpotIcon size={22} />
            </span>
            <span className="font-serif-title font-bold text-base tracking-wide text-[#f5ede2] whitespace-nowrap">
              Unconscious Mind
            </span>
          </div>

          {/* Zone 2: Navigation Links for Desktop / Tablet view */}
          <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-[#baa794]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => onSelectTab(t.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer hover:text-[#f4ece1] ${
                  currentTab === t.id ? 'text-[#c8963e] border-b-2 border-[#c8963e] pb-0.5 font-bold' : ''
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onNewGameRequest}
              className="py-1.5 px-3 rounded-lg bg-[#2c1a11] hover:bg-[#3d2417] border border-[#c8963e]/40 text-xs font-semibold text-[#f5ede2] transition-colors whitespace-nowrap cursor-pointer"
            >
              Resetuj Postavku
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Bottom Navigation Bar for Mobile ergonomics */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#160e0a]/95 backdrop-blur-lg border-t border-[#3b2518] sm:hidden shadow-2xl">
        <div className="grid grid-cols-2 items-center h-16 max-w-md mx-auto px-4">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center h-full min-h-[44px] min-w-[44px] transition-colors cursor-pointer select-none ${
                  isActive ? 'text-[#e6b359]' : 'text-[#8c7866] hover:text-[#c4b3a1]'
                }`}
              >
                <div className="relative">
                  {tab.icon}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#e6b359] rounded-full" />
                  )}
                </div>
                <span className={`text-[11px] mt-1 font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
