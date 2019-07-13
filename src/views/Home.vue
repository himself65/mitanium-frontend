<template>
  <div>
    <toolbar />
    <width-wrap>
      <div slot="main" class="main">
        <DisplayCard />
      </div>
    </width-wrap>
  </div>
</template>

<script>
import WidthWrap from '../layout/WidthWrap'
import Toolbar from '../layout/Toolbar'
import DisplayCard from '@/components/DisplayCard'

export default {
  name: 'Home',
  components: { DisplayCard, Toolbar, WidthWrap },
  data () {
    return {
      talks: null
    }
  },

  methods: {
    haveAccess (article) {
      const currentUser = this.$store.getters.currentUser
      if (!currentUser) return false
      return article.author === currentUser.username ||
          currentUser.level !== 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~vuetify/src/stylus/bootstrap.styl"
  @import "~vuetify/src/stylus/elements/_typography.styl"

  .lists {
    > div {
      margin-top 1rem
    }
  }

  .friend {
    padding: 1rem 0
  }

  .post-markdown {
    >>> img {
      width 100%
    }
  }

  .main {
    height: 100%
  }
</style>
