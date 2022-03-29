const Footer = props => {

    return (
        <div id="footer" className="w-100 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
           
            <div className="first-line">&#169; {props.firstLine}</div>
            <div className="second-line d-flex flex-row">
            {
                props.secondLine.map((item, index, arr) => {
                    return(
                        index === (arr.length - 1) 
                        ? 
                            <span><small>{item}</small></span> 
                        : 
                            <span><small>{item}&nbsp;|&nbsp;</small></span>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Footer