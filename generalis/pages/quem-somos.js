import Image from 'next/image'
import bgTop from '../public/images/others/shaking-hands-3091906.jpg'
import { useEffect } from 'react'
import Map from '../components/Map/Map'


const QuemSomos = props => {

    useEffect(() => props.setMainContentAsLoaded(true), [])

    return(
        <div id="sobre-a-empresa" className="container-fluid px-0 ">
            <div id="section-1" className="row m-0 section">
                <div className="col-md-6 py-3 text-box-float ">
                    <div className=" pt-3 relative text-box-float-inner">{/**text-box-float-inner/ */}
                        <h2 className="mx-4 py-2 text-black d-flex justify-content-center">A Almeida e Falconi</h2>
                        <p className="mx-4 text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, efficitur quis nisl id, pulvinar blandit est. In quis dui porta, euismod metus ut, sagittis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vel mi vulputate, consectetur nulla vel, ornare risus. Quisque dignissim nisl sapien, a elementum elit mattis in.
                        Suspendisse feugiat, augue at tincidunt bibendum, nisl justo consequat mauris, a gravida lacus neque sed urna. 
                        Aliquam dolor quam, tempor id volutpat at, semper et diam. Suspendisse nisi lacus, ornare cursus lacinia ac, aliquet a eros.<br /> 
                        Maecenas id tellus sem.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 px-0">
                    <div id="img-1" className="bg-primary relative img-container-layout-fill">
                        <Image src={bgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                            width={1600} height={800}/>
                    </div>
                </div>
            </div>
            <div id="section-2" className="row m-0 section">
                <div className="col-md-6 px-0 bg-primary">
                    <div id="img-1" className="bg-primary relative img-container-layout-fill">
                        <Image src={bgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                            width={1600} height={800}/>
                    </div>               
                </div>
                <div className="col-md-6  py-3 text-box-float">
                    <div className=" pt-3 relative text-box-float-inner">
                        <h2 className="mx-4 py-2 text-black d-flex justify-content-center">Nossos clientes</h2>
                        <p className="mx-4 text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, efficitur quis nisl id, pulvinar blandit est. In quis dui porta, euismod metus ut, sagittis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vel mi vulputate, consectetur nulla vel, ornare risus. Quisque dignissim nisl sapien, a elementum elit mattis in.
                        Suspendisse feugiat, augue at tincidunt bibendum, nisl justo consequat mauris, a gravida lacus neque sed urna. 
                        Aliquam dolor quam, tempor id volutpat at, semper et diam. Suspendisse nisi lacus, ornare cursus lacinia ac, aliquet a eros.<br /> 
                        </p>
                    </div>
                </div>
            </div>
            <div id="section-3" className="row m-0">
                <div className="col-md-6 py-3 text-box-float section">
                    <div className="pt-3 relative text-box-float-inner">
                        <h2 className="mx-4 py-2 text-black d-flex justify-content-center">Onde estamos</h2>
                        <div className="d-flex justify-content-center flex-column">
                            <p className="mx-4 my-4 d-flex justify-content-center">
                                <i className="fa-solid fa-location-dot"></i>
                            </p>
                            <p className="mx-4 d-flex justify-content-center lead">
                            Av. Getúlio Vargas, 123, Centro Histórico - BA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-0">
                    <div id="img-1" className="bg-primary relative img-container-layout-fill">
                        <Image src={bgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                         width={1600} height={800}/>
                    </div>
                </div>
            </div>
            <div id="section-4" className="row mx-0 px-0 section">
                <div className="col-md-12 px-0">
                    <Map id="map"/>
                </div>
            </div>
        </div>
    )
}

export default QuemSomos