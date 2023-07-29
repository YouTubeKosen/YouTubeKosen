import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-3 text-center md:text-left md:mt-8">
      {children}
    </h1>
  )
}

export default PostTitle
