import Image from 'next/image';
import React from 'react';

const Glance = () => {
  return (
    <section className="mt-24">
      <h2 className="font-semibold text-4xl text-center">
        <span className="text-blue-600">We are</span> at a glance
      </h2>
      <main className="flex items-center justify-center mt-6">
        <div className="flex justify-center flex-wrap gap-6">
          <div className="border-2 border-[#5C1AF8] rounded-md text-center p-6">
            <Image src="/icons/users.png" alt="modernsoft" height={100} width={60} className="mx-auto" />
            <h2 className="font-semibold text-5xl">10+</h2>
            <h4 className="text-xl font-medium">Team Members</h4>
          </div>
          <div className="border-2 border-[#5C1AF8] rounded-md text-center p-6">
            <Image src="/icons/idea.png" alt="modernsoft" height={100} width={60} className="mx-auto" />
            <h2 className="font-semibold text-5xl">15+</h2>
            <h4 className="text-xl font-medium">Projects Completed</h4>
          </div>
          <div className="border-2 border-[#5C1AF8] rounded-md text-center p-6">
            <Image src="/icons/hand.png" alt="modernsoft" height={100} width={60} className="mx-auto" />
            <h2 className="font-semibold text-5xl">10+</h2>
            <h4 className="text-xl font-medium">Happy Clients</h4>
          </div>
          <div className="border-2 border-[#5C1AF8] rounded-md text-center p-6">
            <Image src="/icons/users.png" alt="modernsoft" height={100} width={60} className="mx-auto" />
            <h2 className="font-semibold text-5xl">4.9/5</h2>
            <h4 className="text-xl font-medium">Client Reviews</h4>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Glance;