"use client";
import React, { useState } from "react";

const UserForm = () => {
  // common variable

  const initialValues = { name: "", email: "", interested: "" };

  // react hooks

  const [formValues, setFormValues] = useState(initialValues);

  // submit function

  const handleSubmit = () => {};

  // HandleChange function

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="flex justify-center items-center p-5  m-5">
      <form
        onSubmit={handleSubmit()}
        className="flex  flex-col  justify-center w-1/5 bg-white shadow-xl p-2 "
      >
        <label>Name</label>
        <input
          type="text"
          value={formValues.name}
          placeholder="name"
          className="outline-none p-2  rounded-md bg-gray-50 border border-gray-100"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          value={formValues.email}
          placeholder="email"
          className="outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          onChange={handleChange}
        />
        <label>Interested</label>
        <input
          placeholder="Your Wish"
          value={formValues.interested}
          type="text"
          className="outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-1 bg-green-400 w-1/2  mx-auto my-5 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
