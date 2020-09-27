import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        name: "Rock",
        url: "https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png",
        number: 1
      },
      {
        name: "Paper",
        url: "https://static.thenounproject.com/png/477922-200.png",
        number: -1
      },
      {
        name: "Scissor",
        url: "https://static.thenounproject.com/png/477919-200.png",
        number: 0
      }
    ],
    userUrl: "",
    compUrl: "",
    userScore: 0,
    compScore: 0,
    winner: ""
  },
  
  mutations: {
    userGet: function(state, data) {
      state.userUrl = state.list[data].url;
      console.log(state.userUrl)
     },
     compGet: function(state) {
       state.compUrl = state.list[Math.floor(Math.random() * 3)].url;
       console.log(state.compUrl)
     },
     checkWinner(state, data) {
        let num = state.list[data].number-state.list[Math.floor(Math.random() * 3)].number;
        if(num === 1 || num === -2 ) {
          state.userScore++;
          state.winner = "User Wins!"
        } else if(num === 0) {
          state.winner = "Tie!"
        } else if(num === 2 || num === -1) {
          state.compScore++;
          state.winner = "Computer Wins!"
        }
     }

  },
  actions: {},
  getters: {}
});
