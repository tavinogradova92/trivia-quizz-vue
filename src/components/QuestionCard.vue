<template>
    <div id="question-card" >
        <div id="question-box">
            <h2>Question {{ displayedIndex }}</h2>
            <div class="question-name">
                <h3 v-html="(questions[this.$store.state.currentQuestionIndex].question)"></h3>
            </div>
            <div id="answers-box" v-bind:key="answer" v-for="answer in listOfItems">
                <button id="submit-button" v-html="answer" @click="onAnswerClicked(answer)"></button>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'questions',
    components: {},
    props: ["questions"],
    methods: {
        onAnswerClicked: function(answer) {
            if(this.$store.state.currentQuestionIndex < this.questions.length-1) {
                if(answer == this.questions[this.$store.state.currentQuestionIndex].correct_answer) {
                    this.$store.commit('increment');
                    this.$store.commit('listOfAnswers');
                }
                this.$store.state.currentQuestionIndex ++;
            } else if (this.$store.state.currentQuestionIndex == this.questions.length-1) {
                if(answer == this.questions[this.$store.state.currentQuestionIndex].correct_answer) {
                    this.$store.commit('increment');
                    this.$store.commit('listOfAnswers');
                }
                this.$router.push({ path: '/results'});
            }
        }
    },
    computed: {
        listOfItems() {
            let listOfItems=this.$store.commit('listOfAnswers');
            return listOfItems;
        },
        displayedIndex() {
            let displayedIndex = this.$store.state.currentQuestionIndex + 1;
            return displayedIndex;
        }
    }   
}
</script>

<style scoped>
#question-card {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
#question-box {
    display: grid;
    height: 70vh;
    width: 70vw;
    padding-bottom: 5%;
    justify-items: center;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
}
h2 {
    display: flex;
    justify-content: center;
    font-size: 3em;
}
h1 {
    font-size: 3em;
}
.question-name {
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: center;
}
#answers-box {
    display: grid;
    justify-content: center;
}
#submit-button {
    height: 5vh;
    width: 20vw;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 20px;
    margin-top: 5%;
    cursor: pointer;
}
#submit-button:hover {
    animation: backgroundchanger 0.5s ease-out alternate;
    -webkit-animation: backgroundchanger 0.5 ease-in-out;
    -o-animation: backgroundchanger 0.5s linear;
    -moz-animation: backgroundchanger 0.5s linear normal;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards; /* <--- */
}
@keyframes backgroundchanger {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: rgb(180, 180, 180);
    }
}
@-webkit-keyframes backgroundchanger {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: rgb(180, 180, 180);
    }
}
@-o-keyframes backgroundchanger {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: rgb(180, 180, 180);
    }
}
@-moz-keyframes backgroundchanger {
    0% {
        background-color: #fff;
    }
    100% {
        background-color: rgb(180, 180, 180);
    }
}
</style>