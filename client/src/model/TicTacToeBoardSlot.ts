export default class TicTacToeBoardSlot {
  location: { x: number; y: number };
  mark = "";

  constructor(location: { x: number; y: number }, mark: string) {
    this.location = location;
    this.mark = mark;
  }
}
