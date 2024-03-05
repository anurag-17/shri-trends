import React, { useState } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import plus from "../../../../public/admin/plus.svg";
import Image from "next/image";
import cross from "../../../../public/admin/cross.svg";

const AddProduct = ({ closeDrawer, refreshData }) => {
  const adminAuthToken = useSelector((state) => state?.auth.token);
  const [isLoading, setLoading] = useState(false);

  // const [imageUpload, setImageUpload] = useState(false);
  // const [imageDisable, setImageDisable] = useState(false);
  // const [imageMessage, setImageMessage] = useState("");
  const [productDetail, setProductDetail] = useState({
    title: "",
    description: "",
    stocks: [],
    price: "",
    image: [],
  });

  const [stock, setStock] = useState([]);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  console.log(productDetail);
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

  const handleTitleChange = (e) => {
    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      title: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      description: e.target.value,
    }));
  };

  const handlePriceChange = (e) => {
    setProductDetail((prevProductDetail) => ({
      ...prevProductDetail,
      price: e.target.value,
    }));
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
                      onChange={handleTitleChange}
                      className="border w-full p-[5px]"
                    />
                  </div>
                </div>

               
              </div>

              <div className="flex items-center gap-6">
                <div className="w-[60%]">
                  <label htmlFor="sizeInput">Size:</label>
                  <select
                    id="sizeInput"
                    value={size}
                    onChange={handleSizeChange}
                    className="w-[100%] border p-[5px] bg-white "
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

                <div>
                  <label htmlFor="quantityInput">Quantity:</label>
                  <input
                    type="number"
                    id="quantityInput"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-[100%] border p-[5px]"
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
                <div className="flex" key={index}>
                  <p>
                    Size: {item.size}, Quantity: {item.quantity}
                  </p>
                  <button onClick={() => handleRemoveItem(index)} type="button">
                    <Image className="w-6 ml-4" src={cross} alt="Remove" />
                  </button>
                </div>
              ))}

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
                      onChange={handleDescriptionChange}
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
                      onChange={handlePriceChange}
                     
                      required
                      type="number"
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
    </>
  );
};

export default AddProduct;
