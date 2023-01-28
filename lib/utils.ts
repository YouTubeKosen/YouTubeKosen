import getConfig from 'next/config'

export function url(path: string): string {
    const { publicRuntimeConfig } = getConfig() as {
      publicRuntimeConfig: { baseUrl: string }
    }
    return publicRuntimeConfig.baseUrl + path
  }