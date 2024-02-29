import React from 'react'

const PreviewDealer = ({editData}) => {
    console.log(editData,"Prew");
  return (
  <>
    <div className="mt-3 py-3 ">
    <div  className="space-y-1 sm:space-y-3 text-[12px] sm:text-[18px] w-[50%] mx-auto">

    {/* <p>FirstName: <span>{editData.firstname}</span></p>
        <p>LastName: <span>{editData.lastname}</span></p> */}

        <div className="flex  ">
              <label className="w-[45%] sm:w-full mr-2">Full Name : </label>
              <div className="w-[50%] sm:w-[100%]">{editData.firstname ? editData.firstname : "-" } {editData.lastname ? editData.lastname : "-" }</div>
            </div>
           
            
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">User Name : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.userName ? editData?.userName : "-" }</div>
            </div>
            <div className="flex justify-start w-[100%]">
              <label className="w-[45%] sm:w-full mr-2">Email : </label>
              <div className="w-[50%] sm:w-[100%] ">{editData?.email ? editData?.email : "-"}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Mobile : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.mobile ? editData?.mobile : "-"}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Alt No. : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.altNumber ? editData?.altNumber : "-"}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Role : </label>
              <div className="w-[50%] sm:w-[100%]">{editData.role ? editData.role : "-"}</div>
            </div>
            <div className="flex justify-start ">
              <label className="w-[45%] sm:w-full mr-2">Address : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.address ? editData?.address : "-"}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">GST No. : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.gstNo ? editData?.gstNo : "-"}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Company Name : </label>
              <div className="w-[50%] sm:w-[100%]">{editData?.companyName ? editData?.companyName : "-" }</div>
            </div>
       
        </div>
    </div>
  </>
  )
}

export default PreviewDealer