import React, { useState } from "react";

const AddVendors = ({closeDrawer,refreshData}) => {
    const [isLoading, setLoading] = useState(false);
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          setLoading(true);
          
          const data = {
            title: title,
          };
    
          const response = await fetch("/api/category/createCategory", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: adminAuthToken,
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            refreshData();
            closeDrawer();
            toast.success("Category Added Successfully!");
          } else {
            toast.error("Category with this title already exists!");
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while adding the category.");
        } finally {
          setLoading(false);
        }
      };


  return (
    <>
           <div
        className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white
      2xl:px-5  2xl:h-[50px] 2xl:my-5
      xl:px-4  xl:h-[40px] xl:my-4
      lg:px-3  lg:h-[35px] lg:my-2
      md:px-2  md:h-[30px] md:my-2
      sm:px-1 sm:h-[25px] sm:my-2
      px-1 h-[25px] my-2
       "
      >
        <h2 className="custom_heading_text font-semibold  ">
          Add New Vendor
        </h2>
       
      </div>

      <form
        // onSubmit={handleSubmit}
        className=" bg-white border  rounded-lg 2xl:p-2 xl:p-2  lg:p-1 md:p-2 p-1  mx-auto"
      >
        <div className="">
          <label
            className=""
          >
            Vendor Name
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="name"
            className="py-3 px-5 capitalize border"
            required
            maxLength={100}
          />
        </div>
        <div className="flex justify-center">
        <button type="submit" className="bg-gray-400 hover:bg-gray-500 rounded-md hover:text-white mt-3 px-3 py-2 " disabled={isLoading}>
          {isLoading ? "Adding Vendor..." : "Add Vendor"}
        </button>
        </div>
      </form>
    </>
  )
}

export default AddVendors