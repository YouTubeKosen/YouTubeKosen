import Image from 'next/image'
import { url } from '../lib/utils'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image 
      src={url(picture)} 
      className="rounded-full" 
      alt={name} 
      width="60"
      height="60"
      />
      <div className="text-xl font-bold mr-4">{name}</div>
    </div>
  )
}

export default Avatar
