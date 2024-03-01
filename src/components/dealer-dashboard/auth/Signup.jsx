"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


import RightSection from "./RightSection";
import Openeye from "@/components/svg/Openeye";
import Closeeye from "@/components/svg/Closeeye";

const Signup = () => {
  const [loginDetails, setLoginDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
    altNumber: "",
    role: "",
    address: "",
    gstNo: "",
    companyName: "",
    // referredBy: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // const state = useSelector((state) => state);
  const router = useRouter();

  const InputHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginDetails.number === loginDetails.altNumber) {
      toast.warn("Mobile no. and Alt number can't be same");
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", loginDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res?.data?.success || res.status === 201) {
        toast.success("Register successfully!");
        router.push("/dealer/login")
        setLoading(false);
      } else {
        toast.error("Login failed please try later!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.error || "Server error !");
      setLoading(false);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="flex items-center justify-center lg:min-h-screen  ">
        <div className="md:px-[50px] w-full mx-auto">
          <div className="relative flex flex-col 2xl:gap-x-20 xl:gap-x-10 gap-x-7 gap-y-10 min-h-screen justify-center lg:shadow-none  items-center xl:flex-row space-y-8 md:space-y-0 w-[100%] px-[10px] bg-white lg:px-[40px] py-[20px] md:py-[30px] ">
            <div className="w-[100%]  xl:w-[60%] py-[20px] xl:py-0 px-[20px] lg:px-0">
              <form action="" className="" onSubmit={handleSubmit}>
                <div className="flex flex-col  gap-1 justify-center md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
                  <div className="text-left ">
                    <p className="mb-2 2xl:text-[40px] md:text-[35px] text-[30px] leading-[38px] font-bold">
                      Signup
                    </p>
                    <p className="2xl:text-[18px] md:text-[16px] text-[15px] font-[400] leading-[26px] mb-4 text-[#494949]">
                      Please fill this form for register yourself.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2 gap-y-3 mt-2">
                    <div className="">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        // title="enter valid email ex. abc@gmail.com"
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        // title="enter valid email ex. abc@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-2 gap-y-3 mt-2 items-center">
                    <div className="">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="enter valid email ex. abc@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label>Choose Role: </label>
                      <select
                      className="bg-white 2xl:w-[377px] lg:w-[204px] h-[40px] rounded-md border "
                        name="role"
                        value={loginDetails.role}
                        onChange={InputHandler}
                        required
                      >
                        <option disabled value="">Select Role</option>
                        <option value="dealer">Dealer</option>
                        <option value="subDealer">Sub dealer</option>
                      </select>
                    </div>
                  
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2 gap-y-3 mt-2">
                    <div className="">
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile number"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        min={10}
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="number"
                        name="altNumber"
                        placeholder="Alt. number"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        min={10}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2 gap-y-3 mt-2">
                    <div className="">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company name"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        max={84}
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name="gstNo"
                        placeholder="GST number"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2 gap-y-3 mt-2">
                  <div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="sign_input w-full  custom-input"
                        onChange={InputHandler}
                        minLength={8}
                        required
                      />
                      <div
                        className="absolute top-3 right-[15px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Openeye /> : <Closeeye />}
                      </div>
                      </div>
                      <div className="mt-3">
                      <input
                        type="text"
                        name="referredBy"
                        placeholder="Reffered By"
                        className="sign_input w-full custom-input"
                        onChange={InputHandler}
                        required
                      />
                    </div>
                    </div>

                    <div className="">
                      <textarea
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="sign_input w-full custom-input h-[100px]"
                        onChange={InputHandler}
                        required
                      ></textarea>
                    </div>
                   
                  </div>
                 

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className=" w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] log-btn"
                    >
                      {isLoading ? "Loading.." : "Signup"}
                    </button>
                    <Link href="/dealer/login">
                      <div className="text-[16px] font-medium underline text-center py-3 cursor-password">
                        Login
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
  );
};

export default Signup;
