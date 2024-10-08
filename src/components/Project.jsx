import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "../styles/index.css"

const Project = ({img, title}) => {
  return (
    <div className="mockup-window bg-base-300 parent hover:-translate-y-4 border transition-all duration-700">
      <div className="p-4 relative ">
        <Image
          src={img}
          alt="modernsoft"
          height={500}
          width={500}
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full bg-blue-500 transition-all bg-opacity-80 h-full child justify-center items-center ">
          <Link href="dkjfakldsj.com" className="btn">
            Demo
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-semibold p-6 text-gray-600">{title}</h2>
    </div>
  );
};

export default Project;