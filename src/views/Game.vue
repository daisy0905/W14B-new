<template>
  <div id="game">
    <score-board></score-board>
    <div id="user-player">
      <user-selection></user-selection>
      <computer-selection></computer-selection>
    </div>
    <select-button></select-button>
  </div>
</template>

<script>
import UserSelection from '../components/UserSelection.vue'
import ComputerSelection from '../components/ComputerSelection'
import ScoreBoard from '../components/Scoreboard.vue'
import SelectButton from '../components/Buttons.vue'

  export default {
    components: {
      UserSelection,
      ComputerSelection,
      ScoreBoard,
      SelectButton
    }
  }
</script>

<style scoped>
  #game {
      width: 100%;
      height: 50vh;
      display: grid;
      justify-items: center;
      align-items: center;
      margin-top: 20vh;
  }

  #user-player {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20vw;
  }
</style>
