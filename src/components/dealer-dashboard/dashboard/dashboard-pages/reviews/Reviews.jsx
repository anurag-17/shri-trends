import Image from "next/image";
import React from "react";

const Reviews = () => {
  const dummyProducts = [
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    }
  ];
  return (
    <>
      <section>
        <div className="container mx-auto px-[70px]">
          {/* <div
            className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          >
            <div className="px-4 pt-8 pb-10">
              <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                <img
                  className="mx-auto h-auto w-full rounded-full"
                  src="/images/n2yIu0Buhpft9wZ6tROzn.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}

          <div className="bg-[#f3f3f3] flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div className="max-w-lg">
              <h1 className="text-2xl font-bold text-gray-800">Recent reviws</h1>
              <p className="mt-2 text-gray-600">
              Check the status of recent orders, manage returns, and discover similar products.
              </p>
            </div>
            <div className="">
              {/* <button className="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                Chat with us
              </button> */}
            </div>
          </div>


          <div className="rounded-[10px] bg-white py-[30px] px-[20px] flex justify-between items-center mt-[20px] p-6 overflow-x-scroll">
                <table className="w-full min-w-[640px] table-auto mt-[20px] ">
                  <thead className="">
                    <tr className=" ">
                      {headItems.map((items, inx) => (
                        <th className="py-3 px-5 text-left bg-white" key={inx}>
                          <p className="block text-[13px] font-medium uppercase text-[#72727b]">
                            {" "}
                            {items}
                          </p>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {dummyData?.map((items, index) => (
                      <tr key={index}>
                
                        <td className="text-[14px] font-[400] py-3 px-5">
                          <p className=""></p>
                        </td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

        
        </div>
      </section>
    </>
  );
};

export default Reviews;
