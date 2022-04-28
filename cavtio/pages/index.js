import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect } from 'react'
import CustomCard from '../components/CustomCard/CustomCard'
import styles from '../public/static/styles/Home.module.scss'
import heroImage from '../public/static/images/hero/hero-image.jpg'

const Slider = dynamic(() => import ('../components/Slider/Slider'))
const Map = dynamic(() => import ('../components/Map/Map'))

import foodIcon from '../public/static/images/actions/Bread-01-256.png'
import shirtIcon from '../public/static/images/actions/Men-T-Shirt-01-256.png'
import firstAidIcon from '../public/static/images/actions/First-Aid-Kit-02-256.png'
import identityIcon from '../public/static/images/actions/Identity-Card-256.png'

import julia from '../public/static/images/volunteers/julia.jpg'
import jose from '../public/static/images/volunteers/jose.jpg'
import marina from '../public/static/images/volunteers/marina.jpg'
import wagner from '../public/static/images/volunteers/wagner.jpg'

const HomePage = props => {

  const volunteers = [
    {
      name: "José Adriano",
      pic: jose,
      phrase: "dignissimos ducimus qui blanditiis praesentium voluptatum ",
      socialMedia: [
        {
          link: '#',
          ico: "fa-facebook"
        },
        {
          link: '#',
          ico: "fa-instagram"
        },
        {
          link: '#',
          ico: "fa-twitter"
        },
      ]
    },
    {
      name: "Julia Martins",
      pic: julia,
      phrase: "dignissimos ducimus qui blanditiis praesentium voluptatum ",
      socialMedia: [
        {
          link: '#',
          ico: "fa-facebook"
        },
        {
          link: '#',
          ico: "fa-instagram"
        },
        {
          link: '#',
          ico: "fa-twitter"
        },
      ]
    },
    {
      name: "Wagner Gonçalves",
      pic: wagner,
      phrase: "dignissimos ducimus qui blanditiis praesentium voluptatum ",
      socialMedia: [
        {
          link: '#',
          ico: "fa-facebook"
        },
        {
          link: '#',
          ico: "fa-instagram"
        },
        {
          link: '#',
          ico: "fa-twitter"
        },
      ]
    },
    {
      name: "Marina Albuquerque",
      pic: marina,
      phrase: "dignissimos ducimus qui blanditiis praesentium voluptatum ignissimos ducimus qui blanditiis praesentium voluptatum",
      socialMedia: [
        {
          link: '#',
          ico: "fa-facebook"
        },
        {
          link: '#',
          ico: "fa-instagram"
        },
        {
          link: '#',
          ico: "fa-twitter"
        },
      ]
    }
  ]

  let ourServices = [
    {
      title: "Distribuição de roupas", 
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: shirtIcon,
    },
    {
      title: "Distribuição de alimentos",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: foodIcon,
    },
    {
      title: "Auxílio para obter documentos",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: identityIcon
    },
    {
      title: "Distribuição de itens de higiêne",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
      img: firstAidIcon,
    },

  ]

  const printOurServices = (arr, mdColumnWidth) => {
// mdColumnWidth = É referente á classe "col-md-x" do bootstrap. 
//O método utilizará este número como base para a quatidade de linhas e colunas.

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
 
    const maxItemsPerRow = (maxColumnWidth / mdColumnWidth)
    const rowsNeeded  = (targetArray.arrayLength() / maxItemsPerRow)

    let renderedRows = []

    for(let rowsToPrint = rowsNeeded.toString().length === 1 ? rowsNeeded : parseInt(rowsNeeded.toPrecision(1)) + 1 ;
         rowsToPrint > 0; rowsToPrint--){
          
        let renderedCards = [] 

        for(let i = 0; i < maxItemsPerRow && targetArray.get()[i] !== undefined; i++){
            let item = targetArray.get()[i]

            renderedCards.push(<CustomCard item={item} index={i} className={`${styles["action"]}`} />)
        }

        targetArray.organizeArray(maxItemsPerRow)
      //  let columns = renderedCards.map((card, index) => (<div className="col-md-4 mt-1" key={index}>{card}</div>))
      //  renderedRows.push((<div className="row" key={rowsToPrint}>{columns}</div>)) 
          renderedRows.push((<div className="row d-flex mt-5" key={rowsToPrint}><div className={`${styles["our-actions-container"]} col-md-12 px-0 d-flex  mt-5 align-items-center justify-content-center ${styles["cards-container"]}`}>{renderedCards}</div></div>))  
 
    }

    return renderedRows
    
  }

  useEffect(() => props.setMainContentAsLoaded(true), [])

  return(
    <div id={styles["page-content"]} className="w-100 relative" >
      <div ref={props.heroObserver} className="bg-primary wrapper" id={styles.inicio}>
        <div className="w-100 container-fluid px-0">
          <div className="row py-0 px-0 mx-0 mb-0">
            <div id={styles["home"]} className="col-md-12 px-0 py-0 d-flex justify-content-center align-items-center flex-column relative" >
              <div id={styles["hero-bg"]} className="w-100 h-100">
                <Image src={heroImage} placeholder='blur' alt="hero image"
                  layout="fill" objectFit="cover" quality={95} priority/>
              </div>
              <div id={styles["hero-content"]} className="d-flex flex-column justify-content-center align-items-center text-center">
                <span className="text-white mx-2 h1">
                  <strong>Nossa missão é construir um mundo melhor.</strong>
                </span>
                <h1 className="lead text-center text-white mx-2">
                  A Cavtio promove várias ações sociais para ajudar quem mais precisa&nbsp;
                </h1>
                <a id={styles["hero-button"]} className="btn text-decoration-none btn-lg text-white border-0 mt-4" href="#quem-somos">Conheça nosso trabalho »</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className={`bg-light py-5 wrapper `} id="quem-somos">
      <div className="container px-1" id={`${styles["quem-somos"]}`}>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-3">
            <div className={`${styles["img-container"]} next-image-reset`}>
              <Image layout="fill" objectFit="cover" alt="Sede da Cavtio" 
                className= "img-fluid d-block mx-auto" 
                src="/static/images/front/front.jpg"
                sizes="(max-width: 360px) 98vw, (max-width: 450px) 75vw, (max-width: 600px) 30vw, (max-width: 767px) 45vw, 26vw "/>
            </div>
          </div>
          <div className="col-md-6 mb-3 px-4">
            <h2 className="text-center text-secondary">A Cavtio</h2>
            <p className="text-dark lead">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
            <p className="lead"> dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt. Nam libero tempore, cum soluta nobis est eligendi optio cumque. </p>
            <p className="lead"> Estamos empenhados em buscar as melhores soluções financeiras para quem necessitar de nossos serviços.</p>
          </div>
        </div> 
      </div>
    </div>
    <div id="nossos-produtos" className="py-5 text-white bg-light wrapper"  >
     <div className="container px-1">
      <div className="row mb-4">
        <div className="col-md-12 text-center mx-3">
          <h2 className="text-secondary">Nossas ações</h2>
        </div>
      </div>
      <>{printOurServices(ourServices, 3)}</>
      </div>
    </div>

    <div className="py-5" id="nossos-voluntarios">
      <div className="container px-1" id={styles["our-volunteers"]}>
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary">Nossos volutários</h2>
          </div>
        </div>
        <div className={"row d-flex justify-content-center mt-3"}>
          <div id={`${styles["volunteers-container"]}`} className="col-md-12 d-flex mx-3">
          {
            volunteers.map(item => (
              <div key={item.name} className={`d-flex flex-column justify-content-center align-items-center ${styles["volunteer"]}`}>
                <div className={`next-image-reset d-flex relative  ${styles["volunteer-pic-container"]}`}>
                  <Image src={item.pic} layout="fill" objectFit="cover" title="Foto de voluntário"/>
                </div>
                <div className={`${styles["volunteer-info"]} d-flex flex-column align-items-center w-75 mt-2`}>
                  <div className={`top-container mt-2 text-center`}>
                    <span className="d-flex justify-content-center text-black">{item.name}</span>
                    <p className="d-flex justify-content-center mt-1 text-grey">{item.phrase}</p>
                  </div>
                  <div className={`bottom-container d-flex justify-content-center`}>
                    {
                      item.socialMedia !== undefined 
                      ?
                        item.socialMedia.map(item => (
                          <a href={item.link}>
                            <div className={`fa-brands text-primary ${item.ico} mx-2`}></div>
                          </a>
                        ))
                      : 
                        ''
                    }
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
    <div className="py-5" >
      <div className="container px-0">
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3" >Parceiros&nbsp;</h2>
          </div>
        </div>
        <div className="row w-100 mx-0" id={styles["partners-box"]}>
          <Slider images={[
            "bitcoin-225079.png", 
            "eco-5465425.png",
            "euro-2461577.png",
            "ethereum-logo-6278329.png",
            "logo-2067396.png"]} />
        </div>
      </div>
    </div>
    <div className="py-5" id="onde-estamos" >
      <div className="container px-1" id={`${styles["onde-estamos"]}`}>
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3">Onde estamos</h2>
          </div>
        </div>
        <div className="row mx-3">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3 px-0">
            <p className={`mx-4 my-4 d-flex justify-content-center ${styles["fa-location-dot-container"]}`}>
                <i className={`fa-solid fa-location-dot fa-2xl ${styles["fa-location-dot"]}`}></i>
            </p>
            <p className="mx-4 d-flex justify-content-center align-items-center lead">
            Av. Getúlio Vargas, 123, Centro Histórico - BA
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center my-3 px-0">
            <div className={styles["map-container"]}>
              <Map shadow={true}/>
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
