
export default function Edit() {
    return <div className=" m-3 p-6 rounded-xl ">
        <div className="mb-6 w-max mx-auto text-4xl font-semibold">Person Information</div>
        <div className="flex">
            <div className="flex flex-col gap-y-2 w-32">
                <label className="information-label">Full name</label>
                <label className="information-label">Email</label>
                <label className="information-label">Username</label>
                <label className="information-label">Gender</label>
                <label className="information-label">Bio</label>
                <label className="information-label h-12">Profile</label>
                <label className="information-label h-12">CV</label>
                
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
                <input className="information h-12" type="file" accept=".png,.jpg"/>
                <input className="information h-12" type="file"  accept=".pdf"/>
            </div>
        </div>
        <div className="w-28 h-10 hover:text-lg hover:w-32  font-bold text-white flex items-center justify-center uppercase rounded-full bg-two mx-auto mt-4 cursor-pointer">
            change
        </div>
    </div>
}