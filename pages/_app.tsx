import { AppProps } from 'next/app'
import '../styles/index.css'
import GoogleTagManager, { GtmId } from '../components/google-tag-manager'
import { gtmId } from '../lib/gtm'
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { BASE_URL } from '../lib/constants'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = BASE_URL + (router.asPath === "/" ? "": router.asPath);
  return <>
          <DefaultSeo canonical={canonicalUrl} />
          <GoogleTagManager gtmId={gtmId as GtmId} />
          <Component {...pageProps} />
        </>
}
