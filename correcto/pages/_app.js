import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/static/styles/font-awesome-4.7.0/css/font-awesome.css'
import '../public/static/styles/custom.css'
import '../public/static/styles/glider.css'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import CustomHead from '../components/CustomHead/CustomHead'

const Menu = dynamic(() => import ('../components/Menu/Menu'))



const App = ({ Component, pageProps}) => {
  const menuEntries = [
    {
      title: 'Início',
      route: '#inicio'
    },
    {
      title: 'Nossos produtos',
      route: '#nossos-produtos'
    },
    {
      title: 'Quem somos',
      route: '#quem-somos'
    },
    {
      title: 'Fale conosco',
      route: '#fale-conosco'
    }
  ]

  const widthMatch = useMediaQuery({query: '(max-width:599px)'})

  const [mainContentIsLoaded, setMainContentAsLoaded] = useState(false)

  return(
    <>
       <CustomHead title={'Caelvm'}/>
      {      
        ((widthMatch === true || widthMatch === false) 
          && <Menu menuItems={menuEntries}  mobileModeEnabled={widthMatch} mainContentIsLoaded={mainContentIsLoaded} />)
      }
      <main>
        <Component setMainContentAsLoaded={setMainContentAsLoaded}  {...pageProps} />
      </main>
    </>

  )

}

  export default App

  //<BlogTitle title={pageProps.siteInfo.siteName} />
  
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



