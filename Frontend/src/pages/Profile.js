import { Outlet } from "react-router-dom";
import Header from "../components/Profile/Header";


export default function Profile() {
    return <div className="">
        <Header />
 
        <Outlet/>
    </div>
}