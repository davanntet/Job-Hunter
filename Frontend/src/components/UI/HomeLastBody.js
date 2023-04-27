import { Link } from 'react-router-dom'
import ImageBody2 from '../../Image/ImageBody2.png'
export default function LastBody(){
    return <>
        <div className='grid lg:grid-cols-3  grid-cols-2'>
            <div className='lg:col-span-2'>
                <img className='w-full' src={ ImageBody2} alt='' />
            </div>
            <div className='flex flex-col items-start justify-center font-semibold lg:gap-y-7 mn:gap-y-5 md:gap-y-3 sm:gap-y-2 gap-y-1'>
                <label>Best  place for employer</label>
                <label className='lg:text-5xl mn:text-4xl md:text-3xl sm:text-2xl text-xl'>Finding a good worker?</label>
                <Link className='bg-one text-white font-bold py-2 px-4 rounded-md lg:text-lg md:text-base sm:text-sm text-xs'>Post Job</Link>
            </div>
        </div>
    </>
}