let baseUrl = ''
let gtmId = ''
if (process.env.GITHUB_ACTIONS) {
//   baseUrl = '/' + process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  gtmId = 'GTM-TCF2V4D'
}

module.exports = {
  publicRuntimeConfig: { baseUrl },
  env: {
    GTM_ID: gtmId,
  },
}