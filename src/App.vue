<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
#app {
  font-family: 'Dosis', sans-serif;
  /* animated background */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: -o-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: -moz-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  -webkit-animation: gradient 10s ease infinite;
  -moz-animation: gradient 10s ease infinite;
  -o-animation: gradient 10s ease infinite;
}

body {
  margin: 0;
  padding: 0;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@-webkit-keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@-moz-keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@-o-keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
