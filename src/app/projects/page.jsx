import Project from '@/components/Project';
import React from 'react';

const page = () => {
  return (
    <section className="my-8 py-12 px-4 rounded-md">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <h4 className="font-semibold text-gray-600">Our Projects</h4>
          <h2 className="text-4xl font-semibold">
            <span className="text-blue-600">09+ Unique Homepages</span> for
            Multiple Purposes
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Project
            img={"/image/projectimg.png"}
            title={"Googel"}
            url={"https://www.googel.com"}
          />
          <Project
            img={"/image/projectimg.png"}
            title={"LinkedIn"}
            url={"https://www.linkedin.com"}
          />
          <Project
            img={"/image/projectimg.png"}
            title={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <Project
            img={"/image/projectimg.png"}
            title={"Twitter"}
            url={"https://www.twitter.com"}
          />
          <Project
            img={"/image/projectimg.png"}
            title={"Github"}
            url={"https://www.github.com"}
          />
          <Project
            img={"/image/projectimg.png"}
            title={"Project"}
            url={"https://www.googel.com"}
          />
        </div>
      </div>
    </section>
  );
};

export default page;