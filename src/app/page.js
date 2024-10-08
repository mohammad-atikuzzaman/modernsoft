import { FaAngular, FaVuejs } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";


function HomePage() {
  return (
    <div className="pt-12 bg-base-200 p-4 rounded-md">
      <h2 className="text-center font-semibold text-4xl ">
        Frontend Technologies
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <RiReactjsFill className="text-blue-500 text-4xl mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">React Js</h4>
          <p className="text-[#00000078]">A library for building web apps and services with javaScript.</p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <RiNextjsFill className=" text-4xl mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">Next Js</h4>
          <p className="text-[#00000078]">A framework for building web apps and services with javaScript.</p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <FaVuejs className="text-4xl text-green-600 mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">Vue Js</h4>
          <p className="text-[#00000078]">A framework for building web apps and services with javaScript.</p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <FaAngular className="text-4xl text-red-600 mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">Angular Js</h4>
          <p className="text-[#00000078]">A framework for building web apps and services with javaScript.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
