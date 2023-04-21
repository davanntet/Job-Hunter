import { Form, NavLink } from "react-router-dom";
import IconHome from '../Image/IconHome.png'
import IconFollower from '../Image/IconFollower.png'
import IconCommunity from '../Image/IconCommunity.png'
import IconBlog from '../Image/IconBlog.png'
import IconNotification from '../Image/IconNotification.png'
import IconProfile from '../Image/IconProfile.png'
import IconDollar from '../Image/IconDollar.png'
import { useState } from "react";
export default function MenuBar() {
    const [stateSalary, setStateSalary] = useState(false);
    const stateSalaryHandler = () => {
        setStateSalary(!stateSalary)
    }
    return <div className="w-full h-20 bg-189AB4 grid grid-cols-6 lg:grid-cols-2   items-center">
        {/* search  */}
        <Form className="flex items-center col-span-5 lg:col-span-1">
            <input className="h-8 w-1/2 ml-5 text-xs rounded-full px-3 outline-none" type="search" placeholder="Search Job" />
            {!stateSalary && <img className="h-7 ml-1 cursor-pointer" src={IconDollar} alt="Arange Salary" onClick={stateSalaryHandler} />}
            {stateSalary && <input className="h-7 w-1/5 ml-1 rounded-s-full outline-none px-3" placeholder="$" type="number"></input>}
            {stateSalary && <button className="w-9 h-7 bg-blue-700 rounded-e-full text-left pl-1 font-semibold text-white" onClick={stateSalaryHandler}>OK</button>}
        </Form>
        {/*menu bar */}
        <div className="menubar gap-x-10 items-center ml-auto lg:flex hidden">
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ?'bg-activate':''} to={'/'}><img className="w-12 h-10" src={IconHome} alt="Home" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'follower'}><img className="w-11 h-10" src={IconFollower} alt="Follower" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'community'}><img className="w-11 h-10" src={IconCommunity} alt="Community" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'blog'}><img className="w-11 h-10" src={IconBlog} alt="Blog" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'notification'}><img className="w-10 h-10" src={IconNotification} alt="Notification" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate ml-auto mr-5 h-16' : isPanding ? 'bg-activate ml-auto mr-5 ' : ''} to={'profile'}><img className="w-14 h-14 rounded-full" src={IconProfile} alt="profile" /></NavLink>
        </div>
        {/*three line*/}
        <div className="ml-auto mr-4 flex flex-col gap-y-1  lg:hidden cursor-pointer hover:bg-60c5da w-14 h-12 justify-center items-center">
            <hr className="border-2 w-10 border-black rounded-full" />
            <hr className="border-2 w-10 border-black rounded-full" />
            <hr className="border-2 w-10 border-black rounded-full" />
        </div>
    </div>
}