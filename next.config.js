let baseUrl = ''
if (process.env.GITHUB_ACTIONS) {
  baseUrl = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
}

module.exports = {
  publicRuntimeConfig: { baseUrl }
}