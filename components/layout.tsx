import Footer from './footer'
import Sidebar from './sidebar'
import Meta from './meta'
import Alert from './alert'
import Intro from './intro'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className='bg-black flex flex-col md:flex-row'>
        <Sidebar />
        <div className='bg-white'>
          <div className='hidden md:block'>
            <Alert preview={false} />
            <Intro />
          </div>
          <div className="min-h-screen">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
