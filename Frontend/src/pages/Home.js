import Body from "../components/Home/Body";
import Footer from "../components/Footer";
import Header from "../components/Home/Header";

export default function Home() {
    return <div className=""> 
        <header>
            <Header />
        </header>
        <main>
            <Body/>
        </main>
        
    </div>
}