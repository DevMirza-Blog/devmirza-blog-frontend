import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>500</title>
        <meta name="description" content="500, Internal Server Error" />
      </Head>
      <div className="min-h-screeb px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="text-5xl max-w-xl mx-auto mt-8 text-left lg:text-center font-sppoky animate-pulse">
            500 Internal Server Error
          </h2>
          <p className="text-2xl max-w-xl mx-auto mt-8 text-left lg:text-center font-spooky animate-pulse">
            Oops! Our servers are having a meltdown. We&apos;re sorry for the
            inconvenience. Our team has been alerted and is working on a fix.
            Please try again later.
          </p>
        </div>
      </div>
    </>
  )
}
