import React from 'react'

const PreviewDealer = ({editData}) => {
    console.log(editData,"Prew");
  return (
  <>
    <div>
    <p>FirstName: <span>{editData.firstname}</span></p>
        <p>LastName: <span>{editData.lastname}</span></p>
    
    </div>
  </>
  )
}

export default PreviewDealer