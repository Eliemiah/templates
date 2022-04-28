import '../public/styles/Global.scss'
import '../public/styles/glider.min.css'
import '../public/styles/fontawesome-free-6.0.0-web/scss/fontawesome.scss'
import '../public/styles/fontawesome-free-6.0.0-web/scss/solid.scss'
import '../public/styles/fontawesome-free-6.0.0-web/scss/brands.scss'


import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import CustomHead from '../components/CustomHead/CustomHead'

import logoPic from '../public/images/logo/logo.png'

import Menu from '../components/Menu/Menu'


const App = ({ Component, pageProps}) => {
  const menuEntries = [
    {
      title: 'Início',
      route: '#inicio'
    },
    {
      title: 'Quem somos',
      route: '#quem-somos'
    },
    {
      title: 'Nossas ações',
      route: '#nossas-acoes'
    },
    {
      title: 'Fale conosco',
      route: '#fale-conosco'
    }
  ]

  const widthMatch = useMediaQuery({query: '(max-width:767px)'})
  const { ref, inView } = useInView()
  const logo = {
    pic: logoPic,
    alt: 'Cavtio logo'
  }
  const [mainContentIsLoaded, setMainContentAsLoaded] = useState(false)

  return(
    <>
      <CustomHead title={'Cavio | Nextjs template'}/>
      <Menu mainContentIsLoaded={mainContentIsLoaded} heroInview={inView} logo={logo} menuItems={menuEntries} mobileModeEnabled={widthMatch} />
      <main>
        <Component setMainContentAsLoaded={setMainContentAsLoaded} heroObserver={ref}  {...pageProps} />
      </main>
      <footer className="w-100 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
        <div className="container py-4">
          <div className="row pb-4 px-3">
            <div className="col-md-4 col-sm-6 my-4">
              <div className="row mb-2">
                <div className="logo-outer next-image-reset ps-0">
                  <Image src={logo.pic} layout="responsive" quality={95}  alt={logo.alt}
                    width={600} height={80} priority
                    sizes="(max-width: 575px) 50vw, (min-width: 576px) 60vw, (min-width: 768px) 70vw, (min-width: 992px) 80vw, 85vw"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <span>Nossa missão é construir um mundo melhor.</span>
              </div>
              <div className="row ">
                <div className="col-md-12 d-flex">
                  <div><i className="fa-brands fa-instagram fa-2xl me-2"></i></div>
                  <div><i className="fa-brands fa-facebook fa-2xl mx-2"></i></div>
                  <div><i className="fa-brands fa-twitter fa-2xl mx-2"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 my-4">
              <div className="row">
                <span className="mb-4 h5">Fale conosco</span>
              </div>
              <div className="row">
                <span >(99) 98888-9999</span>
                <span >(99) 98888-9999</span>
                <span >(99) 98888-9999 &nbsp; <i className="fa-brands fa-whatsapp fa-lg me-2"></i></span>
                <span className="mt-2">ong.xyz@mail.com</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 footer-btn my-4">
              <div className="row">
                <button className="btn btn-secondary btn-lg border-0 rounded-0">
                  <a className=" text-decoration-none text-white mt-4" href="#">
                    Quero ajudar!
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="row px-3 mt-4 ">
            <hr />
          </div>
          <div className="row w-100">
            <span className="d-flex justify-content-center">©2022 - Radix Soluções na Rede</span>
          </div>
        </div>
      </footer>
    </>

  )

}

  export default App

  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }



