import logo from "./logo-alura.png"
import styles from "./Footer.module.css"

function Footer (){
    return(
        <footer className={styles.pie}>
            <h2>Desarrolado por <img src={logo} alt="alura"/> </h2>
        </footer>
    )
}

export default Footer