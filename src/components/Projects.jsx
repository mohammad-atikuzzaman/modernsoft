import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="mt-24">
      <div className="text-center mb-12 space-y-6">
        <h4 className="font-semibold text-gray-500">Our Projects</h4>
        <h2 className="text-4xl font-semibold">
          <span className="text-blue-600">09+ Unique Homepages</span> for Multiple Purposes
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Project img={"/icons/uiux.png"} title={"Project"} />
        <Project img={"/icons/uiux.png"} title={"Project"} />
        <Project img={"/icons/uiux.png"} title={"Project"} />
        <Project img={"/icons/uiux.png"} title={"Project"} />
        <Project img={"/icons/uiux.png"} title={"Project"} />
      </div>
    </section>
  );
};

export default Projects;
