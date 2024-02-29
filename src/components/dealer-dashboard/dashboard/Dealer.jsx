"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import CloseIcon from "@/components/svg/CloseIcon";
// import { removeToken, rem_DealerDetails } from "@/redux/adminSlice/authSlice";
import { removeDealerToken,rem_DealerDetails } from "@/redux/dealerSlice/authSlice";
import { sideMenus } from "@/config/data";
import Image from "next/image";
import Link from "next/link";

const Dealer = () => {
  const dispatch = useDispatch();
  const [ComponentId, setComponentId] = useState(1);

  const [showDrawer, setShowDrawer] = useState(false);
  const  authtoken  = useSelector((state) => state?.auth.token);
  const router = useRouter();

  const handleClick = (id) => {
    setComponentId(id);
    setShowDrawer(false);
  };
  const handleSignout = async () => {
    // router.push("/dealer/login");
    // return
    try {
      const res = await axios.get(`/api/auth/logout`, {
        headers: {
          Authorization: authtoken,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeDealerToken());
        dispatch(rem_DealerDetails());
        router.push("/dealer/login");
      } else {
        dispatch(removeDealerToken());
        dispatch(rem_DealerDetails());
        router.push("/dealer/login");
      }
    } catch (error) {
      dispatch(removeDealerToken());
      dispatch(rem_DealerDetails());
      router.push("/dealer/login");
      console.error("Error occurred:", error);
    }
  };

  return (
    <section className="">
    <ToastContainer/>
  
      <div className="h-[50px] w-full bg-white px-[20px] flex justify-between items-center relative">
        <div
          className="py-2 px-3 flex flex-col gap-[3px] cursor-pointer "
          onClick={() => setShowDrawer(true)}
        >
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[15px]"></div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="">
            <Image
              src="/dealer/profile.svg"
              alt="profile"
              height={30}
              width={30}
            />
          </div>

          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center">
                  <div className="flex gap-1 items-end">
                    <p className="">Dealer</p>
                    <Image
                      src="/dealer/downarrow.svg"
                      alt="profile"
                      height={18}
                      width={18}
                    />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform scale-95"
                enterTo="transform scale-100"
                leave="transition ease-in duration=75"
                leaveFrom="transform scale-100"
                leaveTo="transform scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 z-50 mt-2 px-2 py-5 shadow-2xl rounded-lg origin-top-right border border-[#f3f3f3]  bg-white side-profile">
                  <div className="p-1 flex flex-col gap-4">
                    <Menu.Item>
                      <Link
                        href="/change-password"
                        className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                      >
                        {/* <PasswordIcon className="h-4 w-4 mr-2" /> */}
                        Change password
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/login"
                        className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                      >
                        {/* <SignOutIcon /> */}
                        Sign out
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>


        </div>

      </div>

      <div className="flex min-h-screen ">
        <div
          className={`w-[170px] md:h-auto z-[11] bg-d_theme text-white xl:py-[40px] xl:px-[5px] px-[5px] py-[10px] transition-all duration-1000 delay-100 ease-linear h-[100vh]
                 ${
                   showDrawer
                     ? "block  absolute top-0 left-0 min-h-screen is-show"
                     : "hidden"
                 }`}
        >
          <div
            className="absolute right-0 top-2 text-black flex flex-col gap-[5px] cursor-pointer text-right mr-3 mt-2 z-[111]"
            onClick={() => setShowDrawer(false)}
          >
            <div className="">
              <Image
                src="/dealer/whiteclose.svg"
                alt="profile"
                height={18}
                width={18}
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col 2xl:gap-6 gap-3 pt-[60px] px-[10px]">
              {sideMenus.map((item, index) => (
                <div
                  key={index}
                  className={`mx-4 py-[5px] flex gap-x-3 items-center cursor-pointer  transition-colors font-semibold text-[16px] 
                                    ${
                                      item.id === ComponentId
                                        ? " border-b border-b-white"
                                        : " "
                                    }  `}
                  onClick={() => handleClick(item.id)}
                >
                  {item?.icon}
                  <p className=" capitalize whitespace-nowrap ">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-white h-[1px] w-[70%] mx-auto mt-[100px]"></div>
          </div>

          <div
            className={` mx-5 rounded text-center cursor-pointer my-3 flex items-center transition-colors dash-menu gap-x-3 font-semibold  text-[16px] hover:text-primary  }`}
            onClick={handleSignout}
          >
            {/* <LogoutIcon /> */}
            <div>
              <p>Sign Out</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#f3f3f3]  w-full">
          {sideMenus.map((item, index) => (
            <Fragment key={index}>
              {ComponentId === item.id && item.component}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dealer;
