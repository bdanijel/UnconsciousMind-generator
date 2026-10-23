import React, { useState } from 'react';
import { Navigation, TabType } from './components/Navigation';
import { RulesSection } from './components/RulesSection';
import { SetupSection } from './components/SetupSection';
import { ScoringCalculator } from './components/ScoringCalculator';
import { PlayHelper } from './components/PlayHelper';
import { CoffeeCupIcon, InkpotIcon, InkblotIcon, CarriageIcon } from './components/ArtIcons';
import { Sparkles, HelpCircle, X, RotateCcw } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('rules');
  const [showNewGameModal, setShowNewGameModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleResetForNewGame = (type: 'all' | 'scores' | 'setup') => {
    if (type === 'all' || type === 'scores') {
      localStorage.removeItem('um_score_p1');
      localStorage.removeItem('um_score_p2');
    }
    if (type === 'all' || type === 'setup') {
      localStorage.removeItem('um_setup_steps');
    }
    setShowNewGameModal(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#140c08] text-[#f4ece1] flex flex-col font-sans selection:bg-[#c8963e]/30 selection:text-white">
      {/* Top Header Navigation */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onNewGameRequest={() => setShowNewGameModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3.5 sm:px-6 pt-4 pb-12">
        {/* Subtle Viennese Kicker strip */}
        <div className="mb-4 flex items-center justify-between text-xs text-[#a38f7c] border-b border-[#2e1d14] pb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#c8963e]">Bečko Psihoanalitičko Društvo</span>
            <span aria-hidden="true" className="text-[#594233]">·</span>
            <span className="hidden sm:inline">Unconscious Mind Companion</span>
            <span className="sm:hidden font-medium text-[#e6b359]">2-Igrača Mod</span>
          </div>
          <button
            onClick={() => setShowAboutModal(true)}
            className="flex items-center gap-1 text-[#baa794] hover:text-[#f4ece1] transition-colors cursor-pointer text-xs"
          >
            <HelpCircle size={14} />
            <span>O aplikaciji</span>
          </button>
        </div>

        {/* Tab View Router */}
        {currentTab === 'rules' && <RulesSection />}
        {currentTab === 'setup' && <SetupSection />}
        {currentTab === 'scoring' && <ScoringCalculator />}
        {currentTab === 'play' && <PlayHelper />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a1b13] bg-[#100906] py-6 px-4 text-center text-xs text-[#7e6c5c] pb-24 sm:pb-8">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-4 text-[#9c8976]">
            <span>Nezvanični digitalni asistent</span>
            <span aria-hidden="true">·</span>
            <span>Unconscious Mind (Fantasia Games)</span>
            <span aria-hidden="true">·</span>
            <span>Spremno za GitHub Pages</span>
          </div>
          <p className="text-[11px] text-[#635345]">
            Kreirano za ljubitelje društvene igre Unconscious Mind sa fokusom na igru u dva igrača.
          </p>
        </div>
      </footer>

      {/* New Game Reset Modal */}
      {showNewGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-[#221610] border border-[#c8963e]/40 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#3b2518] pb-2">
              <h3 className="font-serif-title font-bold text-base text-[#f5ede2] flex items-center gap-2">
                <RotateCcw size={18} className="text-[#c8963e]" />
                Započni Novu Partiju
              </h3>
              <button
                onClick={() => setShowNewGameModal(false)}
                className="text-[#8c7866] hover:text-[#e8ded1] p-1 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-[#cfbeaa] leading-relaxed">
              Izaberi šta želiš da resetuješ za početak nove partije u dva igrača:
            </p>

            <div className="space-y-2">
              <button
                onClick={() => handleResetForNewGame('all')}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b37f2a] to-[#d8a649] text-[#140c07] font-bold text-xs text-left flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer"
              >
                <div>
                  <div className="font-bold">Potpuni Reset (Preporučeno)</div>
                  <div className="text-[10px] text-[#2c1a11] font-normal">
                    Resetuje bodove i poništava sve korake postavke za novu igru
                  </div>
                </div>
                <span>→</span>
              </button>

              <button
                onClick={() => handleResetForNewGame('scores')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#2d1c13] hover:bg-[#3a251a] border border-[#482f21] text-xs font-semibold text-[#f5ede2] text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <div>
                  <div>Resetuj samo kalkulator bodova</div>
                  <div className="text-[10px] text-[#8e7a68]">
                    Zadržava postojeće čekirane korake postavke
                  </div>
                </div>
                <span>→</span>
              </button>

              <button
                onClick={() => handleResetForNewGame('setup')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#2d1c13] hover:bg-[#3a251a] border border-[#482f21] text-xs font-semibold text-[#f5ede2] text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <div>
                  <div>Resetuj samo korake postavke</div>
                  <div className="text-[10px] text-[#8e7a68]">
                    Započni pripremu stola ispočetka
                  </div>
                </div>
                <span>→</span>
              </button>
            </div>

            <button
              onClick={() => setShowNewGameModal(false)}
              className="w-full py-2 rounded-lg text-xs text-[#a38f7c] hover:text-[#f4ece1] transition-colors cursor-pointer"
            >
              Otkaži
            </button>
          </div>
        </div>
      )}

      {/* About & GitHub Pages Info Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-[#221610] border border-[#c8963e]/40 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#3b2518] pb-2">
              <h3 className="font-serif-title font-bold text-base text-[#f5ede2] flex items-center gap-2">
                <Sparkles size={18} className="text-[#c8963e]" />
                Unconscious Mind Companion (2P)
              </h3>
              <button
                onClick={() => setShowAboutModal(false)}
                className="text-[#8c7866] hover:text-[#e8ded1] p-1 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#cfbeaa] leading-relaxed">
              <p>
                Ova web aplikacija je dizajnirana kao digitalni pomoćnik tokom igranja kompleksne društvene igre <strong>Unconscious Mind</strong>, sa posebnim akcentom na igranje u dva igrača.
              </p>

              <div className="p-3 rounded-xl bg-[#170e0a] border border-[#3b2518] space-y-1.5">
                <span className="font-bold text-[#c8963e] block">Glavne mogućnosti:</span>
                <p>• <strong>Pravila & FAQ:</strong> Instant pretraga, tumačenje snova, razlika bistrina/uvidi, rešavanje nedoumica u sekundi.</p>
                <p>• <strong>Postavka 2P:</strong> Čeklista sa tačnim rasporedom neutralnih diskova u Kafani i na Sastancima.</p>
                <p>• <strong>Bodovanje:</strong> Kalkulator konačnih poena za 2 igrača sa tie-breaker logikom i čuvanjem istorije mečeva.</p>
                <p>• <strong>Tok Igre:</strong> Brojač poteza, okidač 8 izlečenih klijenata, kalkulator kretanja fijakera i biranje prvog igrača.</p>
              </div>

              <div className="p-3 rounded-xl bg-[#170e0a] border border-[#3b2518] space-y-1 text-[11px]">
                <span className="font-bold text-[#c8963e]">Uputstvo za GitHub Pages:</span>
                <p>
                  Projekat je potpuno statičan (client-side React + Vite sa relativnim putanjama <code className="text-[#e6b359]">base: './'</code>). Možeš ga direktno bildovati sa <code className="text-[#e6b359]">npm run build</code> i postaviti folder <code className="text-[#e6b359]">dist</code> na svoj GitHub Pages repo ili podesiti GitHub Action za Vite.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowAboutModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#c8963e] text-[#140c07] font-bold text-xs hover:bg-[#deb15c] transition-colors cursor-pointer"
            >
              U redu, nazad na igru
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
