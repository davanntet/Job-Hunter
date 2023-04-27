import { Form } from 'react-router-dom'
import ImageHeader from '../../Image/ImageHeader.png'
export default function Header() {
    return <>
        <div>
            <div className='absolute w-1/2 flex flex-col'>
                <div className='ml-14 flex flex-col mt-14 gap-y-7'>
                    <label className='text-white text-xl'>Easy way to find a perfect job</label>
                    <label className='text-white text-6xl'>Find Your Next<br />Dream Job</label>
                </div>
                <Form className='ml-14 mt-14 w-1/2'>
                    <input className='w-full h-9 bg-white rounded-md px-2 outline-none flex items-center' type='search' placeholder='Search Job Here'/>
                </Form>
            </div>
            <img src={ImageHeader} className='w-full' alt=''/>
        </div>
    </>
}