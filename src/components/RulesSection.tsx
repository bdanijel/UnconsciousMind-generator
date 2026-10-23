import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { RULES_DATA, RuleItem } from '../data/rulesData';
import { InkpotIcon, CoffeeCupIcon, InkblotIcon, CarriageIcon } from './ArtIcons';

export const RulesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyTwoPlayer, setOnlyTwoPlayer] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    turn_structure: true,
    two_player_blocking: true
  });
  const [showQuickTurnSummary, setShowQuickTurnSummary] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredRules = useMemo(() => {
    return RULES_DATA.filter(item => {
      if (onlyTwoPlayer && !item.isTwoPlayerSpecial) {
        return false;
      }
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() === '') {
        return true;
      }
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTerm = item.originalTerm?.toLowerCase().includes(q) || false;
      const matchSummary = item.shortSummary.toLowerCase().includes(q);
      const matchDetails = item.details.some(d => d.toLowerCase().includes(q));
      return matchTitle || matchTerm || matchSummary || matchDetails;
    });
  }, [searchQuery, selectedCategory, onlyTwoPlayer]);

  const categories = [
    { id: 'all', label: 'Sve' },
    { id: 'two_player', label: '2 Igrača Fokus' },
    { id: 'turn', label: 'Faza poteza' },
    { id: 'treatment', label: 'Snovi & Terapija' },
    { id: 'notebook', label: 'Beležnica' },
    { id: 'vienna', label: 'Beč & Profesori' },
    { id: 'cafe', label: 'Kafana' },
    { id: 'faq', label: 'FAQ / Dileme' },
  ];

  return (
    <div className="space-y-4 pb-20">
      {/* Top Banner with atmospheric theme */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1b14] via-[#1f140f] to-[#140c08] border border-[#c8963e]/25 p-4 text-[#f4ece1] shadow-lg shadow-black/40">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 pointer-events-none text-[#c8963e]">
          <InkblotIcon size={140} />
        </div>
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#c8963e]">
            <BookOpen size={14} />
            <span>Psihoanalitički Arhiv Beča · 1900</span>
          </div>
          <h2 className="font-serif-title text-xl font-bold tracking-wide text-[#fdf8f0]">
            Baza Pravila & Nedoumica
          </h2>
          <p className="text-xs text-[#d6c7b2] leading-relaxed">
            Brzi podsetnik za partije u dvoje: pretražuj pojmove, tumači snove i razreši svaku dilemu tokom igre.
          </p>

          {/* Quick Turn Summary Toggle Button */}
          <button
            onClick={() => setShowQuickTurnSummary(!showQuickTurnSummary)}
            className="mt-2 w-full py-2.5 px-3 rounded-xl bg-[#c8963e]/15 hover:bg-[#c8963e]/25 border border-[#c8963e]/40 text-xs font-semibold text-[#f8e6c8] flex items-center justify-between transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#c8963e]" />
              Brzi redosled poteza (Turn Flow)
            </span>
            <span className="text-[11px] text-[#c8963e]">
              {showQuickTurnSummary ? 'Zatvori' : 'Pogledaj'}
            </span>
          </button>
        </div>

        {/* Collapsible Quick Turn Flow chart */}
        {showQuickTurnSummary && (
          <div className="mt-3 pt-3 border-t border-[#c8963e]/20 space-y-2 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-[#150d0a]/80 border border-[#c8963e]/20 space-y-1">
                <span className="font-bold text-[#c8963e]">1. Postavi ili Pomeri</span>
                <p className="text-[11px] text-[#cfbeaa]">
                  Postavi novu karticu ideje na tablu beležnice ILI pomeri mastionicu za broj ideja u željenom smeru.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#150d0a]/80 border border-[#c8963e]/20 space-y-1">
                <span className="font-bold text-[#c8963e]">2. Izvrši akcije</span>
                <p className="text-[11px] text-[#cfbeaa]">
                  Aktiviraj red/kolonu beležnice gde je mastionica stala ILI uradi akciju mesta na tabli grada/kafani.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#150d0a]/80 border border-[#c8963e]/20 space-y-1">
                <span className="font-bold text-[#c8963e]">3. Terapija klijenta</span>
                <p className="text-[11px] text-[#cfbeaa]">
                  Iskoristi sakupljenu Bistrinu i Uvide (crvene/plave/zelene) da rešiš Manifestne/Latentne slojeve ili staviš lekove.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#150d0a]/80 border border-[#c8963e]/20 space-y-1">
                <span className="font-bold text-[#c8963e]">4. Kraj poteza & Proboj</span>
                <p className="text-[11px] text-[#cfbeaa]">
                  Ako je klijent potpuno izlečen, napreduj na traci Proboja (Breakthrough). Prenesi potez drugom igraču.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Input Box */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pretraži pravila (npr. mastionica, kafa, 2 igrača, proboj)..."
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#231712] border border-[#4a3429] text-sm text-[#f5ede2] placeholder-[#8c7867] focus:outline-none focus:border-[#c8963e] focus:ring-1 focus:ring-[#c8963e] transition-all"
        />
        <Search className="absolute left-3.5 top-3.5 text-[#8c7867]" size={18} />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-3 text-xs text-[#c8963e] hover:text-[#e4be78] px-2 py-1"
          >
            Obriši
          </button>
        )}
      </div>

      {/* Category Pills & 2-Player Toggle Bar */}
      <div className="space-y-2">
        {/* Only 2-Player Toggle */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#231712] border border-[#4a3429]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#f5ede2]">Samo 2-Igrača specifičnosti</span>
            <span className="text-[10px] text-[#c8963e]">Posebna pravila</span>
          </div>
          <button
            onClick={() => setOnlyTwoPlayer(!onlyTwoPlayer)}
            className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
              onlyTwoPlayer ? 'bg-[#c8963e]' : 'bg-[#3d271d]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                onlyTwoPlayer ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Category Horizontal Scroller */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#c8963e] text-[#140c08] font-bold shadow-sm shadow-[#c8963e]/20'
                    : 'bg-[#231712] text-[#cfbeaa] hover:bg-[#34221a] hover:text-[#f5ede2] border border-[#3e2b21]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules Accordion List */}
      <div className="space-y-3">
        {filteredRules.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#231712] border border-[#4a3429] text-[#a89582] space-y-2">
            <AlertCircle size={28} className="mx-auto text-[#c8963e]" />
            <p className="text-sm font-medium">Nijedno pravilo ne odgovara pretrazi.</p>
            <p className="text-xs text-[#7d6c5b]">Pokušaj sa opštijim pojmom ili resetuj filtere.</p>
          </div>
        ) : (
          filteredRules.map((rule) => {
            const isExpanded = !!expandedIds[rule.id];
            return (
              <div
                key={rule.id}
                className="overflow-hidden rounded-xl bg-[#221611] border border-[#432e23] hover:border-[#5a3f31] transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(rule.id)}
                  className="w-full p-3.5 text-left flex items-start justify-between gap-3 cursor-pointer select-none active:bg-[#2b1c16]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-serif-title font-bold text-sm text-[#f6eee2] leading-tight">
                        {rule.title}
                      </span>
                      {rule.isTwoPlayerSpecial && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6b359] bg-[#e6b359]/15 px-2 py-0.5 rounded border border-[#e6b359]/30">
                          2 Igrača
                        </span>
                      )}
                    </div>
                    {rule.originalTerm && (
                      <div className="text-[11px] text-[#9a8571] italic">
                        {rule.originalTerm}
                      </div>
                    )}
                    <p className="text-xs text-[#cfbeaa] line-clamp-2">
                      {rule.shortSummary}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1 text-[#c8963e]">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Accordion Expanded Body */}
                {isExpanded && (
                  <div className="px-3.5 pb-4 pt-1 border-t border-[#342219] space-y-3 bg-[#1c110d]">
                    <div className="space-y-2 pt-2">
                      {rule.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#ded1c0] leading-relaxed">
                          <span className="text-[#c8963e] mt-0.5 shrink-0 font-bold">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {rule.tips && (
                      <div className="p-2.5 rounded-lg bg-[#2b1c14] border border-[#c8963e]/30 text-xs text-[#f1dec3] flex items-start gap-2">
                        <span className="text-[#c8963e] shrink-0 font-bold">💡 Savet:</span>
                        <p>{rule.tips}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
