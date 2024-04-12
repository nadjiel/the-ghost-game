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
    const enter = {
      pressed: this.getKeyboardInput().isPressed("Enter"),
      held: this.getKeyboardInput().isHeld("Enter"),
      released: this.getKeyboardInput().isReleased("Enter"),
      heldTime: this.getKeyboardInput().getHeldTime("Enter")
    };

    const mouse = {
      x: this.getMouseInput().getX(),
      y: this.getMouseInput().getY(),
      leftPressed: this.getMouseInput().isPressed(0),
      leftHeld: this.getMouseInput().isHeld(0),
      leftReleased: this.getMouseInput().isReleased(0),
      leftHeldTime: this.getMouseInput().getHeldTime(0),
      scrollY: this.getMouseInput().getWheelYRotation()
    }

    console.log(`Enter: [ ${enter.pressed}, ${enter.held}, ${enter.released}, ${enter.heldTime} ]`);
    console.log(`Mouse: [ ${mouse.x}, ${mouse.y}, ${mouse.leftPressed}, ${mouse.leftHeld}, ${mouse.leftReleased}, ${mouse.leftHeldTime}, ${mouse.scrollY} ]`);
  }

}

export default TheGhostGame;
