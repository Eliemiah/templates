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
  const professionals = [
    {
      pic: '',
      name: "João Chagas Almeida",
      bio: "Graduado em Direito previdenciario pela Lore Lipsum - Especialista em direito previdenciario.",
      areas: ["infancia-e-juventude", "fazenda-publica"]
    },
    {
      pic: '',
      name: "João Martins Albuquerque",
      bio: "Graduado em Direito previdenciario pela Lore Lipsum - Especialista em direito previdenciario.",
      areas: ["civeis"]
    },
    {
      pic: '',
      name: "Maria Joana Falconi Botelho",
      bio: "Graduado em Direito previdenciario pela Lore Lipsum - Especialista em direito previdenciario.",
      areas: ["famila", "criminais"]
    }

  ]
  const praticeAreas = [
    {
      id: "infancia-e-juventude", 
      name: "Varas de infância e juventude", 
      icon: "fa-solid fa-child" , 
      description: "Quisque finibus enim vel congue commodo. Mauris nec quam sed turpis consectetur rutrum non ac nunc. Fusce feugiat sem quis justo commodo commodo. Ut neque turpis, rutrum vitae vestibulum eu, hendrerit eget justo.",
      professionalID: "João Chagas Almeida"      
    },
    {
      id: "fazenda-publica", 
      name: "Varas da Fazenda Pública", 
      icon: "fa-solid fa-coins" , 
      description: "Quisque finibus enim vel congue commodo. Mauris nec quam sed turpis consectetur rutrum non ac nunc. Fusce feugiat sem quis justo commodo commodo. Ut neque turpis, rutrum vitae vestibulum eu, hendrerit eget justo.",
      professionalID: "João Chagas Almeida"      
    },
    {
      id: "civeis", 
      name: "Varas cíveis", 
      icon: "fa-solid fa-user-large" , 
      description: "Quisque finibus enim vel congue commodo. Mauris nec quam sed turpis consectetur rutrum non ac nunc. Fusce feugiat sem quis justo commodo commodo. Ut neque turpis, rutrum vitae vestibulum eu, hendrerit eget justo.",
      professionalID: "Maria Joana Falconi Botelho"
    },
    {
      id: "famila", 
      name: "Varas de família", 
      icon: "fa-solid fa-users" , 
      description: "Quisque finibus enim vel congue commodo. Mauris nec quam sed turpis consectetur rutrum non ac nunc. Fusce feugiat sem quis justo commodo commodo. Ut neque turpis, rutrum vitae vestibulum eu, hendrerit eget justo.",
      professionalID:  "João Martins Albuquerque"
    },
    {
      id: "criminais", 
      name: "Varas criminais", 
      icon: "fa-solid fa-user-secret" ,
      description: "Quisque finibus enim vel congue commodo. Mauris nec quam sed turpis consectetur rutrum non ac nunc. Fusce feugiat sem quis justo commodo commodo. Ut neque turpis, rutrum vitae vestibulum eu, hendrerit eget justo.",
      professionalID: "Maria Joana Falconi Botelho"
    },
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
        <Component setMainContentAsLoaded={setMainContentAsLoaded} {...pageProps} areas={praticeAreas} professionals={professionals} />
      </main>
    </>
  )
}

export default MyApp
