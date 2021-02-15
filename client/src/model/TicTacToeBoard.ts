import TicTacToeBoardSlot from "./TicTacToeBoardSlot";

export default class TicTacToeBoard {
  winner = "";
  nextTurn = "X";

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  get slots() {
    const slots = [] as TicTacToeBoardSlot[];
    const n = this.board.length;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        const mark = this.board[x][y];
        slots.push(new TicTacToeBoardSlot({ x: x, y: y }, mark));
      }
    }

    return slots;
  }

  get draw(): boolean {
    return this.isAllSlotsOccupied && !this.winner;
  }

  get isAllSlotsOccupied(): boolean {
    return !this.board.flat().some((slot) => slot === "");
  }

  markOnSlot(location: { x: number; y: number }): string {
    const { x, y } = location;
    return this.board[x][y];
  }

  isSlotBlank(location: { x: number; y: number }): boolean {
    const { x, y } = location;
    return this.board[x][y] === "";
  }

  get isAllSlotsBlank(): boolean {
    return this.board.flat().every((v) => v === "");
  }

  putX(slot: TicTacToeBoardSlot) {
    this.put(slot.location, "X");
    this.nextTurn = "O";
  }

  putO(slot: TicTacToeBoardSlot) {
    this.put(slot.location, "O");
    this.nextTurn = "X";
  }

  reset() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.winner = "";
    this.nextTurn = "X";
  }

  private put(location: { x: number; y: number }, mark: string) {
    const { x, y } = location;

    if (!this.isSlotBlank(location))
      throw `Board slot [${x}, ${y}] was already occupied.`;

    this.board[x][y] = mark;

    this.winner = this.findWinner(location, mark);

    this.board = [...this.board];
  }

  private findWinner(location: { x: number; y: number }, mark: string): string {
    const { x, y } = location;
    let col = 0,
      row = 0,
      diag = 0,
      condiag = 0;

    const n = this.board.length;
    for (let i = 0; i < n; i++) {
      if (this.board[x][i] === mark) col++;
      if (this.board[i][y] === mark) row++;
      if (this.board[i][i] === mark) diag++;
      if (this.board[i][n - i + 1]) condiag++;
    }

    return row === n || col === n || diag === n || condiag === n ? mark : "";
  }
}
