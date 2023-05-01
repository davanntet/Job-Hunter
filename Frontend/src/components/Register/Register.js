import { useRef } from "react";
import { Form, Link } from "react-router-dom";
import axiosClient from "../../axios-client";

export default function Register() {

    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const genderRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
            gender: genderRef.current.value
        }
        console.log(payload)
        axiosClient.post('/register',payload)
        .then(({data}) => {
            console.log(data)
        })
        .catch((error) => {
            const response = error.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
            }
        })
    }


    return <div className="fixed left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col bg-white shadow-lg shadow-blue-950 p-6 gap-y-3 w-1/3 text-black">
        <div className="flex flex-col w-full justify-center text-center">
            <label className="font-bold text-4xl text-two">
                Register
            </label>
            <label className="opacity-30">
                Create your account to get full access
            </label>
        </div>
        <Form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col ">
                <label htmlFor="f1">Full Name</label>
                <input ref={nameRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="text" placeholder="Full Name" />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="f1">Username</label>
                <input ref={usernameRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="text" placeholder="Username" />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="f1">Gender</label>
                <select id="gender" ref={genderRef} className=" border-1 px-1 outline-one text-black h-8">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Prefer not to say</option>
                </select>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="f1">Email Address</label>
                <input ref={emailRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="email" placeholder="Enter email address" />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="f1">Password</label>
                <input ref={passwordRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="password" placeholder="Enter password" />
            </div>
            <div className="flex flex-col ">
                <label htmlFor="f1">Confirm Password</label>
                <input ref={passwordConfirmationRef} className=" border-1 px-1 outline-one text-black h-8" id="f1" type="password" placeholder="Confirm password" />
            </div>

            <div className="flex flex-row justify-between text-xs">
                <div className="flex flex-row-reverse gap-x-1">
                    <label htmlFor="f3">Keep Me Logged In</label>
                    <input name="remember" className="border-1 bg-two" id='f3' type="checkbox" />
                </div>
                <Link className="text-one underline">Forgot Password?</Link>
            </div>
            <div className="flex flex-row justify-between mt-4 items-center">
                <div className="text-xs">Don't have an account?<span><Link to={'/users/login'} className="font-bold text-one text-sm underline">Login</Link> here</span></div>
                <input className="w-1/3 py-1 px-3 p-3 rounded-lg text-white font-bold bg-two" type="submit" value='Register' />
            </div>
        </Form>
    </div>
}