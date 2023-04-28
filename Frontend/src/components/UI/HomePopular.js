import PopularCard from "../UI/HomePopularCard";
import IconNextLeft from '../../Image/IconNextLeft.png'
import IconNextRight from '../../Image/IconNextRight.png'




export default function HomePopular() {

    const code = [<PopularCard value={1} key={1} />, <PopularCard key={2} value={2} />, <PopularCard key={3} value={3} />, <PopularCard key={4} value={4} />, <PopularCard key={5} />, <PopularCard key={6} />, <PopularCard key={7} />, <PopularCard key={8} />, <PopularCard key={9} />, <PopularCard key={10} />]

    return <>
        <div className="w-full flex items-center px-6">
            <div className="ml-auto" onClick={() => {
                document.getElementById('popular-category').scrollLeft -= 200
            }} id="prev">
                <img className="w-7 cursor-pointer" src={IconNextLeft} alt="" />
            </div>
            <div className="col-span-10 w-11/12 overflow-hidden right-28">
                <div className="mx-7 h-60 scroll-smooth w-auto gap-y-10 grid grid-flow-col overflow-scroll justify-start items-center right-52  gap-x-10 mt-10 transition-all" id='popular-category' onScroll={(e) => {
                   
                }}>
                    {
                        code.map(source => source)
                    }
                </div>
            </div>
            <div className="mr-auto" onClick={() => {
                document.getElementById('popular-category').scrollLeft += 200
            }} id="next">
                <img className="w-7 cursor-pointer" src={IconNextRight} alt="" />
            </div>
        </div>

    </>
}

