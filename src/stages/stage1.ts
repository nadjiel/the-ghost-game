import { Stage } from "figure-engine";

import { Ghost } from "../objects/ghost.js";

export class Stage1 extends Stage {

  constructor() {
    super();

    this.addLastObject(new Ghost(10, 10));
  }

}

export default Stage1;
