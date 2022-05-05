import Image from 'next/image'
import styles from './CustomCard.module.scss'

const CustomCard = ({item, index, className}) => {
    return (
        <div className={`${className} custom-card border-0 d-flex flex-column justify-conten-center align-items-center ${styles["custom-card"]}`} key={index}>{/* mb-3 mx-2 */}
            <div className={`${styles["card-img-top"]} mb-3`} >
                <div className="w-100 h-100 relative next-image-reset">
                    <Image layout="fill" objectFit="contain" alt=""
                    src={item.img}  
                    sizes="(min-width: 768px) 20vw, (min-width: 576px) 80vw, 95vw" />
                </div> 
            </div>
            <div className={`${styles["card-body"]} w-75`}>
                <h6 className="card-title text-secondary text-center">{item.title}</h6>                   
                <div className="card-text pb-2 text-black text-center">
                    <p className={`text-dark ${styles["card-text-box"]} `}>{item.description}</p>
                </div>
            </div>
        </div>
    )
}
//<div className="d-flex justify-content-center"><a href="#" className="btn btn-secondary">Saiba mais!</a></div>
export default CustomCard