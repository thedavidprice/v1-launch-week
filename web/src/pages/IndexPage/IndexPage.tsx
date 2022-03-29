import { MetaTags } from '@redwoodjs/web'
import Program from 'src/components/Program/Program'
import Header from 'src/components/Header/Header'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS v1.0 Launch"
        description="RedwoodJS v1.0 launch week is here!"
      />
      <Header />
      <div className="p-12 max-w-3xl m-auto">
        <Overview />
        <Program />
        <CTA />
      </div>
    </>
  )
}

const Overview = () => (
  <div>
    <h1 className="font-bold text-xl mb-4">RedwoodJS goes 1.0 on April 4!</h1>
    <h2>
      We will be celebrating all week with a series of announcements and events
      all around the Redwood ecosystem.
    </h2>
    <p className=" text-gray-400 pt-4">
      Dates and times below shown in your{' '}
      <span
        className="underline decoration-dashed"
        title={Intl.DateTimeFormat().resolvedOptions().timeZone}
      >
        local time zone
      </span>
      .
    </p>
  </div>
)

const CTA = () => (
  <div className="pt-4 text-center mx-auto max-w-md border-t-2 border-gray-900">
    <div className="text-xl pb-8">Ready to start your RedwoodJS adventure?</div>
    <a href="https://redwoodjs.com/docs/quick-start">
      <button className="bg-red-600 hover:bg-red-500 text-white text-xl font-bold py-4 px-8 rounded">
        Get Started
      </button>
    </a>
  </div>
)

export default IndexPage
