export type StageId = 'awareness' | 'consideration' | 'decision' | 'advocacy';

export interface StageConfig {
  id: StageId;
  speed: number;
  obstacleRates: { [key: string]: number };
  targetDensity: number;
  kpiBenchmark: number;
  bonusThreshold: number;
}

export const stages: StageConfig[] = [
  {
    id: 'awareness',
    speed: 1.0,
    obstacleRates: {
      shiny: 0.5,
      guru: 0.2,
    },
    targetDensity: 0.6,
    kpiBenchmark: 0.7,
    bonusThreshold: 0.85,
  },
  {
    id: 'consideration',
    speed: 1.2,
    obstacleRates: {
      spam: 0.5,
      filter: 0.3,
    },
    targetDensity: 0.5,
    kpiBenchmark: 0.7,
    bonusThreshold: 0.85,
  },
  {
    id: 'decision',
    speed: 1.3,
    obstacleRates: {
      competitor: 0.4,
      paralysis: 0.4,
    },
    targetDensity: 0.4,
    kpiBenchmark: 0.7,
    bonusThreshold: 0.85,
  },
  {
    id: 'advocacy',
    speed: 1.4,
    obstacleRates: {
      burnout: 0.3,
      badReview: 0.3,
    },
    targetDensity: 0.4,
    kpiBenchmark: 0.7,
    bonusThreshold: 0.85,
  },
];
