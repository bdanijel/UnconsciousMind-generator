import React, { useState } from 'react';
import { Play, RotateCcw, Clock, Dices, AlertCircle, Compass, HelpCircle, ArrowRight } from 'lucide-react';
import { CoffeeCupIcon, InkpotIcon, CarriageIcon, DropletClarityIcon } from './ArtIcons';

export const PlayHelper: React.FC = () => {
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  const [turnCount, setTurnCount] = useState<number>(1);
  const [totalCuredClients, setTotalCuredClients] = useState<number>(0);
  const [firstPlayerPickerResult, setFirstPlayerPickerResult] = useState<string | null>(null);

  // Vienna Carriage quick calculation
  const [desiredDistance, setDesiredDistance] = useState<number>(3);
  const [baseCarriageSpeed, setBaseCarriageSpeed] = useState<number>(2);

  const extraCoffeeNeeded = Math.max(0, desiredDistance - baseCarriageSpeed);

  const nextTurn = () => {
    setActivePlayer(prev => (prev === 1 ? 2 : 1));
    setTurnCount(prev => prev + 1);
  };

  const resetGameTracker = () => {
    if (window.confirm('Želiš li da resetuješ brojač poteza i izlečenih klijenata?')) {
      setActivePlayer(1);
      setTurnCount(1);
      setTotalCuredClients(0);
    }
  };

  const pickFirstPlayer = () => {
    const isP1 = Math.random() < 0.5;
    if (isP1) {
      setFirstPlayerPickerResult('Igrač 1 igra prvi (Džepni sat, 2 kafe). Igrač 2 dobija +1 kafu (ukupno 3 kafe)!');
    } else {
      setFirstPlayerPickerResult('Igrač 2 igra prvi (Džepni sat, 2 kafe). Igrač 1 dobija +1 kafu (ukupno 3 kafe)!');
    }
  };

  const isEndGameTriggered = totalCuredClients >= 8;

  return (
    <div className="space-y-4 pb-20">
      {/* Active Turn & Player Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2a1a12] via-[#20130d] to-[#140c07] border border-[#c8963e]/40 shadow-xl shadow-black/50 text-[#f4ece1] space-y-3">
        <div className="flex items-center justify-between border-b border-[#3e271a] pb-2">
          <span className="text-xs font-semibold text-[#c8963e] uppercase tracking-wider flex items-center gap-1.5">
            <Clock size={14} />
            Potez & Praćenje Toka
          </span>
          <span className="text-xs font-mono text-[#cfbeaa] bg-[#160d08] px-2 py-0.5 rounded border border-[#3e271a]">
            Potez #{turnCount} (Runda {Math.ceil(turnCount / 2)})
          </span>
        </div>

        {/* Big Active Player Display */}
        <div className="text-center py-2 space-y-1">
          <span className="text-[11px] uppercase tracking-widest text-[#a89582]">
            Trenutno na potezu:
          </span>
          <div className="text-2xl font-serif-title font-bold text-[#fcefdc]">
            {activePlayer === 1 ? 'Igrač 1 (Bela/Zlatna)' : 'Igrač 2 (Braon/Burgundi)'}
          </div>
          <p className="text-xs text-[#d1c2af]">
            Izvrši akciju beležnice ili postavi ideju, zatim rešavaj snove klijenta.
          </p>
        </div>

        {/* Big Next Turn Hit Target Button */}
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={nextTurn}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#b37f2a] to-[#d8a649] text-[#140c07] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#b37f2a]/20 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <span>Završi potez & Prebaci na Igrača {activePlayer === 1 ? '2' : '1'}</span>
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={resetGameTracker}
            className="w-12 h-12 rounded-xl bg-[#1c110b] border border-[#3e271a] text-[#8e7a68] hover:text-[#e8ded1] flex items-center justify-center cursor-pointer"
            title="Resetuj brojače"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* 8 Cured Clients Endgame Tracker */}
      <div className={`p-4 rounded-xl border transition-all ${
        isEndGameTriggered
          ? 'bg-[#3b1715] border-[#d9534f] text-[#ffdfdd]'
          : 'bg-[#221610] border-[#442e20] text-[#f4ece1]'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle size={16} className={isEndGameTriggered ? 'text-[#ff6b6b]' : 'text-[#c8963e]'} />
            <span className="text-xs font-bold uppercase tracking-wide">
              Praćenje Izlečenih Klijenata (Cilj: 8)
            </span>
          </div>
          <span className="font-mono text-xs font-bold bg-[#140c08] px-2 py-0.5 rounded border border-[#3e281c]">
            {totalCuredClients} / 8
          </span>
        </div>

        <p className="text-xs text-[#cfbeaa] mb-3 leading-relaxed">
          Kada se na stolu ukupno izleči 8 klijenata, aktivira se kraj partije!
        </p>

        {/* Progress bar */}
        <div className="w-full bg-[#140c08] h-2.5 rounded-full overflow-hidden border border-[#3a261a] mb-3">
          <div
            className={`h-full transition-all duration-300 ${
              isEndGameTriggered ? 'bg-[#d9534f]' : 'bg-[#c8963e]'
            }`}
            style={{ width: `${Math.min(100, (totalCuredClients / 8) * 100)}%` }}
          />
        </div>

        {/* Stepper buttons */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#baa794]">Ukupno izlečeno klijenata:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTotalCuredClients(Math.max(0, totalCuredClients - 1))}
              className="w-10 h-10 rounded-lg bg-[#2c1a12] border border-[#4a3121] text-[#e8ded1] flex items-center justify-center text-sm font-bold active:scale-95 cursor-pointer"
            >
              -1
            </button>
            <span className="font-mono text-base font-bold text-[#c8963e] w-8 text-center">
              {totalCuredClients}
            </span>
            <button
              onClick={() => setTotalCuredClients(totalCuredClients + 1)}
              className="w-10 h-10 rounded-lg bg-[#2c1a12] border border-[#4a3121] text-[#e8ded1] flex items-center justify-center text-sm font-bold active:scale-95 cursor-pointer"
            >
              +1
            </button>
          </div>
        </div>

        {isEndGameTriggered && (
          <div className="mt-3 p-2.5 rounded-lg bg-[#531f1c] border border-[#ff8585] text-xs font-bold text-white text-center animate-pulse">
            🚨 OKIDAČ KRAJA IGRE AKTIVIRAN! Drugi igrač ima tačno JOŠ JEDAN poslednji potez pre sabiranja poena!
          </div>
        )}
      </div>

      {/* Vienna Carriage Movement Cost Calculator */}
      <div className="p-4 rounded-xl bg-[#221610] border border-[#442e20] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#c8963e] uppercase tracking-wide">
          <CarriageIcon size={18} />
          <span>Kalkulator Kretanja Fijakera u Beču</span>
        </div>
        <p className="text-xs text-[#cfbeaa] leading-relaxed">
          Planiraš posetu profesoru ili novom okrugu? Izračunaj tačan trošak kafe.
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-[#180f0a] border border-[#342116] space-y-1">
            <span className="text-[#a89582] block text-[11px]">Željena razdaljina (ulica):</span>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setDesiredDistance(Math.max(1, desiredDistance - 1))}
                className="w-8 h-8 rounded bg-[#27170f] text-[#e8ded1] font-bold"
              >
                -
              </button>
              <span className="font-mono font-bold text-sm text-[#f5ede2]">{desiredDistance}</span>
              <button
                onClick={() => setDesiredDistance(desiredDistance + 1)}
                className="w-8 h-8 rounded bg-[#27170f] text-[#e8ded1] font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#180f0a] border border-[#342116] space-y-1">
            <span className="text-[#a89582] block text-[11px]">Osnovna akcija (bez kafe):</span>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setBaseCarriageSpeed(Math.max(1, baseCarriageSpeed - 1))}
                className="w-8 h-8 rounded bg-[#27170f] text-[#e8ded1] font-bold"
              >
                -
              </button>
              <span className="font-mono font-bold text-sm text-[#f5ede2]">{baseCarriageSpeed}</span>
              <button
                onClick={() => setBaseCarriageSpeed(baseCarriageSpeed + 1)}
                className="w-8 h-8 rounded bg-[#27170f] text-[#e8ded1] font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Result */}
        <div className="p-3 rounded-lg bg-[#19100a] border border-[#3c271b] flex items-center justify-between text-xs">
          <span className="text-[#baa896]">Potrebno dodatne kafe za ovaj potez:</span>
          <span className="font-bold text-[#e6b359] text-sm flex items-center gap-1.5 font-mono">
            <CoffeeCupIcon size={16} />
            {extraCoffeeNeeded === 0 ? '0 (Besplatno)' : `${extraCoffeeNeeded} Kafa`}
          </span>
        </div>
      </div>

      {/* Random First Player Picker */}
      <div className="p-4 rounded-xl bg-[#221610] border border-[#442e20] space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#c8963e] uppercase tracking-wide">
          <Dices size={18} />
          <span>Ko Igra Prvi? (2-Player Picker)</span>
        </div>
        <p className="text-xs text-[#cfbeaa] leading-relaxed">
          Bacite virtualni bečki novčić za određivanje prvog igrača i automatsku dodelu kompenzacije drugom igraču.
        </p>

        <button
          type="button"
          onClick={pickFirstPlayer}
          className="w-full py-2.5 px-4 rounded-xl bg-[#2e1d14] hover:bg-[#3d271c] border border-[#c8963e]/40 text-xs font-bold text-[#f5ede2] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
        >
          <Dices size={16} className="text-[#c8963e]" />
          <span>Odredi prvog igrača</span>
        </button>

        {firstPlayerPickerResult && (
          <div className="p-3 rounded-lg bg-[#2b1b12] border border-[#c8963e]/50 text-xs text-[#fcefdc] leading-relaxed font-medium">
            🎯 {firstPlayerPickerResult}
          </div>
        )}
      </div>

      {/* Quick Conversion Reference Cheat Sheet */}
      <div className="p-4 rounded-xl bg-[#1c120c] border border-[#3a251a] space-y-2 text-xs">
        <span className="font-serif-title font-bold text-sm text-[#f5ede2] block border-b border-[#311f15] pb-1.5">
          Brza konverzija i podsetnik resursa
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="p-2 rounded bg-[#140c08] border border-[#2b1b13]">
            <span className="font-bold text-[#c8963e]">2 Bistrine (Clarity):</span>
            <p className="text-[#bfae9c]">Može se pretvoriti u 1 Uvid (Crveni, Plavi ili Zeleni) preko kartica ideja.</p>
          </div>
          <div className="p-2 rounded bg-[#140c08] border border-[#2b1b13]">
            <span className="font-bold text-[#c8963e]">1 Kafa (Coffee):</span>
            <p className="text-[#bfae9c]">+1 dodatno polje kretanja fijakera u Beču ili plaćanje takse.</p>
          </div>
          <div className="p-2 rounded bg-[#140c08] border border-[#2b1b13]">
            <span className="font-bold text-[#c8963e]">Manifestni san:</span>
            <p className="text-[#bfae9c]">Mora se rešiti pre Latentnog sna. Daje trenutni jednokratni bonus.</p>
          </div>
          <div className="p-2 rounded bg-[#140c08] border border-[#2b1b13]">
            <span className="font-bold text-[#c8963e]">Potpuni proboj:</span>
            <p className="text-[#bfae9c]">Izlečenje klijenta pomera marker na traci proboja i donosi 3 poena na kraju.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
