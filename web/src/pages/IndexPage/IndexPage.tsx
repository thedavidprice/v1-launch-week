import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Header from 'src/components/Header/Header'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS v1.0 Launch"
        description="RedwoodJS v1.0 launch week is here!"
      />
      <Header />
      <div className="p-12">
        <p className="font-bold mb-4">On April 4th, RedwoodJS goes 1.0!</p>
        <p className="text-justify">
          We will be celebrating all week with a series of announcements and
          events all around the Redwood ecosystem.{' '}
        </p>
      </div>
    </>
  )
}

export default IndexPage
