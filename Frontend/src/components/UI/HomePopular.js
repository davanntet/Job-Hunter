import PopularCard from "../UI/HomePopularCard"; 
import IconNextLeft from '../../Image/IconNextLeft.png'
import IconNextRight from '../../Image/IconNextRight.png'
import { useState } from "react";


export default function HomePopular() {
    const [nextpre, setNextPre] = useState(0);

    const code = [<PopularCard value={1} key={1} />, <PopularCard key={2} value={2} />, <PopularCard key={3} value={3} />, <PopularCard key={4} value={4} />, <PopularCard key={5} />, <PopularCard key={6} />, <PopularCard key={7} />, <PopularCard key={8} />, <PopularCard key={9} />, <PopularCard key={10} />]
    const nextHandler = () => {
        nextpre<code.length-1&&setNextPre(nextpre + 1)
    }
    const prevHandler = () => {
        nextpre>0&&setNextPre(nextpre - 1)
    }
    let slide = []
    for (let i = nextpre; i < code.length; i++) {
        slide.push(code[i])
    }
    return <>
        <div className="w-full flex items-center px-6">
            <div className="ml-auto" onClick={prevHandler}>
                <img className="w-7 cursor-pointer" src={IconNextLeft} alt="" />
            </div>
            <div className="col-span-10 w-11/12 overflow-hidden right-28">
                <div className="mx-7 w-auto gap-y-10 grid grid-flow-col overflow-scroll justify-start items-center right-52  gap-x-10 mt-10 transition-all" id='popular-category'>
                    {
                        slide.map(source=>source)
                    }
                </div>
            </div>
            <div className="mr-auto" onClick={nextHandler}>
                <img className="w-7 cursor-pointer" src={IconNextRight} alt="" />
            </div>
        </div>
    
    </>
}