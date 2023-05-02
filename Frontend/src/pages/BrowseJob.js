import { Form } from "react-router-dom"
import IconBrowseJob from "../Image/IconBrowseJob.png"
import ezecomlogo from "../Image/ezecomlogo.png"


export default function BrowseJob() {
    return <div className="pt-24"> 
        <div className="container mx-auto bg-one h-44 flex items-center justify-between px-10">
            <h1 className="text-5xl font-bold text-white">Browse Job</h1>
            <img className="w-24" src={IconBrowseJob} alt="" />
        </div>

        {/* Filter container */}
        <div className="container mx-auto bg-white px-6 py-10 grid grid-cols-4">
            <div className="">
                <h3 className="text-xl text-one">Filter</h3>
                <div className="border-1 border-one px-4 py-2 mt-3">

                    {/* Keyword */}
                    <p className="text-lg text-one">Keyword</p>
                    <Form >
                        <input type="search" placeholder="Search..." className="w-full outline-none border-1 border-one mt-1 px-2"></input>
                    </Form>

                    {/* Category */}
                    <p className="text-lg text-one mt-4">Category</p>
                    <select className="w-full border-one border-1 outline-none mt-1"></select>

                    {/* Job type */}
                    <p className="text-lg text-one mt-4">Job type</p>
                    <ul className="mt-1">
                        <li>
                            <div>
                                <input type="radio" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">Full time</label>
                            </div>
                            <div>
                                <input type="radio" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">Part time</label>
                            </div>
                            <div>
                                <input type="radio" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">Remote</label>
                            </div>
                            <div>
                                <input type="radio" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">Freelance</label>
                            </div>
                        </li>
                    </ul>

                    {/* Location */}
                    <p className="text-lg text-one mt-4">Location</p>
                    <select className="w-full border-one border-1 outline-none mt-1"></select>

                    {/* Experience */}
                    <p className="text-lg text-one mt-4">Experience</p>
                    <ul className="mt-1">
                        <li>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">No experience</label>
                            </div>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">Less than 6 month</label>
                            </div>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">0.5 - 1 year</label>
                            </div>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">1 - 2 years</label>
                            </div>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">2 - 4 years</label>
                            </div>
                            <div>
                                <input type="radio" name="experienceFilter" className="border-one "/>
                                <label htmlFor="" className="pl-2 ">More than 4 years</label>
                            </div>
                        </li>
                    </ul>

                    {/* Salary */}
                    <p className="text-lg text-one mt-4">Salary</p>
                    
                    <div className="flex flex-col">
                        <label htmlFor="salary123">Salary: $&gt; <span id="salaried">250</span></label>
                        <input id="salary123" type="range" max={2000} min={100} defaultValue={250}  onChange={
                            (e) => {
                                document.querySelector('#salaried').textContent=e.target.value
                            }
                        }/>
                    </div>
                    {/* Reset button */}
                    <button className="w-full mt-4 text-lg text-white bg-one py-1 hover:bg-blue-950 ">Reset</button>
                </div>
            </div>

            {/* Job listing container */}
            <div className="ml-6 col-span-3 px-4">
                <h3 className="text-xl text-one">Job Listing</h3>

                {/* Job card */}
                <div className="px-2 py-2 mt-3 flex items-center justify-between border-1 border-white hover:border-one">
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={ezecomlogo} alt="" />
                        </div>
                        <div className="ml-6">
                            <div className="py-1">
                                <h3 className="text-2xl text-one font-semibold">Software Engineer</h3>
                            </div>
                            <div  className="py-1 flex ">
                                <div className="flex">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Phnom penh</p>
                                </div>
                                <div className="flex ml-6">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Full time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center text-center mr-3 pt-3">
                        <button className="w-32 bg-one text-white py-2 px-2 font-bold rounded">Apply Now</button>
                        <p className="mt-2 text-gray-600 italic">Post date: 3 Jan 2023</p>
                    </div>
                </div>
                {/* Job card 2*/}
                <div className="px-2 py-2 mt-3 flex items-center justify-between border-1 border-white hover:border-one">
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={ezecomlogo} alt="" />
                        </div>
                        <div className="ml-6">
                            <div className="py-1">
                                <h3 className="text-2xl text-one font-semibold">Software Engineer</h3>
                            </div>
                            <div  className="py-1 flex ">
                                <div className="flex">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Phnom penh</p>
                                </div>
                                <div className="flex ml-6">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Full time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center text-center mr-3 pt-3">
                        <button className="w-32 bg-one text-white py-2 px-2 font-bold rounded">Apply Now</button>
                        <p className="mt-2 text-gray-600 italic">Post date: 3 Jan 2023</p>
                    </div>
                </div>
                {/* Job card 3*/}
                <div className="px-2 py-2 mt-3 flex items-center justify-between border-1 border-white hover:border-one">
                    <div className="flex items-center">
                        <div>
                            <img className="w-28" src={ezecomlogo} alt="" />
                        </div>
                        <div className="ml-6">
                            <div className="py-1">
                                <h3 className="text-2xl text-one font-semibold">Software Engineer</h3>
                            </div>
                            <div  className="py-1 flex ">
                                <div className="flex">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Phnom penh</p>
                                </div>
                                <div className="flex ml-6">
                                    <svg className="w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2">Full time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center text-center mr-3 pt-3">
                        <button className="w-32 bg-one text-white py-2 px-2 font-bold rounded">Apply Now</button>
                        <p className="mt-2 text-gray-600 italic">Post date: 3 Jan 2023</p>
                    </div>
                </div>






            </div>
        </div>
    </div>
}