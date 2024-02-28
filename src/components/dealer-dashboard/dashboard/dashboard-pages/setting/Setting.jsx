import Image from "next/image";
import React from "react";

const Setting = () => {
  return (
    <section>
      <div className="container mx-auto px-[70px]">
        <div className=" py-[40px]">
          <p className="text-[24px]">Account</p>
        </div>
        <div className="flex gap-6 ">
          <div className="w-[40%]">
            <p className="">Personal Information</p>
            <p className="">
              {" "}
              Use a permanent address where you can receive mail.{" "}
            </p>
          </div>
          <div className="w-[60%]">
            <div className="flex items-center gap-5">
              <div className="">
              {/* <div className=""> */}
              <Image
               src="/dealer/profile.svg"
                alt="profile"
                height={50}
                width={50}
              />
              </div>
              <div className="">
                <p className="">Change avatar</p>
                <p className="text-[13px]">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Setting;
