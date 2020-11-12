<template>
    <div id="question-card" >
        <div id="question-box">
            <div>
                <div>
                    <h2>Question <span>{{ currentQuestionIndex + 1 }}</span></h2>
                    <div class="question-name">
                        <h3>{{ questions[currentQuestionIndex].question }}</h3>
                    </div>
                    <div v-bind:key="answer" v-for="answer in listOfAnswers">
                        <button id="submit-button" >{{ answer }}</button>
                    </div>
                    <p>Status bar</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'questions',
    components: {},
    props: ["questions"],
    data() {
        return {
            currentQuestionIndex: 0
        }
    },
    computed: {
        listOfAnswers() {
            let answersArray = [];
            answersArray.push(this.questions[this.currentQuestionIndex].correct_answer);
            let incorrect = this.questions[this.currentQuestionIndex].incorrect_answers;
            for(let i = 0 ; i < incorrect.length; i++) {
                answersArray.push(incorrect[i]);
            }
            return answersArray;
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
    height: 80vh;
    width: 40vw;
    justify-items: center;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
}
h2 {
    display: flex;
    justify-content: center;
    font-size: 4em;
}
h1 {
    font-size: 3em;
}
.question-name {
    margin: 5%;
    display: flex;
    justify-content: center;
}
#submit-button {
    height: 5vh;
    width: 5vw;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 20px;
    margin-top: 5%;
    cursor: pointer;
}
#submit-button:hover {
    animation: backgroundchanger 0.5s ease-out alternate;
    -webkit-animation: backgroundchanger 0.5 sease-in-out;
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