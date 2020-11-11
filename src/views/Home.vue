<template>
    <div id="home">
        <h1>Trivia Quiz. Animals</h1>
        <h2>Are you ready to challenge yourself? Then clicpush k the button start the game!</h2>
        <router-link 
            tag="button" 
            class="button effect" 
            to="/questions/1">
                <span>Start</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
#home {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
h1 {
    font-family: 'Architects Daughter', cursive;
    font-size: 4em;
    color: #ffffff;
}
h2 {
    font-size: 1.5em;
}
.button {
    margin-top: 5vh;
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 45px;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
}

.button:hover {
    text-decoration: none;
}

.effect {
    color: #FFF;
    border: 4px solid #000;
    box-shadow:0px 0px 0px 1px #000 inset;
    background-color: #000;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.effect:hover {
    border: 4px solid #666;
    background-color: #FFF;
    box-shadow:0px 0px 0px 4px #EEE inset;
}

.effect span {
    transition: all 0.2s ease-out;
    z-index: 2;
}

.effect:hover span {
    letter-spacing: 0.13em;
    color: #333;
}

.effect:after {
    background: #FFF;
    border: 0px solid #000;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
            transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
    z-index: 1;
}

.effect:hover:after {
    background: #FFF;
    border: 20px solid #000;
    opacity: 0;
    left: 120%;
    -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
}
</style>