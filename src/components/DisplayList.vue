<template>
  <v-container class="fill-height" fluid>
    <v-layout class="fill-height" column>
      <template v-if="items">
        <v-flex class="fill-height">
          <template v-for="item in items">
            <slot name="card" v-bind="item" />
          </template>
        </v-flex>
        <v-spacer />
        <v-flex>
          <div class="text-xs-center">
            <v-pagination
              v-model="current"
              :total-visible="5"
              :length="pages"
            />
          </div>
        </v-flex>
      </template>
      <v-flex v-else class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from '@/api'

export default {
  name: 'DisplayList',

  props: {
    url: { type: String, required: true }
  },

  data () {
    this._current = 0
    return {
      items: null,
      total: 0
    }
  },

  computed: {
    pages () {
      return Math.round(this.total / this.items.length)
    },

    current: {
      get () {
        return this._current + 1
      },
      set (val) {
        this._current = val
      }
    }
  },

  watch: {
    async current (val, oldVal) {
      if (val !== oldVal) {
        await this.fetch()
      }
    }
  },

  async beforeMount () {
    await this.fetch()
  },

  methods: {
    async fetch () {
      await axios.get(this.url, { params: { page: this._current } }).then(res => {
        if (res && res.status === 200) {
          const { data, total } = res.data
          this.items = data
          this.total = total
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
