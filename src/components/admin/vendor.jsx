import React from "react";
import Image from "next/image";
import plus from "../../../public/admin/plus.svg";

const Vendor = () => {
  return (
    <>
      <section className="w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] mx-auto">
        <div>
          <p className="text-[30px] 2xl:text-[35px]">Product Upload</p>
          <div>
            <div className="bg-white p-4 space-y-5">
              <p className="my-5 text-neutral-400">Product Details</p>
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-x-4">
                <div className="w-full lg:w-[57%]">
                  <p>Select Vendor</p>
                  <div className="">
                    <input className="border w-full p-2" type="text" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p>Stock</p>
                  <Image className="w-7" src={plus} alt="image" />
                </div>
                <div >
                  <input 
                    className="w-[100%] border p-2"
                    type="text"
                    placeholder="Size"
                  />
                </div>
                <div >
                  <input 
                    className=" w-[100%] border p-2"
                    type="text"
                    placeholder="Quantity"
                  />
                </div>
              </div>

              <div className="">
                <p>Product Title</p>
                <div className="">
                  <input className="border w-full lg:w-[46%] 2xl:w-[51%] p-2" type="text" />
                </div>
              </div>

              <div className="">
                <p>Product Discription</p>
                <div className="">
                  <textarea
                    className="border w-full lg:w-[46%] 2xl:w-[50%]"
                    rows={4}
                    cols={50}
                    placeholder="Write Here"
                  />
                </div>
              </div>

              <div className="">
                <p>Product Price</p>
                <div className="">
                  <input className="border w-[46%] 2xl:w-[51%] p-2" type="text" />
                </div>
              </div>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                type="submit"
              >
                Upload Product
              </button>
            </div>
          </div>

          <div className="bg-white p-4 space-y-5 mt-4">
            <p className="my-5 text-neutral-400">Product Image</p>

            <div className="">
              <textarea
                className="border w-[46%] 2xl:w-[50%]"
                rows={4}
                cols={50}
                placeholder="write Here"
              />
            </div>

            <label for="myfile">Product Image:</label>

            <input type="file" name="myfile" />
            <div>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                type="submit"
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vendor;
