import Image from 'next/image'
import { useEffect } from 'react'
import ImgTop from '../public/images/others/pexels-sora-shimazaki-5673488.jpg'

const NossosServicos = props => {
    useEffect(() => props.setMainContentAsLoaded(true), [])

    return(
        <div id="nossos-servicos">
            <div className="bg-primary relative img-container-layout-fill">
                <Image id="img-top" src={ImgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                    width={1600} height={800}/>
            </div>
            <div id="pratice-areas" className="container-fluid px-4 w-100 float-container-default relative">
            {
            props.professionals.map(professional => {
                return (
                <div key={professional.name} className="pratice-area row py-3 mt-2 px-2 float-content-default relative">
                    <div className="col-md-8 d-flex flex-column ">
                        <>
                        {
                        props.areas.map(area => {
                            return(
                            professional.name === area.professionalID 
                            ?  
                                (<div key={area.id} className="py-2">
                                {
                                    <>
                                        <h4 className="mt-1">{area.name}</h4>
                                        <p className="mt-2">{area.description}</p>
                                    </>
                                }
                                </div>)
                            : 
                                ''
                        )})
                        }   
                        </>
                    </div>
                    <div className="pratice-area-professional col-md-4 py-2 d-flex relative ">
                        <div className="top-container my-2 w-100 d-flex align-items-center relative">
                            <div className="pic-container img-container-layout-fill">
                                <Image src={professional.pic} className="professional-pic" placeholder='blur' 
                                    layout="fill" objectFit="cover" quality={95} priority 
                                    width={100} height={100}/>
                            </div>
                            <h5 className="py-2">{professional.name}</h5>
                        </div>
                        <div className="text-container my-2 d-flex flex-column">
                            <p className="h6">{professional.bio}</p>
                        </div>
                    </div>
                </div>
            )})}
            </div>
        </div>
    )
}

export default NossosServicos
