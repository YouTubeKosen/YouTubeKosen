import Image from 'next/image'
import Link from 'next/link'
import { url } from '../lib/utils'

const Intro = () => {
  const image = (
    <Image
      src={url("/assets/@YouTubeKosen.png")}
      alt={"私立YouTube高専ヘッダー"}
      width={1300}
      height={167}
    />
  )
  return (
    <section className="mb-5 flex justify-center mx-auto">
      <Link href={"/"}>
        {image}
      </Link>
    </section>
  )
}

export default Intro
