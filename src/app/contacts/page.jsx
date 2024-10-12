"use client";
import React from "react";
import Swal from "sweetalert2";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const businessName = form.businessName.value;
    const email = form.email.value;
    const number = form.phone.value;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message sent successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section
      className="my-8 p-24 rounded-md max-w-screen-xl mx-auto"
      id="contacts">
      <h2 className="font-semibold text-4xl text-center">
        Get In <span className="text-blue-600">Touch</span>
      </h2>
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full text-center bg-transparent outline-violet-950 border border-blue-950 p-2 rounded-md"
            type="text"
            name="businessName"
            id="businessName"
            placeholder="Business Name"
          />
          <input
            className="w-full text-center bg-transparent outline-violet-950 border border-blue-950 p-2 rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="w-full text-center bg-transparent outline-violet-950 border border-blue-950 p-2 rounded-md"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full text-center btn btn-info bg-blue-600 text-white text-xl"
          />
        </form>
      </div>
    </section>
  );
};

export default page;
