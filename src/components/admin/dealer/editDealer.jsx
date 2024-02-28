import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditDealer = ({ closeEditModal, refreshData, editData }) => {
  const adminAuthToken = useSelector((state) => state?.auth.token);
  const [isLoading, setIsLoading] = useState(false);
 

  const dealerId = editData._id;
  const [userDetail, setProductDetail] = useState(editData);
  console.log(editData,"aaa");

  const inputHandler = (e) => {
    setProductDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/api/auth/edit-user/${dealerId}`,
        userDetail,
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
          Edit User Details
        </h2>
      </div>
      <div>
        <form
          onSubmit={handleEditUser}
          className=" bg-white border  rounded-lg 2xl:p-2 xl:p-2  lg:p-1 md:p-2 p-1  mx-auto"
        >
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">First Name</label>
              <input
                defaultValue={
                  editData?.firstname ? editData?.firstname : userDetail?.firstname
                }
                onChange={inputHandler}
                type="text"
                name="firstname"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">Last Name</label>
              <input
                defaultValue={
                  editData?.lastname ? editData?.lastname : userDetail?.lastname
                }
                onChange={inputHandler}
                type="text"
                name="lastname"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
          </div>

          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">User Name</label>
              <input
                defaultValue={
                  editData?.userName ? editData?.userName : userDetail?.userName
                }
                onChange={inputHandler}
                type="text"
                name="userName"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">Email</label>
              <input
                defaultValue={
                  editData?.email ? editData?.email : userDetail?.email
                } 
                onChange={inputHandler}
                type="text"
                name="email"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">Mobile No.</label>
              <input
                defaultValue={
                  editData?.mobile ? editData?.mobile : userDetail?.mobile
                }
                onChange={inputHandler}
                type="text"
                name="mobile"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">Alt. no.</label>
              <input
                defaultValue={
                  editData?.altNumber ? editData?.altNumber : userDetail?.altNumber
                }
                onChange={inputHandler}
                type="text"
                name="altNumber"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">Address</label>
              <input
                defaultValue={
                  editData?.address ? editData?.address : userDetail?.address
                }
                onChange={inputHandler}
                type="text"
                name="mobile"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
            <div className="mt-2">
              <label className="custom_input_label">GST no.</label>
              <input
                defaultValue={
                  editData?.gstNo ? editData?.gstNo : userDetail?.gstNo
                }
                onChange={inputHandler}
                type="text"
                name="gstNo"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-2">
              <label className="custom_input_label">Company</label>
              <input
                defaultValue={
                  editData?.companyName ? editData?.companyName : userDetail?.companyName
                }
                onChange={inputHandler}
                type="text"
                name="mobile"
                className="custom_inputt capitalize"
                required
                maxLength={84}
              />
            </div>
         
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

export default EditDealer;
