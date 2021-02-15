import shorid from "shortid";

export default class Player {
  id = shorid.generate();
  name = "";

  constructor(name?: string) {
    if (!name) {
      this.name = `anonymous-${this.id}`;
    }
  }
}
