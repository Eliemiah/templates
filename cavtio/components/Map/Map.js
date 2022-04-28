import styles from './Map.module.scss'

const Map = props => {

    return (
        <iframe id={styles["map"]} className={`w-100 ${props.shadow  === true ? styles["shadow-enabled"] : ""}`} allowFullScreen="" loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7784.283301044332!2d-38.32664485594178!3d-12.704176256654693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71669dbbfe9e7b3%3A0x2a4f233470c6490b!2sHospital%20SEMED!5e0!3m2!1spt-BR!2sbr!4v1632438301775!5m2!1spt-BR!2sbr"  ></iframe>

    )
}

export default Map