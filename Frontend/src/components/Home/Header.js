import { Form } from 'react-router-dom'
import ImageHeader from '../../Image/ImageHeader.png'
export default function Header() {
    return <>
        <div className='pt-24 flex h-full items-center'>
            <div className='absolute w-1/2 flex flex-col ml-12 lg:gap-y-12 mn:gap-y-10 md:gap-y-8 sm:gap-y-6 gap-y-4'>
                <div className='flex flex-col lg:gap-y-7 mn:gap-y-6 md:gap-y-5 sm:gap-y-4 gap-y-3'>
                    <label className='text-white lg:text-xl font-bold md:text-lg sm:text-base'>Easy way to find a perfect job</label>
                    <label className='text-white lg:text-6xl mn:text-5xl md:text-4xl sm:text-3xl text-2xl'>Find Your Next<br />Dream Job</label>
                </div>
                <Form className='lg:w-96 mn:w-80 md:w-72 sm:w-64 w-56'>
                    <input className='w-full lg:h-11 mn:h-10 md:h-9 sm:h-8 h-7 bg-white rounded-md px-2 outline-none flex items-center lg:text-lg sm:text-base text-sm' type='search' placeholder='Search Job Here'/>
                </Form>
            </div>
            <img src={ImageHeader} className='w-full' alt=''/>
        </div>
    </>
}