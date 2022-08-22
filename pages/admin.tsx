import React from 'react'

const admin = () => {
  return (
    <>
      <h1>This page is protected by middleware</h1>
      <p>Only admins can use this page.</p>
    </>
  )
}

export default admin
