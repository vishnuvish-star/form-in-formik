"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      interested: "",
    },
  });

  console.log("formikvalues:", formik);
  return (
    <div className="flex justify-center items-center p-5  m-5">
      <form className="flex  flex-col  justify-center w-1/5 bg-white shadow-xl p-2 ">
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          className="outline-none p-2  rounded-md bg-gray-50 border border-gray-100"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          className="outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label>Interested</label>
        <input
          placeholder="Your Wish"
          type="text"
          className="outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          value={formik.values.interested}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
