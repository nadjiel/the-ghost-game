import { Game } from "figure-engine";

import { Stage1 } from "./stages/stage1.js";

export class TheGhostGame extends Game {

  private static INSTANCE: TheGhostGame;
  
  public static readonly FPS = 60;
  public static readonly TILE_SIZE = 16;
  public static readonly GAME_WIDTH = 256; // 16 TILES
  public static readonly GAME_HEIGHT = 240; // 15 TILES
  public static scale = 3;

  private constructor() {
    super({
      fps: TheGhostGame.FPS,
      width: TheGhostGame.GAME_WIDTH * TheGhostGame.scale,
      height: TheGhostGame.GAME_HEIGHT * TheGhostGame.scale
    });

    this.doMaintainAspectRatio();

    this.addLastStage(new Stage1());
    this.selectNextStage();
  }

  public static instance(): TheGhostGame {
    if(TheGhostGame.INSTANCE === undefined) {
      TheGhostGame.INSTANCE = new TheGhostGame();
    }

    return TheGhostGame.INSTANCE;
  }

}

export default TheGhostGame;
