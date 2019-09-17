<template>
  <div class="SplashImage">
    <!-- <img :src="info.data.url" /> -->
    <h2>{{info.data.title}}</h2>
    <div class="image-primary" :style="{ backgroundImage: `url('${info.data.url}')` }"></div>
    <p class="image-explanation">{{info.data.explanation}}</p>
  </div>
</template>

<script>
import axios from "axios";
import { API_KEY } from "../../API_KEY/API_KEY";

export default {
  name: "SplashImage",
  data() {
    return {
      info: {}
    };
  },
  created() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => (this.info = response))
      .catch(error => console.log("ERROR", error));
  }
};
</script>

<style scoped>
.SplashImage {
  background-color: rgb(48, 47, 47);
  color: white;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-shadow: 1px 1px 5px black;
}
.image-primary {
  height: 80vh;
  width: 100vw;
  background-size: cover;
}
.image-explanation {
  padding: 0.5rem 1rem;
}
h2 {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  margin: 0;
}
</style>