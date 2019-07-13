<template>
  <v-container>
    <v-form
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        label="用户名"
        required
      />
      <v-text-field
        v-model="password"
        label="密码"
        required
      />

      <v-text-field
        v-if="!loginPage"
        v-model="githubID"
        label="GitHubID"
      />

      <v-btn
        :disabled="!valid"
        color="green lighten-1"
        dark
        @click="login"
      >
        {{ loginPage ? '登陆' : '注册' }}
      </v-btn>
      <v-btn
        v-show="loginPage"
        disabled
        href="/api/login/auth/github"
      >
        通过 GitHub 注册
        <v-icon
          dark
          right
        >
          fab fa-github
        </v-icon>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
import { loginAPI } from '@/api'
import debug from '@/debug'

export default {
  name: 'Login',

  props: {
    loginPage: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      username: undefined,
      password: undefined,
      githubID: undefined,
      valid: false
    }
  },

  methods: {
    async login () {
      await axios.post(loginAPI, {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.status === 200) {
          const token = res.data.data
          debug('login success')
          this.$ls.set('token', token)
          this.$alert.fire({
            type: 'success',
            title: '登陆成功',
            text: '将自动回到主页',
            timer: 1500
          }).then(() => {
            this.$router.replace('/')
          })
        }
      })
    },
    register () {
      // todo
    }
  }
}
</script>

<style scoped>

</style>
