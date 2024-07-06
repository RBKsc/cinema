import Banner from "../../components/Banner"
import Cabecera from "../../components/Cabecera/cabecera"
import Footer from "../../components/Footer/Footer"

function Inicio (){
    return (
        <>
        <Cabecera/>
        <Banner img="home" color="#154580"/>
        <Footer/>
        </>
    )
}

export default Inicio