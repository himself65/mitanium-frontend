<template>
  <div>
    <toolbar />
    <width-wrap>
      <display-list slot="main" class="lists">
        <template slot="card" slot-scope="item">
          <v-card :key="item.id" class="item">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ item.title }}</h3>
              </div>
            </v-card-title>
          </v-card>
        </template>
      </display-list>
      <div slot="side">
        <h3 class="side">
          筛选
        </h3>
      </div>
    </width-wrap>
  </div>
</template>

<script>
import WidthWrap from '../layout/WidthWrap'
import Toolbar from '../layout/Toolbar'
import DisplayList from '@/components/DisplayList'

export default {
  name: 'Home',
  components: { DisplayList, Toolbar, WidthWrap },
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

  .side {
    @extend .display-1

    @media $display-breakpoints.sm-and-down {
      @extend .subheading
    }
  }
</style>
