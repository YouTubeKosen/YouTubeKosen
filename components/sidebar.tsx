import Image from "next/image"
import Link from "next/link";

const Sidebar = () => {
  return (<>
    <aside className="md:max-w-[360px] p-5 md:p-10 text-white text-xl md:fixed md:top-0 md:left-0 md:h-full flex flex-col items-center md:items-start">
      <Link href="/">
        <div className='w-48 h-48 mb-2 relative'>
          <Image src="/assets/blog/authors/principal.png" alt="校長" fill className='absolute top-0 left-0 rounded-full'></Image>
        </div>
        <div className='text-4xl'>私立YouTube高専</div>
        <p className="text-contentLight text-2xl mb-5">
          コンピュータ科学専攻長
        </p>
      </Link>
      <nav>
        <ul className="mb-5">
          <li><Link href="/posts/20221204" className="hover:underline">私立YouTube高専について</Link></li>
          <li><Link href="/posts" className="hover:underline">投稿一覧</Link></li>
          <li><Link href="https://www.youtube.com/@YouTubeKosen" className="hover:underline">YouTube</Link></li>
          <li><Link href="https://twitter.com/YouTubeKosen" className="hover:underline">Twitter</Link></li>
        </ul>
      </nav>
      <p className="text-gray-400">© 2023 私立YouTube高専</p>

    </aside >
    <div className="md:max-w-[360px] w-full hidden md:block flex-grow-0 flex-shrink-0 md:h-full"></div>
  </>
  )
}

export default Sidebar;