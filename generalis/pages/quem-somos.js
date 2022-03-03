import Image from 'next/image'
import bgTop from '../public/images/others/shaking-hands-3091906.jpg'
import { useEffect } from 'react'


const QuemSomos = props => {

    useEffect(() => props.setMainContentAsLoaded(true), [])

    return(
        <div className="container-fluid px-0">
            <div className="row m-0 bg-primary">
                <div className="col-md-12 px-0">
                    <div id="sobre-a-empresa" className="bg-white ">
                        <div className="img-container-layout-fill relative">
                            <Image src={bgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                                width={2000} height={1500}/>
                        </div>
                            <div className="text-box-float d-flex justify-content-center">
                                <div className="pt-3 text-box-float-inner relative">
                                    <h2 className="mx-4 py-2 text-black d-flex justify-content-center">A Almeida e Falconi</h2>
                                    <p className="mx-4 text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, efficitur quis nisl id, pulvinar blandit est. In quis dui porta, euismod metus ut, sagittis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vel mi vulputate, consectetur nulla vel, ornare risus. Quisque dignissim nisl sapien, a elementum elit mattis in.
                                    Suspendisse feugiat, augue at tincidunt bibendum, nisl justo consequat mauris, a gravida lacus neque sed urna. 
                                    Aliquam dolor quam, tempor id volutpat at, semper et diam. Suspendisse nisi lacus, ornare cursus lacinia ac, aliquet a eros. 
                                    Maecenas id tellus sem. Curabitur at magna iaculis urna tristique ultrices at quis tortor. 
                                    Praesent imperdiet faucibus nunc eu feugiat.

                                    Vestibulum pretium tellus magna, id porttitor dolor faucibus eget. Curabitur a enim pharetra, blandit ipsum id, ullamcorper mauris. Cras eu lacus a tellus pharetra faucibus a a diam. Fusce sodales imperdiet tellus ut volutpat.
                                    Aenean suscipit vehicula tortor, eget interdum nunc accumsan sed. Pellentesque sit amet interdum sem. Ut dui ante, eleifend sed nulla ac, pharetra vulputate ipsum.
                                    Duis id metus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in metus id est vehicula cursus. Sed purus arcu, sagittis et gravida id, bibendum quis eros. Mauris vel enim at turpis vehicula efficitur.
                                    </p>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <p className="mx-4 text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, efficitur quis nisl id, pulvinar blandit est. In quis dui porta, euismod metus ut, sagittis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vel mi vulputate, consectetur nulla vel, ornare risus. Quisque dignissim nisl sapien, a elementum elit mattis in.
                                    Suspendisse feugiat, augue at tincidunt bibendum, nisl justo consequat mauris, a gravida lacus neque sed urna. 
                                    Aliquam dolor quam, tempor id volutpat at, semper et diam. Suspendisse nisi lacus, ornare cursus lacinia ac, aliquet a eros. 
                                    Maecenas id tellus sem. Curabitur at magna iaculis urna tristique ultrices at quis tortor. 
                                    Praesent imperdiet faucibus nunc eu feugiat.

                                    Vestibulum pretium tellus magna, id porttitor dolor faucibus eget. Curabitur a enim pharetra, blandit ipsum id, ullamcorper mauris. Cras eu lacus a tellus pharetra faucibus a a diam. Fusce sodales imperdiet tellus ut volutpat.
                                    Aenean suscipit vehicula tortor, eget interdum nunc accumsan sed. Pellentesque sit amet interdum sem. Ut dui ante, eleifend sed nulla ac, pharetra vulputate ipsum.
                                    Duis id metus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in metus id est vehicula cursus. Sed purus arcu, sagittis et gravida id, bibendum quis eros. Mauris vel enim at turpis vehicula efficitur.
                                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuemSomos