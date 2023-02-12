import Head from 'next/head'
import { url } from '../lib/utils'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={url("/favicon/apple-touch-icon.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={url("/favicon/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={url("/favicon/favicon-16x16.png")}
      />
      <link rel="manifest" href={url("/favicon/site.webmanifest")} />
      <link
        rel="mask-icon"
        href={url("/favicon/safari-pinned-tab.svg")}
        color="#000000"
      />
      <link rel="shortcut icon" href={url("/favicon/favicon.ico")} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}

export default Meta
