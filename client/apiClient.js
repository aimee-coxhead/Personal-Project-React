import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/routes')
    .then(res => {
      return res.body.fruits
    })
}
