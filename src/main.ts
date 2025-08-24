import Phaser from 'phaser';
import Boot from './scenes/Boot';
import Menu from './scenes/Menu';
import Stage from './scenes/Stage';
import BonusBattleship from './scenes/BonusBattleship';
import HustleShop from './scenes/HustleShop';
import UpsellCTA from './scenes/UpsellCTA';
import Results from './scenes/Results';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Boot, Menu, Stage, BonusBattleship, HustleShop, UpsellCTA, Results],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

new Phaser.Game(config);
