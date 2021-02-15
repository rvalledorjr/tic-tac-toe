import shorid from "shortid";
import faker from "faker";

export default class Player {
  id = shorid.generate();
  name = faker.name.findName();

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  get gravatarData(): string {
    return `${this.name} ${this.id}`;
  }
}
