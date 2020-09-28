<template>
  <div id="login">
    <img alt="Vue logo" src="../assets/rock-paper-scissors.jpeg" />
    <div>
      <p>Username</p>
      <input type="text" class="login-area" v-model="username">
      <p>Password</p>
      <input type="password" class="login-area" v-model="password">
    </div>
    <div>
      <button @click="login" v-if="token == undefined" id="login-btn">Login</button>
      <h4>{{ status }}</h4>
    </div>
  </div>
</template>

<script>
import loginApi from "axios";
import cookies from "vue-cookies";

export default {
  name: "Login",
  components: {

  },
  data: function() {
    return {
      username: "",
      password: "",
      status: "",
      token: cookies.get("loginToken")
    }
  },
  methods: {
    login: function() {
      this.status = "Loading"
      loginApi.request({
        url: "https://reqres.in/api/login",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          email: this.username,
          password: this.password
        }
      }).then((response) => {
        console.log(response);
        this.status = "Login Success!";
        cookies.set("loginToken", response.data.token);
        cookies.set("userEmail", this.username);
        this.$router.push("Game");
      }).catch((error) => {
        console.log(error);
        this.status = "Login Error!"
      })
    }
  }
};
</script>

<style scoped>
  #login {
    width: 100%;
    height: 50vh;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 20vh;
    row-gap: 2vh;
  }

  img {
    width: 20vw;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
  }

  .login-area {
    padding: 0.3em;
  }

  #login-btn {
    width: 5vw;
    height: 3vh;
    background-color: maroon;
    color: white;
    box-shadow: 1px 1px 1px grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }


</style>
