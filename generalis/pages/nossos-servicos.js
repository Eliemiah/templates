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
            <div id="pratice-areas" className="container fluid w-100" >
            {
            props.professionals.map(professional => {
                return (
                <div key={professional.name} className="pratice-area row py-3 mt-2 px-2">
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
                    <div className="pratice-area-professional col-md-4 py-2 ">
                        <div className="pic-container my-2">
                            <div className="bg-primary w-100 h-100"></div>
                        </div>
                        <div className="text-container my-2">
                            {/* <span className="h6">Profissional responsável:</span> */}
                            <h5 className="py-2">{professional.name}</h5>
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
