import React from "react";
import Image from "next/image";
import icon1 from "../../../public/admin/truck.svg";
import icon2 from "../../../public/admin/user1.svg";
import icon3 from "../../../public/admin/dollar.svg";
import icon4 from "../../../public/admin/cart.svg";
import icon5 from "../../../public/admin/sari1.jpg";
import icon6 from "../../../public/admin/suit.jpg";
import icon7 from "../../../public/admin/suits.jpg";

import dashboard from "../../../public/admin/dashboard-page.svg";

const Dashboard = () => {
  const content = [
    {
      id: 1,
      imageSrc: icon5,
      title: "VFC 901 CREAM BANARSI SUIT",
      order: 80,
      value: 85905,
    },
    {
      id: 2,
      imageSrc: icon6,
      title: "VFC 654 BANARSI SARI",
      order: 68,
      value: 66640,
    },
    {
      id: 3,
      imageSrc: icon7,
      title: "PPC 838 BROWN CHANDERI EMB SUIT",
      order: 36,
      value: 50220,
    },
    {
      id: 1,
      imageSrc: icon5,
      title: "PPC 271 FLORAL KALAMKAR SUIT",
      order: 34,
      value: 31450,
    },
    {
      id: 1,
      imageSrc: icon6,
      title: "PPC 918 RUST ROSE EMB SILK DUP",
      order: 33,
      value: 31350,
    },
    {
      id: 1,
      imageSrc: icon7,
      title: "PPC 151/169 SCHFFLI EMB SUIT",
      order: 25,
      value: 29975,
    },
  ];
  const vorders = [
    {
      id: 1,
      name: "Chandani cloth",
      order: 333,
    },
    {
      id: 2,
      name: "D P Collection",
      order: 456,
    },
    {
      id: 3,
      name: "VC Fashion",
      order: 943,
    },
    {
      id: 1,
      name: "Paridhan Collection",
      order: 23,
    },
    {
      id: 1,
      name: "Kiran",
      order: 383,
    },
    {
      id: 1,
      name: "Prashant trends",
      order: 56,
    },
    {
      id: 1,
      name: "Vintage Cloths",
      order: 321,
    },
    {
      id: 1,
      name: "Beauty Cloths",
      order: 789,
    },
  ];

  return (
    <>
      <section>
        <div className=" mx-20">
          <div className="font-bold text-[30px] 2xl:text-[35px] my-9">
            Analytics <span className="font-normal"> Dashboard </span>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* ---------todays sale--------- */}
            <div className="bg-white  p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Today Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon1} alt="image" />
              </div>
              <p>68</p>
            </div>
            {/* ---------last 7 day sale sale--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 7 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon2} alt="image" />
              </div>
              <p>278</p>
            </div>
            {/* ---------last 30  day sale--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 30 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon3} alt="image" />
              </div>
              <p>1,334</p>
            </div>
            {/* ---------last 180  day sale--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Last 180 Days Sales
                </p>
                <Image className="w-7 2xl:w-10" src={icon4} alt="image" />
              </div>
              <p>8,177</p>
            </div>
            {/* ---------total products--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Total Products
                </p>
                <Image className="w-7 2xl:w-10" src={icon1} alt="image" />
              </div>
              <p>945</p>
            </div>
            {/* ---------avaliable stocks--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Available Stock
                </p>
                <Image className="w-7 2xl:w-10" src={icon2} alt="image" />
              </div>
              <p>8,885</p>
            </div>
            {/* ---------stock Value--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Stock Value
                </p>
                <Image className="w-7 2xl:w-10" src={icon3} alt="image" />
              </div>
              <p>8,410,294</p>
            </div>
            {/* ---------Order Received--------- */}
            <div className="bg-white p-5 rounded-md">
              <div className="flex items-start justify-between ">
                <p className="text-neutral-500 xl:text-[14px] 2xl:text-[18px]">
                  Order Received
                </p>
                <Image className="w-7 2xl:w-10" src={icon4} alt="image" />
              </div>
              <p>576</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-[25px] 2xl:text-[30px] py-5 ">
              Last 30 Day&rsquo;s Best Selling
            </p>
            <div>
              <div className="grid grid-cols-6 gap-4 ">
                {content.map((item) => (
                  <div
                    key={item.id}
                    className="border p-4 bg-white flex flex-col items-center cursor-pointer"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      className="mb-2 w-[80px] 2xl:w-[100px]"
                    />
                    <p className="text-[13px] 2xl:text-[14px] font-semibold text-center">
                      {item.title}
                    </p>
                    <p className="text-gray-600 mb-2 text-[14px] 2xl:text-[16px]">
                      Order: {item.order}
                    </p>
                    <p className="text-gray-600 mb-2 text-[14px] 2xl:text-[16px]">
                      Price: ${item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-[25px] 2xl:text-[30px] py-5 ">
              Vendor Orders
            </p>
            <div className="bg-white p-10">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-white">
                      <th className="border text-start px-1">ID</th>
                      <th className="border text-start p-2">Name</th>
                      <th className="border text-start p-2">Order</th>
                      <th className="border text-start p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vorders.map((order) => (
                      <tr key={order.id} className="bg-gray-100">
                        <td className="border p-2">{order.id}</td>
                        <td className="border p-2">{order.name}</td>
                        <td className="border p-2 text-center ">
                          {order.order}
                        </td>
                        <td className="border p-2 text-center">
                          <button
                            // onClick={() => onActionClick(order.id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                          >
                            View Orders
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
