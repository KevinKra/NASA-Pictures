<template>
  <div>
    <section v-for="(element, index) in data" :key="`index-${index}`">
      <!-- <div v-if="element.media_type = video"> -->
      <!-- <div>{{}}</div> -->
      <!-- </div> -->
      <div class="image" :style="{ backgroundImage: `url('${element.url}')` }"></div>
      <h3>{{element.title}}</h3>
      <p class="image-explanation">{{element.explanation}}</p>
      <p class="date">{{element.date}}</p>
    </section>
  </div>
</template>

<script>
import { getFullMonth } from "../helpers";

export default {
  name: "ImageSelection",
  data() {
    return {
      data: null
    };
  },
  methods: {
    // getYoutubeId(data) {
    //   if(data.media_type === "video")
    //   this.videoId = this.$youtube.getIdFromUrl(data.url)
    //   return <youtube :video=""></youtube>
    // }
  },
  async created() {
    const result = await fetch(getFullMonth);
    this.data = await result.json();
  }
};
</script>

<style scoped>
.image {
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  width: 100vw;
  height: 400px;
}
section {
  text-align: center;
  border: 1px solid black;
  margin: 1rem 0;
  box-shadow: 1px 1px 5px black;
  background-color: white;
}
h3 {
  font-family: "Squada One", cursive;
  font-weight: 100;
  font-size: 32px;
}
p {
  margin: 1rem auto;
  width: 80%;
}
</style>