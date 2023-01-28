import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  const image = (
    <Image
      src={"/assets/@YouTubeKosen.png"}
      alt={"私立YouTube高専トップ"}
      width={1300}
      height={730}
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
