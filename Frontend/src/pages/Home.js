import PostJob from "../components/Home/PostJob";
import PostHandler from "../components/Home/PostHandler";

export default function Home() {
    return <div className="p-4"> 
        <PostHandler/>
        <div className="mt-16">
            <PostJob />
        </div>
    </div>
}