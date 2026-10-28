import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, RotateCcw, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { SETUP_STEPS_2P } from '../data/setupData';

export const SetupSection: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('um_setup_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('um_setup_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.error(e);
    }
  }, [completedSteps]);

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const completedCount = SETUP_STEPS_2P.filter(s => !!completedSteps[s.id]).length;
  const totalCount = SETUP_STEPS_2P.length;
  const isAllCompleted = completedCount === totalCount;

  const resetSetup = () => {
    if (window.confirm('Želite li da resetujete sve čekirane korake postavke?')) {
      setCompletedSteps({});
    }
  };

  const markAllComplete = () => {
    const all: Record<string, boolean> = {};
    SETUP_STEPS_2P.forEach(s => {
      all[s.id] = true;
    });
    setCompletedSteps(all);
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1a12] via-[#21140e] to-[#150d09] border border-[#c8963e]/30 p-4 text-[#f4ece1] shadow-lg shadow-black/40">
        <div className="relative z-10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#c8963e] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} />
              Interaktivna Postavka Stola
            </span>
            <span className="text-xs font-mono font-bold text-[#f4ece1] bg-[#140c08] px-2 py-0.5 rounded border border-[#c8963e]/30">
              {completedCount} / {totalCount} koraka
            </span>
          </div>

          <h2 className="font-serif-title text-xl font-bold tracking-wide text-[#fdf8f0]">
            Zvanična Postavka za 2 Igrača
          </h2>
          <p className="text-xs text-[#cfbeaa] leading-relaxed">
            Korak-po-korak vodič po zvaničnom pravilniku igre Unconscious Mind sa posebnim akcentom na blokiranje 8 polja na Stolu za Sastanke i kompenzaciju kafe u 2P.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-[#140c08] h-2 rounded-full overflow-hidden border border-[#432d20]">
            <div
              className="bg-gradient-to-r from-[#b37f2a] to-[#e4be78] h-full transition-all duration-300"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-1 gap-2">
            <button
              onClick={markAllComplete}
              className="text-xs text-[#c8963e] hover:text-[#f8e6c8] flex items-center gap-1 py-1 px-2.5 rounded bg-[#1c110b] border border-[#3e291d] cursor-pointer"
            >
              <Check size={13} />
              Označi sve
            </button>
            <button
              onClick={resetSetup}
              className="text-xs text-[#a38e7b] hover:text-[#e8ded1] flex items-center gap-1 py-1 px-2.5 rounded bg-[#1c110b] border border-[#3e291d] cursor-pointer"
            >
              <RotateCcw size={13} />
              Resetuj
            </button>
          </div>
        </div>
      </div>

      {/* 2-Player Crucial Highlights Card */}
      <div className="p-3.5 rounded-xl bg-[#26160f] border border-[#c8963e]/40 space-y-2.5">
        <div className="flex items-center gap-2 text-[#e6b359]">
          <ShieldAlert size={18} className="shrink-0" />
          <h3 className="font-bold text-xs uppercase tracking-wide">
            Zlatna pravila postavke za 2 igrača:
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-[#180e0a] border border-[#3e2519] space-y-0.5">
            <span className="font-bold text-[#c8963e]">1. Blokiranje 8 Polja Stola</span>
            <p className="text-[11px] text-[#cfbeaa]">
              Postavite po 1 neiskorišćenu ideju na svih 8 polja u krajnjoj levoj i desnoj koloni Stola za Sastanke.
            </p>
          </div>
          <div className="p-2 rounded-lg bg-[#180e0a] border border-[#3e2519] space-y-0.5">
            <span className="font-bold text-[#c8963e]">2. 12 Pločica Beležnice</span>
            <p className="text-[11px] text-[#cfbeaa]">
              Pripremite tačno 12 pločica Nivoa I i 12 pločica Nivoa II. Ostale vratite u kutiju.
            </p>
          </div>
          <div className="p-2 rounded-lg bg-[#180e0a] border border-[#3e2519] space-y-0.5">
            <span className="font-bold text-[#c8963e]">3. Freudov Marker & Reputacija</span>
            <p className="text-[11px] text-[#cfbeaa]">
              Freudov marker reputacije počinje na polju 1 trake Reputacije na Mapi Grada.
            </p>
          </div>
          <div className="p-2 rounded-lg bg-[#180e0a] border border-[#3e2519] space-y-0.5">
            <span className="font-bold text-[#c8963e]">4. Balans: 2. Igrač ima +1 Kafu</span>
            <p className="text-[11px] text-[#cfbeaa]">
              Prvi igrač počinje sa 4 Kafe, a Drugi igrač sa 5 Kafe (+1 kompenzacija za 2. potez!).
            </p>
          </div>
        </div>
      </div>

      {/* Step by step interactive list */}
      <div className="space-y-3">
        {SETUP_STEPS_2P.map((step) => {
          const isDone = !!completedSteps[step.id];
          return (
            <div
              key={step.id}
              className={`rounded-xl border transition-all overflow-hidden ${
                isDone
                  ? 'bg-[#18100c] border-[#38261c] opacity-80'
                  : 'bg-[#221610] border-[#4b3324] shadow-md'
              }`}
            >
              <div
                onClick={() => toggleStep(step.id)}
                className="p-3.5 flex items-start gap-3 cursor-pointer select-none active:bg-[#2c1d15]"
              >
                {/* Hit target checkbox */}
                <button
                  type="button"
                  className="mt-0.5 shrink-0 text-[#c8963e] min-w-[28px] min-h-[28px] flex items-center justify-center rounded-lg hover:bg-[#342217]"
                  aria-label={isDone ? 'Označi kao nezavršeno' : 'Označi kao završeno'}
                >
                  {isDone ? (
                    <CheckCircle2 size={24} className="text-[#64b566]" />
                  ) : (
                    <Circle size={24} className="text-[#a89582]" />
                  )}
                </button>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-[#c8963e]">
                      KORAK {step.stepNumber}
                    </span>
                    <h3 className={`font-serif-title font-bold text-sm ${isDone ? 'line-through text-[#9d8977]' : 'text-[#f5ede2]'}`}>
                      {step.title}
                    </h3>
                  </div>

                  {step.isTwoPlayerCrucial && (
                    <div className="text-[11px] font-semibold text-[#e6b359] bg-[#e6b359]/10 px-2 py-0.5 rounded border border-[#e6b359]/25 inline-block">
                      ⚠️ {step.twoPlayerNote}
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1 text-xs text-[#d1c2b0] leading-relaxed">
                    {step.instructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-[#c8963e] mt-0.5 font-bold">•</span>
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>

                  {/* Components Required */}
                  {step.componentsNeeded.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-[#311f16] flex items-center gap-1.5 flex-wrap text-[11px] text-[#8e7a68]">
                      <span className="font-medium text-[#c8963e]">Komponente:</span>
                      {step.componentsNeeded.map((comp, idx) => (
                        <span key={idx} className="bg-[#170e0a] px-2 py-0.5 rounded text-[#b8a694] border border-[#2b1b13]">
                          {comp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion congratulations */}
      {isAllCompleted && (
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#1d351d] to-[#122212] border border-[#48824a] text-center space-y-2">
          <CheckCircle2 size={36} className="mx-auto text-[#79d57c]" />
          <h3 className="font-serif-title text-base font-bold text-[#e8f7e8]">
            Sve je spremno za partiju!
          </h3>
          <p className="text-xs text-[#b8e0b9]">
            Igrači su opremljeni kafom i uvidima, Sto za Sastanke je prilagođen za 2 igrača, a Freud je na poziciji 1. Srećno u psihoanalizi!
          </p>
        </div>
      )}
    </div>
  );
};
