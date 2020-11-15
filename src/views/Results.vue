<template>
    <div id="results-list">
        <div id="results-card">
            <div class="centered">
                <h1>Results</h1>
                <h2>Final score: {{ this.$store.state.score }} out of 100</h2>
            </div>
            <div id="match-box" v-bind:key="index" v-for="(chosenAnswer, index) in this.$store.state.chosenAnswers">
                <h3>Question {{ index + 1 }}</h3>
                <h4 v-html="questions[index].question"></h4>
                <div v-if="chosenAnswer == questions[index].correct_answer">
                    <span v-html="`You chose the correct answer: `"></span><span class="green" v-html="questions[index].correct_answer"></span>
                </div>
                <div v-else>
                    <span v-html="`You chose the wrong answer: `"></span><span class="red" v-html="chosenAnswer"></span><br/>
                    <span v-html="`The correct answer is: `"></span><span class="green" v-html="questions[index].correct_answer"></span>
                </div>    
            </div>
            <div class="button-container" @click="refreshData()">
                <router-link to="/" class="return-button">Play again</router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "results",
    props: ["questions"],
    methods: {
        refreshData: function() {
            window.location.reload()
        }
    }
}
</script>

<style scoped>
#results-list {
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
#results-card {
    display: grid;
    min-height: 70vh;
    width: 70vw;
    margin: 5%;
    padding: 0 5% 5% 5%;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
}
.centered {
    display: grid;
    justify-items: center;
}
h1 {
    display: flex;
    align-self: start;
    font-size: 3em;
}
.green {
    color: rgb(24, 107, 24);
    font-weight: bold;
}
.red {
    color: rgb(90, 17, 17);
    font-weight: bold;
}
.button-container {
    display: grid;
    justify-content: center;
    align-content: center;
    margin-top: 5%;
}
.return-button {
    display: block;
    width: 10vw;
    height: 5vh;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    padding: 10px;
    border: 4px solid #20bf6b !important;
    border-radius: 6px;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    transition: all 0.3s ease 0s;
}
.return-button:hover {
    color: #494949 !important;
    border-radius: 50px;
    border-color: #494949 !important;
    transition: all 0.3s ease 0s;
}
</style>