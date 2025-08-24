import Phaser from 'phaser';

export default class UpsellCTA extends Phaser.Scene {
  constructor() {
    super('UpsellCTA');
  }

  create(): void {
    // Present upsell options to the player
    // After making a selection or skipping, transition to the Results scene
    this.scene.start('Results');
  }
}
