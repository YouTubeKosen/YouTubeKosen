import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center">
          
            <>
              まずは、校長先生の刺激的な授業を体感してみませんか？{' '}
              <a
                href={"https://www.youtube.com/@YouTubeKosen/"}
                className="underline hover:text-red-600 duration-200 transition-colors"
                target={"_blank"}
              >
                YouTubeで見る
              </a>
              .
            </>
        </div>
      </Container>
    </div>
  )
}

export default Alert
