
export default function Edit() {
    return <div className="bg-blue-50 absolute w-full h-full z-30 top-0">
        <div className="flex">
            <div className="flex flex-col gap-y-2 w-32">
                <label className="information-label">Full name</label>
                <label className="information-label">Email</label>
                <label className="information-label">Username</label>
                <label className="information-label">Gender</label>
                <label className="information-label">Bio</label>
                
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <input className="information" type="text" value={'Tet Davann'} />
                <input className="information" type="email" value={'davann.tet@student.cadt.edu.kh'} />
                <input className="information" type="text" value={'tetdavann'} />
                <select className="information">
                    <option value='female'>Female</option>
                    <option value='female'>Gender</option>
                    <option value='female'>Prefer not to Say</option>
                </select>
                <input className="information" type="text" value={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} />
            </div>
        </div>
        <div className="w-24 h-8 font-bold text-white flex items-center justify-center uppercase rounded-full bg-two mx-auto mt-4">
            Apply
        </div>
    </div>
}