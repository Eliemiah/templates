import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CustomCard from '../components/CustomCard/CustomCard'

const Slider = dynamic(() => import ('../components/Slider/Slider'))
const Map = dynamic(() => import ('../components/Map/Map'))

import heroImage from '../public/static/images/hero/hands-protecting-a-house-picjumbo-com.jpg'

const HomePage = (props) => {

  const [ nossosParceirosRef ] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  let ourServices = [
    {
      title: "Automóveis", 
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "automobile-5330343.jpg",
    },
    {
      title: "Residência",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "house-1867187.jpg",
    },
    {
      title: "Eletrônicos",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "laptop-336378.jpg"
    },
    {
      title: "Vida",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "hand-3751159.jpg",
    },
    {
      title: "Empresas",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "business-4677631.jpg",
    },
    {
      title: "Consórcio",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: "guy-2616375.jpg",
    },
  ]

  const printOurServices = arr => {

    const targetArray = (() => {
      let array = [...arr]

      let get = () => array
      
      let arrayLength = () => array.length

      let organizeArray = sliceAt => {
        let newArr = [...array.slice(sliceAt)]
        array = newArr
      }

      return {
        get,
        arrayLength,
        organizeArray,
      }
    })()

    const maxColumnWidth = 12 //Largura máxima das colunas no bootstrap. 
    const mdColumnWidth = 4 //Este número é referente á classe "col-md-x" do bootstrap. O método utilizará este número como base para a quatidade de linhas e colunas.
    const maxItemsPerRow = (maxColumnWidth / mdColumnWidth)
    const rowsNeeded  = (targetArray.arrayLength() / maxItemsPerRow)

    let renderedRows = []

    for(let rowsToPrint = rowsNeeded.toString().length === 1 ? rowsNeeded : parseInt(rowsNeeded.toPrecision(1)) + 1 ;
         rowsToPrint > 0; rowsToPrint--){
          
        let renderedCards = [] 

        for(let i = 0; i < maxItemsPerRow && targetArray.get()[i] !== undefined; i++){
            let item = targetArray.get()[i]

            renderedCards.push(<CustomCard item={item} index={i}/>)
        }

        targetArray.organizeArray(maxItemsPerRow)
        let columns = renderedCards.map((card, index) => (<div className="col-md-4 mt-1" key={index}>{card}</div>))
        renderedRows.push((<div className="row" key={rowsToPrint}>{columns}</div>))  
    }

    return renderedRows
    
  }

  useEffect(() => props.setMainContentAsLoaded(true), [])

  return(
    <div id="page-content" >
    <div className="bg-primary wrapper" id="inicio">
      <div className="w-100 container-fluid px-0">
        <div className="row py-0 px-0 mx-0 mb-0 top-space">
          <div className="col-md-12 px-0 py-0 d-flex justify-content-center align-items-center flex-column" id="home">
            <div id="hero-bg">
              <Image src={heroImage} placeholder='blur'
                layout="fill" objectFit="cover" quality={95} priority/>
            </div>
            <div id="hero-content" className="d-flex flex-column justify-content-center align-items-center text-center">
              <h1 className="text-white mx-2"><strong>Protegemos o seu patrimônio para você ficar tranquilo</strong></h1>
              <p className="lead text-center text-white mx-2">
                <strong>A Cælvm tem as melhores opções em seguros e cabem no seu bolso&nbsp;</strong>
              </p>
              <a className="btn text-decoration-none btn-lg text-white btn-secondary border-0 mt-4" href="#nossos-produtos">Conheça nosso produtos »</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="py-5 text-white bg-light wrapper"   id="nossos-produtos">
     <div className="container">
        <div className="row top-space">
          <div className="col-md-12">
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <h1 className="text-secondary">NOSSOS PRODUTOS</h1>
              </div>
            </div>
            <>{printOurServices(ourServices)}</>
          </div>
        </div>
      </div>
    </div>
  
    <div className="bg-light py-5 wrapper" id="quem-somos" >
      <div className="container">
        <div className="row mb-4 top-space">
          <div className="col-md-12 d-flex flex-row align-items-baseline justify-content-center text-center pt-3">
            <h2 className="text-center text-secondary">QUEM SOMOS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-3">
              <div className="d-flex align-items-center d-block mx-auto py-1 img-container relative">
                  <Image layout="responsive" width={1200} height={1200} alt="Logo Caelvm"  
                    src="/static/images/logo-body/logo-206739622.png"
                    sizes="(max-width: 360px) 98vw, (max-width: 450px) 75vw, (max-width: 600px) 30vw, (max-width: 767px) 45vw, 25vw "
                    />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3 px-4">
            <p className="text-dark lead">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
            <p className="lead"> dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt. Nam libero tempore, cum soluta nobis est eligendi optio cumque. </p>
            <p className="lead"> Estamos empenhados em buscar as melhores soluções financeiras para quem necessitar de nossos serviços.</p>
          </div>
        </div> 
      </div>
    </div>
  
    <div className="py-5" id="onde-estamos" >
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3">ONDE ESTAMOS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center my-3">
            <div className="img-container">
              <div className="img-outer relative">
                <Image layout="fill" objectFit="cover" alt="Loja da Caelvm" 
                  className= "img-fluid d-block mx-auto" 
                  src="/static/images/front/front.jpg"
                  sizes="(max-width: 360px) 98vw, (max-width: 450px) 75vw, (max-width: 600px) 30vw, (max-width: 767px) 45vw, 25vw "
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Map />
          </div>
        </div>
      </div>
    </div>
  
    <div className="py-5" ref={nossosParceirosRef}>
      <div className="container px-0">
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3" >NOSSOS PARCEIROS&nbsp;</h2>
          </div>
        </div>
        <div className="row w-100 mx-0" id="partners-box">
          <Slider images={[
            "bitcoin-225079.png", 
            "eco-5465425.png",
            "euro-2461577.png",
            "ethereum-logo-6278329.png",
            "logo-2067396.png"]} />
        </div>
      </div>
    </div>

    <div className="py-5 bg-light wrapper" id="fale-conosco">
      <div className="container">
        <div className="row mb-4 top-space">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3">FALE CONOSCO</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6 d-flex my-3 flex-column">
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3>(71) 99123-0000 </h3>
                </div>
              </div>
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3>(71) 99123-0000 </h3>
                </div>
              </div>
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3 className="d-flex flex-row justify-content-center align-items-center" >(71) 99123-0000&nbsp;&nbsp;<i className="fa fa-whatsapp fa-lg" aria-hidden="true">&nbsp;&nbsp;</i></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex my-3 flex-column">
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3 className="d-flex flex-row justify-content-center align-items-center"><i className="fa fa-facebook-official fa-lg" aria-hidden="true">&nbsp;</i>/empresa.xyz</h3>
                </div>
              </div>
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3 className="d-flex flex-row justify-content-center align-items-center"><i className="fa fa-instagram fa-lg" aria-hidden="true">&nbsp;</i>/empresa.xyz</h3>
                </div>
              </div>
            </div>
          </div>  
      </div>     
    </div>
  </div>
  )
}

// This function gets called at build time
/*
export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/articles/what-s-inside-a-black-hole')
    const post = await res.json()

    return {
      props: {
        post,
      },
    }
  }
  */


  
export default HomePage
