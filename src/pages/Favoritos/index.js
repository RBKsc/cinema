import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Titulo from "../../components/TItulo"
import { useFavoritosContext } from "../../context/favoritos"
import styles from "./favoritos.module.css"

function Favoritos (){
    const {favorito}= useFavoritosContext()
    return(
        <>
       <Banner img="favorite" color="#AF7EAA"/>
        <Titulo>
            <h1>Mis favoritos</h1>
        </Titulo>
  <section className={styles.container}>
   {favorito.map(fav=> {
    return <Card {...fav} key={fav.id}/>
   })}
  </section>
        </>
    )
}

export default Favoritos