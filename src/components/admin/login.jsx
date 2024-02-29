'use client';
import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Closeeye from "@/components/svg/Closeeye";
import Openeye from "@/components/svg/Openeye";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './loader';
import Link from 'next/link';
import { setToken, removeToken,adDetails } from "@/redux/adminSlice/authSlice";
import { useDispatch } from 'react-redux';
import RightSection from './RightSection';
// import { useAuth } from '../Utils/AuthContext';

const Login = () => {
  const dispatch=useDispatch();
  const router=useRouter();
    const [loginDetails,setLoginDetails]=useState({
        email:"",
        password:""
    });
    const [showPassword,setShowPassword]=useState(false);
    const [isLoading, setLoading] = useState(false);

    const InputHandler = (e) => { 
      setLoginDetails({...loginDetails, [e.target.name]:e.target.value})
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await axios.post("/api/auth/adminLogin", loginDetails, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);
        if (res?.data?.success) {
          toast.success("Login successfully!");
          dispatch(setToken(res?.data?.token));
          dispatch(adDetails(res?.data?.user));
          setLoading(false);
          router.push("/admin/admin-dashboard");
        } else {
          toast.error("Login failed please try later!");
          dispatch(removeToken());
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error(error?.response?.data?.error || "Server error !");
        dispatch(removeToken());
        setLoading(false);
      }
    };



  return (
    <>
    {isLoading && <Loader/>}
    <ToastContainer autoClose={3000}/>
    <div className="flex items-center justify-center lg:min-h-screen  ">
        <div className="md:px-[50px] w-full mx-auto">
          <div className="relative flex flex-col 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center lg:flex-row space-y-8 md:space-y-0 w-[100%] px-[10px]bg-white lg:px-[40px] py-[20px] md:py-[40px] ">
            <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
              <form action="" className="" 
              onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-4 justify-center p-8 lg:p-14 md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
                  <div className="text-left ">
                    <p className="mb-2 2xl:text-[40px] md:text-[35px] text-[30px] leading-[38px] font-bold">
                      Welcome 
                    </p>
                    <p className="2xl:text-[18px] md:text-[16px] text-[15px] font-[400] leading-[26px] mb-4 text-[#494949]">
                      Welcome back! Please enter your details
                    </p>
                  </div>
                  <div className="md:py-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="log_input w-full mt-2 custom-input"
                      onChange={InputHandler}
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="enter valid email ex. abc@gmail.com"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="log_input w-full mt-2 custom-input"
                      onChange={InputHandler}
                      minLength={8}
                      required
                    />
                    <div
                        className="absolute top-6 right-[15px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Openeye /> : <Closeeye />}
                      </div>
                  </div>

                  <div className="mt-6">
                  
                    <button
                      type="submit"
                      disabled={isLoading}
                      className=" w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] log-btn"
                    >
                      {isLoading ? "Loading.." : "Login"}
                    </button>
                   
                    <Link href="/forgot-password">
                      <div className="text-[16px] font-medium underline text-center py-3 cursor-password">
                        Forgot password
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <RightSection />
          </div>
        </div>
      </div>

     
    </>
  )
}

export default Login