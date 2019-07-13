<template>
  <div class="site-width-wrap">
    <div class="site-width-wrap--main" :style="mainStyles">
      <slot v-if="$slots.main" name="main" />
      <slot v-if="!$slots.main" />
    </div>
    <div v-if="$slots.side" class="site-width-wrap--side" :style="sideStyles">
      <slot name="side" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidthWrap',
  props: {
    scale: { type: Number, default: 8 / 10 }
  },
  computed: {
    mainStyles () {
      return {
        flex: `${this.scale * 10} 1 0`
      }
    },
    sideStyles () {
      return {
        flex: `${10 - this.scale * 10} 0 0`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/settings/_variables.styl"

  .site-width-wrap {
    display flex
    height 100%

    &--main {
      flex 4 1 0
    }

    &--side {
      flex 1 0 0
      margin-left 1.5rem
    }

    @media $display-breakpoints.sm-and-down {
      flex-direction: column-reverse

      &--side {
       margin-left 0
      }
    }
  }
</style>
