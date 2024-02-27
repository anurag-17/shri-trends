import React, { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import axios from "axios";
import { Transition, Dialog } from "@headlessui/react";
import cross from "../../../../public/admin/cross.svg";
import remove from "../../../../public/admin/delete.svg";
import edit from "../../../../public/admin/edit.svg";
import AddProduct from "./addProduct";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import EditProduct from "./editProduct";

const Products = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpenO, setIsDrawerOpenO] = useState(false);
  const [getProduct, setGetProduct] = useState([]);
  const [isRefresh, setRefresh] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [dialogMatch, setDialogMatch] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [editData, setEditData] = useState([]);
  const [editProduct, setProduct] = useState();

  const [productID, setProductId] = useState();
  const adminAuthToken = useSelector((state) => state?.auth.token);

  const closeEditModal = () => {
    setIsDrawerOpenO(false);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultProduct();
  }, [isRefresh]);

  const defaultProduct = () => {
    // setLoader(true);

    const option = {
      method: "GET",
      url: "/api/product/getAllProduct",
    };
    axios
      .request(option)
      .then((response) => {
        setGetProduct(response?.data?.products);
        console.log(response?.data, "ress");
        // setEditData(response?.data);
        // setLoader(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  // ----------delete product------------
  const handleDelete = (userID) => {
    setLoading(true);
    const options = {
      method: "DELETE",
      url: `/api/product/deleteProduct/${userID}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: adminAuthToken,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Deleted successfully !");
          setLoading(false);
          refreshData();
          setDialogMatch(false); // Close the dialog after successful deletion
        } else {
          setLoading(false);
          toast.error("Failed. Something went wrong!");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
        toast.error("Failed. Something went wrong!");
      });
  };

  // =------------get single prod---------
  const openModall = async (id) => {
    // setLoader(true);
    try {
      const options = {
        method: "GET",
        url: `/api/product/getaProduct/${id}`,

        headers: {
          Accept: "application/json",
          authorization: adminAuthToken,
        },
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setEditData(response?.data);
        console.log(response?.data,"abc");
        setProductId(id);
        setIsDrawerOpenO(true);
        // setLoader(false);
      } else {
        console.error("Error: Unexpected response status");
        // setLoader(false);
      }
    } catch (error) {
      console.error(error);
      // setLoader(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mx-5">
        <div className="my-4">
          <div className="flex bg-white rounded-md items-center justify-between p-4">
            <p className="font-semibold text-[25px] 2xl:text-[30px] py-2">
              Products
            </p>
            <div>
              <button
                onClick={openDrawer}
                className="bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-lg"
              >
                Add Products
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 table-auto">
            <thead>
              <tr className="bg-white">
                <th className="border text-start px-4">S.No.</th>
                <th className="border text-start p-2">Title</th>
                <th className="border text-start p-2">Description</th>
                <th className="border text-center p-2">Image</th>
                <th className="border text-center p-2">Price</th>
                <th className="border text-center p-2">Size</th>
                <th className="border text-center p-2">Quantity</th>
                <th className="border text-center p-2">Action</th>

                {/* Uncomment the line below if you want to include the Value column */}
                {/* <th className="border text-center p-2">Value</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(getProduct) &&
                getProduct.map((product, index) => (
                  <tr key={product.id} className="bg-white">
                    <td className="border px-4  ">{index + 1}</td>
                    <td className="border p-2">{product.title}</td>
                    <td className="border p-2">{product.description}</td>
                    <td className="border p-2 text-center">
                      {/* {product.images.length > 0 && (
        <Image
          className="w-16 flex mx-auto"
          src={product.images[0].url[0]}
          alt={product.title} width={50} height={50}
        />
      )} */}
                    </td>
                    <td className="border p-2 text-center">{product.price}</td>
                    <td className="border p-2 text-center">
                      {product.stocks?.[0]?.size}
                    </td>
                    <td className="border p-2 text-center">
                      {product.stocks?.[0]?.quantity}
                    </td>

                    <td className="border w-52 px-2">
                      <div className="flex justify-between">
                        <div>
                          <button
                            onClick={() => openModall(product?._id)}
                            className="border border-blue-500 text-[18px] px-4 rounded-lg text-blue-500 hover:text-blue-700 hover:border-blue-700"
                          >
                            Edit
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setDialogMatch(true);
                              setDeleteId(product?._id);
                            }}
                            className="border border-red-400 text-[18px] px-4 rounded-lg text-red-400 hover:border-red-700 hover:text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* -----------------add product--------------- */}
      <Transition appear show={isDrawerOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-1 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/3 sm:w-full sm:max-w-[1000px] transform overflow-hidden rounded-2xl bg-white sm:py-10 p-4  sm:px-8 lg:px-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeDrawer}>
                      <Image className="w-8" src={cross} alt="close" />
                    </button>
                  </div>
                  <AddProduct
                    closeDrawer={closeDrawer}
                    refreshData={refreshData}
                  />
                  {/* <CreateCategoryForm
                    closeDrawer={closeDrawer}
                    refreshData={refreshData}
                  /> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* -----------delete------------- */}

      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white py-10 px-12 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-center lg:text-[20px] text-[16px] font-semibold leading-6 text-gray-900"
                  >
                    Are You Sure! Want to Delete?
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-[12px] sm:text-[16px] font-normal ms:leading-[30px] text-gray-500 mt-4">
                      Do you really want to delete these records? You can not
                      view this in your list anymore if you delete!
                    </p>
                  </div>

                  <div className=" mt-4 lg:mt-8">
                    <div className="flex justify-between gap-x-5">
                      <button
                        className="w-full border border-1 rounded-md border-lightBlue-400 text-lightBlue-700 hover:bg-lightBlue-200 text-sm  px-2 py-3
                              hover:border-none  border-sky-400 text-sky-700 hover:bg-sky-200 custom_btn_d "
                        onClick={() => {
                          setDialogMatch(false);
                        }}
                      >
                        No, Keep It
                      </button>

                      <button
                        className={`w-full  rounded-md 
            custom_btn_d 
                              border-red-400 text-red-700 bg-red-200  
                              hover:border-none
                        ${isLoading ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        onClick={() => handleDelete(deleteId)}
                        disabled={isLoading}
                      >
                        {isLoading ? "Deleting..." : "Yes, Delete It"}
                      </button>
                    </div>
                  </div>

                  {/* <div className="mt-3 flex justify-center gap-14">
                    <button
                      className="px-5 py-1 rounded-lg border border-[green] text-[green]"
                      onClick={() => handleDelete(deleteId)}
                    >
                      Yes
                    </button>
                    <button
                      className="px-5 py-1 rounded-lg border border-[red] text-[red]"
                      onClick={() => {
                        setDialogMatch(false);
                      }}
                    >
                      No
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* -------------edit product------------- */}
      <Transition appear show={isDrawerOpenO} as={Fragment}>
        <Dialog as="div" className="z-10 fixed" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-[540px] xl:max-w-[700px] 2xl:max-w-[900px] transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-end lg:text-[20px] text-[16px] font-semibold leading-6 text-gray-900"
                  >
                    {" "}
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className=" text-gray-400  shadow-2xl text-sm   top-2  inline-flex items-center justify-center "
                    >
                      <Image
                        src={cross}
                        className="w-7 md:w-7 lg:w-8 xl:w-9 2xl:w-14"
                      />
                      <span className="sr-only bg-black">Close menu</span>
                    </button>
                  </Dialog.Title>
                  <EditProduct
                   
                    closeEditModal={closeEditModal}
                    refreshData={refreshData}
                    editData={editData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Products;
