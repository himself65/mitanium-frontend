<template>
  <div id="app">
    <v-app>
      <SideNav class="site-side-nav" app />
      <v-content class="site-content" app>
        <RouterView class="fill-height" />
      </v-content>
      <v-btn
        v-show="!$vuetify.breakpoint.lgAndUp" bottom right
        icon dark fixed
        color="primary"
        @click="$store.commit('global/setDrawer')"
      >
        <v-icon>
          list
        </v-icon>
      </v-btn>
    </v-app>
  </div>
</template>
<script>
  import SideNav from '@/layout/SideNav'

  export default {
    components: { SideNav },
    async beforeCreate () {
      // updateCurrentUser
      await this.$store.dispatch('global/updateCurrentUser')
    }
  }
</script>

<style lang="stylus">
  @import "~vuetify/src/stylus/settings/_colors.styl"
  @import "~vuetify/src/stylus/settings/_theme.styl"

  html {
    background-color: $material-light.background
  }

  body {
    margin 0
    padding 0
  }

  #app {
    width 100%
    height 100%
    color #2c3e50
  }

  .markdown {
    >>> a {
      color: $blue.light
      text-decoration none
    }
  }

  .item {
    margin-bottom 10px

    &:first-child {
      margin-top 20px
    }
  }
</style>
