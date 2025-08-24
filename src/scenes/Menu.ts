import Phaser from 'phaser';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create(): void {
    // Set up menu interface, e.g., title screen or character selection
    // For now, directly start the main stage
    this.scene.start('Stage');
  }
}
