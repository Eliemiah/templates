import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroImage from '../public/images/hero/hero.jpg'
import nossasImagesBG from '../public/images/others/right-4703926.jpg'

const Home = props => {

  useEffect(() => props.setMainContentAsLoaded(true), [])

  const [itemClicked, setItemToClicked] = useState(null)


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
      <div id="sobre-nos-index" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-box-float px-4">
                <div className="text-box-float-inner relative">
                  <h2 className="w-100 text-center text-primary pt-4 pb-2">A Almeida e Falconi</h2>
                  <p className="text-primary lead">
                    Experiência e qualificação são as marcas da nossa firma.
                    Atuamos desde 1997 em diversas áreas do direito, sempre levando conosco valores 
                    como respeito e confiança para com nossos clientes.
                  </p>
                </div>
                <span className="d-flex justify-content-center">
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
          </div>
        </div>
      </div>
      <div id="atuacao" className="container-fluid px-5 mb-5 pt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 list-container ">
                <h2 className="w-100 text-center text-primary pt-4 pb-2 pt-3">Áreas de atuação</h2>
                <ul className="bg-primary d-flex flex-column justify-content-center mt-3 mb-0 mx-auto">
                  {props.especialidades.map(({id, name}) => (
                    <li id={id} key={id} 
                    className={`py-3 ml-3 relative d-flex flex-row w-100 text-white ${id === itemClicked ? "active  " : ""}`}
                      onClick={() => {
                        setItemToClicked(id)
                        document.getElementById("list-content").scrollIntoView()
                      }}>
                      <span className="item-text d-flex align-items-center">{name}</span>
                  </li>))}
                </ul>
              </div>
              <div id="list-content" className="col-md-6">
                {props.especialidades.map(({id, name, icon, description}) => (
                  <div key={id} 
                  className={`list-item-context w-100 h-100 d-flex flex-column align-items-center mx-auto ${id === itemClicked ? "" : "hide"}`}>
                    <i className={`mb-2 ${icon}`}></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Nam porta velit libero, at vulputate augue suscipit ut. Suspendisse blandit, sapien at semper egestas, sem est dictum ante,
                      vitae venenatis dolor orci ut risus.
                    </p>
                    <a className="btn btn-outline-primary text-decoration-none btn-lg  mt-2">Saiba mais »</a>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
/*

      <div className="py-5 bg-light wrapper" id="fale-conosco-index">
      <div className="container">
        <div className="row mb-4 top-space">
          <div className="col-md-12 text-center">
            <h2 className="text-secondary pt-3">Fale conosco</h2>
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
                  <h3 className="d-flex flex-row justify-content-center align-items-center" >(71) 99123-0000&nbsp;&nbsp;<i className="fa-brands fa-whatsapp fa-lg" aria-hidden="true">&nbsp;&nbsp;</i></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex my-3 flex-column">
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3 className="d-flex flex-row justify-content-center align-items-center"><i className="fa-brands fa-facebook fa-lg" aria-hidden="true">&nbsp;</i>/empresa.xyz</h3>
                </div>
              </div>
              <div className="row d-flex flex-row px-2 justify-content-center align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
                  <h3 className="d-flex flex-row justify-content-center align-items-center"><i className="fa-brands fa-instagram fa-lg" aria-hidden="true">&nbsp;</i>/empresa.xyz</h3>
                </div>
              </div>
            </div>
          </div>  
      </div>     
    </div>
*/