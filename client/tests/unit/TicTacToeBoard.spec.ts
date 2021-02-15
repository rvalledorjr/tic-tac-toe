import TicTacToeBoard from "@/model/TicTacToeBoard";
import BoardSlot from "@/model/TicTacToeBoardSlot";

describe("TicTacToeBoard.ts", () => {
  it("contains 9 slots", () => {
    const board = new TicTacToeBoard();
    const expectedSlots = [
      new BoardSlot({ x: 0, y: 0 }, ""),
      new BoardSlot({ x: 1, y: 0 }, ""),
      new BoardSlot({ x: 2, y: 0 }, ""),

      new BoardSlot({ x: 0, y: 1 }, ""),
      new BoardSlot({ x: 1, y: 1 }, ""),
      new BoardSlot({ x: 2, y: 1 }, ""),

      new BoardSlot({ x: 0, y: 2 }, ""),
      new BoardSlot({ x: 1, y: 2 }, ""),
      new BoardSlot({ x: 2, y: 2 }, ""),
    ];
    expect(board.slots).toEqual(expect.arrayContaining(expectedSlots));
  });

  it("all board slots are blank or unoccupied", () => {
    const board = new TicTacToeBoard();
    expect(board.isAllSlotsBlank).toEqual(true);
  });

  it("mark X can occupy any slots in the board", () => {
    const board = new TicTacToeBoard();
    const expectedSlots = [
      new BoardSlot({ x: 0, y: 0 }, "X"),
      new BoardSlot({ x: 1, y: 0 }, "X"),
      new BoardSlot({ x: 2, y: 0 }, "X"),

      new BoardSlot({ x: 0, y: 1 }, "X"),
      new BoardSlot({ x: 1, y: 1 }, "X"),
      new BoardSlot({ x: 2, y: 1 }, "X"),

      new BoardSlot({ x: 0, y: 2 }, "X"),
      new BoardSlot({ x: 1, y: 2 }, "X"),
      new BoardSlot({ x: 2, y: 2 }, "X"),
    ];

    for (const slot of board.slots) {
      board.putX(slot);
    }
    expect(board.slots).toEqual(expect.arrayContaining(expectedSlots));
  });

  it("mark O can occupy any slots in the board", () => {
    const board = new TicTacToeBoard();
    const expectedSlots = [
      new BoardSlot({ x: 0, y: 0 }, "O"),
      new BoardSlot({ x: 1, y: 0 }, "O"),
      new BoardSlot({ x: 2, y: 0 }, "O"),

      new BoardSlot({ x: 0, y: 1 }, "O"),
      new BoardSlot({ x: 1, y: 1 }, "O"),
      new BoardSlot({ x: 2, y: 1 }, "O"),

      new BoardSlot({ x: 0, y: 2 }, "O"),
      new BoardSlot({ x: 1, y: 2 }, "O"),
      new BoardSlot({ x: 2, y: 2 }, "O"),
    ];

    for (const slot of board.slots) {
      board.putO(slot);
    }
    expect(board.slots).toEqual(expect.arrayContaining(expectedSlots));
  });

  it("X wins on first column [(0, 0), (1, 0), (2, 0)]", () => {
    const board = new TicTacToeBoard();

    board.putX(new BoardSlot({ x: 0, y: 0 }, ""));
    board.putX(new BoardSlot({ x: 1, y: 0 }, ""));
    board.putX(new BoardSlot({ x: 2, y: 0 }, ""));

    expect(board.winner).toEqual("X");
  });
});
