import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="404, You've taken a wrong turn." />
      </Head>
      <section>
        <div className="min-h-screen px-4 mx-auto max-w-7xl sm:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="text-5xl max-w-xl mx-auto mt-8 text-left lg:text-center font-spooky animate-pulse">
              404, You&apos;ve taken a wrong turn
            </h2>
            <p className="text-2xl max-w-xl mx-auto mt-8 text-left lg:text-center font-spooky animate-pulse">
              The page you are looking for does not exist.
            </p>
            <p className="max-w-xl mx-auto mt-8 text-left lg:text-center">
              Looks like you got lost in the party.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
