import Image from 'next/image'

const Intro = () => {
  const image = (
    <Image
      src={"/assets/@YouTubeKosen.png"}
      alt={"私立YouTube高専トップ"}
      width={2560}
      height={630}
    />
  )
  return (
    <section className="items-center">
      <a target="_blank" href="https://www.youtube.com/@YouTubeKosen">
        {image}
      </a>
    </section>
  )
}

export default Intro
