import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styles/index.css";

const Project = ({ img, title, url }) => {
  return (
    <div className="mockup-window rounded-md shadow-lg bg-white parent hover:-translate-y-4 border transition-all duration-700">
      <div className="p-4 relative bg-gray-200">
        <Image
          src={img}
          alt="modernsoft"
          height={700}
          width={700}
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full bg-blue-500 transition-all bg-opacity-80 h-full child justify-center items-center ">
          <Link href={url} className="btn">
            Demo
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-semibold p-6 text-gray-800">{title}</h2>
    </div>
  );
};

export default Project;
