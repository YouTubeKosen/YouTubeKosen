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
import { HOME_OG_IMAGE_URL } from '../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const [ postNum, setPostNum] = useState(3)
  const heroPost = allPosts[0]
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4)
  }
  return (
    <>
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <Layout>
        <Head>
          <title>{"私立YouTube高専"}</title>
        </Head>
        <Alert preview={false} />
        <Intro />
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
          {postNum < allPosts.length && <LoadMore onClick ={handleClick}/>}
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
