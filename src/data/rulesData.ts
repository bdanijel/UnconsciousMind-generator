export interface RuleItem {
  id: string;
  title: string;
  originalTerm?: string;
  category:
    | 'turn'
    | 'two_player'
    | 'ideas_meeting'
    | 'insight_dial'
    | 'city_map'
    | 'clients_dreams'
    | 'treatises_research'
    | 'endgame_scoring'
    | 'faq';
  isTwoPlayerSpecial?: boolean;
  shortSummary: string;
  details: string[];
  tips?: string;
}

export const RULES_DATA: RuleItem[] = [
  // --- TURN STRUCTURE & OPTIONS ---
  {
    id: 'turn_options_overview',
    title: 'Mogućnosti u Potezu (Turn Options)',
    originalTerm: 'Three Turn Options Overview',
    category: 'turn',
    shortSummary:
      'Na svom potezu obavezno birate JEDNU od tri opcije: Iznesi Ideje (State Ideas), Opozovi Ideje (Recall Ideas), ili Leči Klijente (Treat Clients).',
    details: [
      '1. IZNESI IDEJE (State Ideas): Postavite 1 ili 2 Ideje (ili Svetle Ideje) na slobodno mesto za ideju na Stolu za Sastanke. Pomaknite Mastionicu za broj postavljenih ideja (+/- Svetle Ideje), aktivirajte usmerene akcije, i na kraju aktivirajte red/kolonu na tabli igrača gde je Mastionica stala.',
      '2. OPOZOVI IDEJE (Recall Ideas): Prebrojte na koliko različitih polja za ideje na Stolu za Sastanke imate bar jednu svoju Ideju i uzmite toliko Kafe. Vratite sve svoje Ideje u svoju zalihi i uzmite bonus Lokacije ili Okruga sa Mape Grada.',
      '3. LEČI KLIJENTE (Treat Clients): Izvršite terapiju nad jednim ili oba klijenta u svojim Ordinacijama (Primary/Secondary Office Rooms) koristeći izložene Uvide sa kartica Snova kako biste proizveli Bodove Terapije.',
      'KRAJ POTEZA: Proverite da li možete upotrebiti Kutije u obliku srca (Heart-Shaped Boxes) za dodatne bodove terapije, proglasite Katarzu / Izlečenje klijenta i dopunite prazne ordinacije novim klijentima.'
    ],
    tips: 'Planirajte poteze u ciklusima: obično ćete napraviti 2-3 "State Ideas" poteza kako biste postavili ideje i osvežili bročanik uvida, a zatim "Recall Ideas" ili "Treat Clients".'
  },

  // --- TWO PLAYER SPECIFICS ---
  {
    id: 'two_player_blocked_spaces',
    title: 'Blokirana Polja Ideja u 2 Igrača (8 Polja)',
    originalTerm: '2-Player Idea Spaces Restrictions',
    category: 'two_player',
    isTwoPlayerSpecial: true,
    shortSummary:
      'U igri u 2 igrača, OBAVEZNO blokirajte svih 8 polja za ideje u krajnjoj levoj i krajnjoj desnoj koloni Stola za Sastanke.',
    details: [
      'Blokiranje: Pre početka igre stavite po 1 Ideju neiskorišćene boje igrača na svako polje ideja u skroz levoj i skroz desnoj koloni Stola za Sastanke (ukupno 8 blokiranih polja).',
      'Tesnac na Sastancima: Igračima ostaju dostupne samo unutrašnje kolone Stola za Sastanke za postavljanje svojih Ideja.',
      'Postavljanje Ideja: Na jedno slobodno mesto za ideju možete postaviti 1 ili 2 svoje Ideje (ili kombinaciju sa Svetlim Idejama). Za svaku postavljenu ideju aktivirate akciju ka kojoj je usmeren rep ideje.',
      'Nema istog usmerenja: Ako stavite 2 ideje na isto mesto, njihovi repovi moraju pokazivati na DVE RAZLIČITE akcije (ne mogu obe na istu akciju).'
    ],
    tips: 'U 2 igrača je konkurencija za unutrašnje akcije izuzetno visoka — pratite koje akcije protivnik želi pre nego što izvede Recall Ideas.'
  },
  {
    id: 'two_player_notebook_and_resources',
    title: 'Pločice Beležnice i Početna Kompenzacija u 2P',
    originalTerm: '2-Player Setup Adjustments & Balance',
    category: 'two_player',
    isTwoPlayerSpecial: true,
    shortSummary:
      'Za 2 igrača priprema se po 12 pločica beležnice Nivoa I i Nivoa II. Drugi igrač dobija +1 Kafu na startu.',
    details: [
      'Pločice Beležnice (Notebook Tiles): Iz kutije nasumično uzmite tačno 12 pločica Nivoa I i 12 pločica Nivoa II. Ostale se vraćaju u kutiju.',
      'Početna Kafa (Coffee): Prvi igrač startuje sa standardne 4 Kafe na svojoj tabli. Drugi igrač dobija +1 dodatak (+1 Kafa, ukupno 5 Kafe na startu) kao kompenzaciju za 2. potez.',
      'Draft Klijenata: Za prvi draft klijenata izvlači se 3 Rutinska Klijenta (broj igrača + 1). Drugi igrač bira prvi (obrnuti redosled igrača!).',
      'Dopuna Ponude Snova i Klijenata: Uvek održavajte 4 izložena Manifestna sna i po 2 Rutinska i Case-Study klijenta na tabli.'
    ]
  },

  // --- STATE IDEAS & MEETING TABLE ---
  {
    id: 'state_ideas_action',
    title: 'Iznesi Ideje & Kretanje Mastionice (State Ideas)',
    originalTerm: 'State Ideas & Inkpot Movement',
    category: 'ideas_meeting',
    shortSummary:
      'Postavite 1 ili 2 ideje na Stol za Sastanke, pomerite Mastronicu za toliko polja i aktivirajte akcije stola i red/kolonu na svojoj tabli.',
    details: [
      '1. Postavljanje Ideja: Uzmite 1 ili 2 Ideje iz svoje zalihe i stavite ih na prazno mesto za ideju na Stolu za Sastanke. Repovi ideja moraju usmeravati ka akcijama koje želite da aktivirate.',
      '2. Svetle Ideje (Bright Ideas): Možete priložiti Svetle Ideje uz svoje Ideje (ili ih staviti same). Svetle Ideje vam omogućavaju da pojačate kretanje Mastionice za +/-1 po žetonu ili aktivirate dodatne akcije, ali se na kraju vašeg poteza OBAVEZNO vraćaju u opštu zalihu.',
      '3. Pomaknite Mastronicu: Mastionica na vašoj tabli se pomera u smeru kazaljke na satu za broj postavljenih ideja (+/- Svetle Ideje). Mora se pomeriti za bar 1 polje (ne može 0).',
      '4. Aktivirajte Akcije Stola: Za svaku ideju usmerenu ka akcionom polju, izvršite tu akciju (do 2 puta po potezu ako su 2 ideje usmerene na nju).',
      '5. Aktivirajte Efekat Mastionice: Aktivirajte polje na vašoj tabli gde je Mastionica stala (red pločica beležnice, kolonu pločica ili traku Reputacije).'
    ],
    tips: 'Kada Mastionica pređe preko simbola za otključavanje Ideje na uglovima table, odmah uklanjate najlevlju zaključanu Ideju sa svoje table u svoju zalihu i otključavate odgovarajuću kolonu!'
  },
  {
    id: 'meeting_table_9_actions',
    title: 'Akcije Stola za Sastanke (Meeting Table Actions)',
    originalTerm: 'The 9 Meeting Table Action Spaces',
    category: 'ideas_meeting',
    shortSummary:
      'Stol za Sastanke sadrži 9 različitih akcija koje vam omogućavaju dobijanje pločica beležnice, kartica istraživanja, kretanje po Beču i manipulaciju uvida.',
    details: [
      '1. Uzmi Pločicu Beležnice Nivoa I / II (Krajnje levo - 1 Kafa): Uzmite gornju pločicu sa steka Nivoa I ili Nivoa II.',
      '2. Uzmi Pločicu Beležnice (Srednja kolona - 2 Kafe): Uzmite pločicu iz srednje kolone i odmah aktivirajte njen Banner efekat.',
      '3. Uzmi Pločicu Beležnice (Desna kolona - 3 Kafe): Uzmite pločicu iz desne kolone i odmah aktivirajte i njen Glavni efekat i Banner efekat.',
      '4. Uzmi Karticu Istraživanja (Research Card): Uzmite jednu od izloženih kartica istraživanja ili vucite sa špila.',
      '5. Objavi Naučni Rad (Publish Treatise): Platite potrebne boje Volumen-a (sa svojih ili citiranih tuđih kartica istraživanja) i objavite pločicu Naučnog Rada.',
      '6. Pomeri Profesora (Advance Professor): Pomerite figuricu svog Profesora za 1-2 polja u krugu po Lokacijama Mape Grada i aktivirajte bonus te Lokacije.',
      '7. Pomeri Freuda (Advance Freud): Pomerite figuricu Freuda za 1-2 polja na Mapi Grada i aktivirajte bonus Lokacije.',
      '8. Generiši / Uzmi Uvid (Generate Insight): Uzmite uvid iz rezerve u centru bročanika i stavite ga na odgovarajući prsten.',
      '9. Unapredi / Transformiši Uvid (Elevate / Transfer Insight): Pomerite uvid za jedan prsten spolja ili u susedni obojeni sektor.'
    ]
  },
  {
    id: 'notebook_placement_and_rows',
    title: 'Postavljanje Pločica Beležnice i Otključavanje Uvida',
    originalTerm: 'Notebook Tile Grid & Player Board Unlocks',
    category: 'ideas_meeting',
    shortSummary:
      'Pločice beležnice stavljate u mrežu 3x3 na vašoj tabli. Za popunjavanje određenih polja moraju biti izlečeni klijenti.',
    details: [
      'Postavljanje: Stavite dobijenu pločicu beležnice stranom banera nadole u najlevlje slobodno polje bilo kojeg reda na vašoj tabli.',
      'Uslov Izlečenih Klijenata: Polja sa ikonom klijenta zahtevaju izlečene klijente: 1. natkrivena ikona = 0 izlečenih, 2. ikona = 1 izlečen klijent, 3. ikona = 2 izlečena klijenta.',
      'Kompletiranje Reda ili Kolone: Kada popunite sva 3 polja u redu ili koloni, OMAH uzimate obojeni uvid svoje boje sa kraja tog reda/kolone u rezervu centra bročanika!',
      'Nove Moći: Uklanjanjem obojenog uvida sa ivice vaše table otključavate trajni efekat koji se aktivira svaki put kada Mastionica pokrene taj red ili kolonu.',
      'Punih 9 Pločica: Kada popunite svih 9 polja u mreži beležnice, odmah napredujete 1 korak na traci Reputacije.'
    ]
  },

  // --- INSIGHT DIAL & MECHANICS ---
  {
    id: 'insight_dial_structure',
    title: 'Bročanik Uvida: Prstenovi i Kvaliteti (Insight Dial)',
    originalTerm: 'Insight Dial Anatomy & Rules',
    category: 'insight_dial',
    shortSummary:
      'Bročanik se sastoji od 3 prstena nivoa (Inner/Minor, Middle/Median, Outer/Major), 3 obojena sektora (Growth/Green, Freedom/Purple, Passion/Red) i Centra Rezerve.',
    details: [
      'PRSTENOVI (Nivoi Uvida): Unutrašnji (Minor / Dijamant), Srednji (Median / Heksagon), Spoljašnji (Major / Krug).',
      'SEKTORI (Kvaliteti Uvida): Rast / ZELENI (Growth/Biljka), Sloboda / LJUBIČASTI (Freedom/Ptica), Strast / CRVENI (Passion/Plamen).',
      'ZJEDNIČKI VS OBOJENI UVIDI: Imate 7 zajedničkih belih uvida na bročaniku (koji nikada ne napuštaju bročanik) i 6 obojenih uvida u vašoj boji koji se postepeno otključavaju.',
      'KORIŠĆENJE UVIDA: Kada platite uvid za akciju ili terapiju, sklanjate ga sa prstena i stavljate u Centar Rezerve na bročaniku.',
      'PREKOMPENZACIJA (Overcompensation): Ako vam treba unutrašnji (Minor) uvid, možete upotrebiti uvid sa višeg prstena (Median ili Major), ali ne dobijate "kusur"!'
    ],
    tips: 'Svi uvidi u Centru Rezerve nemaju nivo ni kvalitet dok se akcijom "Generate Insight" ne postave na konkretan prsten i sektor.'
  },
  {
    id: 'insight_manipulation_effects',
    title: 'Efekti Manipulacije Uvida (Generate, Elevate, Transfer, Suppress)',
    originalTerm: 'Insight Movement Effects',
    category: 'insight_dial',
    shortSummary:
      'Različiti efekti vam omogućavaju pomeranje uvida po bročaniku za usklađivanje sa zahtevima snova.',
    details: [
      'Generiši (Generate): Uzmite uvid iz Centra Rezerve i stavite ga na označeni prsten i sektor. Ako nema uvida u centru, možete premestiti jedan sa bilo kog mesta na bročaniku.',
      'Uznesi (Elevate): Pomerite uvid za jedan prsten SPOLJA (npr. sa Minor na Median, ili Median na Major) unutar istog obojenog sektora. Ne može iz centra rezerve!',
      'Prenesi (Transfer): Pomerite uvid u SUSEDNI obojeni sektor uz zadržavanje istog prstena nivoa.',
      'Potisni (Suppress): Pomerite uvid za jedan prsten UNUTRA (npr. sa Major na Median, ili Minor u Centar Rezerve). Često se koristi kao cena za pokretanje jakih sporednih efekata!',
      'Kutija u obliku srca (Heart-Shaped Box): U bilo kom trenutku svog poteza možete upotrebiti 1 set od po jednog Major, Median i Minor uvida (bilo koje boje) da uzmete 1 Kutiju u obliku srca na svojoj tabli!'
    ]
  },

  // --- RECALL IDEAS & CITY MAP ---
  {
    id: 'recall_ideas_action',
    title: 'Opozovi Ideje & Bonusi Mape (Recall Ideas)',
    originalTerm: 'Recall Ideas Action & City Map Claiming',
    category: 'city_map',
    shortSummary:
      'Uzmite Kafu za zakupljena polja, vratite sve svoje ideje u zalihu i uzmite bonus Lokacije ili Okruga na Mapi Beča.',
    details: [
      '1. Brojanje & Kafa: Prebrojte koliko RAZLIČITIH polja za ideje na Stolu za Sastanke sadrži bar jednu vašu Ideju. Uzmite toliko Kafe u svoju zalihu (max 6 Kafe).',
      '2. Povratak Ideja: Vratite sve svoje Ideje sa Stola za Sastanke nazad u svoju zalihu ideja. (Svetle ideje se vraćaju u opštu zalihu).',
      '3. Izbor Bonusa sa Mape Grada: Izaberite JEDAN od sledeća dva bonusa:',
      '   A) BONUS LOKACIJE: Izaberite Lokaciju gde se trenutno nalazi vaš Profesor, Freud ili Novinar (Journalist). Izbrojte koliko odgovarajućih Tagova Lokacije imate u igri (na svojim pločicama beležnice, karticama istraživanja i objavljenim radovima) i aktivirajte efekat te Lokacije toliko puta!',
      '   B) BONUS OKRUGA: Izaberite Okrug (Zeleni, Ljubičasti ili Crveni) gde se nalazi vaš Profesor, Freud ili Novinar. Ako imate bar onoliko tagova tog okruga koliko zahteva slobodno polje u tom okrugu (npr. 2, 3 ili 4 taga), uzmite Žeton Okruga sa vrha steka u tom okrugu!'
    ],
    tips: 'Kada uzmete Žeton Okruga sa vrha koji na sebi ima poen Reputacije, odmah napredujete 1 korak na traci Reputacije na Mapi Grada!'
  },
  {
    id: 'city_map_freud_and_professors',
    title: 'Kretanje Freuda, Profesora i Novinara na Mapi',
    originalTerm: 'Moving Figures & Location Goal Tiles',
    category: 'city_map',
    shortSummary:
      'Figurice se kreću u krug po 6 Lokacija Mape Grada i aktiviraju specifične bonuse te znamenitosti.',
    details: [
      'Kretanje: Akcije "Advance Professor" ili "Advance Freud" pomera figuricu za 1-2 Lokacije u smeru kazaljke na satu na Mapi Grada.',
      'Aktivacija pri kretanju: Čim pomerite Profesora ili Freuda na novu Lokaciju, OMAH možete izvesti efekat prikazan na toj Lokaciji (jednom ili više puta u zavisnosti od vaših tagova).',
      'Lokacije na Mapi: Katedrale, Biblioteke, Univerziteti, Bolnice, Kafane, Pozorišta i Parkovi daju različite resurse, generisanje uvida ili besplatne akcije terapije.',
      'Pločice Ciljeva Lokacija (Location Goal Tiles): Na dnu stola izloženo je 7 pločica ciljeva. Kada stavite svoj obojeni uvid u polje okruga ili objavite rad, ispunjavate uslove za ove ciljeve.'
    ]
  },

  // --- CLIENTS, DREAMS & GRIEF LAYERS ---
  {
    id: 'treat_clients_action',
    title: 'Leči Klijente (Treat Clients)',
    originalTerm: 'Treat Clients Action & Therapy Points',
    category: 'clients_dreams',
    shortSummary:
      'Iskoristite izložene Uvide na karticama Snova u vašim Ordinacijama kako biste pomerili Markere Terapije ka Izlečenju i Katarzi.',
    details: [
      '1. Izbor Klijenta: Možete lečiti jednog ili OBA klijenta u vašim Ordinacijama (Primary i Secondary Office Room) po jednom u istoj akciji.',
      '2. Upotreba Snova: Svaka izložena kartica Manifestnog Sna (koja leži preko Latentnog Sna) ima na dnu prikazane potrebne Uvide. Potrošite te Uvide sa svog bročanika (staknite ih u Centar Rezerve) da proizvedete prikazane Bodove Terapije (Therapy Points) i uzmete bonuse sa kartice sna.',
      '3. Pomak Markera Terapije: Za svaki proizvedeni Bod Terapije, pomerite Marker Terapije za 1 polje unapred na traci iznad tog Klijenta.',
      '4. Sloj Tuge (Grief Layer): Sloj tuge je providna kartica iznad klijenta sa sopstvenom trakom terapije. Kada Marker Terapije stigne do kraja trake na Sloju Tuge, dostigli ste KATARZU!',
      '5. Uklanjanje Sloja Tuge: Odmah uklonite providni Sloj Tuge i vratite ga u kutiju. Ako je to bio vaš početni klijent, otključava se vaša Druga Ordinacija (Secondary Office Room)!'
    ],
    tips: 'Na kraju svog poteza možete upotrebiti sačuvane Kutije u obliku srca (Heart-Shaped Boxes): za svaku upotrebljenu kutiju pomerite Marker Terapije za dodatno 1 polje unapred!'
  },
  {
    id: 'curing_clients_and_catharsis',
    title: 'Izlečeni Klijenti i Katarza (Cured Clients)',
    originalTerm: 'Reaching Catharsis & Cured Clients',
    category: 'clients_dreams',
    shortSummary:
      'Potpuno izlečen klijent napušta ordinaciju, oslobađa mesto za novog klijenta i donosi pobedničke bodove.',
    details: [
      'Katarza (Catharsis): Kada se ukloni Sloj Tuge sa klijenta, klijent je oslobođen potisnute traume. Terapija se sada nastavlja direktno na kartici klijenta.',
      'Potpuno Izlečenje: Kada Marker Terapije stigne do poslednjeg polja na samoj kartici Klijenta, klijent je POTPUNO IZLEČEN!',
      'Nagrađivanje: Odmah osvajate Pobedničke Bodove prikazane na dnu kartice Klijenta i stavljate karticu u svoju arhivu izlečenih slučajeva.',
      'Dopuna na kraju poteza: Ako na kraju poteza imate praznu Ordinaciju, OBAVEZNO morate izabrati novog Klijenta iz ponude (Rutinskog ili Case-Study klijenta), dodeliti mu Latentni i Manifestni San, i postaviti nov Sloj Tuge iz dozatora!'
    ]
  },

  // --- RESEARCH & TREATISES ---
  {
    id: 'research_and_publishing',
    title: 'Istraživanja i Objavljivanje Naučnih Radova (Treatises)',
    originalTerm: 'Research Cards, Citing & Publishing Treatises',
    category: 'treatises_research',
    shortSummary:
      'Sakupljajte kartice Istraživanja sa odgovarajućim bojama Volumen-a, citirajte radove rivala i objavljujte monumentalne Naučne Radove.',
    details: [
      'Boje Volumen-a (Volume Colors): Naučni Radovi zahtevaju kombinacije boja Volumen-a (Crvena, Zelena, Ljubičasta, Plava, Žuta).',
      'Citiranje Rado-va (Citing): Kada objavljujete Naučni Rad, morate obezbediti bar 1 Volumen sa svojih kartica istraživanja u igri. Preostale potrebne Volumene možete CITIRATI sa kartica istraživanja drugih igrača (ili svojih preostalih)!',
      'Bonus za Citiranje: Igrač čiji ste rad citirali odmah dobija bonus naveden na dnu citirane kartice (npr. Kafa ili Uvid)!',
      'Objavljivanje: Kada objavite Naučni Rad, uzmite pločicu Rada iz ponude, stavite jedan svoj OBOJENI UVID iz rezerve na tu pločicu da označite vlasništvo, i odmah osvojite Pobedničke Bodove ispisane u sredini pločice!'
    ],
    tips: 'Objavljeni radovi vam donose trajne Tagove Lokacija koji pojačavaju vaše akcije pri kretanju po Mapi Beča!'
  },

  // --- ENDGAME & SCORING ---
  {
    id: 'endgame_trigger_and_scoring',
    title: 'Okidač Kraja Igre i Finalno Bodovanje',
    originalTerm: 'End-Game Trigger & Final Scoring',
    category: 'endgame_scoring',
    shortSummary:
      'Kraj igre se aktivira kada Freudov marker Reputacije stigne na polje 10. Igra se završava tekućom rundom i još JEDNOM završnom rundom.',
    details: [
      'Okidač: Kada Freudov marker napreduje do 10. polja na traci Reputacije (ili pređe preostale žetone), završava se tekuća runda i igra se još JEDNA cela završna runda.',
      'FINALNO BODOVANJE (7 Kategorija):',
      '1. Traka Reputacije: Bodovi od trenutne pozicije vašeg markera na traci + multiplikator po objavljenom radu i izlečenom klijentu na osnovu ranga!',
      '2. Kontrola Okruga na Mapi: Bodovi za prisustvo vaših obojenih uvida u 1, 2 ili 3 različita Okruga (1 okrug = 4 VP, 2 okruga = 10 VP, 3 okruga = 16 VP).',
      '3. Popunjeni Redovi Beležnice: Bodovi za kompletirane redove u vašoj mreži beležnice 3x3 (1 red = 2 VP, 2 reda = 5 VP, 3 reda = 16 VP).',
      '4. Različiti Tagovi Lokacija: Bodovi za setove različitih tagova lokacija u igri (1 tag = 1 VP, 2 = 3 VP, 3 = 6 VP, 4 = 10 VP, 5 = 15 VP, 6 = 21 VP).',
      '5. Case-Study Klijenti bez Sloja Tuge: Ispunjenje specifičnih uslova bodovanja sa kartica Case-Study klijenata koji su stigli do Katarze / izlečeni.',
      '6. Objavljeni Naučni Radovi: Pobednički bodovi sa svih pločica Naučnih Radova sa vašim obojenim uvidom.',
      '7. Preostali Resursi: Svaka Kutija u obliku srca = 2 VP. Svake 3 Kafe se pretvaraju u 1 Svetlu Ideju, i svaka Svetla Ideja donosi 1 VP.',
      'Nerešeno (Tie-Breaker): U slučaju izjednačenja, pobeđuje igrač sa višim nivoom Reputacije na traci (ako su na istom polju, pobeđuje igrač čiji je marker na dnu steka!).'
    ]
  },

  // --- FAQ ---
  {
    id: 'faq_overcompensation',
    title: 'FAQ: Mogu li platiti viši nivo Uvida od traženog?',
    originalTerm: 'Overcompensating Insights Rule',
    category: 'faq',
    shortSummary:
      'Da! Pravilo prekompenzacije (Overcompensation) vam dozvoljava upotrebu višeg nivoa uvida.',
    details: [
      'Pravilo: Ako akcija ili san traži unutrašnji uvid (Minor / Dijamant), možete upotrebiti srednji (Median) ili spoljašnji (Major) uvid iste ili bilo koje tražene boje.',
      'Nema kusura: Ako platite Major uvid za uslov koji je tražio Minor, Major uvid ide direktno u Centar Rezerve na vašem bročaniku. Ne dobijate preostale nivoe nazad!'
    ]
  },
  {
    id: 'faq_bright_ideas_return',
    title: 'FAQ: Šta se dešava sa Svetlim Idejama na kraju poteza?',
    originalTerm: 'Bright Ideas End-of-Turn Cleanup',
    category: 'faq',
    shortSummary:
      'Sve Svetle Ideje (Bright Ideas) se OBAVEZNO uklanjaju sa Stola za Sastanke na kraju vašeg poteza!',
    details: [
      'Uklanjanje: Svetle Ideje su privremeni resurs koji služi samo tokom vašeg poteza. Na kraju poteza sklanjaju se sa Stola za Sastanke i vraćaju u opštu zalihu.',
      'Obične Ideje: Vaše obične drvene Ideje u vašoj boji OSTAJU na Stolu za Sastanke dok ih ne povučete akcijom "Recall Ideas".'
    ]
  },
  {
    id: 'faq_coffee_limit',
    title: 'FAQ: Koliki je maksimalni kapacitet Kafe na tabli?',
    originalTerm: 'Coffee Track Upper Limit',
    category: 'faq',
    shortSummary: 'Maksimalni kapacitet je 6 Šoljica Kafe.',
    details: [
      'Ograničenje: Vaš marker kafe ne može ići preko polja "6". Svaka kafa koju biste dobili preko ovog limita se zanemaruje i propada.'
    ]
  }
];
