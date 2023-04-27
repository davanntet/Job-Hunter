import { Link } from 'react-router-dom'
import ImageBody2 from '../../Image/ImageBody2.png'
export default function LastBody(){
    return <>
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <img className='w-full' src={ ImageBody2} alt='' />
            </div>
            <div className='flex flex-col items-start justify-center font-semibold gap-y-7'>
                <label>Best  place for employer</label>
                <label className='text-5xl'>Finding a good worker?</label>
                <Link className='bg-one text-white font-bold py-2 px-4 rounded-md'>Post Job</Link>
            </div>
        </div>
    </>
}