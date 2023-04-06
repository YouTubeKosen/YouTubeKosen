import Link from 'next/link'

type Props = {
    title: string
    date: string
    excerpt: string
    slug: string
}
import DateFormatter from './date-formatter'

const PostSummary = ({
    title,
    date,
    excerpt,
    slug,
}: Props) => {
    return (
        <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]">
            <div className="flex flex-col hover:shadow-lg p-3 rounded-md border-gray-300 border hover:border-gray-500 cursor-pointer">
                <div className="font-semibold text-gray-600 text-1xl">
                    <DateFormatter dateString={date} />
                </div>
                <div className="header font-semibold text-2xl">{title}</div>
                <div className="desc text-gray-600">{excerpt}</div>
            </div>
        </Link>
    )
}

export default PostSummary
