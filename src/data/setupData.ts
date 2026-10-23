export interface SetupStep {
  id: string;
  stepNumber: number;
  title: string;
  subTitle?: string;
  isTwoPlayerCrucial?: boolean;
  twoPlayerNote?: string;
  instructions: string[];
  componentsNeeded: string[];
  visualHint?: string;
}

export const SETUP_STEPS_2P: SetupStep[] = [
  {
    id: 'setup_step_1_boards',
    stepNumber: 1,
    title: 'Glavna tabla i blokada polja za 2 igrača',
    subTitle: 'Central Board & 2-Player Neutral Restrictions',
    isTwoPlayerCrucial: true,
    twoPlayerNote: 'OBAVEZNO: Postavi neutralne diskove na polja koja se ne koriste u 2 igrača!',
    instructions: [
      'Postavi centralnu tablu na sredinu stola sa stranom okrenutom ka igračima.',
      'KAFANA LANDTMANN (Café): Pronađi polja za akcije koja imaju oznaku "3-4P" ili tri/četiri siluete. Na ta polja stavi neutralne drvene diskove/blokere. Ta polja su NEDOSTUPNA tokom čitave partije u 2 igrača.',
      'SASTANAK DRUŠTVA (Meeting Table): Za svaki od tematskih sektora za diskusiju, stavi neutralnu pločicu preko drugog mesta — svaka tema ima tačno 1 slobodno mesto umesto dva.',
      'POSTAVI ŠPIL IDEJA: Promešaj špil ideja i postavi ga pored kafane. Otkrij prve 4 kartice ideja u ponudu kafane.'
    ],
    componentsNeeded: [
      'Centralna tabla',
      'Neutralni diskovi/blokeri (iz kutije)',
      'Špil kartica ideja (Idea deck)'
    ],
    visualHint: 'U 2 igrača na sastanku društva postoji samo 1 mesto po temi umesto 2!'
  },
  {
    id: 'setup_step_2_vienna',
    stepNumber: 2,
    title: 'Grad Beč, Okruzi i Fijakeri',
    subTitle: 'City of Vienna Board & Carriage Placement',
    isTwoPlayerCrucial: true,
    twoPlayerNote: 'U 2 igrača koristite samo označena polja za konsultacije u okruzima!',
    instructions: [
      'Postavi tablu Grada Beča (City of Vienna) nadovezanu na glavnu tablu.',
      'POČETNA POZICIJA FIJAKERA: Oba igrača stavljaju svoj fijaker (Carriage) u centar grada na polje katedrale Svetog Stefana (Stephansdom).',
      'PLOČICE KONSULTACIJA U OKRUZIMA: Svaki okrug ima predviđena mesta za ordinacije. U 2 igrača koristite samo polja označena sa "2P" (obično 2 mesta po okrugu). Polja sa oznakama 3P i 4P se ne računaju za većinu.',
      'PLOČICE PROFESORA: Izvuci nasumično 4 pločice profesora i postavi ih na naznačene univerzitetske zgrade u gradu Beču.'
    ],
    componentsNeeded: [
      'Tabla Beča (City Map)',
      'Fijakeri za oba igrača (2 boje)',
      'Pločice Profesora (Professor tiles)',
      'Markeri ordinacija / konsultacija (po 8 po igraču)'
    ],
    visualHint: 'Početak je uvek u katedrali Stephansdom. Svaki dodatni korak košta 1 kafu.'
  },
  {
    id: 'setup_step_3_university',
    stepNumber: 3,
    title: 'Univerzitet i Akademska traka',
    subTitle: 'University Track & Treatise Multipliers',
    instructions: [
      'Postavi tablu Univerziteta (ili sekciju sa predavanjima).',
      'Stavi po 1 marker reputacije svakog igrača na početno nulto polje akademske trake.',
      'Promešaj pločice objavljenih radova/rasprava (Treatise tiles) i rasporedi ih licem na gore na označena polja nivoa.',
      'Pripremi zalihu tokena proboja (Breakthrough markers) i akademskih diploma.'
    ],
    componentsNeeded: [
      'Markeri reputacije igrača',
      'Pločice rasprava (Treatises)',
      'Pločice akademskih bonusa'
    ]
  },
  {
    id: 'setup_step_4_clients',
    stepNumber: 4,
    title: 'Klijenti i špilovi snova',
    subTitle: 'Client Cards & Dream Decks Preparation',
    instructions: [
      'Podeli kartice snova u dva špila: Manifestni snovi (beli/svetliji špil) i Latentni snovi (tamni špil). Promešaj oba špila zasebno.',
      'Promešaj špil Klijenata (Client deck) i otkrij prva 4 klijenta u red čekaonice (Client Market).',
      'Pripremi zajedničku zalihu lekova (Remedy tiles) razvrstanih po tipu neuroze: Histerija, Opsesija, Fobija, Melahnolija.',
      'Pripremi zalihu staklenih kapljica bistrine (Clarity) i drvenih tokena uvida (Insights) u 3 boje (Crvena, Plava, Zelena).'
    ],
    componentsNeeded: [
      'Špil manifestnih snova',
      'Špil latentnih snova',
      'Špil klijenata',
      'Pločice lekova (Remedies)',
      'Tokeni bistrine (Clarity) i uvida (Insights)'
    ]
  },
  {
    id: 'setup_step_5_player_board',
    stepNumber: 5,
    title: 'Lične table igrača (Beležnica & Mastionica)',
    subTitle: 'Player Board, Idea Notebook & Starting Resources',
    instructions: [
      'Svaki igrač uzima ličnu tablu svoje boje i postavlja tablu Beležnice (Idea Notebook).',
      'MASTIONICA (Inkpot): Postavi mastionicu na početnu poziciju (oznaka 0 u gornjem levom uglu beležnice).',
      'POČETNE IDEJE: Svaki igrač uzima svoje 4 početne kartice ideja (označene simbolom igrača) i postavlja ih u beležnicu prema početnom rasporedu iz pravila.',
      'POČETNI RESURSI: Svaki igrač započinje sa: 2 Šoljice kafe (Coffee), 1 Bistrinom (Clarity droplet) u flašici, i 1 početnim klijentom kojeg bira iz drafta od 2 ponuđena.',
      'DODATNI SAN: Na početnog klijenta postavi 1 manifestni san sa vrha špila i 1 latentni san licem nadole ispod njega.'
    ],
    componentsNeeded: [
      '2x Lične table igrača',
      '2x Mastionice (Inkpots)',
      'Početne kartice ideja (Starter ideas)',
      'Početni tokeni kafe i bistrine',
      '2x Ležaljke za pacijente'
    ],
    visualHint: 'Mastionica počinje u uglu sa napunjenim mastilom. Ne zaboravi 2 kafe!'
  },
  {
    id: 'setup_step_6_first_player',
    stepNumber: 6,
    title: 'Određivanje prvog igrača i balans u 2P',
    subTitle: 'First Player Selection & 2-Player Compensation',
    isTwoPlayerCrucial: true,
    twoPlayerNote: 'Drugi igrač dobija dodatnu kafu kao kompenzaciju za prednost prvog poteza!',
    instructions: [
      'Nasumično izaberite prvog igrača (možeš iskoristiti dugme u tabu "Tok Igre" ove aplikacije!).',
      'PRVI IGRAČ: Uzima oznaku prvog igrača (Džepni sat / Pocket watch). Zadržava standardne 2 kafe.',
      'DRUGI IGRAČ (Kompenzacija): Kao kompenzaciju za to što igra drugi, dobija +1 DODATNU KAFU (ukupno započinje sa 3 kafe) ili +1 dodatnu bistrinu po izboru.',
      'Sve je spremno za početak partije! Prvi igrač igra svoj prvi potez.'
    ],
    componentsNeeded: [
      'Oznaka prvog igrača (Pocket Watch token)',
      '1 dodatni token kafe za drugog igrača'
    ],
    visualHint: 'Drugi igrač startuje sa 3 kafe umesto 2!'
  }
];
