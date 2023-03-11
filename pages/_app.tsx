import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-multi-carousel/lib/styles.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <>
         <ToastContainer/>
  <Component {...pageProps} />

    </>
  )


}

export default MyApp
