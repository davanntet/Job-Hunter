import Body from "../components/Home/Body";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

export default function Home() {
    return <div className=""> 
        <header>
            <Header />
        </header>
        <main>
            <Body/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
}