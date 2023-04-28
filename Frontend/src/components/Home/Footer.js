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
            <div className="flex flex-col h-max gap-y-7 w-full items-center  justify-start px-24 ">
                <div className="font-bold lg:text-xl mn:text-base text-xs w-max">Our social media</div>
                <div className="flex items-center justify-center gap-x-7">
                    <img className="lg:w-10 lg:h-10 mn:w-9 md:w-8 sm:w-7 w-6" src={IconFacebook} alt='' />
                    <img className="lg:w-10 lg:h-10 mn:w-9 md:w-8 sm:w-7 w-6" src={IconInstagram} alt='' />
                    <img className="lg:w-10 lg:h-10 mn:w-9 md:w-8 sm:w-7 w-6" src={IconTwitter} alt='' />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 justify-center pl-12">
                <div className="font-bold lg:text-xl mn:text-base text-xs w-max">Contact US</div>
                <div className="flex gap-x-3 items-center">
                    <img className="lg:w-7 mn:w-6 md:w-5 sm:w-4 xs:w-3 w-2 lg:h-6 mn:h-5 md:h-4 sm:h-3 xs:h-2 h-1" src={IconMail} alt=""/>
                    <a className="lg:text-lg mn:text-base md:text-sm sm:text-xs text-xs" href="mailto:support@jobhunter.com">support@jobhunter.com</a>
                </div>
                <div className="flex gap-x-3 items-center">
                    <img className="lg:w-7 mn:w-6 md:w-5 sm:w-4 xs:w-3 w-2 lg:h-6 mn:h-5 md:h-4 sm:h-3 xs:h-2 h-1" src={IconTel} alt="" />
                    <a className="lg:text-lg mn:text-base md:text-sm sm:text-xs text-xs" href="tel:0961234567">0961234567</a>
                </div>
                <div className="flex gap-x-3">
                    <img className="lg:w-7 mn:w-6 md:w-5 sm:w-4 xs:w-3 w-2 lg:h-7 mn:h-6 md:h-5 sm:h-4 xs:h-3 h-2" src={IconLocation} alt="" />
                    <address className="lg:text-lg mn:text-base md:text-sm sm:text-xs text-xs">St.51 Khan Boeng Keng Kang,Sangkat Boeng Keng Kang 1,Phnom Penh, Cambodia</address>
                </div>
                
            </div>
            <div className="flex flex-col w-full lg:pl-32 mn:pl-24 md:pl-20 sm:pl-20 xs:pl-16 16 ">
                <div className="font-bold lg:text-xl mn:text-base text-xs w-max">Useful links</div>
                <div className="flex flex-col font-semibold lg:text-lg mn:text-base md:text-sm sm:text-xs text-xs">
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