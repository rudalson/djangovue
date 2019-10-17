import axios from 'axios'

export default {
  fetchNotes (method, params, data) {
    return ajax('api/v1/notes', 'get', null, null)
  }
}

/**
 * @param url
 * @param method
 * @param params
 * @param data
 * @returns
 */
function ajax(url, method, options) {
  if (option !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }

  return new Promise((resolve, rejects) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => {
      resolve(res)
    }, res => {
      reject(res)
    })
  })
}
