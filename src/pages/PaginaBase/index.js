import { Outlet } from "react-router-dom"
import Cabecera from "../../components/Cabecera/cabecera"
import Container from "../../components/Container"
import FavoritosProvider from "../../context/favoritos"
import Footer from "../../components/Footer/Footer"

function PaginaBase (){
    return(
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase