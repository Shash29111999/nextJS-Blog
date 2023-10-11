import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout/layout'


const launchpad = () => {
  return (
    <>
      <Layout>
        <Head>
            <title>First Post</title>
            <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        </Head>
        <div>
          <h1>launchpad</h1>
          <h2>
            <a href="/">Back to home</a>
          </h2>
        </div>
      </Layout>
    </>
  )
}

export default launchpad
