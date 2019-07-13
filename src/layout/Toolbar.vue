<template>
  <div class="site-header">
    <v-spacer />
    <v-toolbar
      class="site-user-nav"
      dense
      floating
    >
      <v-btn
        :to="userUrl"
        icon
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  computed: {
    userUrl () {
      return this.$store.getters.currentUser ? '/user' : '/login'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/settings/_variables.styl"

  .site-header {
    display flex

    .site-user-nav {
      margin-right 3rem
    }

    @media $display-breakpoints.md-and-down {
      .site-user-nav {
        margin-right 1.5rem
      }
    }
  }
</style>
