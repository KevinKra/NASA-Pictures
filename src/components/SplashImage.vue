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
  margin: 0;
  padding: 0;
}
.image-primary {
  height: 80vh;
  width: 100vw;
  background-size: cover;
}
.image-explanation {
  min-height: 20vh;
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