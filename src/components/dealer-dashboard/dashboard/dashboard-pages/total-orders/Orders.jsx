import Image from "next/image";
import React from "react";

const Orders = () => {
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
              <h1 className="text-2xl font-bold text-gray-800">Order History</h1>
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

          <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
            {dummyProducts.map((items, index) => {
              return (
                <article className="relative bg-white  px-3 py-2 rounded">
                  <div className="aspect-square overflow-hidden border border-[#f3f3f3] bg-[#69273267]   ">
                    {/* <img
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                      src="/images/vxPx1IPRjSynYYiQve8vF.png"
                      alt=""
                    /> */}
                  </div>
                  {/* <div className="absolute top-0 m-1 rounded-full bg-white">
                    <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                      Sale
                    </p>
                  </div> */}
                  <div className="mt-4 flex  items-start justify-between">
                    <div className="">
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <a href="#" title="" className="">
                          Silk Saare
                          <span className="absolute" aria-hidden="true"></span>
                        </a>
                      </h3>
                      {/* <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {" "}
                        $79.00{" "}
                      </del> */}
                    </div>
                    <div className="text-right">
                      {/* <p className="cursor-pointer ">
                        {" "}
                        <Image
                          src="/dealer/share.svg"
                          alt="share"
                          height={20}
                          width={20}
                          classNameName="ml-auto"
                        />
                      </p> */}

                      <p className="text-xs font-normal sm:text-sm md:text-base mt-2">
                        $99.00
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
};

export default Orders;
