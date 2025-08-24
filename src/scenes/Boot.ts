import Phaser from 'phaser';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload(): void {
    // Load assets such as images, spritesheets, audio, etc.
  }

  create(): void {
    // Transition to Menu scene after assets are loaded
    this.scene.start('Menu');
  }
}
