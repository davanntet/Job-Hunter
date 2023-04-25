import Profile from "../UI/Profile"; 
import IconProfile from '../../Image/IconProfile.png'
import IconDate from '../../Image/IconDate.png'
import IconBag from '../../Image/IconBag.png'
import IconSalary from '../../Image/IconSalary.png'
import IconMap from '../../Image/IconMap.png'
import Icon from "../UI/Icon";

import { Link } from "react-router-dom";
import { useState } from "react";
import LinkShare from "../UI/LinkShare";
export function Card() {
    const [map, setMap] = useState(false)
    const mapHandler = () => {
        setMap((value)=>!value)
    }
    return <div className="bg-white w-full rounded-md p-3 shadow-lg">
        <div className="flex gap-3 items-center">
            <Profile src={IconProfile} alt="Profile" w={11} h={11} />
            <div className="flex flex-col gap-0">
                <labe className="font-semibold">Microsoft INC.</labe>
                <label className="flex justify-start items-center flex-row gap-x-1">
                    <Icon src={IconDate} alt="Posted:" />
                    <span className="text-xs">
                        3d
                    </span>
                </label>
            </div>
            <div className="ml-auto">
                <Link className="bg-5E5BFF rounded-full  text-white font-bold px-5 py-1 item">Detail</Link>
            </div>
        </div>
        <p className="truncate py-2">I want find some Senoir Developer</p>
        <div className="flex flex-col gap-y-1">
            <div className="truncate shadow-inner bg-slate-100 rounded-full px-2 font-semibold">
                Requirement: <span className="font-normal">C#,Javascript,Futter</span>
            </div>
            <div className="flex w-full mt-3 font-semibold md:flex-col mn:flex-row lg:flex-row gap-y-1 xs:flex-row sm:flex-row flex-col">
                <div className="flex gap-3">
                    <label className="flex items-center gap-x-1"><span><img src={IconBag} width={15} alt="" /></span><span>Full Time</span></label>
                    <label className="flex items-center gap-x-1"><span><img src={IconSalary} width={15} alt="" /></span> <span>250$</span></label>
                    <label className="cursor-pointer flex items-center gap-x-1" onClick={mapHandler}><span><img src={IconMap} width={15} alt="" /></span><span>Location</span></label>                    
                </div>
                <div className="flex gap-3 ml-auto">
                    <label className=" text-green-700 rounded-full font-bold px-3 py-1 flex items-center text-sm bg-gray-200">Open</label>
                    <LinkShare/>                    
                </div>

            </div>

        </div>
        
        {map &&
            <div className="absolute top-0 left-0 w-full h-full transition-all" onClick={mapHandler}>
                <div className="fixed top-0 left-0 w-full h-full bg-slate-500 opacity-50">
                </div>
                <iframe className="fixed w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d85909.58877788435!2d104.81634354033167!3d11.626573699174097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM4JzAzLjEiTiAxMDTCsDUzJzIxLjUiRQ!5e0!3m2!1sen!2skh!4v1682338716986!5m2!1sen!2skh" title="Map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        }
    </div>
}