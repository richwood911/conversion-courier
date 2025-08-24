import Phaser from 'phaser';

export default class Results extends Phaser.Scene {
  constructor() {
    super('Results');
  }

  create(): void {
    // Display the player's performance summary and conversion score
    // Optionally show permanent unlocks and next steps
    // After viewing results, restart or go to main menu
    this.scene.start('Menu');
  }
}
