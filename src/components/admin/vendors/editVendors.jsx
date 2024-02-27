import React, { useState } from "react";

const EditVendors = ({ editData, cateEdit, closeDrawer, refreshData }) => {
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState({
    id: cateEdit,
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setTitle({
      ...title,
      ["title"]: value,
    });
  };

  const handleUpdateVendor = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(`/api/category/updateCategory`, title, {
        headers: {
          "content-Type": "application/json",
          authorization: adminAuthToken,
        },
      });

      if (response.status === 200) {
        setLoading(false);
        toast.success("Category Update Successfully!");
        closeDrawer();
        refreshData();
      } else {
        setLoading(false);
        toast.error("Server error !");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Server error!");
    }
  };

  return (
    <>
      <div
        className="flex justify-center mb-2"
      >
        <h2 className="custom_heading_text font-semibold text-[24px] ">Edit Vendor Details</h2>
      </div>
      <div>
        <form
          //   onSubmit={handleUpdateVendor}
          className=" bg-white border  rounded-lg 2xl:p-2 xl:p-2  lg:p-1 md:p-2 p-1  mx-auto"
        >
          <div className="mt-2">
            <label className="custom_input_label">Vendor</label>
            <input
              onChange={inputHandler}
              defaultValue={editData?.title}
              type="text"
              name="name"
              className="custom_inputt capitalize"
              required
              maxLength={84}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" disabled={isLoading} className="custom_btn">
              {isLoading ? "Loading." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditVendors;
