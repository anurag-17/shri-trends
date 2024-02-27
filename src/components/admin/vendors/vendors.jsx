import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import remove from '../../../../public/admin/delete.svg';
import edit from '../../../../public/admin/edit.svg';
import { Transition,Dialog } from "@headlessui/react";
import cross from '../../../../public/admin/cross.svg';
import AddVendors from "./addVendors";
import EditVendors from "./editVendors";

const Vendors = () => {
    const [dialogMatch, setDialogMatch] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isRefresh, setRefresh] = useState(false);
    const [isDrawerOpenO, setIsDrawerOpenO] = useState(false);
    const [cateEdit, setCateEdit] = useState("");
    const [editData, setEditData] = useState([]);
    const [isLoader, setLoader] = useState(false);
    const [isLoading, setLoading] = useState(false);

  const vendorList = [
    {
      id: 1,
      name: "Amint Singh",
      order: 333,
    },
    {
      id: 2,
      name: "Mahesh Kumar",
      order: 456,
    },
    {
      id: 3,
      name: "Rajesh Yadav",
      order: 943,
    },
    {
      id: 1,
      name: "Krishna Raj",
      order: 23,
    },
    {
      id: 1,
      name: "Ram Bajaj",
      order: 383,
    },
    {
      id: 1,
      name: "Hari Kumar",
      order: 56,
    },
    {
      id: 1,
      name: "Vintage Cloths",
      order: 321,
    },
    {
      id: 1,
      name: "Beauty Cloths",
      order: 789,
    },
  ];
 
  const closeDrawerO = () => {
    setIsDrawerOpenO(false);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  const openDrawerO = async (_id) => {
    setIsDrawerOpenO(true);
    // setLoader(true);
    // setCateEdit(_id);
    // try {
    //   const options = {
    //     method: "POST",
    //     url: "/api/category/getCategory",
    //     data: {
    //       id: _id,
    //     },
    //   };
    //   const response = await axios.request(options);
    //   if (response.status === 200) {
    //     setEditData(response?.data);
    //     setIsDrawerOpenO(true);
    //     setLoader(false);
    //   } else {
    //     console.error("Error: Unexpected response status");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <div className="w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] mx-auto">
        <div className="mt-4">
          <div className="flex bg-white rounded-md items-center justify-between p-4">
            <p className="font-semibold text-[25px] 2xl:text-[30px] py-2">
              Vendor
            </p>
            <div>
              <button onClick={openDrawer} className="bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-lg">Add Vendor</button>
            </div>
          </div>

          <div className="bg-white p-10 mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-white">
                    <th className="border text-start px-1">ID</th>
                    <th className="border text-start p-2">Name</th>
                    
                    <th className="border text-center p-2 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendorList.map((item) => (
                    <tr key={item.id} className="bg-gray-100">
                      <td className="border p-2">{item.id}</td>
                      <td className="border p-2">{item.name}</td>
                     
                      <td className="border p-2 text-center flex justify-center gap-x-4">
                     <Image  onClick={() =>  {setDialogMatch(true);
                            //   setDeleteId(items?.userId)
                              }}  className="w-7 cursor-pointer" src={remove} alt="delete"/>
                     <Image  onClick={() => openDrawerO(item?._id)}
                      className="w-7  cursor-pointer" src={edit} alt="edit"/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      {/* --------vendor delete------------ */}
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog as="div" className="relative z-10"  onClose={() => {}}>
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
          Do you really want to delete these records? You can not view this in
          your list anymore if you delete!
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

      {/* -----------------add vendor--------------- */}
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
                <Dialog.Panel className="w-2/3 sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white sm:py-10 p-4  sm:px-8 lg:px-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeDrawer}>
                    <Image className="w-8"  src={cross} alt="close"/>
                    </button>
                  </div>
                  <AddVendors
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

      {/* ----------edit Vendor name------------ */}
      <Transition appear show={isDrawerOpenO} as={Fragment}>
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
                <Dialog.Panel className="w-2/3 sm:w-full sm:max-w-[500px]  transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-10 py-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button 
                    onClick={closeDrawerO}
                    >
                    <Image className="w-8"  src={cross} alt="close"/>
                    </button>
                  </div>
                  <EditVendors
                       cateEdit={cateEdit}
                    closeDrawer={closeDrawerO}
                    refreshData={refreshData}
                    editData={editData}
                  />
                  {/* <EditCate
                    cateEdit={cateEdit}
                    closeDrawer={closeDrawerO}
                    refreshData={refreshData}
                    editData={editData}
                  /> */}
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Vendors;
