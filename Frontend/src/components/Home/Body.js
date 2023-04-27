import BodyData from "../UI/HomeBodyData";
import PopularCard from "../UI/HomePopularCard";
import LastBody from "../UI/HomeLastBody";

export default function Body() {
    return <>
        <div className="w-full">
            <div className="text-center text-one font-semibold text-3xl mt-10">Browse Top Categories</div>
            <div className="mx-14  w-auto gap-y-10 grid grid-flow-col overflow-scroll  justify-start items-center  gap-x-10 mt-10">
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
            </div>
            <div className="mt-64">
                <BodyData />
            </div>
            <div className="mt-40">
                <LastBody/>  
            </div>
        </div>
    </>
}