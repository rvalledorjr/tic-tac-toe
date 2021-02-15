<template>
  <main class="w-full flex flex-col items-center mt-16">
    <div>
      <h2 class="text-3xl text-center">You</h2>
      <div class="px-5 flex items-center">
        <gravatar
          :email="userPlayer.gravatarData"
          :size="50"
          class="rounded-full"
        ></gravatar>
        <span class="text-lg ml-3"> {{ userPlayer.name }} </span>
        <div class="w-5"></div>
        <button
          class="ml-auto bg-blue-500 border-solid text-white p-1 rounded-sm text-sm"
        >
          Challenge
        </button>
      </div>

      <hr class="my-5" />

      <h2 class="text-3xl text-center">Online Players</h2>
      <ul class="p-5">
        <div v-if="players.length === 0" class="text-lg text-center">
          Waiting for other players to connect...
        </div>
        <li v-for="(player, i) in players" :key="i" class="mb-3">
          <div class="flex items-center">
            <gravatar
              :email="player.gravatarData"
              :size="50"
              class="rounded-full"
            ></gravatar>
            <span class="text-lg ml-3"> {{ player.name }} </span>
            <div class="w-5"></div>
            <button
              class="ml-auto bg-blue-500 border-solid text-white p-1 rounded-sm text-sm"
            >
              Challenge
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import Player from "@/model/Player";
import Vue from "vue";
import Gravatar from "vue-gravatar";
export default Vue.extend({
  components: {
    Gravatar,
  },

  data() {
    return {
      userPlayer: new Player(),
      players: [] as Player[],
    };
  },
});
</script>
