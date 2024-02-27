import React, { useState } from "react";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";


const AddProduct = ({closeDrawer,refreshData}) => {
    const adminAuthToken=useSelector((state)=>state?.auth.token);
    const [isLoading, setLoading] = useState(false);
    // const [imageUpload, setImageUpload] = useState(false);
    // const [imageDisable, setImageDisable] = useState(false);
    // const [imageMessage, setImageMessage] = useState("");
    const [productDetail, setProductDetail] = useState({
        title:"",
        description:"",
        stocks: [
          { size: "", quantity: "" }
        
        ],
        price:"",
        image:[]
    });

    const inputHandler = (e, index) => {
      const { name, value } = e.target;
    
      if (name === "size" || name === "quantity") {
        const updatedStocks = [...productDetail.stocks];
        updatedStocks[index][name] = value;
    
        setProductDetail({
          ...productDetail,
          stocks: updatedStocks,
        });
      } else {
        setProductDetail({
          ...productDetail,
          [name]: value,
        });
      }
    };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          setLoading(true);
    
          const response = await axios.post(
            "/api/product/createProduct",
            productDetail,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: adminAuthToken,
              },
            }
          );
    
          if (response.status === 200) {
            refreshData();
            closeDrawer();
            toast.success("Product Added Successfully!");
            refreshData();
          } else {
            toast.error("Failed to add product. Please try again later.");
          }
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while adding the product.");
        } finally {
          setLoading(false);
        }
      };


  return (
    <>
    <ToastContainer/>
           <div
        className=" flex justify-center  mb-3"
      >
        <h2 className="custom_heading_text font-semibold  text-[24px]">
          Add Product
        </h2>
       
      </div>

      <form
        onSubmit={handleSubmit}
        className=" bg-white border  rounded-lg 2xl:p-6 xl:p-2  lg:p-1 md:p-2 p-1  mx-auto"
      >
      <div className="flex">
      <div className="w-1/2">
          <label className="custom_input_label">Product Title</label>
          <input
           value={productDetail.title}
            maxLength={100}
            required
            type="text"
            name="title"
            className="custom_inputt text-[18px]"
            onChange={inputHandler}
          />
        </div>
        <div className="w-1/2">
          <label className="custom_input_label">Product Description</label>
          <input
            value={productDetail.description}
            maxLength={100}
            required
            type="text"
            name="description"
            className="custom_inputt"
            onChange={inputHandler}
          />
        </div>
        </div>
        <div className="flex">
     
        <div className="w-1/2">
  <label className="custom_input_label">Size</label>
  <input
    value={productDetail.stocks[0].size}
    maxLength={100}
    required
    type="text"
    name="size"
    className="custom_inputt"
    onChange={(e) => inputHandler(e, 0)} // Use index 0 for the first stock item
  />
</div>

<div className="w-1/2">
  <label className="custom_input_label">Quantity</label>
  <input
    value={productDetail.stocks[0].quantity}
    onChange={(e) => inputHandler(e, 0)} // Use index 0 for the first stock item
    maxLength={100}
    required
    type="text"
    name="quantity"
    className="custom_inputt"
  />
</div>
        <div className="w-1/2">
          <label className="custom_input_label">Price</label>
          <input
           value={productDetail.price}
            onChange={inputHandler}
            maxLength={100}
            required
            type="text"
            name="price"
            className="custom_inputt"
          />
        </div>
        {/* <div className="w-1/2">
          <label className="custom_input_label">Image</label>
          <div className="flex items-center w-full">
                  <input
                    id="file"
                    type="file"
                    name="image"
                    disabled={imageDisable}
                    onChange={inputHandler}
                    className="w-full text-black border text-[13px] hover:white max-w-[200px] mt-2"
                    accept="image/png,image/jpg, image/jpeg , image/*"
                  />
                </div>
                   <p className="text-green-700 text-[8px] lg:text-[12px] 2xl:text-[14px]">   {imageMessage && <p>{imageMessage}</p>}</p>
                
        </div> */}
        {/* <div className="">
                {imageDisable ? (
                  <button
                    className="p-2 border h-[20px] flex justify-center items-center"
                    type="button"
                    onClick={addField}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className={`focus-visible:outline-none  text-white text-[13px] px-4 py-1 rounded
                    ${
                      imageDisable
                        ? " bg-[green]"
                        : imageUpload
                        ? "bg-[gray]"
                        : "bg-[#070708] text-[white]"
                    }`}
                    type="button"
                    onClick={uploadImage}
                    disabled={imageDisable || imageUpload}
                  >
                    {imageDisable
                      ? "Uploaded"
                      : imageUpload
                      ? "Loading.."
                      : "Upload"}
                  </button>
                )}
             
              </div> */}
        </div>

        <div className="flex justify-center">
        <button type="submit" className="bg-gray-400 hover:bg-gray-500 rounded-md hover:text-white mt-3 px-3 py-2 " disabled={isLoading}>
          {isLoading ? "Adding Product..." : "Add Product"}
        </button>
        </div>
      </form>
    </>
  )
}

export default AddProduct