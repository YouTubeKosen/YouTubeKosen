import getConfig from 'next/config'
import BASE_URL from 'constants'

export function url(path: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { baseUrl: string }
  }
  return publicRuntimeConfig.baseUrl + path
}

export function full_path(path: string): string {
  return BASE_URL + path
}