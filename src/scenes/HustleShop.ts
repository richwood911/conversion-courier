import Phaser from 'phaser';

export default class HustleShop extends Phaser.Scene {
  constructor() {
    super('HustleShop');
  }

  create(): void {
    // Show available buffs and handle purchases with Hustle Credits
    // After player chooses, transition to the Upsell CTA scene
    this.scene.start('UpsellCTA');
  }
}
