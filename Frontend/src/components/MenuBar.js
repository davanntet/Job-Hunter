import {Link, NavLink } from 'react-router-dom'
import IconLogo from '../Image/IconLogo.png'
import { useState } from 'react'
export default function MenuBar() {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(!show)
    }
    return <>
        <div className='flex items-center px-4 w-full uppercase h-24 bg-white fixed z-10'>
            <div className='sm:flex hidden'>
                <img src={IconLogo} className='w-20 h-20' alt='Job Hunter'/>
            </div>
            <div className='ml-10 text-0D47A1 gap-x-6 font-bold text-lg mn:flex hidden'>
                <NavLink to='/' className={({ isActive }) => isActive &&'border-b-2 border-0D47A1'}>Home</NavLink>
                <NavLink >Browse Job</NavLink>
                <NavLink>Resource</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>About</NavLink>
            </div>
            <div className='ml-auto flex gap-x-6'>
                <Link className='bg-0D47A1 px-5 py-2 text-white rounded-md font-bold md:text-lg sm:text-base text-sm'>Register</Link>
                <Link className='bg-white px-5 py-2 text-0D47A1 rounded-md border-2 border-0D47A1 font-bold md:text-lg sm:text-base text-sm'>Login</Link>
            </div>
            <div className='flex ml-3 flex-col gap-y-1 p-3 hover:bg-blue-100 mn:hidden' onClick={showHandler}>
                <hr className='border-2 w-10 border-one' />
                <hr className='border-2 w-10 border-one' />
                <hr className='border-2 w-10 border-one' />
            </div>
            <div className={`absolute flex gap-y-4 p-4 flex-col top-20 font-bold bg-white text-one mn:hidden transition-menu ${show?'right-0':'-right-36'}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink >Browse Job</NavLink>
                <NavLink>Resource</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>About</NavLink>
            </div>
        </div>
    </>
}