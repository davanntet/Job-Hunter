import { Link } from 'react-router-dom'
import IconEdit from '../../Image/IconEdit.png'

import ImageProfile from "../../Image/ImageProfile.jpg"
import Profile from "../UI/Profile"
import { useState } from 'react'
export default function Header() {
    const [isShowImage, setShowImage] = useState(false)
    const showImageHandler = () => {
        setShowImage(!isShowImage)
    }
    return <>
        <div className="pt-28 w-full flex items-center">
            {
                isShowImage &&
                <div className='fixed w-full h-full z-20 top-0 left-0' onClick={showImageHandler}>
                    <div className='absolute w-full h-full bg-black opacity-25'></div>
                    <img className='absolute w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src={ImageProfile} />
                </div>
            }
            <div className="w-max p-4" onClick={showImageHandler}>
                <Profile src={ImageProfile} w={56} h={56} />
            </div>
            <div className="text-6xl font-bold text-one border-b-4 border-one h-24">
                Tet Davann
            </div>
            <Link to={'edit'} className='ml-12'>
                <img src={IconEdit} className='w-10 h-10 hover:h-12 hover:w-12'/>
            </Link>
        </div>
    </>
}