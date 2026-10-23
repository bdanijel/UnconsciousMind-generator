export interface PlayerScoreData {
  name: string;
  // 1. Klijenti
  curedClientsPoints: number;
  curedClientsCount: number;
  // 2. Proboji
  breakthroughCount: number;
  breakthroughPointsMultiplier: number;
  // 3. Univerzitet
  publishedTreatisesPoints: number;
  academicReputationBonus: number;
  // 4. Grad Beč
  viennaDistrictsMajorityPoints: number;
  viennaConsultationsCount: number;
  // 5. Ciljevi i Dostignuća
  objectiveCardsPoints: number;
  milestonesPoints: number;
  // 6. Beležnica i Tehnike
  notebookMasteryPoints: number;
  // 7. Preostali resursi
  leftoverCoffee: number;
  leftoverClarity: number;
  leftoverInsights: number;
}

export const DEFAULT_PLAYER_1: PlayerScoreData = {
  name: 'Igrač 1 (Bela/Zlatna)',
  curedClientsPoints: 0,
  curedClientsCount: 0,
  breakthroughCount: 0,
  breakthroughPointsMultiplier: 3,
  publishedTreatisesPoints: 0,
  academicReputationBonus: 0,
  viennaDistrictsMajorityPoints: 0,
  viennaConsultationsCount: 0,
  objectiveCardsPoints: 0,
  milestonesPoints: 0,
  notebookMasteryPoints: 0,
  leftoverCoffee: 0,
  leftoverClarity: 0,
  leftoverInsights: 0
};

export const DEFAULT_PLAYER_2: PlayerScoreData = {
  name: 'Igrač 2 (Braon/Burgundi)',
  curedClientsPoints: 0,
  curedClientsCount: 0,
  breakthroughCount: 0,
  breakthroughPointsMultiplier: 3,
  publishedTreatisesPoints: 0,
  academicReputationBonus: 0,
  viennaDistrictsMajorityPoints: 0,
  viennaConsultationsCount: 0,
  objectiveCardsPoints: 0,
  milestonesPoints: 0,
  notebookMasteryPoints: 0,
  leftoverCoffee: 0,
  leftoverClarity: 0,
  leftoverInsights: 0
};

export function calculatePlayerTotal(player: PlayerScoreData): {
  total: number;
  breakdown: {
    clients: number;
    breakthroughs: number;
    university: number;
    vienna: number;
    objectives: number;
    notebook: number;
    resources: number;
  };
} {
  const clients = player.curedClientsPoints;
  const breakthroughs = player.breakthroughCount * player.breakthroughPointsMultiplier;
  const university = player.publishedTreatisesPoints + player.academicReputationBonus;
  // Vienna: većine u okruzima + 1 poen po postavljenoj ordinaciji
  const vienna = player.viennaDistrictsMajorityPoints + player.viennaConsultationsCount;
  const objectives = player.objectiveCardsPoints + player.milestonesPoints;
  const notebook = player.notebookMasteryPoints;
  // Svaka 2 preostala resursa = 1 poen (zaokruženo nadole prema pravilima)
  const totalResources = player.leftoverCoffee + player.leftoverClarity + player.leftoverInsights;
  const resources = Math.floor(totalResources / 2);

  const total = clients + breakthroughs + university + vienna + objectives + notebook + resources;

  return {
    total,
    breakdown: {
      clients,
      breakthroughs,
      university,
      vienna,
      objectives,
      notebook,
      resources
    }
  };
}
