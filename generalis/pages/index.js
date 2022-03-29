import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroImage from '../public/images/hero/hero.jpg'
import nossasImagesBG from '../public/images/others/right-4703926.jpg'
import Map from '../components/Map/Map'
const Home = props => {

  useEffect(() => props.setMainContentAsLoaded(true), [])

  const [itemClicked, setItemToClicked] = useState(null)
  useEffect(() =>  setItemToClicked(props.areas[0].id),[props.areas])

  return (
    <>
      <div id="hero" className="bg-primary">
        <Image src={heroImage} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority />
        <div id="hero-content" className="h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center relative">
          <h1 className="text-white mx-2"><strong>A justiça é para todos.</strong></h1>
          <p className="lead text-center text-white mx-2">
            <strong>A Almeida e Falconi tem o especialista certo para o seu caso&nbsp;</strong>
          </p>
          <a className="btn text-decoration-none btn-lg text-white btn-primary border-0 mt-4">Saiba mais »</a>
        </div>        
      </div>
      <div id="sobre-nos-index" className="container-fluid px-0">
        <div className="row mx-0 ">
          <div className="col-md-6 px-4 float-container-alt order-2-mobile relative">
            <div className="float-content-alt relative">
              <h2 className="w-100 text-center text-primary pt-4 pb-2">A Almeida e Falconi</h2>
              <p className="text-primary lead">
                Experiência e qualificação são as marcas da nossa firma.
                Atuamos desde 1997 em diversas áreas do direito, sempre levando conosco valores 
                como respeito e confiança para com nossos clientes.
              </p>
            </div>
            <span className="d-flex justify-content-center py-4">
              <a className="btn text-decoration-none btn-lg text-white btn-primary border-0 mt-4" >Saiba mais »</a>
            </span>
          </div>
          <div className="col-md-6 px-0">
            <div className="img-container-layout-fill relative">
              <Image src={nossasImagesBG} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                width={2000} height={1500}/>
            </div>
          </div>
        </div>
        <div id="atuacao" className="row px-0 pt-0 mx-0">
          <div className="col-md-6 list-container bg-primary d-flex flex-column pe-0 pb-2 px-0">
            <h2 className="w-100 text-center text-white pt-4 pb-2 pt-0">Áreas de atuação</h2>
            <ul className="bg-primary d-flex flex-column justify-content-center mt-3 mb-0 me-0">
              {props.areas.map(({id, name}) => (
                <li id={id} key={id} 
                className={`py-3 ml-3 relative d-flex flex-row w-100 text-white ps-2 ${id === itemClicked ? "active  " : ""}`}
                  onClick={() => {
                    setItemToClicked(id)
                    document.getElementById("list-content").scrollIntoView()
                  }}>
                  <span className="item-text d-flex align-items-center">{name}</span>
              </li>))}
            </ul>
          </div>
          <div id="list-content" className="col-md-6">
            {props.areas.map(({id, name, icon, description}) => (
              <div key={id} 
              className={`list-item-context w-100 h-100 d-flex flex-column align-items-center mx-auto ${id === itemClicked ? "" : "hide"}`}>
                <i className={`mb-2 ${icon}`}></i>
                <p className="d-flex align-items-center px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nam porta velit libero, at vulputate augue suscipit ut. Suspendisse blandit, sapien at semper egestas, sem est dictum ante,
                  vitae venenatis dolor orci ut risus.
                </p>
                <span className="d-flex justify-content-center py-4">
                  <a className="btn text-decoration-none btn-lg text-white btn-primary border-0 mt-4" >Saiba mais »</a>
                </span>
              </div>))}
          </div>
        </div>
        <div id="localizacao" className="row m-0  px-0 mx-0">
          <div className="col-md-6 py-3 float-container-alt relative px-0 order-2-mobile">
            <div className="pt-3 float-content-alt relative">
              <h2 className="mx-4 py-2 text-black d-flex justify-content-center">Onde estamos</h2>
              <div className="d-flex justify-content-center flex-column">
                <p className="mx-4 my-4 d-flex justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                </p>
                <p className="mx-4 d-flex justify-content-center align-items-center lead">
                Av. Getúlio Vargas, 123, Centro Histórico - BA
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div id="img-1" className="bg-primary relative img-container-layout-fill">
              <Image src={nossasImagesBG} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                width={1600} height={800}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

/*


        <div className="row mx-0 px-0 section">
          <div className="col-md-12 px-0">
              <Map />
          </div>
        </div>
*/ 