import React, { useState } from 'react';
import { Navigation, TabType } from './components/Navigation';
import { RulesSection } from './components/RulesSection';
import { SetupSection } from './components/SetupSection';
import { Sparkles, HelpCircle, X, RotateCcw } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('rules');
  const [showResetModal, setShowResetModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleResetSetup = () => {
    localStorage.removeItem('um_setup_steps');
    setShowResetModal(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#140c08] text-[#f4ece1] flex flex-col font-sans selection:bg-[#c8963e]/30 selection:text-white">
      {/* Top Header Navigation */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onNewGameRequest={() => setShowResetModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3.5 sm:px-6 pt-4 pb-12">
        {/* Subtle Viennese Kicker strip */}
        <div className="mb-4 flex items-center justify-between text-xs text-[#a38f7c] border-b border-[#2e1d14] pb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#c8963e]">Bečko Psihoanalitičko Društvo</span>
            <span aria-hidden="true" className="text-[#594233]">·</span>
            <span className="hidden sm:inline">Unconscious Mind (Pravila & Postavka)</span>
            <span className="sm:hidden font-medium text-[#e6b359]">2-Igrača Vodič</span>
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
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a1b13] bg-[#100906] py-6 px-4 text-center text-xs text-[#7e6c5c] pb-24 sm:pb-8">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-3 text-[#9c8976] flex-wrap">
            <span>Vodič za društvenu igru Unconscious Mind (Fantasia Games)</span>
            <span aria-hidden="true">·</span>
            <span>Verzija Pravilnika 3.2</span>
          </div>
          <p className="text-[11px] text-[#635345]">
            Zvanična pravila i interaktivna postavka za 2 igrača.
          </p>
        </div>
      </footer>

      {/* Reset Setup Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-[#221610] border border-[#c8963e]/40 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#3b2518] pb-2">
              <h3 className="font-serif-title font-bold text-base text-[#f5ede2] flex items-center gap-2">
                <RotateCcw size={18} className="text-[#c8963e]" />
                Resetuj Čeklistu Postavke
              </h3>
              <button
                onClick={() => setShowResetModal(false)}
                className="text-[#8c7866] hover:text-[#e8ded1] p-1 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-[#cfbeaa] leading-relaxed">
              Želite li da poništite sve čekirane korake u interaktivnom vodiču postavke za pripremu nove partije?
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleResetSetup}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b37f2a] to-[#d8a649] text-[#140c07] font-bold text-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer"
              >
                <span>Potvrdi Reset Postavke</span>
              </button>

              <button
                onClick={() => setShowResetModal(false)}
                className="w-full py-2 rounded-lg text-xs text-[#a38f7c] hover:text-[#f4ece1] transition-colors cursor-pointer"
              >
                Otkaži
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Info Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-[#221610] border border-[#c8963e]/40 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#3b2518] pb-2">
              <h3 className="font-serif-title font-bold text-base text-[#f5ede2] flex items-center gap-2">
                <Sparkles size={18} className="text-[#c8963e]" />
                Unconscious Mind Vodič
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
                Digitalni vodič za društvenu igru <strong>Unconscious Mind</strong> (Fantasia Games, v3.2).
              </p>

              <div className="p-3 rounded-xl bg-[#170e0a] border border-[#3b2518] space-y-1.5">
                <span className="font-bold text-[#c8963e] block">Sadržaj:</span>
                <p>• <strong>Pravila & FAQ:</strong> Pretraga pravila (State Ideas, Recall Ideas, Treat Clients), mehanika bročanika uvida, radovi i ciljevi.</p>
                <p>• <strong>Postavka 2P:</strong> Čeklista sa pravilom blokiranja 8 polja na Stolu za Sastanke i kompenzacijom kafe za drugog igrača.</p>
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
