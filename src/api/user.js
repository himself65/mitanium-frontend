import axios from './'

export const loginAPI = '/api/login'
export const userInfoAPI = '/api/user/current'

export function getUserInfo (detail = false) {
  return axios.get(userInfoAPI, { data: { detail: detail } })
    .then(res => {
      if (res.status === 200) {
        return res.data.data
      } else {
        return null
      }
    })
}
