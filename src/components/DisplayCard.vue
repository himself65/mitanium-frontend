<template>
  <iframe width="100%" height="100%" frameborder="0" :src="url">
  </iframe>
</template>

<script>
import random from 'lodash/random'

const files = Array(10).fill(0)
  .map((_, index) => `/deps/Manim.js/Graph%20Algorithms/${index}.html`)

export default {
  name: 'DisplayCard',
  props: {
    url: { default: files[random(0, files.length)] }
  }
}
</script>

<style scoped>
  iframe {
    -ms-zoom: 0.6;
    -moz-transform: scale(0.6);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.6);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.6);
    -webkit-transform-origin: 0 0;
  }
</style>
