<template>
  <div>
    <gravatar :email="player.name"></gravatar>
    <div>{{ player.name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Gravatar from "vue-gravatar";
import Player from "@/model/Player";
export default Vue.extend({
  props: {
    player: {
      type: Player,
      default: () => new Player(),
    },
  },

  components: {
    Gravatar,
  },
});
</script>
