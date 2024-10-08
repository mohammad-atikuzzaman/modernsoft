import { FaLaravel, FaNodeJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";

function Backend() {
  return (
    <div className="mt-12 bg-base-200 p-4 rounded-md">
      <h2 className="text-center font-semibold text-4xl ">
        Backend Technologies
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <AiOutlineDotNet className="text-blue-500 text-4xl mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">ASP.NET CORE</h4>
          <p className="text-[#00000078]">
            A framework for building web apps and services with .NET and C#.
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <FaNodeJs className=" text-4xl mx-auto text-green-600" />
          <h4 className="font-semibold  mt-4 mb-4">Node Js</h4>
          <p className="text-[#00000078]">
            Node.js is a cross-platform, open-source JavaScript runtime
            environment
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <FaLaravel className="text-4xl text-red-600 mx-auto" />
          <h4 className="font-semibold mb-4 mt-4">Laravel</h4>
          <p className="text-[#00000078]">The PHP Frameworkfor Web Artisans</p>
        </div>
      </div>
    </div>
  );
}

export default Backend;
