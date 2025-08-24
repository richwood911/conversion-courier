export interface Character {
  id: string;
  name: string;
  buffs: {
    [key: string]: {
      trust?: number;
      contentSpeed?: number;
      convert?: number;
      revenue?: number;
    };
  };
  debuffs?: {
    [key: string]: {
      energyDrain?: number;
      distractionRate?: number;
    };
  };
}

export const characters: Character[] = [
  {
    id: 'coach',
    name: 'The Coach',
    buffs: {
      consideration: { trust: 1.2 },
    },
  },
  {
    id: 'creator',
    name: 'The Creator',
    buffs: {
      awareness: { contentSpeed: 1.2 },
    },
    debuffs: {
      decision: { distractionRate: 1.1 },
    },
  },
  {
    id: 'consultant',
    name: 'The Consultant',
    buffs: {
      decision: { convert: 1.2 },
    },
    debuffs: {
      advocacy: { energyDrain: 1.1 },
    },
  },
  {
    id: 'merchant',
    name: 'The Merchant',
    buffs: {
      decision: { revenue: 1.2 },
    },
    debuffs: {
      awareness: { contentSpeed: 0.9 },
    },
  },
];
