import Image from 'next/image'

const CustomCard = ({item, index}) => {


    return (
        <div className="card" key={index}>
            <div className="card-img-top" >
                <div className="img-outer relative">
                    <Image layout="fill" objectFit="cover" alt=""
                    src={`/static/images/products/${item.img}`}  
                    sizes="(min-width: 768px) 20vw, (min-width: 576px) 80vw, 95vw" />
                </div> 
            </div>
            <div className="card-body">
                <h5 className="card-title text-secondary">{item.title}</h5>                   
                <div className="card-text pb-2">
                    <p className="text-dark card-text-box">{item.description}</p>
                </div>
                <div className="d-flex justify-content-center"><a href="#" className="btn btn-secondary">Saiba mais!</a></div>
            </div>
        </div>
    )
}
export default CustomCard