<template>
  <div class="site-header">
    <v-spacer />
    <v-toolbar
      class="site-user-nav"
      dense
      floating
    >
      <v-menu bottom left>
        <v-btn
          slot="activator"
          icon
        >
          <v-badge color="red" right>
            <span v-if="notice" slot="badge">
              0
            </span>
            <v-icon>fas fa-envelope</v-icon>
          </v-badge>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>暂时什么都没有</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn
        :to="userUrl"
        icon
      >
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      notice: true
    }
  },
  computed: {
    userUrl () {
      if (this.$store.getters.currentUser !== null) return '/user'
      return '/login'
    }
  },
  mounted () {
    setTimeout(() => {
      this.notice = false
    }, 2000)
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
