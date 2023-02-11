import { AppProps } from 'next/app'
import '../styles/index.css'
import GoogleTagManager, { GtmId } from '../components/google-tag-manager'
import { gtmId } from '../lib/gtm'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
          <GoogleTagManager gtmId={gtmId as GtmId} />
          <Component {...pageProps} />
        </>
}
