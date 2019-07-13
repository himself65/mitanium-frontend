<template>
  <div>
    <v-parallax
      :src="imgUrl"
      height="300"
      dark
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">
          {{ currentUser.nickname }}
        </h1>
        <h4 class="subheading">
          欢迎光临
        </h4>
      </v-layout>
    </v-parallax>
    <width-wrap>
      <template slot="main">
        <v-container class="fill-height" />
      </template>
      <template slot="side">
        <v-container>
          <v-card>
            <v-img :src="imgUrl" />
            <v-card-title primary-title>
              {{ currentUser.username }}
            </v-card-title>
          </v-card>
        </v-container>
      </template>
    </width-wrap>
  </div>
</template>

<script>
import WidthWrap from '@/layout/WidthWrap'

export default {
  name: 'User',
  components: { WidthWrap },
  computed: {
    currentUser () {
      return this.$store.getters.currentUser
    },
    imgUrl () {
      return 'https://api.dujin.org/bing/1366.php'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
