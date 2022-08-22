import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'

const SignIn = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>

      <noscript>
        <style>{`.nojs-show { opacity: 0; top: 0; }`}</style>
      </noscript>
      <div>
        <p>
          {loading && <div>Please wait signing you in!</div>}
          {!session && (
            <>
              <span className="flex items-center text-center">
                You are not signed in!
              </span>
              <a
                href={'/api/auth/signin'}
                className="flex items-center mt-3 font-medium hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign In
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                />
              )}
              <span>
                <small>Signed in as: {session.user.name}</small>
                <br />
                <strong>
                  Email: {session.user.email ?? session.user.name}
                </strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </>
  )
}

export default SignIn
