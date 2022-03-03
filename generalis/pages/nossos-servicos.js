import { useEffect } from 'react'


const NossosServicos = props => {
    useEffect(() => props.setMainContentAsLoaded(true), [])

    return(
        <>
            <div className="w-75 h-75 bg-primary"></div>
        </>
    )
}

export default NossosServicos