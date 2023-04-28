import { Form, Link } from "react-router-dom";

export default function LoginForm() {
    return <div className="fixed left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col bg-white shadow-lg shadow-blue-950 p-12 gap-y-5 w-1/3 text-black">
        <div className="flex flex-col w-full justify-center text-center">
            <label className="font-bold text-4xl text-two">
                Login
            </label>
            <label className="opacity-30">
                Enter login details to get access
            </label>
        </div>
        <Form className="flex flex-col gap-y-5">
            <div className="flex flex-col ">
                <label htmlFor="f1">Username or Email Address</label>
                <input className=" border-1 px-1 outline-one text-black h-8" id="f1" type="email" placeholder="Enter username/email"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="f2">Password</label>
                <input className="border-1 px-1  outline-one outline-4 text-black h-8" id="f2" type="password" placeholder="Enter password" />
            </div>
            <div className="flex flex-row justify-between text-xs">
                <div className="flex flex-row-reverse gap-x-1">
                    <label htmlFor="f3">Keep Me Logged In</label>
                    <input className="border-1 bg-two" id='f3' type="checkbox"/>
                </div>
                <Link className="text-one underline">Forgot Password?</Link>
            </div>
            <div className="flex flex-row justify-between mt-4 items-center">
                <div className="text-xs">Don't have an account?<span><Link to={'/users/register'} className="font-bold text-one text-sm underline">Register</Link> here</span></div>
                <input className="w-1/3 py-1 px-3 p-3 rounded-lg text-white font-bold bg-two" type="submit" value='LOGIN'/>
            </div>
        </Form>
    </div>
}