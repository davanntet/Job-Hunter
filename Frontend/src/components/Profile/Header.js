import { Link } from 'react-router-dom'
import IconEdit from '../../Image/IconEdit.png'

import ImageProfile from "../../Image/ImageProfile.jpg"
import Profile from "../UI/Profile"
export default function Header() {
    return <>
        <div className="pt-28 w-full flex items-center">
            <div className="w-max p-4">
                <Profile src={ImageProfile} w={56} h={56} />
            </div>
            <div className="text-7xl text-one border-b-4 border-one h-24">
                Tet Davann
            </div>
            <Link to={'edit'} className='ml-12'>
                <img src={IconEdit} className='w-10 h-10 hover:h-12 hover:w-12'/>
            </Link>
        </div>
    </>
}