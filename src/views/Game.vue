<template>
  <div id="game">
    <h3>{{ userGreeting }}</h3>
    <h2 @click="userCheck">Are you ready? Click here!</h2>
    <button @click="logout" class="game-btn">Logout</button>
    <score-board></score-board>
    <div id="user-player">
      <user-selection></user-selection>
      <computer-selection></computer-selection>
    </div>
    <select-button></select-button>
    <button @click="gameRestart" class="game-btn">Restart</button>

  </div>
</template>

<script>
import UserSelection from '../components/UserSelection.vue';
import ComputerSelection from '../components/ComputerSelection';
import ScoreBoard from '../components/Scoreboard.vue';
import SelectButton from '../components/Buttons.vue';
import cookies from "vue-cookies";

  export default {
    components: {
      UserSelection,
      ComputerSelection,
      ScoreBoard,
      SelectButton
    },

    methods: {
      gameRestart: function() {
         this.$store.commit("reset");
         location.reload();
      },
      logout: function() {
        cookies.remove("loginToken");
        cookies.remove("userEmail");
        this.$router.push("./");
      },
      userCheck: function() {
        this.$store.commit("tokenCheck");
      }
    },
    computed: {
      userGreeting: function() {
        return this.$store.state.greeting;
      }
    }
  }

</script>

<style scoped>
  #game {
      width: 60vw;
      min-height: 50vh;
      display: grid;
      justify-items: center;
      align-items: center;
      margin-top: 10vh;
  }

  h2 {
    color: orange;
    text-shadow: 1px 1px 1px grey;
  }

  h2:hover {
    cursor: pointer;
  }

  #user-player {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20vw;
  }

  .game-btn {
    width: 8vw;
    height: 3vh;
    background-color: lightgrey;
    color: black;
    box-shadow: 1px 1px 2px grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 1em;
  }
</style>
