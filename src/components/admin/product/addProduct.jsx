import React, { useState } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import plus from "../../../../public/admin/plus.svg";
import Image from "next/image";
import cross from '../../../../public/admin/cross.svg';

const AddProduct = ({ closeDrawer, refreshData }) => {
  const adminAuthToken = useSelector((state) => state?.auth.token);
  const [isLoading, setLoading] = useState(false);

  // const [imageUpload, setImageUpload] = useState(false);
  // const [imageDisable, setImageDisable] = useState(false);
  // const [imageMessage, setImageMessage] = useState("");
  const [productDetail, setProductDetail] = useState({
    title: "",
    description: "",
    stocks: [{ size: "", quantity: "" }],
    price: "",
    image: [],
  });

  // ------------image upload-----------------
  //   const uploadImage = async (e) => {
  //     // alert("ssas")
  //     // toast.warn("Please select image.")
  //     // console.log(image);
  //     setImageUpload(true)

  //     if (image == "" || image == undefined) {

  //         setImageUpload(false)
  //         return toast.warn("Please select file.")
  //     }

  //     try {

  //         const response = await axios.post('api/auth/uploadImage', image, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //                 'Content-Type': 'multipart/form-data',
  //             },
  //         });

  //         if (response.status === 200) {
  //             // console.log('Category added:', response?.data);
  //             setFormData({ ...formData, ['file']: response?.data?.url })
  //             setImageDisable(true)
  //             setImageUpload(false)
  //         }
  //         else {
  //             setFormData({ ...formData, ['file']: "" })
  //             setImageDisable(false)
  //             setImageUpload(false)

  //         }
  //     } catch (error) {
  //         console.error('Error adding category:', error.response.data);
  //         setImageUpload(false)

  //     }
  // }

  const inputHandler = (e, index) => {
    const { name, value } = e.target;

    if (name === "size" || name === "quantity") {
      setProductDetail((prevProductDetail) => {
        const updatedStocks = [...prevProductDetail.stocks];
        updatedStocks[index][name] = value;

        return {
          ...prevProductDetail,
          stocks: updatedStocks,
        };
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

  
  const addStockInput = () => {
    setProductDetail((prevProductDetail) => {
      const updatedStocks = [...prevProductDetail.stocks, { size: "", quantity: "" }];

      return {
        ...prevProductDetail,
        stocks: updatedStocks,
      };
    });
  };

  const StockList = ({ stocks }) => (
    <div>
      <p>Added Sizes and Quantities:</p>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            Size: {stock.size}, Quantity: {stock.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
  const removeStockInput = (indexToRemove) => {
    setProductDetail((prevProductDetail) => {
      const updatedStocks = prevProductDetail.stocks.filter((_, index) => index !== indexToRemove);
  
      return {
        ...prevProductDetail,
        stocks: updatedStocks,
      };
    });
  };

  return (
    <>
      <ToastContainer />

      {/* <div className=" flex justify-center  mb-3">
        <h2 className="custom_heading_text font-semibold  text-[24px]">
          Add Product
        </h2>
      </div> */}

      <section className="">
        <form onSubmit={handleSubmit}>
          <p className="text-[22px] 2xl:text-[35px] mb-4">Product Upload</p>
          <div>
            <div className="bg-white  space-y-5">
              {/* <p className="my-1 text-neutral-400">Product Details</p> */}
              <div className=" lg:flex-row items-start lg:items-end gap-x-4">
                <div className="w-full">
                  <p className="text-[14px] 2xl:text-[18px]">Product Title :</p>
                  <div className="">
                    <input
                      value={productDetail.title}
                      maxLength={100}
                      required
                      type="text"
                      name="title"
                      onChange={inputHandler}
                      className="border w-full p-[5px]"
                    />
                  </div>
                </div>

                <div className="mt-3 gap-3">
  {productDetail.stocks.map((stock, index) => (
    <div key={index} className="gap-3 flex items-center">
      <input
        value={stock.size}
        maxLength={100}
        type="text"
        name="size"
        onChange={(e) => inputHandler(e, index)}
        className="w-[50%] border p-[5px]"
        placeholder="Size"
      />
      <input
        value={stock.quantity}
        maxLength={100}
        type="text"
        name="quantity"
        onChange={(e) => inputHandler(e, index)}
        className="w-[50%] border p-[5px]"
        placeholder="Quantity"
      />
      <button onClick={() => removeStockInput(index)}>
        <Image className="w-5" src={cross} alt="remove" />
      </button>
    </div>
  ))}
  <div className="flex flex-col items-center text-[12px]">
    <p>Stock</p>
    <Image className="w-5" src={plus} alt="image" onClick={addStockInput} />
  </div>
</div>
    
              </div>
             
              <div className="flex gap-6">
                <div>
                  <p className="text-[14px] 2xl:text-[18px]">
                    Product Discription :
                  </p>
                  <div className="">
                    <textarea
                      value={productDetail.description}
                      // maxLength={100}
                      required
                      type="text"
                      name="description"
                      onChange={inputHandler}
                      className="border w-full  "
                      rows={3}
                      cols={40}
                      placeholder="Write Here"
                    />
                  </div>
                </div>
                <div className="text-[14px] 2xl:text-[18px]">
                  <p>Product Price :</p>
                  <div className="">
                    <input
                      value={productDetail.price}
                      onChange={inputHandler}
                      maxLength={100}
                      required
                      type="text"
                      name="price"
                      className="border  p-[5px]"
                    />
                  </div>
                </div>
              </div>

              {/* <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                type="submit"
              >
                Upload Product
              </button> */}
            </div>
          </div>

          <div className="bg-white  mt-4 flex items-end">
            <div className="">
              <p className="text-[14px] 2xl:text-[18px]">Product Image : </p>

              <input type="file" name="myfile" className="mt-1 " />
            </div>
            <div>
              <button
                className="text-[12px] bg-[#313A46] hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Upload
              </button>
            </div>
          </div>
          <div className="mt-4 flex pt-6 items-center justify-center md:justify-end  md:flex-nowrap gap-y-3 gap-x-3 ">
            <button
              type="button"
              className="rounded-[6px] py-2 px-4 max-w-[300px] w-full lg:w-[50%] border border-[gray] bg-white text-black hover:bg-neutral-100"
              onClick={closeDrawer}
            >
              Cancel
            </button>
            <button
              type="submit"
              // disabled={isLoading}
              className="btn_cls max-w-[300px] w-full lg:w-[50%] border text-white"
            >
              {isLoading ? "Loading.." : "Add"}
            </button>
          </div>
        </form>
      </section>

      {/* <form
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
              onChange={inputHandler}
              className="custom_inputt text-[18px]"
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
              onChange={inputHandler}
              className="custom_inputt"
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
              onChange={(e) => inputHandler(e, 0)} // Use index 0 for the first stock item
              className="custom_inputt"
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
          </div> */}
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
      {/* </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-500 rounded-md hover:text-white mt-3 px-3 py-2 "
            disabled={isLoading}
          >
            {isLoading ? "Adding Product..." : "Add Product"}
          </button>
        </div>
      </form> */}
    </>
  );
};

export default AddProduct;
