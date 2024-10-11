import Image from 'next/image';
import React from 'react';

const Service = ({src, title, description}) => {
  return (
    <div className="text-center border shadow-md shadow-blue-500 border-blue-700 rounded-md  max-w-xs pt-6 hover:-translate-y-2 hover:bg-blue-400 transition-all duration-300">
      <Image
        src={src}
        alt="modernsoft"
        width={100}
        height={100}
        className="mx-auto h-24 mb-8"
      />
      <div className="bg-blue-100 px-6 pb-4 py-2">
        <h2 className="font-bold text-xl mt-6 mb-2">{title}</h2>
        <p className="font-medium text-gray-600">{description} </p>
      </div>
    </div>
  );
};

export default Service;