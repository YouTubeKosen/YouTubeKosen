import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Alert from '../components/alert'
import Post from '../interfaces/post'
import { useState } from 'react';
import { LoadMore } from '../components/load-more'
import { ShowAllPosts } from '../components/show-all-posts'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const [postNum, setPostNum] = useState(3)
  const heroPost = allPosts[0]
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4)
  }
  return (
    <>
      <Layout>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {<MoreStories posts={allPosts.slice(1, postNum)} />}
          {postNum < allPosts.length && <LoadMore onClick={handleClick} />}
          <ShowAllPosts />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
