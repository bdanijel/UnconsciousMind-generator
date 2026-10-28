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
    id: 'setup_step_1_city_map',
    stepNumber: 1,
    title: 'Mapa Grada, Žetoni Okruga & Freudova Reputacija',
    subTitle: 'City Map Board, District Tokens & Freud Figure',
    instructions: [
      'Postavite Mapu Grada (City Map) i Sto za Sastanke (Meeting Table) u sredinu stola.',
      'ŽETONI OKRUGA (District Tokens): Razvrstajte 24 žetona okruga po boji (Zeleni, Ljubičasti, Crveni). Odvojite po 1 žeton iz svake boje koji na sebi ima poen Reputacije. Poređajte ostale žetone na odgovarajuća polja na Mapi Grada, pa na vrh svakog steka stavite odvojeni žeton sa Reputacijom okrenut licem na gore.',
      'FREUDOV MARKER REPUTACIJE: Postavite crni Freudov marker reputacije na polje "1" na traci Reputacije na Mapi Grada.',
      'FREUDOVA FIGURICA: Uzmite 6 pločica ciljeva sa obojenim tagovima lokacija, nasumično izaberite jednu i postavite figuricu Freuda na odgovarajuću Lokaciju na Mapi Grada.',
      'CILJEVI LOKACIJA: Poredajte svih 7 pločica ciljeva lokacija (Location Goal Tiles) licem na gore u red između Mape Grada i Stola za Sastanke.'
    ],
    componentsNeeded: [
      'Mapa Grada (City Map)',
      '24 Žetona Okruga (8 u 3 boje)',
      'Freudova figurica',
      'Freudov marker reputacije',
      '7 Pločica Ciljeva Lokacija'
    ],
    visualHint: 'Freudov marker ide na polje 1 trake Reputacije. Žetoni okruga sa poenom reputacije idu na sam vrh svakog steka!'
  },
  {
    id: 'setup_step_2_meeting_table_2p',
    stepNumber: 2,
    title: 'Sto za Sastanke & Blokiranje 8 Polja u 2 Igrača',
    subTitle: 'Meeting Table Display & 2-Player Space Blocking',
    isTwoPlayerCrucial: true,
    twoPlayerNote: 'OBAVEZNO ZA 2 IGRAČA: Blokirajte svih 8 polja u krajnjoj levoj i krajnjoj desnoj koloni!',
    instructions: [
      'BLOKIRANJE POLJA (2-Player Blocking): U igri u 2 igrača, stavite po 1 drvenu Ideju neiskorišćene boje igrača na svako polje ideja u krajnje levoj i krajnje desnoj koloni Stola za Sastanke (ukupno 8 blokiranih polja). Ova polja su NEDOSTUPNA tokom čitave partije!',
      'PRIPREMA PLOČICA BELEŽNICE ZA 2P: Odvojite pločice Nivoa I i Nivoa II. U 2 igrača koristi se tačno 12 pločica Nivoa I i 12 pločica Nivoa II (nasumično izaberite 12 i vratite ostale u kutiju).',
      'FORMIRANJE PONUDE PLOČICA: Promešajte stekove Nivoa I i Nivoa II posebno i stavite ih u gornje levo i donje levo polje prikaza. Okrenite gornje pločice sa oba steka stranom banera i popunite srednje i desno polje u oba reda.'
    ],
    componentsNeeded: [
      'Sto za Sastanke (Meeting Table)',
      '8 Ideja neiskorišćene boje za blokadu',
      '12 Pločica Beležnice Nivoa I + 12 Nivoa II'
    ],
    visualHint: 'U 2 igrača unutrašnje kolone su jedina dostupna polja za postavljanje vaših ideja na sastancima!'
  },
  {
    id: 'setup_step_3_client_and_dream_displays',
    stepNumber: 3,
    title: 'Prikaz Klijenata, Snova i Slojeva Tuge',
    subTitle: 'Clients, Manifest & Latent Dreams & Grief Layer Dispenser',
    instructions: [
      'RUTINSKI KLIJENTI (1900–1903): Promešajte špil Rutinskih Klijenata (plavi tab) i postavite ga iznad Mape Grada. Otkrijte 2 Rutinska Klijenta licem na gore u red desno od špila.',
      'CASE-STUDY KLIJENTI (1904–1907): Promešajte špil Case-Study Klijenata (crveni tab) i postavite ga desno od Rutinskih Klijenata. Otkrijte 2 Case-Study Klijenta licem na gore desno od špila.',
      'DOZATOR SLOJEVA TUGE: Promešajte translucentne kartice Slojeva Tuge, stavite ih u dozator i postavite levo od špila klijenata. Izvucite po 1 Sloj Tuge i stavite ga preko svakog od 4 otkrivena klijenta!',
      'SNOVI: Promešajte špil Latentnih Snova (tamna poleđina) i stavite ga iznad klijenata. Promešajte špil Manifestnih Snova (svetla poleđina) i otkrijte 4 Manifestna Sna licem na gore desno od špila.'
    ],
    componentsNeeded: [
      'Špil Rutinskih Klijenata (12 kartica)',
      'Špil Case-Study Klijenata (12 kartica)',
      '24 Sloja Tuge + Dozator',
      '24 Latentna + 24 Manifestna Sna'
    ]
  },
  {
    id: 'setup_step_4_research_and_treatises',
    stepNumber: 4,
    title: 'Kartice Istraživanja, Naučni Radovi i Svetle Ideje',
    subTitle: 'Research Cards, Treatise Tiles & General Supply',
    instructions: [
      'KARTICE ISTRAŽIVANJA (Research Cards): Promešajte špil kartica Istraživanja (36 kartica) i postavite ga pored stola. Otkrijte 2 kartice Istraživanja licem na gore u red pored špila.',
      'NAUČNI RADOVI (Treatise Tiles): Razvrstajte 9 pločica Naučnih Radova u 3 steka prema veličini (Volume bojama) tako da su vidljive samo ikonice boja na dnu.',
      'GENERALNA ZALIHA: Pripremite opštu zalihu žetona Svetlih Ideja (Bright Idea tokens) i zajedničkih belih Uvida (Insight pieces).'
    ],
    componentsNeeded: [
      '36 Kartica Istraživanja',
      '9 Pločica Naučnih Radova',
      'Zaliha Svetlih Ideja',
      '28 Zajedničkih Uvida'
    ]
  },
  {
    id: 'setup_step_5_player_components',
    stepNumber: 5,
    title: 'Lične Table Igrača, Bročanik i Početni Resursi',
    subTitle: 'Player Boards, Insight Dials & Locked Components',
    instructions: [
      'Svaki igrač izabere boju i uzme: 1 Tablu Igrača, 1 Tablu Ordinacije (Office Board), 1 Figuricu Profesora, 1 Mastionicu, 1 Marker Boda (VP), 1 Marker Reputacije, 2 Markera Terapije, 6 Ideja, i 6 Obojenih Uvida u svojoj boji.',
      'Takođe uzima: 1 Bročanik Uvida, 1 Marker Kutije u obliku srca, 1 Marker Kafe i 7 Zajedničkih Uvida.',
      'POSTAVLJANJE NA TABLU IGRAČA:',
      '• Mastionica na gornje polje za Mastronicu.',
      '• Marker Kutije u obliku srca na polje "0" odgovarajuće trake.',
      '• Marker Kafe na polje "4" trake Kafe (za prvog igrača).',
      '• 3 Ideje zakljčane iznad kolona pločica, a 3 Ideje u sopstvenu zalihu ideja.',
      '• 6 Obojenih Uvida zaključano u označenim poljima na ivicama table.',
      '• BROČANIK: Stavite 7 zajedničkih belih uvida u Centar Rezerve na bročaniku.',
      '• Oznake Boda na "0/100" trake na Mapi Grada, i Reputacije na "0" trake Reputacije.'
    ],
    componentsNeeded: [
      '2x Table Igrača & Ordinacija',
      '2x Bročanici Uvida',
      '2x Mastionice',
      'Markeri Kafe i Kutije u obliku srca',
      '12 Obojenih Uvida + 14 Zajedničkih Uvida'
    ],
    visualHint: 'Mastionica počinje u gornjem polju. Uvidi su u centru bročanika!'
  },
  {
    id: 'setup_step_6_first_player_and_balance_2p',
    stepNumber: 6,
    title: 'Prvi Igrač & Kompenzacija Kafe u 2P',
    subTitle: 'First Player Selection & 2-Player Coffee Compensation',
    isTwoPlayerCrucial: true,
    twoPlayerNote: 'DRUGI IGRAČ DOBIJA +1 KAFU (Ukupno 5 Kafe na startu)!',
    instructions: [
      'Odredite prvog igrača (npr. ko je nedavno napravio Frojdovsku omašku ili virtuelnim novčićem). Prvi igrač uzima žeton Prvog Igrača.',
      'RESURSI PREMA REDOSLEDU:',
      '• PRVI IGRAČ: Počinje sa standardne 4 Kafe na svojoj tabli.',
      '• DRUGI IGRAČ (Kompenzacija): Dobija +1 DODATNU KAFU, te započinje sa ukupno 5 KAFE na svojoj tabli!',
      '• (Za 3/4 igrača: 3. igrač dobija 5 KAFE + 1 Srce, 4. igrač dobija 6 KAFE + 1 Srce).'
    ],
    componentsNeeded: [
      'Žeton Prvog Igrača (Freud side)',
      '+1 Kafa za drugog igrača'
    ],
    visualHint: 'Drugi igrač pomera svoj marker kafe na polje 5 umesto 4!'
  },
  {
    id: 'setup_step_7_drafting_clients_and_notebook',
    stepNumber: 7,
    title: 'Drafting Početnog Klijenta i Pločice Beležnice',
    subTitle: 'Drafting Routine Clients, Dreams & Starting Notebook Tile',
    instructions: [
      'Podelite svakom igraču po 1 nasumičnu karticu Ordinacije (Office Room card).',
      'DRAFTING KLIJENATA (Obrnuti redosled!): Otkrijte 3 Rutinska Klijenta sa postavjenim Slojevima Tuge (za 2 igrača). Počevši od DRUGOG igrača pa u smeru suprotnom od kazaljke:',
      '1. Izaberite 1 Rutinskog Klijenta sa Slojem Tuge i stavite ga u svoju Primarnu Ordinaciju (Primary Office Room).',
      '2. Izvucite 1 Latentni San i stavite ga u gornje polje iznad klijenta.',
      '3. Izaberite 1 Manifestni San iz ponude i stavite ga PREKO Latentnog Sna.',
      '4. Izračunajte zbir Bodova Terapije na Klijentu i Sloju Tuge i stavite Marker Terapije na to polje na traci!',
      'POČETNA PLOČICA BELEŽNICE: Uzmite 3 početne pločice sa simbolom vašeg Klijenta, izaberite 1 da zadržite u beležnici, a ostale vratite u kutiju.'
    ],
    componentsNeeded: [
      '2x Kartice Ordinacije',
      '3 Rutinska Klijenta sa Slojevima Tuge',
      '3 Početne Pločice Beležnice'
    ],
    visualHint: 'Sve je spremno za prvi potez! Prvi igrač započinje partiju.'
  }
];
