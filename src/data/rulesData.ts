export interface RuleItem {
  id: string;
  title: string;
  originalTerm?: string;
  category: 'turn' | 'two_player' | 'notebook' | 'treatment' | 'vienna' | 'cafe' | 'faq';
  isTwoPlayerSpecial?: boolean;
  shortSummary: string;
  details: string[];
  tips?: string;
}

export const RULES_DATA: RuleItem[] = [
  // FAZA POTEZA
  {
    id: 'turn_structure',
    title: 'Struktura poteza (Ukratko)',
    originalTerm: 'Turn Structure Overview',
    category: 'turn',
    shortSummary: 'Svaki igrač na svom potezu mora odabrati jedan od 2 glavna pristupa: Rad na idejama (Notebook) ili Poseta gradu/društvu.',
    details: [
      '1. POSTAVLJANJE IDEJE / MASTIONICA: Možeš postaviti novu karticu ideje na svoju beležnicu ili pomeriti mastionicu za onoliko polja koliko imaš postavljenih ideja u tom smeru.',
      '2. IZVRŠAVANJE AKCIJA: Aktiviraj red ili kolonu na beležnici gde je mastionica stala, ILI izvrši akciju lokacije na centralnoj tabli (Sastanak društva, Kafana Landtmann, Univerzitet).',
      '3. TERAPIJA KLIJENTA (Opciono): Ako imaš potrebnu bistrinu (Clarity) i uvide (Insights), možeš protumačiti san ili izlečiti manifestni/latentni sloj klijenta.',
      '4. KRAJ POTEZA: Proveri da li je postignut Proboj (Breakthrough), obnovi potrošene resurse i prosledi potez drugom igraču.'
    ],
    tips: 'Uvek prvo proceni da li ti nedostaje kafa pre nego što planiraš višestruka kretanja po tabli grada.'
  },
  {
    id: 'turn_step_1_notebook',
    title: 'Pomeranje mastionice i Rondel beležnice',
    originalTerm: 'Inkpot Movement & Idea Rondel',
    category: 'notebook',
    shortSummary: 'Mastionica se kreće duž ivica tvoje beležnice. Broj polja koja prelazi zavisi od postavljenih ideja.',
    details: [
      'Smer kretanja: Mastionica se kreće u smeru kazaljke na satu (ili suprotno, prema odabranoj strategiji prve postavke).',
      'Domet kretanja: Kreće se tačno onoliko polja koliko iznosi trenutni domet (osnovno 1-3 polja u zavisnosti od broja povezanih ideja).',
      'Aktivacija: Kada mastionica stane na određenu poziciju, aktiviraju se sve kartice ideja u tom redu ili toj koloni, redosledom po tvom izboru!',
      'Prelazak preko početne tačke: Svaki put kada mastionica napravi pun krug oko beležnice, dobijaš bonus (najčešće 1 kafu ili osvežavanje resursa).'
    ],
    tips: 'Pazi na redosled aktivacije: pametno poređane ideje ti mogu omogućiti da prvo dobiješ bistrinu, a odmah potom je iskoristiš za uvide u istoj koloni.'
  },
  {
    id: 'two_player_blocking',
    title: 'Blokirana polja u 2 igrača (Kafana & Sastanak)',
    originalTerm: '2-Player Action Space Restrictions',
    category: 'two_player',
    isTwoPlayerSpecial: true,
    shortSummary: 'U igri u 2 igrača prostor za akcije je znatno sužen kako bi se očuvala napetost i takmičenje za polja.',
    details: [
      'Kafana Landtmann (Café): Polja sa oznakom "3-4P" se NE KORISTE. Pre početka partije na njih se postavljaju neutralni diskovi/oznake.',
      'Sastanak Društva (Meeting Table): Svako mesto za raspravu prima samo 1 disk umesto normalnih 2. Kada tvoj protivnik zauzme to mesto, ono je zatvoreno za tebe dok se ne oslobodi.',
      'Bonus susreta: Ako želiš da odeš na polje koje već zauzima drugi igrač (gde je to dozvoljeno pravilima ekspanzije/specijalnih akcija), moraš platiti dodatnu 1 kafu banci!',
      'Osećaj tesnaca: U 2 igrača je ključno pratiti protivnikovu zalihu kafe, jer bez kafe ne mogu brzo blokirati željene lokacije.'
    ],
    tips: 'U 2 igrača Kafana Landtmann se brže prazni. Ako vidiš da protivniku gori pod nogama za novim idejama, razmisli o zauzimanju tog polja rano u rundi.'
  },
  {
    id: 'two_player_vienna',
    title: 'Grad Beč u 2 igrača i kretanje fijakera',
    originalTerm: 'Vienna City Board & Carriages in 2P',
    category: 'two_player',
    isTwoPlayerSpecial: true,
    shortSummary: 'Specifična pravila za kretanje fijakera i postavljanje konsultacija na mapi Beča.',
    details: [
      'Preskakanje protivničkog fijakera: Ako se tvoj fijaker kreće kroz ulicu gde se već nalazi fijaker drugog igrača, ne plaćaš penal kretanja, ali ne možeš završiti potez na ISTOM polju ulice osim ako je u pitanju velika raskrsnica sa dvostrukim mestom.',
      'Ograničenje konsultacija: U svakom okrugu Beča u 2 igrača postoji manje slobodnih mesta za ordinacije (samo polja sa oznakom 2P). Polja rezervisana za 3+ igrača se prekrivaju pločicama ili ignorišu.',
      'Većina u okruzima: Za bodovanje na kraju igre, u 2 igrača bodove dobija samo igrač sa striktnom većinom konsultacija u datom okrugu (u slučaju nerešenog, nijedan ili dele niže bodove prema tabeli).'
    ],
    tips: 'Ako tvoj protivnik ima 2 konsultacije u okrugu, a ti 1, dovoljno je da postaviš još jednu da izjednačiš i neutrališeš mu poene većine!'
  },
  {
    id: 'two_player_endgame',
    title: 'Okidač kraja igre u 2 igrača',
    originalTerm: 'End-Game Trigger for 2 Players',
    category: 'two_player',
    isTwoPlayerSpecial: true,
    shortSummary: 'Igra u 2 igrača se završava brže ako se fokusirate na lečenje klijenata.',
    details: [
      'Standardni okidač: Kraj igre se aktivira onog trenutka kada BILO KOJI igrač u potpunosti izleči svog 8. klijenta (ili ako jedan igrač dođe do kraja akademske trake na Univerzitetu).',
      'Završna runda: Igrač koji je aktivirao kraj završava svoj potez. Drugi igrač ima pravo na tačno JOŠ JEDAN poslednji potez kako bi izjednačio broj poteza u partiji.',
      'Finalni proboji: Na kraju partije obojica igrača mogu pretvoriti preostale resurse i primeniti poslednje otključane nagrade.'
    ],
    tips: 'Uvek broj koliko klijenata protivnik ima na tabli! Ako je na 7 izlečenih, nemoj planirati dugoročne poteze od 3 koraka jer će ti prekinuti partiju.'
  },
  {
    id: 'treatment_dreams',
    title: 'Manifestni vs Latentni snovi (Tumačenje)',
    originalTerm: 'Manifest vs Latent Dreams',
    category: 'treatment',
    shortSummary: 'Klijenti imaju višeslojne snove. Gornji (manifestni) sloj skriva dublje nesvesne (latentne) traume.',
    details: [
      'Manifestni san (Manifest Dream): Vidljiva kartica na vrhu klijentove table. Mora se rešiti PRVA. Za nju je obično potrebna Bistrina (Clarity) kako bi se otkrio pravi smisao simbola.',
      'Latentni san (Latent Dream): Skrivena trauma ispod. Tek kada ukloniš ili protumačiš manifestni san, stičeš pristup latentnom snu.',
      'Potrebni Uvidi (Insights): Svaki simbol na snu traži određenu boju uvida: Emocionalni (crveni), Kognitivni (plavi) ili Somatski (zeleni).',
      'Uklanjanje sloja: Kada isplatiš sve simbole uvida, kartica sna se okreće ili premešta u tvoju arhivu rešenih slučajeva i donosi trenutni bonus!'
    ],
    tips: 'Nemoj gomilati previše klijenata istovremeno (maksimalno 3 na ležaljkama). Bolje je izlečiti jednog do kraja nego imati trojicu napola započetih.'
  },
  {
    id: 'treatment_remedies',
    title: 'Lekovi i lečenje neuroza (Remedies & Breakthroughs)',
    originalTerm: 'Remedies & Breakthrough Track',
    category: 'treatment',
    shortSummary: 'Lekovi trajno ublažavaju simptome pacijenta i vode ka konačnom izlečenju.',
    details: [
      'Postavljanje leka: Kada izvršiš akciju lečenja (Remedy action), uzimaš pločicu leka i stavljaš je na odgovarajući simptom na klijentovoj kartici.',
      'Potpuno izlečenje: Klijent se smatra potpuno izlečenim tek kada su rešeni svi njegovi snovi I popunjena sva polja lekova!',
      'Proboj (Breakthrough): Potpuno izlečen klijent pomera tvoj marker proboja za 1 korak napred, donosi poene navedene na dnu kartice i otključava klijentov trajni akademski uticaj.'
    ],
    tips: 'Neki klijenti daju trenutni pomak na Univerzitetskoj traci kada ih izlečiš — to može biti prevaga za pobedu!'
  },
  {
    id: 'clarity_vs_insight',
    title: 'Razlika: Bistrina (Clarity) vs Uvidi (Insights)',
    originalTerm: 'Clarity vs Insights Mechanics',
    category: 'treatment',
    shortSummary: 'Česta zabuna kod novih igrača: Bistrina i Uvidi nisu isto i troše se na potpuno različite načine!',
    details: [
      'BISTRINA (Clarity - bela/staklena kapljica): Predstavlja mentalnu fokusiranost psihoanalitičara. Koristi se za pomeranje mastionice na tabli, manipulaciju redosleda snova i "osvetljavanje" mutnih delova podsvesti.',
      'UVIDI (Insights - obojeni tokeni): Predstavljaju konkretna naučna saznanja o problemu pacijenta. Troše se DIREKTNO na karticama snova za pokrivanje simbola neuroze.',
      'Konverzija: Neke ideje u beležnici omogućavaju pretvaranje 2 Bistrine u 1 Uvid po tvom izboru. Uvidi se nikada ne mogu automatski vratiti u Bistrinu bez specijalne akcije.'
    ],
    tips: 'Nikada nemoj ulaziti u fazu terapije bez barem 2 bistrine u rezervi, jer bez njih ne možeš rotirati teške snove.'
  },
  {
    id: 'cafe_landtmann',
    title: 'Kafana Landtmann i Pomoćnici',
    originalTerm: 'Café Landtmann & Assistants',
    category: 'cafe',
    shortSummary: 'Čuveno bečko svratište psihoanalitičara gde se pije kafa, razmenjuju ideje i unajmljuju studenti.',
    details: [
      'Kafa kao valuta: Kafa (Coffee) se koristi za dodatne korake fijakera u Beču (1 kafa = +1 korak), plaćanje poseta profesorima i ignorisanje određenih ograničenja.',
      'Uzimanje novih ideja: Na polici kafane uvek stoje dostupne karte ideja. Kada odeš u kafanu, možeš uzeti 1 ili 2 nove ideje za svoju beležnicu.',
      'Odmor i prepisivanje: Polje za odmor ti omogućava da očistiš iskorišćene ideje i resetuješ mastionicu na početak za svež novi ciklus.'
    ],
    tips: 'Maksimalni kapacitet šoljica kafe na tvojoj tabli je ograničen — nemoj uzimati kafu ako ti je skladište već puno, jer višak propada.'
  },
  {
    id: 'professors_university',
    title: 'Univerzitet, Predavanja i Profesori',
    originalTerm: 'University Track & Professor Consultations',
    category: 'vienna',
    shortSummary: 'Akademska reputacija u Beču donosi snažne multiplikatore bodova na kraju igre.',
    details: [
      'Susret sa profesorom: Kada tvoj fijaker stigne do zgrade gde se nalazi profesor, možeš platiti njegovu cenu (uvid ili kafa) da stekneš njegovu podršku.',
      'Objavljivanje rasprave (Treatise): Pomeranjem po akademskoj traci postavljaš svoje naučne teze. Svaka objavljena rasprava donosi bodove pomnožene sa tvojim nivoom reputacije.',
      'Permanentne pasivne moći: Neki profesori ti daju trajnu karticu sposobnosti koja menja osnovna pravila za tebe do kraja partije!'
    ],
    tips: 'U 2 igrača trka za Univerzitet je nemilosrdna. Ako jedan igrač previše odmakne, drugi mora kompenzovati lečenjem više klijenata.'
  },
  {
    id: 'faq_inkpot_loop',
    title: 'FAQ: Šta ako mastionica preskoči ivicu beležnice?',
    originalTerm: 'FAQ: Inkpot Board Loop Overflow',
    category: 'faq',
    shortSummary: 'Kada mastionica dođe do kraja jednog smera na beležnici, ona glatko prelazi na sledeću ivicu.',
    details: [
      'Nastavak kretanja: Koraci se ne gube! Ako imaš kretanje od 3 polja, a ostalo ti je samo 1 do ugla beležnice, mastionica skreće za 90 stepeni i nastavlja preostala 2 polja duž sledeće ivice.',
      'Aktivacija ugla: Ugaona polja takođe mogu aktivirati specifične dijagonalne ili dvostruke efekte ako imaš otključanu odgovarajuću tehniku.',
      'Pun krug: Ako u jednom snažnom potezu napraviš kompletan krug od 360 stepeni, uzimaš bonus punog kruga odmah.'
    ]
  },
  {
    id: 'faq_client_cure_timing',
    title: 'FAQ: Mogu li izlečiti klijenta delimično?',
    originalTerm: 'FAQ: Partial vs Full Client Healing',
    category: 'faq',
    shortSummary: 'Da! Terapija je postepen proces kroz više rundi.',
    details: [
      'Postepeni napredak: U jednom potezu možeš rešiti npr. samo 1 manifestni san ili staviti 1 lek. Klijent ostaje na tvojoj ležaljci između rundi.',
      'Nema gubljenja uloženog: Svi postavljeni uvidi i lekovi ostaju na klijentu dok se lečenje ne privede kraju.',
      'Preuzimanje bonusa: Manji bonusi sa rešenih snova se uzimaju ODMAH pri skidanju kartice sna, dok se veliki poeni klijenta dobijaju tek pri konačnom izlečenju.'
    ]
  },
  {
    id: 'faq_coffee_passing',
    title: 'FAQ: Da li se plaća kafa kada prolazim pored drugog igrača u Beču?',
    originalTerm: 'FAQ: Passing Neutral or Opponent Carriages',
    category: 'faq',
    shortSummary: 'Prosto prolaženje kroz isto polje ulice je besplatno, ali zaustavljanje na istom mestu nosi restrikcije.',
    details: [
      'Tranzit kroz ulicu: Slobodan je. Ne plaćaš kafu protivniku samo zato što si prošao kroz ulicu u kojoj stoji njegov fijaker.',
      'Završetak kretanja na istoj lokaciji: Dozvoljen je SAMO na lokacijama koje imaju više mesta za parkiranje fijakera (veće bečke znamenitosti). Na manjim jednosmernim stanicama nije dozvoljeno deliti polje.',
      'U 2 igrača: Kada je polje zauzeto, protivnik te tera na alternativnu (dužu) rutu, što te može koštati dodatne kafe za korake.'
    ]
  }
];
