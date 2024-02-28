import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <div className="block lg:w-[50%] px-[10px] lg:px-0">
      <Image  src="/dealer/dealer_login.svg" alt="img" height={500} width={600} className="mx-auto" />
    </div>
  );
};

export default RightSection;
