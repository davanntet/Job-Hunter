import { Form } from "react-router-dom"
import IconBrowseJob from "../Image/IconBrowseJob.png"


export default function BrowseJob() {
    return <div className="pt-24"> 
        <div className="container mx-auto bg-one h-44 flex items-center justify-between px-10">
            <h1 className="text-5xl font-bold text-white">Browse Job</h1>
            <img className="w-24" src={IconBrowseJob} alt="" />
        </div>

        <div className="container mx-auto bg-white px-6 py-10 grid grid-cols-4">
            <div className="">
                <h3 className="text-2xl text-one">Filter</h3>
                <div className="border-1 border-one px-2 py-2 mt-3">
                    <p className="text-lg text-one">Keyword</p>
                    <Form >
                        <input type="search" placeholder="Search..." className="w-full outline-none border-1 border-one mt-2 px-2"></input>
                    </Form>

                    <p className="text-lg text-one mt-4">Category</p>
                    <select className="w-full border-one border-1 outline-none"></select>

                    <p className="text-lg text-one mt-4">Job type</p>
                    
                </div>
            </div>
            <div className="col-span-3">

            </div>
        </div>
    </div>
}