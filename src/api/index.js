import axios from 'axios'

export const instance = axios.create()
instance.interceptors.request.use(config => {
  if (!window.localStorage) {
    console.log('您的浏览器版本过低')
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.common['authorization'] = token
  }
  return config
})
export default instance

export * from './article'
export * from './user'
export * from './talk'
