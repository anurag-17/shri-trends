import React from 'react';
import Image from "next/image";

import icon5 from "../../../../public/admin/sari1.jpg";
import icon6 from "../../../../public/admin/suit.jpg";
import icon7 from "../../../../public/admin/suits.jpg";


const Products = () => {
    const content = [
        {
          id: 1,
          imageSrc: icon5,
          title: "VFC 901 CREAM BANARSI SUIT",
          order: 80,
          size:"sm, md, xl, 2xl",
          value: 85905,
        },
        {
          id: 2,
          imageSrc: icon6,
          title: "VFC 654 BANARSI SARI",
          order: 68,
          size:"sm, md, xl, 2xl",
          value: 66640,
        },
        {
          id: 3,
          imageSrc: icon7,
          title: "PPC 838 BROWN CHANDERI EMB SUIT",
          order: 36,
          size:"sm, md, xl, 2xl",
          value: 50220,
        },
        {
          id: 4,
          imageSrc: icon5,
          title: "PPC 271 FLORAL KALAMKAR SUIT",
          order: 34,
          size:"sm, md, xl, 2xl",
          value: 31450,
        },
        {
          id: 5,
          imageSrc: icon6,
          title: "PPC 918 RUST ROSE EMB SILK DUP",
          order: 33,
          size:"sm, md, xl, 2xl",
          value: 31350,
        },
        {
          id: 6,
          imageSrc: icon7,
          title: "PPC 151/169 SCHFFLI EMB SUIT",
          order: 25,
          size:"sm, md, xl, 2xl",
          value: 29975,
        },
      ];
  return (
    <>
      <div className="w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1500px] mx-auto">
      <div className='my-4'>
        <div className="flex bg-white rounded-md items-center justify-between p-4">
          <p className="font-semibold text-[25px] 2xl:text-[30px] py-2">
            Products
          </p>
          <div>
            <button
              // onClick={openDrawer}
              className="bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-lg">Add Products</button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className="border text-start px-4">ID</th>
              <th className="border text-start p-2">Title</th>
              <th className="border text-center p-2">Image</th>
              <th className="border text-center p-2">Order</th>
              <th className="border text-center p-2">Size</th>
              {/* Uncomment the line below if you want to include the Value column */}
              {/* <th className="border text-center p-2">Value</th> */}
            </tr>
          </thead>
          <tbody>
            {content.map((product) => (
              <tr key={product.id} className="bg-white">
                <td className="border px-4  ">{product.id}</td>
                <td className="border p-2">{product.title}</td>
                <td className="border p-2 text-center">
                  <Image className='w-16 flex mx-auto' src={product.imageSrc} alt={product.title} />
                </td>
                <td className="border p-2 text-center">{product.order}</td>
                <td className="border p-2 text-center">{product.size}</td>
                {/* Uncomment the line below if you want to include the Value column */}
                {/* <td className="border p-2 text-center">{`$${product.value}`}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Products