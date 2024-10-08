import {SiShopify, SiWix, SiWordpress } from "react-icons/si";

function Cms() {
  return (
    <div className="mt-12 bg-base-200 p-4 rounded-md">
      <h2 className="text-center font-semibold text-4xl ">CMS Technologies</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiWordpress className="text-blue-500 text-4xl mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">Wordpress</h4>
          <p className="text-[#00000078]">
            A database for building web apps and services.
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiShopify className=" text-4xl mx-auto text-green-600" />
          <h4 className="font-semibold  mt-4 mb-4">Shopify</h4>
          <p className="text-[#00000078]">
            A source-available, cross-platform, document-oriented database
            program.
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiWix className="text-4xl text-blue-900 mx-auto" />
          <h4 className="font-semibold mb-4 mt-4">Wix</h4>
          <p className="text-[#00000078]">
            The worlds most advanced open source relational database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cms;
