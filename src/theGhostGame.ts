import { Game } from "figure-engine";

export class TheGhostGame extends Game {

  private readonly FPS = 60;
  private readonly TILE_SIZE = 16;
  private readonly WIDTH = 256; // 16 TILES
  private readonly HEIGHT = 240; // 15 TILES
  private scale = 3;

  constructor() {
    super();

    this.setSize(
      this.WIDTH * this.scale,
      this.HEIGHT * this.scale
    );
    this.doMaintainAspectRatio();
    this.setFps(this.FPS);

    this.start();
  }

  public onUpdate(): void {
    console.log(`Frame: ${this.getCurrentFrame()}`);
  }

}

export default TheGhostGame;
