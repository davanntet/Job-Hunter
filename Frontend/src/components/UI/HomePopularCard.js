import IconJob from '../../Image/IconJob.png'
export default function PopularCard({value}) {
    return <>
        <div className='p-3 border-2 border-one w-40 h-40 flex flex-col items-center gap-y-5 justify-center rounded-md'>
            <div>
                <img className='w-20 h-20' src={IconJob} alt='' />
            </div>
            <div className='truncate'>
                Software Engineer{value}
            </div>
        </div>
    </>
}