"use client";

import React, { useState } from "react";
import FrontEndTechnologies from "./FrontEndTechnologies";
import BackendTechnologies from "./BackendTechnologies";
import DatabaseTechnologies from "./DatabaseTechnologies";
import CmsTechnologies from "./CmsTechnologies";
import DevOps from "./DevOps";

const Technologies = () => {
  const [tech, setTech] = useState("");
  useState(()=>{
    setTech("frontend")
  },[])

  return (
    <section className=" max-w-screen-xl mx-auto">
      <h2 className="text-center text-4xl font-semibold">
        Technology<span className="text-blue-600"> We Used</span>
      </h2>
      <menu className="flex items-center justify-center mt-6 mx-auto">
        <nav className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setTech("frontend")}
            className="btn bg-blue-500 text-white text-xl"
            href="/">
            Frontend
          </button>
          <button
            onClick={() => setTech("backend")}
            className="btn bg-blue-500 text-white text-xl"
            href="/backend">
            Backend
          </button>
          <button
            onClick={() => setTech("database")}
            className="btn bg-blue-500 text-white text-xl"
            href="/database">
            DataBase
          </button>
          <button
            onClick={() => setTech("cms")}
            className="btn bg-blue-500 text-white text-xl"
            href="/cms">
            CMS
          </button>
          <button
            onClick={() => setTech("devops")}
            className="btn bg-blue-500 text-white text-xl"
            href="/devops">
            DevOps
          </button>
        </nav>
      </menu>
      {tech ? <article>
        {tech === "frontend" && <FrontEndTechnologies />}
        {tech === "backend" && <BackendTechnologies />}
        {tech === "database" && <DatabaseTechnologies />}
        {tech === "cms" && <CmsTechnologies />}
        {tech === "devops" && <DevOps />}
      </article>: "loading"}
    </section>
  );
};

export default Technologies;
