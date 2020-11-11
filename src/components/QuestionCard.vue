<template>
    <div id="question-card">
        <div id="question-box">
            <h2>Question 
                <span 
                    v-bind:key="question.question" 
                    v-for="question in questions">
                        {{questions.indexOf(question) + 1}}
                </span>
            </h2>
            <div v-bind:key="question.question" v-for="question in questions">
                <h3>{{ question.question }}</h3>
            </div>
            <form>
                <input type="radio" id="true" name="answer" value="true" default>
                <label for="true">True</label><br>
                <input type="radio" id="false" name="answer" value="false">
                <label for="false">False</label><br>
                <button id="submit-button" type="submit">OK</button>
            </form>
            <p>Status bar</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'questions',
    components: {},
    props: ["questions"]
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
    width: 40vw;
    justify-items: center;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
}
h2 {
    font-size: 4em;
}
h1 {
    font-size: 3em;
}
#true {
    margin-bottom: 3vh;
}
#false {
    margin-bottom: 3vh;
}
#submit-button {
    height: 5vh;
    width: 5vw;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 20px;
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