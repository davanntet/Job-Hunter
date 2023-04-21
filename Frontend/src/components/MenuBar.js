import { Form, NavLink } from "react-router-dom";
import IconHome from '../Image/IconHome.png'
import IconFollower from '../Image/IconFollower.png'
import IconCommunity from '../Image/IconCommunity.png'
import IconBlog from '../Image/IconBlog.png'
import IconNotification from '../Image/IconNotification.png'
import IconProfile from '../Image/IconProfile.png'
import IconDollar from '../Image/IconDollar.png'
import IconLogout from '../Image/IconLogout.avif'
import { useState } from "react";
export default function MenuBar() {
    const [stateSalary, setStateSalary] = useState(false);
    const [stateMenu, setStateMenu] = useState(false);
    const stateSalaryHandler = () => {
        setStateSalary(!stateSalary)
    }
    const stateMenuHandler = () => {
        setStateMenu(!stateMenu)
    }
    return <div className="w-full h-20 bg-189AB4 grid grid-cols-6 lg:grid-cols-2   items-center ">
        {/* search  */}
        <Form className="flex items-center col-span-5 lg:col-span-1">
            <input className="h-8 w-1/2 ml-5 text-xs rounded-full px-3 outline-none" type="search" placeholder="Search Job" />
            {!stateSalary && <img className="h-7 ml-1 cursor-pointer" src={IconDollar} alt="Arange Salary" onClick={stateSalaryHandler} />}
            {stateSalary && <input className="h-7 w-1/5 ml-1 rounded-s-full outline-none px-3" placeholder="$>" type="number"></input>}
            {stateSalary && <button className="w-9 h-7 bg-blue-700 rounded-e-full text-left pl-1 font-semibold text-white" onClick={stateSalaryHandler}>OK</button>}
        </Form>
        {/*menu bar */}
        <div className="menubar gap-x-10 items-center ml-auto lg:flex hidden">
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ?'bg-activate':''} to={'/'}><img className="w-12 h-10" src={IconHome} alt="Home" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'follower'}><img className="w-11 h-10" src={IconFollower} alt="Follower" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'community'}><img className="w-11 h-10" src={IconCommunity} alt="Community" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'blog'}><img className="w-11 h-10" src={IconBlog} alt="Blog" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate' : isPanding ? 'bg-activate' : ''} to={'notification'}><img className="w-10 h-10" src={IconNotification} alt="Notification" /></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate ml-auto mr-5 h-16' : isPanding ? 'bg-activate ml-auto ' : 'mr-5'} to={'profile'}><img className="w-14 h-14 rounded-full" src={IconProfile} alt="profile" /></NavLink>
        </div>
        {/*three line*/}
        <div className="ml-auto mr-4 flex flex-col gap-y-1  lg:hidden cursor-pointer hover:bg-60c5da w-14 h-12 justify-center items-center" onClick={stateMenuHandler}>
            <hr className="border-2 w-10 border-black rounded-full" />
            <hr className="border-2 w-10 border-black rounded-full" />
            <hr className="border-2 w-10 border-black rounded-full" />
        </div>
        <div className={stateMenu ? "flex flex-col fixed top-0 right-0 bg-076b7f  gap-y-4 pt-6 justify-center transition-smooth" : "flex flex-col fixed top-0 bg-076b7f -right-48 gap-y-4 pt-6 justify-center transition-smooth"}>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'/'} onClick={stateMenuHandler}><img className="w-7 h-6" src={IconHome} alt="Home" /><span className="text-menu">Home</span></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'follower'} onClick={stateMenuHandler}><img className="w-7 h-6" src={IconFollower} alt="Follower" /><span className="text-menu">Follwer</span></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'community'} onClick={stateMenuHandler}><img className="w-7 h-6" src={IconCommunity} alt="Community" /><span className="text-menu">Community</span></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'blog'} onClick={stateMenuHandler}><img className="w-7 h-6" src={IconBlog} alt="Blog" /><span className="text-menu">Blog</span></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'notification'} onClick={stateMenuHandler}><img className="w-7 h-6" src={IconNotification} alt="Notification" /><span className="text-menu">Notification</span></NavLink>
            <NavLink className={({ isActive, isPanding }) => isActive ? 'bg-activate1' : isPanding ? 'bg-activate1' : 'flex pl-4'} to={'profile'} onClick={stateMenuHandler}><img className="w-7 h-7 rounded-full" src={IconProfile} alt="profile" /><span className="text-menu">Profile</span></NavLink>
            <NavLink className={'font-bold text-center text-red-800 bg-gray-400 h-7 flex justify-center items-center'}><img className="w-7 h-6" src={IconLogout} alt="Notification" /><span>Logout</span></NavLink>
        </div> 
        
    </div>
}