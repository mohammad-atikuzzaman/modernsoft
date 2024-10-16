import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

function DatabaseTechnologies() {
  return (
    <div className="mt-12 bg-base-200 p-4 rounded-md">
      <h2 className="text-center font-semibold text-4xl ">Database</h2>
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiMysql className="text-blue-500 text-4xl mx-auto" />
          <h4 className="font-semibold mt-4 mb-4">My SQL</h4>
          <p className="text-[#00000078]">
            A database for building web apps and services.
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiMongodb className=" text-4xl mx-auto text-green-600" />
          <h4 className="font-semibold  mt-4 mb-4">MongoDB</h4>
          <p className="text-[#00000078]">
            A source-available, cross-platform, document-oriented database
            program.
          </p>
        </div>
        <div className="shadow-md rounded-md p-8 text-center hover:scale-105 transition-all bg-white">
          <SiPostgresql className="text-4xl text-blue-900 mx-auto" />
          <h4 className="font-semibold mb-4 mt-4">PostgreSQL</h4>
          <p className="text-[#00000078]">
            The worlds most advanced open source relational database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DatabaseTechnologies;
