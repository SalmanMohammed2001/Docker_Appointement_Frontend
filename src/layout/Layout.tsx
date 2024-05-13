import Header from "../components/header/Header.tsx";
import Routers from "../routes/Routers.tsx";
import Footer from "../components/footer/Footer.tsx";


const Layout = () => {
    return (
     <div>
         <Header/>
         <main>
             <Routers/>
         </main>
         <Footer/>
     </div>
    )
}
export default Layout