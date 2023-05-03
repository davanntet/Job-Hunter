import { NavLink } from "react-router-dom";

export default function Option(){
    return <>
        <div className="flex text-xl font-semibold   w-max mx-auto  uppercase items-center bg-two rounded-full text-white">
            <NavLink to={'/profile/applied'} className={({ isActive }) => isActive ? 'bg-one  px-4 py-1 rounded-full' :'px-4 py-1 rounded-full'} >Applied</NavLink>
            <NavLink to={'/profile/posted'} className={({ isActive }) => isActive ? 'bg-one  px-4 py-1 rounded-full' : 'px-4 py-1 rounded-full'}>Posted</NavLink>
        </div>
    </>
}