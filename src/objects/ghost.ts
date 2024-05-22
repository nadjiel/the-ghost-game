import { GameObject } from "figure-engine";
import { Vector2 } from "figure-engine";
import { ColorFactory } from "figure-engine";

import { TheGhostGame } from "../theGhostGame.js";

export class Ghost extends GameObject {

  private walkingSpeed = 5;
  private speed = Vector2.createZero();

  constructor(x: number, y: number) {
    const coordinates = new Vector2(x, y);
    const dimensions = new Vector2(
      TheGhostGame.TILE_SIZE * TheGhostGame.scale,
      TheGhostGame.TILE_SIZE * TheGhostGame.scale
    );
    super(coordinates, dimensions);

    this.setColor(ColorFactory.createWhite());
  }

  onStart(): void {
    
  }

  onUpdate(): void {
    const keyboardInput = TheGhostGame.instance().getKeyboardInput();

    const xInput =
      Number(keyboardInput.isHeld("ArrowRight")) -
      Number(keyboardInput.isHeld("ArrowLeft"));
    const yInput =
      Number(keyboardInput.isHeld("ArrowDown")) -
      Number(keyboardInput.isHeld("ArrowUp"));

    this.speed.setX(xInput * this.walkingSpeed);
    this.speed.setY(yInput * this.walkingSpeed);

    this.setX(this.getX() + this.speed.getX());
    this.setY(this.getY() + this.speed.getY());
  }

  onDraw(ctx: CanvasRenderingContext2D): void {
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillStyle = ColorFactory.createWhite().toString();
    ctx.fillText(
      `FPS: ${TheGhostGame.instance().getActualFps()?.toFixed(2)}`,
      TheGhostGame.instance().getWidth() - 4,
      4
    );
  }

  onStop(): void {
    
  }
  
}

export default Ghost;
