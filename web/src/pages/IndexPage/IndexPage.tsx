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
    <div className="text-center mb-6">
      <h2 className="font-bold text-4xl mb-4">
        RedwoodJS goes 1.0 on April 4!
      </h2>
    </div>

    <h3>
      From Monday April 4th through Thursday April 7th, we celebrate the release
      of 1.0.0 with a series of announcements and events from around the Redwood
      ecosystem.
      <br />
      <br />
      It all leads up to a <span className="font-bold">BIG</span> announcement
      on Thursday.
    </h3>
    <div className="mt-8 mb-8 grid place-content-center">
      <div className="p-4 border-l-2 ">
        The Redwood&nbsp;
        <a
          className="underline text-blue-400"
          href="https://community.redwoodjs.com/t/redwood-1-0-0-rc-final-is-available/2902"
        >
          1.0.0-rc.final is now Available
        </a>
      </div>
    </div>
    <p className=" text-gray-400">
      Events require free Lu.ma registration. See specific details via
      &quot;RSVP&quot;s below.
      <br />
      Dates and times below shown in your{' '}
      <span>
        local time zone ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </span>
      .
    </p>
  </div>
)

const CTA = () => (
  <div className="pt-4 text-center mx-auto max-w-md border-t-2 border-gray-900">
    <div className="text-xl pb-8">Ready to start your RedwoodJS adventure?</div>
    <a href="https://redwoodjs.com/docs/quick-start">
      <button className="bg-redwood-red  text-white text-xl font-bold py-4 px-8 rounded">
        Get Started
      </button>
    </a>
  </div>
)

export default IndexPage
