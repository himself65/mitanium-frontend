<template>
  <v-navigation-drawer
    v-model="$store.state.global.currentSettings.drawer"
    :mini-variant="hugeDisplay"
    :permanent="hugeDisplay"
    mini-variant-width="60"
    class="site-side-nav"
    hide-overlay
    dark
    app
  >
    <v-list>
      <v-btn
        class="site-logo"
        to="/"
        flat
        icon
      >
        <v-avatar>
          <img src="/img/icons/ms-icon-144x144.png">
        </v-avatar>
      </v-btn>
      <v-spacer />
      <div v-if="hugeDisplay" class="side-nav-items">
        <v-tooltip
          v-for="item in items" :key="item.name"
          right
          nudge-right="10px"
        >
          <v-btn
            slot="activator"
            active-class=""
            exact-active-class="side-nav-items--item"
            class="side-nav-items--item"
            depressed
            :to="item.href"
            flat
            icon
          >
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-btn>
          <span> {{ item.name }}</span>
        </v-tooltip>
      </div>
      <div
        v-if="!hugeDisplay"
        class="side-nav-items"
      >
        <v-btn
          v-for="item in items"
          :key="item.name"
          :to="item.href"
          style="height: 3.5rem"
          depressed
          flat
          block
          class="side-nav-items--item white--text"
        >
          <v-icon class="icon">
            {{ item.icon }}
          </v-icon>
          <span class="text">
            {{ item.name }}
          </span>
        </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      mini: true,
      items: [
        { name: '关于', href: '/about', icon: 'fas fa-info' }
      ]
    }
  },

  computed: {
    hugeDisplay () {
      return this.$vuetify.breakpoint.lgAndUp
    }
  },

  watch: {
    hugeDisplay (val, oldVal) {
      if (val === oldVal) return
      this.$store.commit('global/setDrawer', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../node_modules/vuetify/src/stylus/settings/_variables.styl"

  .site-side-nav {

    .site-logo {
      @media $display-breakpoints.md-and-down {
        margin-left 1rem
      }
    }

    .side-nav-items {
      &--item {
        display flex
        flex-direction row
        padding .5rem

        @media $display-breakpoints.md-and-down {
          >>> .v-btn__content {
            justify-content left
          }
        }

        .icon {
          text-align center
          margin 0 .3em
          width 1.5em
          vertical-align middle
        }

        .text {
          margin 0 1rem
          font-size .8em
          vertical-align middle
        }
      }

      &:hover:before, &:focus:before {
        background-color transparent !important
      }

      margin-top 1rem

      span {
        padding-top .5rem
        font-size 10px
      }
    }
  }
</style>
