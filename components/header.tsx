import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight my-4">
      <Link href="/" className="hover:underline">
        私立YouTube高専
      </Link>
    </h2>
  )
}

export default Header
