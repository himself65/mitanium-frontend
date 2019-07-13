import { getUserInfo } from '@/api'

export default {
  namespaced: true,
  state: {
    currentUser: null,
    currentSettings: {
      drawer: false
    }
  },
  mutations: {
    setDrawer (state, val) {
      if (!val) {
        state.currentSettings.drawer = !state.currentSettings.drawer
      } else {
        state.currentSettings.drawer = val
      }
    }
  },
  actions: {
    async updateCurrentUser ({ state: global }) {
      await getUserInfo(true).then(user => {
        global.currentUser = user
      })
    }
  }
}
