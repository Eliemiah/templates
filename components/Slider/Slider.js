import { useEffect, useRef } from "react"
import Image from 'next/image'
import Glider from 'glider-js'
import { gliderAutoplay } from 'glider-autoplay'

const Slider = ({images}) => {
    const gliderElement = useRef(null)

     useEffect(() => {
        const glider = new Glider(gliderElement.current, {
            draggable: true,
            dots: ".dots",
            rewind: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: '1',
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: '2',
                        slidesToScroll: 2,
                    }                    
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }                    
                }
            ],
            // focusAt: 'center'
        })
        gliderAutoplay(glider, {interval: 2000})
     }, [])

    return (
        <div className="glider-contain ">
            <div className="glider" ref={gliderElement}>
                {images.map((img, index) => {
                    return (
                        <div className="img-container relative relative" key={index}>
                            <Image layout="responsive" width={600} height={600}
                            className="slide-image" 
                            alt="Nosso parceiro X" src={`/static/images/slides/${img}`}  
                            sizes="(max-width: 575px) 95vw, (min-width: 576px) 25vw, (min-width: 800px) 15vw"
                            />
                        </div>
                    )
                })}
            </div>
            <div role="tablist" className="dots"></div>
      </div>
    )
}


export default Slider
