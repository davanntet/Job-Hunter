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
            <div className='absolute flex gap-x-36 w-full items-center justify-center'>
                <div className='flex gap-y-2 flex-col text-white font-semibold text-4xl items-center justify-center'>
                    <img className='w-36 h-36' src={IconUserData} alt='' />
                    <label>1000</label>
                    <label>Users</label>
                </div>
                <div className='flex gap-y-2 flex-col text-white font-semibold text-4xl items-center justify-center'>
                    <img className='w-36 h-36' src={IconJobData} alt='' />
                    <label>999</label>
                    <label>Jobs</label>
                </div>
                <div className='flex gap-y-2 flex-col text-white font-semibold text-4xl items-center justify-center'>
                    <img className='w-36 h-36' src={IconCompanyData} alt='' />
                    <label>36</label>
                    <label>Companies</label>
                </div>
            </div>
        </div>
    </>
}