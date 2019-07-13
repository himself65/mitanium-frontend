import axios from './'
import dateFormat from 'dateformat'

export const articleAPI = '/api/article'

export async function submitArticle (title, content, id) {
  return axios.post(articleAPI, { title, content, _id: id }).then(res => {
    if (res.status === 200) {
      return {
        message: `${id ? '更新' : '新建'}成功`
      }
    } else {
      return res.data
    }
  })
}

export async function removeArticle (id) {
  return axios.delete(articleAPI, { params: { _id: id } }).then(res => {
    return res.status === 200
  })
}

export function cacheArticle (title, content) {
  // todo
}

export const articlesAPI = '/api/articles'

export async function getArticles (page = 0) {
  return axios.get(articlesAPI, { params: { page } }).then(res => {
    if (res.status === 200) {
      return res.data.data.map(article => ({
        ...article,
        createdDate: dateFormat(article.createdDate, '于 yyyy年mm月dd日 HH时MM分')
      }))
    } else {
      return null
    }
  })
}

export async function getArticle (id) {
  if (!id) return null
  return axios.get(articleAPI, { params: { _id: id } }).then(res => {
    if (res.status === 200) {
      return res.data.data
    } else {
      console.err(res)
      return null
    }
  })
}
