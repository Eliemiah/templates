import Image from 'next/image'
import bgTop from '../public/images/others/shaking-hands-3091906.jpg'
import { useEffect } from 'react'


const FaleConosco = props => {

    useEffect(() => props.setMainContentAsLoaded(true), [])

    return(
        <div id="fale-conosco" >
            <div className="bg-primary relative img-container-layout-fill">
                <Image src={bgTop} placeholder='blur' layout="fill" objectFit="cover" quality={95} priority 
                    width={1600} height={800}/>
            </div>
            <div className="container-fluid w-100 px-4 mx-0">
                <div className="row float-content-default relative px-2">
                    <div className="col-md-6">
                        <form className="py-3">
                            <div className="form-group py-1">
                                <label for="name">Nome</label>
                                <input type="name" className="form-control" id="name" aria-describedby="clientName" placeholder="Seu nome" />
                            </div>
                            <div className="form-group py-1">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="clientEmail" placeholder="Insira seu Email" />
                                <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu email com terceiros.</small>
                            </div>
                            <div className="form-group py-1 d-flex flex-column">
                                <label for="subject">Assunto</label>
                                <textarea  id="subject" aria-describedby="emailSubject"  placeholder="Assunto.." ></textarea>
                            </div>                            
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                    <div id="contacts" className="col-md-6">
                        <div className="d-flex flex-column py-3">
                        <span className="h4 py-1 ">(71) 9622-1111 &nbsp; <i className="fa-solid fa-phone "></i></span> 
                        <span className="h4 py-1 ">(71) 9622-1111 &nbsp; <i className="fa-solid fa-phone "></i></span> 
                        <span className="h4 "><a className="btn text-decoration-none btn-lg px-0" href="#">(71) 9622-1111 &nbsp; <i className="fa-brands fa-whatsapp fa-lg whatsapp-btn-logo"></i></a></span> 
                        <span className="h4 "><a className="btn text-decoration-none btn-lg px-0" href="#">/empresa.xyz &nbsp; <i className="fa-brands fa-facebook fa-lg facebook-btn-logo" aria-hidden="true"></i></a></span> 
                        <span className="h4 "><a className="btn text-decoration-none btn-lg px-0" href="#">/empresa.xyz &nbsp; <i className="fa-brands fa-instagram fa-lg instagram-btn-logo" aria-hidden="true"></i></a></span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaleConosco