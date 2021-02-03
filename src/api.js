const url = 'https://api.coincap.io/v2'

function getAssest() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssest
}
