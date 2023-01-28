import Container from './container'
import { Timeline } from 'react-twitter-widgets'
import { YouTubeSubscribe } from './youtubeSubscribe'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col items-center my-5">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:pr-4">
            入学(登録)お願いします！
          </h3>
          <div className="my-5">
          <YouTubeSubscribe />
          </div>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'YouTubeKosen'
            }}
            options={{
              height: '700',
              width: '400'
            }}
          />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
