
export default function PostHandler() {
    return <>
        <div className="w-max grid grid-cols-4 text-center bg-white shadow-xl px-0 rounded-full h-8 text-base font-semibold  items-center fixed left-1/2 -translate-x-1/2" id='choose'>
            

            
            <input className="hidden" type="radio" name="r" id='r2' checked></input>
            <label className='choose' htmlFor="r2">Full time</label>
            
            <input className="hidden" type="radio" name="r" id='r3' checked></input>
            <label className='choose' htmlFor="r3">Part time</label>
            
            <input className="hidden" type="radio" name="r" id='r4' checked></input>
            <label className='choose' htmlFor="r4">Freelancer</label>

            <input className="hidden" type="radio" name="r" id='r1' checked></input>
            <label className='choose' htmlFor="r1">All</label>
        </div>
    </>
}