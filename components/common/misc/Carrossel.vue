<template>
  <vueper-slides autoplay :pause-on-hover="pauseOnHover">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
      :style="'background-color: ' + slide.color"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "App",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide 1 content.",
        color: "lightblue",
      },
      {
        title: "Slide #2",
        content: "Slide 2 content.",
        color: "gray",
      },
    ],
  }),
};
</script>
