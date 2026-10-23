import React, { useState, useEffect } from 'react';
import { Trophy, Plus, Minus, RotateCcw, Save, Trash2, Award, History, Sparkles } from 'lucide-react';
import { PlayerScoreData, DEFAULT_PLAYER_1, DEFAULT_PLAYER_2, calculatePlayerTotal } from '../data/scoringData';

interface MatchHistoryRecord {
  id: string;
  date: string;
  player1Name: string;
  player1Score: number;
  player1Clients: number;
  player2Name: string;
  player2Score: number;
  player2Clients: number;
  winner: string;
}

export const ScoringCalculator: React.FC = () => {
  const [player1, setPlayer1] = useState<PlayerScoreData>(() => {
    try {
      const saved = localStorage.getItem('um_score_p1');
      return saved ? JSON.parse(saved) : DEFAULT_PLAYER_1;
    } catch {
      return DEFAULT_PLAYER_1;
    }
  });

  const [player2, setPlayer2] = useState<PlayerScoreData>(() => {
    try {
      const saved = localStorage.getItem('um_score_p2');
      return saved ? JSON.parse(saved) : DEFAULT_PLAYER_2;
    } catch {
      return DEFAULT_PLAYER_2;
    }
  });

  const [activeTab, setActiveTab] = useState<'p1' | 'p2' | 'compare'>('p1');
  const [history, setHistory] = useState<MatchHistoryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('um_match_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('um_score_p1', JSON.stringify(player1));
      localStorage.setItem('um_score_p2', JSON.stringify(player2));
    } catch (e) {
      console.error(e);
    }
  }, [player1, player2]);

  const p1Result = calculatePlayerTotal(player1);
  const p2Result = calculatePlayerTotal(player2);

  const resetAllScores = () => {
    if (window.confirm('Želiš li da resetuješ sve unete bodove na nulu?')) {
      setPlayer1(DEFAULT_PLAYER_1);
      setPlayer2(DEFAULT_PLAYER_2);
    }
  };

  const saveCurrentMatch = () => {
    let winner = 'Nerešeno';
    if (p1Result.total > p2Result.total) {
      winner = player1.name;
    } else if (p2Result.total > p1Result.total) {
      winner = player2.name;
    } else {
      // Tie breaker: most cured clients
      if (player1.curedClientsCount > player2.curedClientsCount) {
        winner = `${player1.name} (više izlečenih klijenata)`;
      } else if (player2.curedClientsCount > player1.curedClientsCount) {
        winner = `${player2.name} (više izlečenih klijenata)`;
      } else {
        winner = 'Potpuno nerešeno!';
      }
    }

    const newRecord: MatchHistoryRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('sr-RS', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      player1Name: player1.name,
      player1Score: p1Result.total,
      player1Clients: player1.curedClientsCount,
      player2Name: player2.name,
      player2Score: p2Result.total,
      player2Clients: player2.curedClientsCount,
      winner
    };

    const updated = [newRecord, ...history];
    setHistory(updated);
    try {
      localStorage.setItem('um_match_history', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    alert('Partija je uspešno sačuvana u istoriju!');
  };

  const deleteHistoryRecord = (id: string) => {
    const updated = history.filter(h => h.id !== id);
    setHistory(updated);
    try {
      localStorage.setItem('um_match_history', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const updateP1Field = (field: keyof PlayerScoreData, val: number | string) => {
    setPlayer1(prev => ({ ...prev, [field]: val }));
  };

  const updateP2Field = (field: keyof PlayerScoreData, val: number | string) => {
    setPlayer2(prev => ({ ...prev, [field]: val }));
  };

  // Reusable Mobile Stepper Row
  const renderScoreRow = (
    label: string,
    subLabel: string,
    value: number,
    onChange: (val: number) => void,
    step: number = 1,
    min: number = 0
  ) => {
    return (
      <div className="flex items-center justify-between p-3 rounded-xl bg-[#1d120d] border border-[#3f291d]">
        <div className="pr-2 space-y-0.5">
          <span className="text-xs font-semibold text-[#f5ede2] block">{label}</span>
          <span className="text-[11px] text-[#9c8976] block leading-tight">{subLabel}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => onChange(Math.max(min, value - step))}
            className="w-10 h-10 rounded-lg bg-[#2c1a12] border border-[#4d3223] text-[#e8ded1] flex items-center justify-center hover:bg-[#3d251a] active:scale-95 cursor-pointer"
            aria-label="Smanji"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            min={min}
            value={value}
            onChange={(e) => onChange(Math.max(min, parseInt(e.target.value) || 0))}
            className="w-12 h-10 text-center font-mono font-bold text-sm bg-[#140c08] border border-[#4d3223] rounded-lg text-[#c8963e] focus:outline-none focus:border-[#c8963e]"
          />
          <button
            type="button"
            onClick={() => onChange(value + step)}
            className="w-10 h-10 rounded-lg bg-[#2c1a12] border border-[#4d3223] text-[#e8ded1] flex items-center justify-center hover:bg-[#3d251a] active:scale-95 cursor-pointer"
            aria-label="Povećaj"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    );
  };

  const renderPlayerForm = (
    player: PlayerScoreData,
    updateField: (field: keyof PlayerScoreData, val: number | string) => void,
    result: ReturnType<typeof calculatePlayerTotal>,
    accentColor: string
  ) => {
    return (
      <div className="space-y-3">
        {/* Player Name Input */}
        <div className="p-3 rounded-xl bg-[#241711] border border-[#463023] space-y-1">
          <label className="text-[11px] text-[#9c8976] uppercase tracking-wider block">
            Naziv ili Ime Igrača
          </label>
          <input
            type="text"
            value={player.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full bg-[#150d09] border border-[#41291b] rounded-lg px-3 py-2 text-sm font-semibold text-[#f5ede2] focus:outline-none focus:border-[#c8963e]"
          />
        </div>

        {/* Categories */}
        <div className="space-y-2.5">
          {/* 1. Klijenti */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>1. Izlečeni Klijenti (Cured Clients)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.clients} poena</span>
            </div>
            {renderScoreRow(
              'Ukupni poeni sa kartica klijenata',
              'Zbir poena ispisanih na dnu rešenih kartica',
              player.curedClientsPoints,
              (v) => updateField('curedClientsPoints', v),
              1
            )}
            {renderScoreRow(
              'Broj izlečenih klijenata',
              'Koristi se za tie-breaker u slučaju izjednačenja',
              player.curedClientsCount,
              (v) => updateField('curedClientsCount', v),
              1
            )}
          </div>

          {/* 2. Proboji */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>2. Proboji (Breakthroughs)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.breakthroughs} poena</span>
            </div>
            {renderScoreRow(
              'Broj dostignutih proboja',
              'Svaki proboj standardno donosi 3 poena',
              player.breakthroughCount,
              (v) => updateField('breakthroughCount', v),
              1
            )}
          </div>

          {/* 3. Univerzitet */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>3. Univerzitet & Rasprave (Treatises)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.university} poena</span>
            </div>
            {renderScoreRow(
              'Objavljene rasprave (Treatises)',
              'Bodovi sa pločica rasprava na akademskoj traci',
              player.publishedTreatisesPoints,
              (v) => updateField('publishedTreatisesPoints', v),
              1
            )}
            {renderScoreRow(
              'Nivo reputacije (Akademski bonus)',
              'Dostignuto polje na traci Univerziteta',
              player.academicReputationBonus,
              (v) => updateField('academicReputationBonus', v),
              1
            )}
          </div>

          {/* 4. Grad Beč */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>4. Grad Beč (Vienna Map Presence)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.vienna} poena</span>
            </div>
            {renderScoreRow(
              'Većina u okruzima (Districts)',
              'U 2 igrača: 5 poena po osvojenom okrugu',
              player.viennaDistrictsMajorityPoints,
              (v) => updateField('viennaDistrictsMajorityPoints', v),
              5
            )}
            {renderScoreRow(
              'Postavljene ordinacije (Konsultacije)',
              '1 poen po postavljenom markeru na mapi',
              player.viennaConsultationsCount,
              (v) => updateField('viennaConsultationsCount', v),
              1
            )}
          </div>

          {/* 5. Ciljevi */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>5. Ciljevi & Prekretnice (Objectives)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.objectives} poena</span>
            </div>
            {renderScoreRow(
              'Ispunjeni lični ciljevi teorija',
              'Poeni sa tvojih tajnih kartica ciljeva',
              player.objectiveCardsPoints,
              (v) => updateField('objectiveCardsPoints', v),
              1
            )}
            {renderScoreRow(
              'Javne prekretnice (Milestones)',
              'Osvojeni bonusi sa centralne table',
              player.milestonesPoints,
              (v) => updateField('milestonesPoints', v),
              1
            )}
          </div>

          {/* 6. Beležnica */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>6. Beležnica & Tehnike (Notebook Mastery)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.notebook} poena</span>
            </div>
            {renderScoreRow(
              'Vrednost savladanih tehnika profesora',
              'Bodovi sa stalnih kartica u beležnici',
              player.notebookMasteryPoints,
              (v) => updateField('notebookMasteryPoints', v),
              1
            )}
          </div>

          {/* 7. Preostali resursi */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-[#c8963e] px-1">
              <span>7. Preostali Resursi (2 resursa = 1 poen)</span>
              <span className="font-mono text-[#f5ede2]">{result.breakdown.resources} poena</span>
            </div>
            {renderScoreRow(
              'Preostala Kafa',
              'Šoljice kafe na tvojoj tabli',
              player.leftoverCoffee,
              (v) => updateField('leftoverCoffee', v),
              1
            )}
            {renderScoreRow(
              'Preostala Bistrina (Clarity)',
              'Staklene kapljice bistrine',
              player.leftoverClarity,
              (v) => updateField('leftoverClarity', v),
              1
            )}
            {renderScoreRow(
              'Preostali Uvidi (Insights)',
              'Zbir crvenih, plavih i zelenih tokena',
              player.leftoverInsights,
              (v) => updateField('leftoverInsights', v),
              1
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Real-time Match Score Comparison Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2a1b14] via-[#20140e] to-[#140c07] border border-[#c8963e]/40 shadow-xl shadow-black/50 text-[#f4ece1]">
        <div className="flex items-center justify-between border-b border-[#3e271a] pb-2 mb-3">
          <span className="text-xs font-semibold text-[#c8963e] uppercase tracking-wider flex items-center gap-1.5">
            <Trophy size={14} />
            Konačni Rezultat (2P)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={saveCurrentMatch}
              className="text-xs text-[#c8963e] hover:text-[#f8e6c8] flex items-center gap-1 py-1 px-2.5 rounded bg-[#1a0f0a] border border-[#482c1c] cursor-pointer"
            >
              <Save size={13} />
              Sačuvaj
            </button>
            <button
              onClick={resetAllScores}
              className="text-xs text-[#a38e7b] hover:text-[#e8ded1] flex items-center gap-1 py-1 px-2.5 rounded bg-[#1a0f0a] border border-[#482c1c] cursor-pointer"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          </div>
        </div>

        {/* 2-Player Head-to-Head Banner */}
        <div className="grid grid-cols-2 gap-3 items-center">
          {/* Player 1 Card */}
          <div
            onClick={() => setActiveTab('p1')}
            className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
              p1Result.total > p2Result.total
                ? 'bg-[#312014] border-[#c8963e] shadow-md shadow-[#c8963e]/10'
                : 'bg-[#180f0a] border-[#382317]'
            }`}
          >
            <span className="text-xs font-semibold text-[#dfc3a7] truncate block">
              {player1.name}
            </span>
            <div className="text-3xl font-serif-title font-bold text-[#f7ecd8] my-1 tabular-nums">
              {p1Result.total}
            </div>
            <div className="text-[11px] text-[#9b8774]">
              {player1.curedClientsCount} izlečenih
            </div>
          </div>

          {/* Player 2 Card */}
          <div
            onClick={() => setActiveTab('p2')}
            className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
              p2Result.total > p1Result.total
                ? 'bg-[#312014] border-[#c8963e] shadow-md shadow-[#c8963e]/10'
                : 'bg-[#180f0a] border-[#382317]'
            }`}
          >
            <span className="text-xs font-semibold text-[#dfc3a7] truncate block">
              {player2.name}
            </span>
            <div className="text-3xl font-serif-title font-bold text-[#f7ecd8] my-1 tabular-nums">
              {p2Result.total}
            </div>
            <div className="text-[11px] text-[#9b8774]">
              {player2.curedClientsCount} izlečenih
            </div>
          </div>
        </div>

        {/* Winner outcome statement */}
        <div className="mt-3 pt-2 text-center text-xs">
          {p1Result.total === 0 && p2Result.total === 0 ? (
            <span className="text-[#8c7764]">Unesi bodove u tabovima ispod za izračunavanje pobednika.</span>
          ) : p1Result.total > p2Result.total ? (
            <span className="font-semibold text-[#e8c07d]">
              🎉 Trenutno vodi: {player1.name} (+{p1Result.total - p2Result.total} poena)
            </span>
          ) : p2Result.total > p1Result.total ? (
            <span className="font-semibold text-[#e8c07d]">
              🎉 Trenutno vodi: {player2.name} (+{p2Result.total - p1Result.total} poena)
            </span>
          ) : (
            <span className="font-semibold text-[#f0dfcc]">
              Izjednačeno ({p1Result.total} - {p2Result.total})! Tie-breaker: pobednik je ko ima više izlečenih klijenata (P1: {player1.curedClientsCount} vs P2: {player2.curedClientsCount}).
            </span>
          )}
        </div>
      </div>

      {/* Segmented control tabs */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-[#1c110b] border border-[#3e271a] rounded-xl text-xs font-semibold">
        <button
          onClick={() => setActiveTab('p1')}
          className={`py-2 px-2 rounded-lg transition-colors cursor-pointer truncate ${
            activeTab === 'p1'
              ? 'bg-[#c8963e] text-[#140c07] shadow-sm'
              : 'text-[#baa794] hover:text-[#f4ece1]'
          }`}
        >
          {player1.name.split(' ')[0]}
        </button>
        <button
          onClick={() => setActiveTab('p2')}
          className={`py-2 px-2 rounded-lg transition-colors cursor-pointer truncate ${
            activeTab === 'p2'
              ? 'bg-[#c8963e] text-[#140c07] shadow-sm'
              : 'text-[#baa794] hover:text-[#f4ece1]'
          }`}
        >
          {player2.name.split(' ')[0]}
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`py-2 px-2 rounded-lg transition-colors cursor-pointer truncate ${
            activeTab === 'compare'
              ? 'bg-[#c8963e] text-[#140c07] shadow-sm'
              : 'text-[#baa794] hover:text-[#f4ece1]'
          }`}
        >
          Uporedi & Istorija
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'p1' && renderPlayerForm(player1, updateP1Field, p1Result, '#c8963e')}
      {activeTab === 'p2' && renderPlayerForm(player2, updateP2Field, p2Result, '#b87333')}

      {activeTab === 'compare' && (
        <div className="space-y-4">
          {/* Detailed Category by Category Comparison Table */}
          <div className="p-4 rounded-xl bg-[#221610] border border-[#442e21] space-y-3">
            <h3 className="font-serif-title font-bold text-sm text-[#f5ede2] border-b border-[#3a251a] pb-2">
              Detaljno Poređenje Po Kategorijama
            </h3>

            <div className="space-y-2 text-xs">
              {[
                { label: 'Izlečeni klijenti', p1: p1Result.breakdown.clients, p2: p2Result.breakdown.clients },
                { label: 'Proboji (Breakthroughs)', p1: p1Result.breakdown.breakthroughs, p2: p2Result.breakdown.breakthroughs },
                { label: 'Univerzitet & Rasprave', p1: p1Result.breakdown.university, p2: p2Result.breakdown.university },
                { label: 'Grad Beč & Okruzi', p1: p1Result.breakdown.vienna, p2: p2Result.breakdown.vienna },
                { label: 'Ciljevi i prekretnice', p1: p1Result.breakdown.objectives, p2: p2Result.breakdown.objectives },
                { label: 'Beležnica i Tehnike', p1: p1Result.breakdown.notebook, p2: p2Result.breakdown.notebook },
                { label: 'Preostali resursi (Kafa/Uvidi)', p1: p1Result.breakdown.resources, p2: p2Result.breakdown.resources },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-[#190f0a] border border-[#311f15]">
                  <span className="text-[#baa896]">{row.label}</span>
                  <div className="flex items-center gap-3 font-mono font-bold">
                    <span className={row.p1 > row.p2 ? 'text-[#e6b359]' : 'text-[#f5ede2]'}>
                      {row.p1}
                    </span>
                    <span className="text-[#5a4233]">:</span>
                    <span className={row.p2 > row.p1 ? 'text-[#e6b359]' : 'text-[#f5ede2]'}>
                      {row.p2}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#2f1f15] border border-[#c8963e]/40 font-bold">
                <span className="text-[#f5ede2]">UKUPAN ZBIR</span>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className={p1Result.total >= p2Result.total ? 'text-[#e6b359]' : 'text-[#f5ede2]'}>
                    {p1Result.total}
                  </span>
                  <span className="text-[#c8963e]">:</span>
                  <span className={p2Result.total >= p1Result.total ? 'text-[#e6b359]' : 'text-[#f5ede2]'}>
                    {p2Result.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Match History */}
          <div className="p-4 rounded-xl bg-[#221610] border border-[#442e21] space-y-3">
            <div className="flex items-center justify-between border-b border-[#3a251a] pb-2">
              <span className="font-serif-title font-bold text-sm text-[#f5ede2] flex items-center gap-1.5">
                <History size={16} className="text-[#c8963e]" />
                Istorija Partija u 2 Igrača
              </span>
              <span className="text-xs text-[#8e7a68] font-mono">
                {history.length} sačuvanih
              </span>
            </div>

            {history.length === 0 ? (
              <p className="text-xs text-[#8e7a68] text-center py-4">
                Nema sačuvanih partija. Klikni na dugme "Sačuvaj" pri vrhu da sačuvaš trenutni rezultat!
              </p>
            ) : (
              <div className="space-y-2">
                {history.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-3 rounded-lg bg-[#180f0a] border border-[#352117] flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#f5ede2]">{rec.winner}</span>
                        <span className="text-[10px] text-[#8e7a68]">{rec.date}</span>
                      </div>
                      <div className="text-[11px] text-[#baab99]">
                        {rec.player1Name} ({rec.player1Score}) vs {rec.player2Name} ({rec.player2Score})
                      </div>
                    </div>
                    <button
                      onClick={() => deleteHistoryRecord(rec.id)}
                      className="text-[#8e7a68] hover:text-[#d9534f] p-1.5 rounded cursor-pointer"
                      title="Obriši zapis"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
