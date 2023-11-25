import React from "react";

const Form = () => {
  return (
    <div className="bg-white mt-6 font-medium h-[500px] rounded-lg flex flex-col gap-4 p-6">
      <h1 className="font-medium">
        You will receive response within 24 hours of time of submit.
      </h1>

      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            type="text"
            placeholder="James"
            className="border rounded-md px-2 py-1"
          />
        </div>

        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Bond"
            className="border rounded-md px-2 py-1"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          placeholder="name@mail.com"
          className="border rounded-md px-2 py-1"
        />
      </div>

      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="border rounded-md px-2 py-1"
        />
      </div>

      <label htmlFor="checkbox">
        <input type="checkbox" className="opacity-50" />I agree to the{" "}
        <span className="text-purple-700">terms of service</span>
      </label>

      <div className="flex gap-2 flex-col">
        <button className="bg-[#EEEEF4] rounded-lg p-2">Send a Message</button>
        <button className="bg-[#EEEEF4] rounded-lg p-2">Book a Meeting</button>
      </div>
    </div>
  );
};

export default Form;
