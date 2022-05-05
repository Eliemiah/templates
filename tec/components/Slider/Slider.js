import { useEffect, useRef } from "react"
import Image from 'next/image'
import Glider from 'glider-js'
import styles from './Slider.module.scss'
import { gliderAutoplay } from 'glider-autoplay'

const Slider = ({images}) => {
    const gliderElement = useRef(null)

     useEffect(() => {
        const glider = new Glider(gliderElement.current, {
            draggable: true,
            dots: ".dots",
            rewind: true,
            autoplay: 2000,
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
        })
         gliderAutoplay(glider, {interval: 2000})
     }, [])

    return (
        <div className={`glider-contain ${styles["glider-contain"]}`}>
            <div className={`glider ${styles["glider"]}`} ref={gliderElement}>
                {images.map((img, index) => {
                    return (
                        <div className="relative next-image-reset" key={index}>
                            <Image layout="fill"objectFit="cover" alt="Nosso parceiro X"
                            src={`/images/slides/${img}`}  
                            sizes="(max-width: 575px) 95vw, (min-width: 576px) 25vw, (min-width: 800px) 15vw"
                            />
                        </div>
                    )
                })}
            </div>
      </div>
    )
}


export default Slider
