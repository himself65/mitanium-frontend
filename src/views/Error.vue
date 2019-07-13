<template>
  <v-container>
    <v-layout
      dark
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">
        mitanium
      </h1>
      <h4 class="subheading">
        {{ error }}
      </h4>
      <div>
        <!-- todo: add some interesting egg -->
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: { type: String, default: '您的操作出了点偏差' }
  },
  created () {
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>
