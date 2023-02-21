import { AppProps } from 'next/app'
import '../styles/index.css'
import GoogleTagManager, { GtmId } from '../components/google-tag-manager'
import { gtmId } from '../lib/gtm'
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { BASE_URL, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = BASE_URL + (router.asPath === "/" ? "": router.asPath);
  return <>
          <DefaultSeo 
            title="私立YouTube高専"
            description="私立YouTube高専は、実践的・創造的技術者を養成するYouTube史上初の高等専門学校です。"
            canonical={canonicalUrl}
            openGraph={{
              type: "website",
              title: "私立YouTube高専",
              site_name: "私立YouTube高専",
              url: canonicalUrl,
              images: [
              {
                url: HOME_OG_IMAGE_URL,
                width: 2560,
                height: 1440,
                alt: 'Og Image Alt',
                type: 'image/png',
              },
              ],
            }}
            twitter={{
              handle: '@YouTubeKosen',
              site: '@YouTubeKosen',
              cardType: "summary_large_image",
            }}
          />
          <GoogleTagManager gtmId={gtmId as GtmId} />
          <Component {...pageProps} />
        </>
}
