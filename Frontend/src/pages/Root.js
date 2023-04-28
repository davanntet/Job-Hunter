import { Outlet } from "react-router-dom"; 
import MenuBar from '../components/MenuBar'
import Footer from "../components/Footer";


export default function Root() {

    return <>
        <header className="w-full">
            <MenuBar />
        </header>
        <main>
            <Outlet/>
        </main>
        {/* <footer>
            <Footer/>
        </footer> */}

    </>
}