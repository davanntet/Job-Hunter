import ImageBody1 from '../../Image/ImageBody1.png'
import IconUserData from '../../Image/IconUserData.png'
import IconJobData from '../../Image/IconJobData.png'
import IconCompanyData from '../../Image/IconCompanyData.png'
export default function BodyData() {
    return <>
        <div className='w-full h-auto flex items-center'>
            <div className='w-full bg-one absolute' >
                <img className='w-full opacity-20' src={ImageBody1} alt="" />
            </div>     
            <div className='absolute grid grid-cols-3 w-full items-center justify-center lg:text-4xl mn:text-3xl md:text-2xl sm:text-xl text-lg'>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-36 mn:w-28 md:w-24 sm:w-20 w-16 lg:h-36 mn:h-28 md:h-24 sm:h-20 h-16' src={IconUserData} alt='' />
                    <label>1000</label>
                    <label>Users</label>
                </div>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-36 mn:w-28 md:w-24 sm:w-20 w-16 lg:h-36 mn:h-28 md:h-24 sm:h-20 h-16' src={IconJobData} alt='' />
                    <label>999</label>
                    <label>Jobs</label>
                </div>
                <div className='flex lg:gap-y-2 md:gap-1 gap-0 flex-col text-white font-semibold  items-center justify-center'>
                    <img className='lg:w-36 mn:w-28 md:w-24 sm:w-20 w-16 lg:h-36 mn:h-28 md:h-24 sm:h-20 h-16' src={IconCompanyData} alt='' />
                    <label>36</label>
                    <label>Companies</label>
                </div>
            </div>
        </div>
    </>
}