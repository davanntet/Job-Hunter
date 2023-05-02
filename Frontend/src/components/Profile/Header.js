import Profile from "../../pages/Profile"; 

import ImageProfile from "../../Image/ImageProfile.jpg"
export default function Header() {
    return <>
        <div>
            <Profile src={ImageProfile } />
        </div>
    </>
}