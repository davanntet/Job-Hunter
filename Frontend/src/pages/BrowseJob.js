import { Form } from "react-router-dom"
import IconBrowseJob from "../Image/IconBrowseJob.png"
import ezecomlogo from "../Image/ezecomlogo.png"


export default function BrowseJob() {
    return <div className="pt-24"> 
        <div className=" w-full bg-one lg:h-44 md:h-36 h-28 flex items-center justify-between px-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white">Browse Job</h1>
            <img className="lg:w-24 md:w-20 w-16" src={IconBrowseJob} alt="" />
        </div>

        
        <div className=" mx-auto bg-white px-6 py-10 grid md:grid-cols-4 grid-cols-3">
            {/* Filter container */}
            <div className="hidden md:flex flex-col">
                <h3 className="lg:text-xl  md:text-lg text-one">Filter</h3>
                <div className="border-1 border-one lg:px-4 md:px-2 py-2 mt-3">

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
                                <input type="radio" id="jobTypeFilter1" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="jobTypeFilter1" className="pl-2 ">Full time</label>
                            </div>
                            <div>
                                <input type="radio" id="jobTypeFilter2" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="jobTypeFilter2" className="pl-2 ">Part time</label>
                            </div>
                            <div>
                                <input type="radio" id="jobTypeFilter3" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="jobTypeFilter3" className="pl-2 ">Remote</label>
                            </div>
                            <div>
                                <input type="radio" id="jobTypeFilter4" name="jobTypeFilter" className="border-one "/>
                                <label htmlFor="jobTypeFilter4" className="pl-2 ">Freelance</label>
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
                                <input type="radio" id="experienceFilter1" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter1" className="pl-2 ">No experience</label>
                            </div>
                            <div>
                                <input type="radio" id="experienceFilter2" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter2" className="pl-2 ">Less than 6 month</label>
                            </div>
                            <div>
                                <input type="radio" id="experienceFilter3" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter3" className="pl-2 ">0.5 - 1 year</label>
                            </div>
                            <div>
                                <input type="radio" id="experienceFilter4" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter4" className="pl-2 ">1 - 2 years</label>
                            </div>
                            <div>
                                <input type="radio" id="experienceFilter5" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter5" className="pl-2 ">2 - 4 years</label>
                            </div>
                            <div>
                                <input type="radio" id="experienceFilter6" name="experienceFilter" className="border-one "/>
                                <label htmlFor="experienceFilter6" className="pl-2 ">More than 4 years</label>
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
            <div className="lg:ml-6 md:ml-3 lg:px-4 md:px-2 col-span-3 ">
                <div className="flex justify-between">
                    <h3 className="lg:text-xl md:text-lg text-one">Job Listing</h3>
                    <button className="lg:text-xl md:text-lg text-one bg-white border-1 border-one rounded w-20 flex items-center justify-center md:hidden">
                        <svg className="w-4 mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"></path>
                        </svg>
                        Filter
                    </button>
                </div>
                

                {/* Job card */}
                <div className="px-2 py-2 mt-3 flex items-center justify-between border-1 border-white hover:border-one">
                    <div className="flex items-center">
                        <div>
                            <img className="lg:w-28 md:w-24 w-20" src={ezecomlogo} alt="" />
                        </div>
                        <div className="lg:ml-6 md:ml-3 ml-2">
                            <div className="md:py-1 py-0">
                                <h3 className="lg:text-2xl md:text-xl text-one font-semibold">Software Engineer</h3>
                            </div>
                            <div  className="py-1 flex ">
                                <div className="flex">
                                    <svg className="lg:w-4 md:w-3 w-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2  lg:text-base md:text-xs text-2xs">Phnom penh</p>
                                </div>
                                <div className="flex ml-6">
                                    <svg className="lg:w-4 md:w-3 w-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-gray-600 ml-2 lg:text-base md:text-xs text-2xs">Full time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center text-center mr-3 pt-3">
                        <button className="lg:w-32 md:w-28 w-24 lg:text-base md:text-sm text-xs bg-one text-white py-2 px-2 font-bold rounded">Apply Now</button>
                        <p className="lg:text-sm md:text-xs text-2xs mt-2 text-gray-600 italic">Post date: 3 Jan 2023</p>
                    </div>
                </div>
                






            </div>
        </div>
    </div>
}