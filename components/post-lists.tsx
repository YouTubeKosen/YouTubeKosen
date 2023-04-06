import Post from '../interfaces/post'
import PostSummary from './post-summary'
type Props = {
    posts: Post[]
}

const PostLists = ({ posts }: Props) => {
    return (
        <section>
        <div className="header">
            <div className="text-3xl font-bold mb-4">過去の投稿</div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-5">
                {posts.map((post) => (
                    <PostSummary
                        title={post.title}
                        date={post.date}
                        excerpt={post.excerpt}
                        slug={post.slug}
                    />
                ))}
            </div>
        </section>
    )
}

export default PostLists
