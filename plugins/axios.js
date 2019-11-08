export default function({ $axios, redirect }) {
  // Adds header: `Authorization: 123` to all requests
  $axios.setHeader('Authorization', '123')
  // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    'post'
  ])

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    console.log('Making response to ' + response)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.onRequestError((error) => {
    console.log('onRequestError' + error)
  })

  $axios.onResponseError((error) => {
    console.log('onResponseError' + error)
  })
}
