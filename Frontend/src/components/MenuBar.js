import {Link, NavLink } from 'react-router-dom'
import IconLogo from '../Image/IconLogo.png'
export default function MenuBar() {
    return <>
        <div className='flex items-center px-4 uppercase'>
            <div>
                <img src={IconLogo} className='w-20 h-20' alt='Job Hunter'/>
            </div>
            <div className='ml-10 text-0D47A1 flex gap-x-6 font-bold text-lg'>
                <NavLink to='/' className={({ isActive }) => isActive &&'border-b-2 border-0D47A1'}>Home</NavLink>
                <NavLink >Browse Job</NavLink>
                <NavLink>Resource</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>About</NavLink>
            </div>
            <div className='ml-auto flex gap-x-6'>
                <Link className='bg-0D47A1 px-5 py-2 text-white rounded-md font-bold'>Register</Link>
                <Link className='bg-white px-5 py-2 text-0D47A1 rounded-md border-2 border-0D47A1 font-bold'>Login</Link>
            </div>
        </div>
    </>
}