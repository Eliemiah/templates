// import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles/bootstrap-custom.scss'
import  '../public/styles/custom.css'
import '../public/fontawesome-free-6.0.0-web/css/fontawesome.css'
import '../public/fontawesome-free-6.0.0-web/css/solid.css'
import '../public/fontawesome-free-6.0.0-web/css/brands.css'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import CustomHead from '../components/CustomHead/CustomHead'
import Menu from '../components/Menu/Menu'
import logoPic from '../public/images/logo/logo_white.png'

function MyApp({ Component, pageProps }) {
  const menuEntries = [
    {
      title: 'Início',
      route: '/'
    },
    {
      title: 'Nossos serviços',
      route: 'nossos-servicos'
    },
    {
      title: 'Quem somos',
      route: 'quem-somos'
    },
    {
      title: 'Fale conosco',
      route: 'fale-conosco'
    }
  ]
  const logo = {
    pic: logoPic,
    alt: 'Almeida e Falconi logo'
  }
  const [mainContentIsLoaded, setMainContentAsLoaded] = useState(false)

  const widthMatch = useMediaQuery({query: '(max-width:767px)'})
  
  return (
    <>
      <CustomHead />
      <Menu mainContentIsLoaded={mainContentIsLoaded} logo={logo} menuItems={menuEntries} mobileModeEnabled={widthMatch} />
      <main id="page-content" className="relative w-100">
        <Component setMainContentAsLoaded={setMainContentAsLoaded} {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
