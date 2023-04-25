import PostJob from "../components/Home/PostJob";
import PostHandler from "../components/Home/PostHandler";

export default function Home() {
    return <div className="p-4"> 
        <PostHandler/>
        <div className="mt-16  grid md:grid-cols-2 gap-2 w-full h-full">
            <PostJob />
            <PostJob />
            <PostJob />
            <PostJob />
            <PostJob />
            <PostJob />
        </div>
    </div>
}