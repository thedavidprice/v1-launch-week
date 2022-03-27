import { MetaTags } from '@redwoodjs/web'
import Calendar from 'src/components/Schedule/Schedule'
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
        <Overview />
        <Calendar />
      </div>
    </>
  )
}

const Overview = () => (
  <>
    <p className="font-bold mb-4">On April 4th, RedwoodJS goes 1.0!</p>
    <p className="text-justify">
      We will be celebrating all week with a series of announcements and events
      all around the Redwood ecosystem.
    </p>
  </>
)

export default IndexPage
