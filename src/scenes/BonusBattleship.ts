import Phaser from 'phaser';

export default class BonusBattleship extends Phaser.Scene {
  constructor() {
    super('BonusBattleship');
  }

  create(): void {
    // Set up the Battleship mini-game logic here
    // After the mini-game concludes, transition to the HustleShop scene
    this.scene.start('HustleShop');
  }
}
