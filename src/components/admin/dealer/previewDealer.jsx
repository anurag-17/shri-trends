import React from 'react'

const PreviewDealer = ({editData}) => {
    console.log(editData,"Prew");
  return (
  <>
    <div className="mt-3 py-3 flex flex-col items-center">
    <div  className="space-y-1 sm:space-y-3 text-[12px] sm:text-[18px]">

    {/* <p>FirstName: <span>{editData.firstname}</span></p>
        <p>LastName: <span>{editData.lastname}</span></p> */}

        <div className="flex  ">
              <label className="w-[45%] sm:w-full mr-2">First name : </label>
              <div className="w-[50%] sm:w-[60%]">{editData.firstname}</div>
            </div>
           
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Last Name : </label>
              <div className="w-[50%] sm:w-[60%]">{editData.lastname}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">User Name : </label>
              <div className="w-[50%] sm:w-[60%]">{editData?.userName}</div>
            </div>
            <div className="flex justify-start w-[124%]">
              <label className="w-[45%] sm:w-full mr-2">Email : </label>
              <div className="w-[50%] sm:w-[60%] ">{editData?.email}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Mobile : </label>
              <div className="w-[50%] sm:w-[60%]">{editData?.mobile}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Alt No. : </label>
              <div className="w-[50%] sm:w-[60%]">{editData?.altNumber}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Role : </label>
              <div className="w-[50%] sm:w-[60%]">{editData.role}</div>
            </div>
            <div className="flex justify-start w-[151%]">
              <label className="w-[45%] sm:w-full mr-2">Address : </label>
              <div className="w-[50%] sm:w-[150%]">{editData?.address}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">GST No. : </label>
              <div className="w-[50%] sm:w-[60%]">{editData?.gstNo}</div>
            </div>
            <div className="flex justify-start">
              <label className="w-[45%] sm:w-full mr-2">Company Name : </label>
              <div className="w-[50%] sm:w-[60%]">{editData?.companyName}</div>
            </div>
       
        </div>
    </div>
  </>
  )
}

export default PreviewDealer