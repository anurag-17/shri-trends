import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = ({ closeEditModal, refreshData, editData }) => {
  const adminAuthToken = useSelector((state) => state?.auth.token);
  const [isLoading, setIsLoading] = useState(false);
 

  const productId = editData._id;
  const [productDetail, setProductDetail] = useState(editData);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      [name]: value,
      stocks: [
        {
          ...prevProductDetail.stocks[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/api/product/updateProduct/${productId}`,
        productDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: adminAuthToken,
          },
        }
      );

      if (response.status === 200) {
        refreshData();
        toast.success("Update successfully!");
        closeEditModal();
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="flex justify-center mb-2">
        <h2 className="custom_heading_text font-semibold text-[24px]">
          Edit Product Details
        </h2>
      </div>
      <div>
        <form
          onSubmit={handleEditProduct}
          className=" bg-white border  rounded-lg 2xl:p-2 xl:p-2  lg:p-1 md:p-2 p-1  mx-auto"
        >
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">Title</label>
              <input
                defaultValue={
                  editData?.title ? editData?.title : productDetail?.title
                }
                onChange={inputHandler}
                type="text"
                name="title"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">Price</label>
              <input
                defaultValue={
                  editData?.price ? editData?.price : productDetail?.price
                }
                onChange={inputHandler}
                type="text"
                name="price"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">Size</label>
              <input
                defaultValue={
                  editData?.stocks && editData.stocks.length > 0
                    ? editData.stocks[0].size
                    : ""
                }
                type="text"
                name="size"
                className="custom_inputt capitalize"
                required
                maxLength={84}
                onChange={inputHandler}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">Quantity</label>
              <input
                defaultValue={
                  editData?.stocks && editData.stocks.length > 0
                    ? editData.stocks[0].quantity
                    : ""
                }
                type="text"
                name="quantity"
                className="custom_inputt capitalize"
                required
                maxLength={84}
                onChange={inputHandler}
              />
            </div>
          </div>

          <div className="mt-2 w-80 ">
            <label className="custom_input_label">Dascription</label>
            <input
              defaultValue={
                editData?.description
                  ? editData?.description
                  : productDetail?.description
              }
              onChange={inputHandler}
              type="text"
              name="description"
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

export default EditProduct;
