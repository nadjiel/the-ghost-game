import { Game } from "figure-engine";

export class TheGhostGame extends Game {

  private readonly WIDTH = 256;
  private readonly HEIGHT = 240;
  private readonly TILE_SIZE = 16;
  private scale = 3;

  constructor() {
    super();

    this.setSize(
      this.WIDTH * this.scale,
      this.HEIGHT * this.scale
    );
    this.doMaintainAspectRatio();
  }

}

export default TheGhostGame;
