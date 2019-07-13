<template>
  <v-container class="fill-height" fluid>
    <v-layout class="fill-height" column>
      <template v-if="items">
        <v-flex class="fill-height">
          <template v-for="item in items">
            <slot name="card" v-bind="item"/>
          </template>
        </v-flex>
        <v-spacer/>
        <v-flex>
          <div class="text-xs-center">
            <v-pagination :total-visible="5"/>
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
import { getSlide } from '@/api'

export default {
  name: 'DisplayList',

  data () {
    return {
      items: null,
      title: ''
    }
  },

  async beforeMount () {
    await this.fetch()
  },

  methods: {
    async fetch () {
      const { data: { title, breakpoints } } = await getSlide()
      this.items = breakpoints
      this.title = title
    }
  }
}
</script>

<style scoped>

</style>
