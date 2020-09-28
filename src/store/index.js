import Vue from "vue";
import Vuex from "vuex";
import scoreCookies from "vue-cookies";

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
    userUrl: "https://www.netclipart.com/pp/m/290-2901471_rock-paper-scissors-clipart.png",
    compUrl: "https://www.netclipart.com/pp/m/290-2901471_rock-paper-scissors-clipart.png",
    userScore: 0,
    compScore: 0,
    winner: "",
    compIndex: ""
  },
  
  mutations: {
    userGet: function(state, data) {
      state.userUrl = state.list[data].url;
      console.log(state.userUrl)
     },
     compGet: function(state) {
       let index = Math.floor(Math.random() * 3);
       state.compUrl = state.list[index].url;
       console.log(state.compUrl);
       state.compIndex = index;
     },
     checkWinner: function(state, data) {
        let num = state.list[data].number-state.list[state.compIndex].number;
        if(num === 1 || num === -2 ) {
          state.userScore = state.userScore + 1;
          state.winner = "User Wins!";
          scoreCookies.set("userMark", state.userScore);
          scoreCookies.set("compMark", state.compScore);
        } else if(num === 0) {
          state.winner = "Tie!";
          scoreCookies.set("userMark", state.userScore);
          scoreCookies.set("compMark", state.compScore);
        } else if(num === 2 || num === -1) {
          state.compScore = state.compScore + 1;
          state.winner = "Computer Wins!";
          scoreCookies.set("userMark", state.userScore);
          scoreCookies.set("compMark", state.compScore);
        }
     },
     reset: function() {
       scoreCookies.remove("userMark");
       scoreCookies.remove("compMark");
     }

  },
  actions: {},
  getters: {}
});
