import { Suspense } from 'react'

import { Layout, Loading } from '../components/index'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  )
}

export default MyApp
