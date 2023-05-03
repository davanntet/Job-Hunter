

export default function PostJob() {
    return <div className="pt-24"> 
        <div className=" w-full bg-one lg:h-44 md:h-36 h-28 flex items-center justify-between px-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white">Post Job</h1>
            {/* <img className="lg:w-24 md:w-20 w-16" src={IconBrowseJob} alt="" /> */}
            <svg className="text-white lg:w-24 md:w-20 w-16 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
        </div>

        
        <div className="w-2/3 mx-auto my-10 bg-gray-300 ">
            
            <form class="bg-white shadow-md border-1 border-one rounded px-8 pt-6 pb-8 mb-4">
                {/* Name */}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Full name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>

                {/* Email Phone Number */}
                <div className="mb-4 grid grid-cols-7 gap-6 ">
                    <div className="col-span-4 ">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    </div>
                    <div className="col-span-3 ">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Phone Number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    </div>
                </div>

                <hr className="my-6"/>

                {/* Company */}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Company name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>
                <div className="mb-4 grid grid-cols-7 gap-6 ">
                    <div className="col-span-4 ">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Company website <span className="ml-2 text-xs text-gray-500 font-normal">(Optional)</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    </div>
                    <div className="col-span-3 ">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Location
                        </label>
                        {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" /> */}
                        <select id="countries" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option selected>Choose a city/province</option>
                            <option value="US">Phnom penh</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="col-span-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Company logo
                        </label>
                        <input class="mt-1 w-full text-sm shadow border rounded border-1 file:p-2 text-gray-700 bg-gray-50 file:text-white file:bg-gray-700 file:border-none leading-tight cursor-pointer focus:outline-none focus:shadow-outline " aria-describedby="file_input_help" id="file_input" type="file"/>
                        <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x800px).</p>
                    </div>
                    
                </div>

            </form>
        </div>
        
            
        
    </div>
}