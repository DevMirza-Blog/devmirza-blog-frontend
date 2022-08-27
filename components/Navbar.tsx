/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) null
  return (
    <nav className="flex item-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          {/* <Image src="/logo.png" alt="logo" height={35} width={40} /> */}
          <span className="font-bold ml-2 text-primary">DevMirza Blog</span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-black dark:text-white">
          <a href="/about">About</a>
        </li>
        <li className="mr-6 font-medium  text-black dark:text-white">
          <a href="/products">Products</a>
        </li>
        <li className="mr-6 font-medium text-black dark:text-white">
          <a href="/pricing">Pricing</a>
        </li>
        <li className="mr-6 font-medium text-black dark:text-white">
          <a href="/documentation">Docs</a>
        </li>
        <li className="mr-6 font-medium text-black dark:text-white">
          <a href="/company">Company</a>
        </li>
      </ul>
      <button
        className="px-6 py-2 font-bold bg-black dark:bg-white text-white dark:text-black rounded-full"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle to {theme === 'light' ? 'dark' : 'light'}
      </button>
      <ul className="flex items-center">
        {!session && (
          <li className="font-medium text-gray-600">
            <a
              href="/api/auth/signin"
              className="bg-primary py-2 px-4 rounded-full text-white hover:bg-primary-dark transition-all"
            >
              Sign In
            </a>
          </li>
        )}
        {session?.user && (
          <>
            <a className="bg-primary py-2 px-4 rounded-full text-white dark:text-white font-bold">
              Signed in as: {session.user.name}
            </a>
            <span className='flex items-center'>
            <a
              href={'/api/auth/signout'}
              className='bg-white rounded-full text-white dark:text-black py-2 px-4 ml-2'
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign Out
            </a>
            </span>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
