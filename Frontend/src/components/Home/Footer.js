import { Link } from "react-router-dom";
import IconFacebook from '../../Image/IconFacebook.png'
import IconTwitter from '../../Image/IconTwitter.png'
import IconInstagram from '../../Image/IconInstagram.png'
import IconTel from '../../Image/IconTel.png'
import IconLocation from '../../Image/IconLocation.png'
import IconMail from '../../Image/IconMail.png'
export default function Footer() {
    return <>
        <div className="grid grid-cols-3 items-start justify-between bg-white text-one py-12 border-t-2 border-one">
            <div className="flex flex-col gap-y-7 w-full items-center px-24">
                <div className="font-bold text-xl">Our social media</div>
                <div className="flex items-center justify-center gap-x-7">
                    <img className="w-10 h-10" src={IconFacebook} alt='' />
                    <img className="w-10 h-10" src={IconInstagram} alt='' />
                    <img className="w-10 h-10" src={IconTwitter} alt='' />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 justify-center pl-12">
                <div className="font-bold text-xl">Contact US</div>
                <div className="flex gap-x-3">
                    <img className="w-7" src={IconMail} alt=""/>
                    <a href="mailto:support@jobhunter.com">support@jobhunter.com</a>
                </div>
                <div className="flex gap-x-3">
                    <img className="w-7" src={IconTel} alt="" />
                    <a href="tel:0961234567">0961234567</a>
                </div>
                <div className="flex gap-x-3">
                    <img className="w-7 h-7" src={IconLocation} alt="" />
                    <address>St.51 Khan Boeng Keng Kang,Sangkat Boeng Keng Kang 1,Phnom Penh, Cambodia</address>
                </div>
                
            </div>
            <div className="flex flex-col w-full items-center">
                <div className="font-bold text-xl ml-4">Useful links</div>
                <div className="flex flex-col font-semibold">
                    <Link>Home</Link>
                    <Link>Browse Job</Link>
                    <Link>Resource</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>
            </div>

        </div>
    </>
}