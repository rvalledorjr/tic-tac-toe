<template>
  <main class="flex justify-center h-screen gap-10 items-center">
    <div>
      <div class="w-60 h-60 grid grid-cols-3 grid-rows-3 gap-1">
        <div
          v-for="(slot, i) in gameBoard.slots"
          :key="i"
          class="bg-blue-800 flex justify-center"
          @click="putMark(slot)"
        >
          <span
            v-if="slot.mark === 'X'"
            class="text-center self-center font-bold text-6xl text-green-600"
          >
            {{ slot.mark }}
          </span>
          <span
            v-else
            class="text-center self-center font-bold text-6xl text-red-600"
          >
            {{ slot.mark }}
          </span>
        </div>
      </div>

      <p v-if="!!gameBoard.winner" class="text-center mt-5">
        Winner: <span class="font-bold"> {{ gameBoard.winner }} </span>
      </p>
      <p v-else-if="gameBoard.draw" class="text-center mt-5">
        <span class="font-bold"> This match is a draw. </span>
      </p>
      <p v-else class="text-center mt-5">
        Next turn : <span class="font-bold"> {{ gameBoard.nextTurn }} </span>
      </p>
      <div class="flex justify-center">
        <button
          class="bg-blue-800 rounded p-2 mt-5 text-white"
          @click="resetGame"
        >
          Reset Game
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import TicTacToeBoard from "@/model/TicTacToeBoard";
import TicTacToeBoardSlot from "@/model/TicTacToeBoardSlot";

export default Vue.extend({
  data() {
    return {
      gameBoard: new TicTacToeBoard(),
    };
  },
  methods: {
    putMark(slot: TicTacToeBoardSlot) {
      if (this.gameBoard.winner || this.gameBoard.draw) return;

      try {
        if (this.gameBoard.nextTurn === "X") {
          this.gameBoard.putX(slot);
        } else {
          this.gameBoard.putO(slot);
        }
      } catch (error) {
        alert(error);
      }
    },
    resetGame() {
      this.gameBoard.reset();
    },
  },
});
</script>
