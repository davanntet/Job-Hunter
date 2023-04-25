import IconShare from "../../Image/Iconshare.png"
import IconLink from "../../Image/IconLink.png"
import Icon from "./Icon"
import { useState } from "react"
export default function LinkShare() {
    const [stateCopy, setStateCopy] = useState(false)
    const [stateShow, setStateShow] = useState(false)
    const showHandler = () => {
        setStateCopy(false)
        setStateShow(!stateShow)
    }
    const copyHandler = () => {
        setStateCopy(!stateCopy)
        const linkID = document.querySelector('#link')
        navigator.clipboard.writeText(linkID.textContent)
    }
    return <div className="mr-3 cursor-pointer transition-all">
        {stateShow&&<div className="absolute -translate-x-16 -translate-y-11 bg-white shadow-xl px-3 py-1 rounded-full flex gap-x-3 items-center h-9">
            <label id='link'>www.google.com</label>
            {!stateCopy && <Icon src={IconLink} w={7} h={7} click={copyHandler} />}
            {stateCopy && <span className="bg-green-100  rounded-full h-5 flex items-center px-1 text-xs" onClick={copyHandler}>copied</span>}
        </div>}
        <Icon src={IconShare} w={9} h={9} click={showHandler}></Icon>
    </div>
}