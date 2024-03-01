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
              {/* <p className="mt-2 text-gray-600">
              Check the status of recent orders, manage returns, and discover similar products.
              </p> */}
            </div>
            <div className="">
              {/* <button className="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                Chat with us
              </button> */}
            </div>
          </div>


          <div className="rounded-[10px] bg-white py-[20px]  flex justify-between items-start mt-[10px] px-6 overflow-x-scroll">
                <table className="w-full min-w-[640px] table-auto mt-[20px] ">
                  <thead className="">
                    <tr className=" ">
                      
                    </tr>
                  </thead>

                  <tbody>
                    {dummyProducts?.map((items, index) => (
                      <tr key={index} className="border-b border-b-[#f3f3f3]">
                
                        <td className="text-[14px] font-[400] py-3 px-5 place-content-start ">
                          <p className="">Risako M</p>
                          <p className="text-[#757373] font-medium leading-[25px]">May 16, 2021</p>
                        </td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize">
                           <div className="mt-2 flex items-center">
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                        </td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize max-w-[350px]">
                          <p className="">Cant say enough good things</p>
                          <p className="text-[#757373] font-medium mt-4 leading-[25px]">I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
                          <p className="text-[#757373] font-medium mt-4 leading-[25px]">The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
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
