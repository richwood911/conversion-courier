# Development Plan

This document outlines the planned phases and tasks to build the "Conversion Courier" game using Phaser 3, TypeScript, and Vite.

## Phase 0 — Foundations

- Define game design document (GDD).
- Lock scope for MVP: 4 stages (Awareness, Consideration, Decision, Advocacy), 4 characters, core loop with benchmarks, bonus mini‑game, Hustle Shop, upsell screens.
- Decide on technologies: Phaser 3 with TypeScript, Vite bundler, Aseprite for pixel art, bfxr for audio. Use LocalStorage for persistence. Host as a static site.

## Phase 1 — Core Loop & Systems

1. **Player controller**: Implement bike movement (lanes & drift), throw mechanics, energy meter.
2. **World & obstacles**: Build scrolling street, obstacles (shiny objects, algorithm walls, fake gurus), target houses with open/closed states.
3. **Stage logic**: Define stage configuration (speed, spawn rates, KPI benchmark, bonus thresholds) and evaluation.
4. **Characters & attributes**: Define character stats and stage-specific buffs/debuffs.
5. **UI Shell**: Title screen, character select, HUD, end-level screen.

## Phase 2 — Meta Systems

1. **Hustle Credits**: Implement currency awarded via the bonus mini‑game; temporary buffs expire after next stage.
2. **Bonus Mini‑Game**: Battleship-style mini-game triggered at ≥85% completion; award credits.
3. **Hustle Shop**: Purchase temporary buffs with credits.
4. **Upsell CTA Screens**: Post-level upgrade prompts that grant permanent buffs.

## Phase 3 — Content & Polish

- Create final pixel art and animations for stages, characters, assets, and obstacles.
- Add chiptune soundtrack and SFX.
- Write narrative quips for intros, benchmarks, rewards, and upgrades.
- Ensure accessibility options.
- Optimize performance.

## Phase 4 — QA & Release

- Playtest and tune difficulty.
- Implement simple analytics (optional).
- Finalize build and deploy.

## Project Structure

```
root/
  package.json           # Node/TypeScript dependencies and scripts
  vite.config.ts         # Vite configuration
  tsconfig.json          # TypeScript configuration
  README.md
  docs/
    development_plan.md  # This document
  src/
    main.ts              # Game entry point and Phaser configuration
    scenes/
      Boot.ts            # Boot logic (asset loading, configuration)
      Menu.ts            # Title and character select scenes
      Stage.ts           # Core game scene controlling levels
      BonusBattleship.ts # Battleship mini-game scene
      HustleShop.ts      # Hustle shop scene
      UpsellCTA.ts       # Upsell prompt scene
      Results.ts         # End-screen with stats
    config/
      characters.ts      # Character definitions and buffs
      stages.ts          # Stage definitions
      text.ts            # Text and dialogue strings
```

## Data Types

```ts
type StageId = "awareness" | "consideration" | "decision" | "advocacy";

interface Character {
  id: string;
  name: string;
  buffs: Partial<Record<StageId, { trust?: number; contentSpeed?: number; convert?: number; revenue?: number }>>;
  debuffs?: Partial<Record<StageId, { energyDrain?: number; distractionRate?: number }>>;
}

interface StageConfig {
  id: StageId;
  speed: number;
  obstacleRates: Record<string, number>;
  targetDensity: number;
  kpiBenchmark: number;
  bonusThreshold: number;
}

interface PermanentUnlocks {
  brandGuide?: boolean;
  emailAutomation?: boolean;
  funnelSession?: boolean;
  crmBlog?: boolean;
}

interface PlayerRunState {
  characterId: Character["id"];
  energy: number;
  buffsNextStage: {
    speed?: boolean;
    doubleThrow?: boolean;
    stamina?: boolean;
    shield?: boolean;
  };
  credits: number;
  unlocks: PermanentUnlocks;
}
```

This plan provides the blueprint for building the game. Use it as a guideline for tasks and file structure.
