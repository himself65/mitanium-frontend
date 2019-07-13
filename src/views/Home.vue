<template>
  <div>
    <toolbar />
    <width-wrap>
      <display-list
        slot="main" class="lists"
        url="/api/slide"
      >
        <template slot="card" slot-scope="article">
          <v-card :key="article._id" class="item">
            <v-card-title primary-title>
              <div>
                <h1 class="headline mb-0">
                  {{ article.title }}
                </h1>
                <div class="grey--text">
                  {{ article.author }} | {{ article.createdDate }}
                </div>
                <vue-markdown class="post-markdown" :source="article.content" />
              </div>
            </v-card-title>
            <v-card-actions v-if="haveAccess(article)">
              <v-btn
                flat
                color="accent"
                :to="'/article/'+article._id+'/edit'"
              >
                编辑
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </display-list>
    </width-wrap>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import WidthWrap from '../layout/WidthWrap'
import Toolbar from '../layout/Toolbar'
import DisplayList from '@/components/DisplayList'

export default {
  name: 'Home',
  components: { DisplayList, Toolbar, WidthWrap, VueMarkdown },
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
</style>
