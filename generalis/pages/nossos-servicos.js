import { useEffect } from 'react'


const NossosServicos = props => {
    useEffect(() => props.setMainContentAsLoaded(true), [])


    return(
        <div className="container px-4 h-100 w-100">
            {props.especialidades.map(item => (
                <div key={item.id} className="row w-100 my-4 py-4 d-flex justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center align-items-center flex-column professional-area">
                        <i className={`${item.icon} area-icon mb-4`}></i>
                        <h2 className="area-title">{item.name}</h2>
                        <p className="area-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat
                        </p>
                        <div className="professional-avatar border  rounded">
                            <div className="professional-avatar-pic-container relative">
                                <div className="bg-primary">
                                    
                                </div>
                            </div>
                            <div className="professional-avatar-text-container">
                                <h5 className="professional-name">Juan Villa da Silva</h5>
                                <p className="professional-resume">
                                    Graduado em Direito previdênciario pela Fundação Getúlio Vargas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NossosServicos