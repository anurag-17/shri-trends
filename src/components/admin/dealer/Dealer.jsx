import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import AddNewPage from "./modals/AddPages";
import EditPage from "./modals/EditPage";
import DeletePage from "./modals/DeletePages";
import VideoPopup from "./modals/VideoPopup";
import Pagination from "@/config/Pagination";
import CloseIcon from "@/components/svg/CloseIcon";
import Loader from "@/config/Loader";
import cross from "../../../../public/admin/cross.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import EditDealer from "./editDealer";
import PreviewDealer from "./previewDealer";

export const headItems = [
  "S. No.",
  "Name",
  "Email",
  "Mobile number",
  "Company name",
  "GST no.",
  "Address",
  "Action",
];

const Dealer = () => {

    let [allData, setAllData] = useState([])
 
    let [isLoader, setLoader] = useState(false)
    const [isDrawerOpenO, setIsDrawerOpenO] = useState(false);
    const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
    const [isRefresh, setRefresh] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [dialogMatch, setDialogMatch] = useState(false);
    const [dialogPreview,setDialogPreview]=useState(false)
    const [deleteId, setDeleteId] = useState("");
    const [editData, setEditData] = useState([]);
    const visiblePageCount = 10;
    const adminAuthToken = useSelector((state) => state.auth?.token);
  
    useEffect(() => {
      getAllData(1);
    }, [isRefresh]);
  
    const getAllData = (pageNo) => {
      setLoader(true)
      const options = {
        method: "GET",
        url: `/api/auth/all-users?page=${pageNo}&limit=${visiblePageCount}`,
        headers: {
          Authorization: adminAuthToken,
          'Content-Type': 'application/json',
        },
      };
      axios
        .request(options)
        .then((response) => {
            console.log(response)
          if (response.status === 200) {
            setLoader(false)
            setAllData(response?.data);
          }
          else {
            setLoader(false)
            return
          }
        })
        .catch((error) => {
          setLoader(false)
          console.error("Error:", error);
        });
    };
  
    // const handleDelete = (id) => {
    //   setUpdateId(id)
    //   setOpenDelete(true)
    // }
  
    
  
    const refreshdata = () => {
      setRefresh(!isRefresh)
    }

    const closePreviewModal=()=>{
      setIsDrawerOpen1(false);
    }
    const closeEditModal = () => {
      setIsDrawerOpenO(false);
    };
  
  
    const handleSearchInput = (e) => {
      setSearchText(e.target.value);
      searchDataFunc(e.target.value);
    };
  
    const handleSearch = () => {
      if (searchText) {
        searchDataFunc(searchText.trim());
      }
    };
  
    const handleKeyDown = (e) => {
      console.log("Pressed key:", e.key);
      if (e.key === "Backspace") {
        // e.preventDefault(); // Prevent the default action
        searchDataFunc(searchText);
      }
    };
  
    const handleClearSearch = () => {
      refreshdata();
      setSearchText("");
    };
  
    const searchDataFunc = (search_cate) => {
      const options = {
        method: "GET",
        url: `/api/auth/viewUser?search=${search_cate}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response?.data);
          if (response.status === 200) {
            setAllData(response?.data);
            setDialogMatch(false);
          } else {
            return;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

     // =------------get single user---------
     const getUserDetailsById = async (id) => {
      try {
        const options = {
          method: "GET",
          url: `/api/auth/getUserById/${id}`,
          headers: {
            Accept: "application/json",
            authorization: adminAuthToken,
          },
        };
        const response = await axios.request(options);
        if (response.status === 200) {
          return response.data.user;
        } else {
          console.error("Error: Unexpected response status");
          return null;
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    };
  const openModall = async (id) => {
    try {
      const user = await getUserDetailsById(id);
      if (user) {
        setEditData(user);
        setIsDrawerOpenO(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const previewUser = async (id) => {
    try {
      const user = await getUserDetailsById(id);
      if (user) {
        setEditData(user);
        setDialogPreview(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

    // ---------delete api-------------
    const handleDelete = (userID) => {
      setLoader(true);
      const options = {
        method: "DELETE",
        url: `/api/auth/deleteaUser/${userID}`,
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
            setLoader(false);
            refreshdata();
            setDialogMatch(false); 
          } else {
            setLoader(false);
            toast.error("Failed. Something went wrong!");
          }
        })
        .catch(function (error) {
          setLoader(false);
          console.error(error);
          toast.error("Failed. Something went wrong!");
        });
    };
  
  
    return (
      <>
  <ToastContainer/>
        {
          isLoader && <Loader />
        }
        <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
          <div className=" mx-auto">
            <div className="rounded-[10px] bg-white py-[15px] flex justify-between items-center px-[20px]">
              <p className=" text-[22px] font-semibold">User list</p>
              <div className="flex gap-x-7 lg:gap-x-5 md:flex-auto flex-wrap gap-y-3  items-center justify-center md:justify-end">
                <div className="border border-[gray] rounded-[5px] bg-[#302f2f82]] flex justify-center items-center h-[32px] pl-[10px] md:w-auto w-full">
                  <input
                    type="text"
                    className="focus-visible:outline-none border-none w-full rounded-[5px] font-normal text-[15px] text-[#6a6969] placeholder:text-[11px]"
                    value={searchText}
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Search by name, contact, email."
                  />
                  {searchText !== "" ? (
                    <button
                      className="px-1 rounded text-[12px] text-[gray] border border-[#6a696917] hover:text-black mr-1"
                      onClick={handleClearSearch}
                    >
                     <CloseIcon />
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="px-6 rounded text-[12px] text-[gray] h-[32px] bg-[#6a696917] hover:text-black"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-white py-[30px] px-[20px] flex justify-between items-center mt-[20px] p-6 overflow-x-scroll">
              <table className="w-full min-w-[640px] table-auto mt-[20px] ">
                <thead className="">
                  <tr className=" ">
                    {headItems.map((items, inx) => (
                      <th className="py-3 px-5 text-left bg-white" key={inx}>
                        <p className="block text-[13px] font-medium uppercase text-[#72727b] whitespace-nowrap"> {items}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
  
                <tbody>
                  {  Array.isArray(allData?.users) && 
                    allData?.users?.length > 0 &&
                    allData?.users?.map((items, index) => (
                      <tr key={index}>
                        <td className="text-[14px] font-[400] py-3 px-5">{index + 1}</td>
                        <td className="text-[14px] font-[400] py-3 px-5 capitalize">{items?.firstname}</td>
                        <td className="text-[14px] font-[400] py-3 px-5">{items?.email}</td>
                        <td className="text-[14px] font-[400] py-3 px-5">{items?.mobile} </td>
                        <td className="text-[14px] font-[400] py-3 px-5">{items?.companyName} </td>
                        <td className="text-[14px] font-[400] py-3 px-5">{items?.gstNo} </td>
                        <td className="text-[14px] font-[400] py-3 px-5">{items?.address} </td>
                        <td className="text-[14px] font-[400] py-3 px-5">
                          <div className="flex flex-col md:flex-row items-center gap-x-5">
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-sky-600 hover:bg-[#efb3b38a]"
                            onClick={() => previewUser(items?._id)}
                          >
                            Preview
                          </button>
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-sky-600 hover:bg-[#efb3b38a]"
                            onClick={() => openModall(items?._id)}
                          >
                            Edit
                          </button>
                            <button className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                              onClick={() => {setDeleteId(items?._id);
                                setDialogMatch(true)}}
                            >Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
  
  
            </div>
  
  
            {
              Array.isArray(allData?.users) && allData?.users?.length === 0  &&
  
              <div className="py-4 px-4 w-full flex flex-col items-center justify-center border border-[#f3f3f3] bg-white rounded-[20px] mt-[10px]">
                <p className="text-[18px] fontsemibold">No data</p>
              </div>
            }
          </div>
  
          {allData?.pagination?.totalPages > 1 && (
            <Pagination
              currentpage={allData?.pagination?.currentPage}
              totalCount={allData?.pagination?.totalPages}
              visiblePageCount={visiblePageCount}
              getAllData={getAllData}
            />
          )}
  
        </section>

        {/* ---------Edit Popup--------------- */}
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
                <Dialog.Panel className=" w-full max-w-[540px] xl:max-w-[700px] 2xl:max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
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
                  <EditDealer
                   
                    closeEditModal={closeEditModal}
                    refreshData={refreshdata}
                    editData={editData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

  
        {/*---------- Delete popup---------- */}
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
                        ${isLoader ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        onClick={() => handleDelete(deleteId)}
                        disabled={isLoader}
                      >
                        {isLoader ? "Deleting..." : "Yes, Delete It"}
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
   {/* ---------Prewiew Popup--------------- */}
   <Transition appear show={dialogPreview} as={Fragment}>
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
                <Dialog.Panel className=" w-full max-w-[1300px] transform overflow-hidden rounded-2xl bg-white py-5 px-12 text-left align-middle shadow-2xl transition-all">
                  <div className="flex justify-end"> <button
                      type="button"
                      onClick={()=>setDialogPreview(false)}
                      className=" text-gray-400  shadow-2xl text-sm   top-2  inline-flex items-center justify-center "
                    >
                      <Image
                        src={cross}
                        className="w-7 md:w-7 lg:w-8 xl:w-9 2xl:w-12"
                      />
                      <span className="sr-only bg-black">Close menu</span>
                    </button>
                    </div>
                  <Dialog.Title
                    as="h3"
                    className="flex justify-center lg:text-[30px] text-[20px] font-semibold leading-6 text-gray-900"
                  >
                    User Details
                  </Dialog.Title>
                  <PreviewDealer
                     editData={editData}
                  />

                  {/* <div className="mt-2">
                    <p className="text-[12px] sm:text-[16px] font-normal ms:leading-[30px] text-gray-500 mt-4">
                      Do you really want to delete these records? You can not
                      view this in your list anymore if you delete!
                    </p>
                  </div> */}
{/* 
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
                        ${isLoader ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        onClick={() => handleDelete(deleteId)}
                        disabled={isLoader}
                      >
                        {isLoader ? "Deleting..." : "Yes, Delete It"}
                      </button>
                    </div>
                  </div> */}

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
      
      </>
    )
  };
  
  export default Dealer;