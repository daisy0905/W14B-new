<template>
    <div id="score-board">
        <h1>{{ winnerDeclare }}</h1>
        <div id="score-container">
            <div class="score-unit">
                <h3>User Score</h3>
                <p>{{ userPoint }}</p>
            </div>
            <div class="score-unit">
                <h3>Computer Score</h3>
                <p>{{ compPoint }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "score-board",

        computed: {
            userPoint: function() {
                return this.$store.state.userScore;
            },
            compPoint: function() {
                return this.$store.state.compScore;
            },
            winnerDeclare: function() {
                return this.$store.state.winner;
            }
        }
    }
</script>

<style scoped>
    #score-board {
        width: 100%;
        min-height: 30vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    h1 {
        height: 5vh;
        font-size: 2rem;
        color: maroon;
        text-shadow: 1px 1px 1px lightgrey;
    }

    #score-container {
        width: 100%;
        min-height: 20vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2vw;
        justify-items: center;
        align-items: center;
    }

    .score-unit {
        height: 15vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    p {
        height: 5vh;
        width: 5vw;
        font-size: 1.5rem;
        background-color: maroon;
        border: 1px solid black;
        border-radius: 0.5em;
        color: white;
        font-weight: bold;
        text-align: center;
        display: grid;
        justify-items: center;
        align-items: center;
    }

</style>