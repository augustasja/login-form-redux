import '../styles/globals.scss'
import Layout from '../layouts/Layout'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </Provider>
  )
}

export default MyApp
