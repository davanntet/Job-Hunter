import { Outlet } from "react-router-dom";
import Header from "../components/Profile/Header";
import Option from "../components/Profile/Option"

export default function Profile() {
    return <div className="">
        <Header />
        <Option/>
        <Outlet/>
    </div>
}