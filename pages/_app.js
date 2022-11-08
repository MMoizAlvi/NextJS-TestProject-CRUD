import { Suspense } from 'react'

import { Layout, Loading } from '../components/index'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <Suspense fallback={<Loading />}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Suspense>
)

export default MyApp
