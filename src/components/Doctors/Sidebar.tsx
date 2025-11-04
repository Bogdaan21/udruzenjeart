"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="doctor-details-item doctor-details-left">
        <Image src="/images/congress-1.jpg" alt="Doctor" width={364} height={393} />
      </div>
    </>
  );
};

export default Sidebar;
