import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import cross from "../../../../public/admin/cross.svg";
import plus from "../../../../public/admin/plus.svg";

const EditProduct = ({ closeEditModal, refreshData, editData }) => {
  const adminAuthToken = useSelector((state) => state?.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");

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

  const handleRemoveItem = (index) => {
    setProductDetail((prevProductDetail) => {
      const updatedStocks = [...prevProductDetail.stocks];
      updatedStocks.splice(index, 1);
      return {
        ...prevProductDetail,
        stocks: updatedStocks,
      };
    });
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleAddItem = () => {
    if (size && quantity) {
      // setProductDetail([...stock, { size, quantity }]);
      setProductDetail((prevProductDetail) => ({
        ...prevProductDetail,
        stocks: [...prevProductDetail.stocks, { size, quantity }],
      }));
      setSize("");
      setQuantity("");
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
          <div className="flex  items-center ">
            <div className="">
              <label className="custom_input_label " htmlFor="sizeInput">Size:</label>
              <select
                id="sizeInput"
                value={size}
                onChange={handleSizeChange}
                className="custom_inputt"
              >
                <option disabled value="">
                  Select Size
                </option>
                <option value="small">Small</option>
                <option value="med">Med</option>
                <option value="lg">Large</option>
                <option value="xl">X Large</option>
                <option value="xxl">X X large</option>
              </select>
            </div>

            <div className="">
              <label className="custom_input_label" htmlFor="quantityInput">Quantity:</label>
              <input
                type="number"
                id="quantityInput"
                value={quantity}
                onChange={handleQuantityChange}
                className="custom_inputt"
              />
            </div>
            <p>
              Add
              <Image
                onClick={handleAddItem}
                type="button"
                className="cursor-pointer ml-1 w-6 flex justify-end"
                src={plus}
                alt="add"
              />
            </p>
          </div>
          {productDetail.stocks.map((item, index) => (
            <div className="flex ml-6" key={index}>
              <p>
                Size: {item.size}, Quantity: {item.quantity}
              </p>
              <button onClick={() => handleRemoveItem(index)} type="button">
                <Image className="w-6 ml-4" src={cross} alt="Remove" />
              </button>
            </div>
          ))}

          <div className="mt-2  ">
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
