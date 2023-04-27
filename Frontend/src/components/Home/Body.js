import BodyData from "../UI/HomeBodyData";
import LastBody from "../UI/HomeLastBody";
import HomePopular from "../UI/HomePopular";

export default function Body() {
    return <>
        <div className="w-full">
            <div className="text-center text-one font-semibold text-3xl mt-10">Browse Top Categories</div>
            <HomePopular/>
            <div className="mt-64">
                <BodyData />
            </div>
            <div className="md:mt-36 sm:mt-32 mt-20">
                <LastBody/>  
            </div>
        </div>
    </>
}