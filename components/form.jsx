"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import ShowData from "./showData";
const UserForm = () => {
  // onSubmit function and add data in firestore
  const onSubmit = async (values, action) => {
    console.log(values);
    // reset form (reset input fields)
    action.resetForm();
    try {
      const docRef = await addDoc(collection(db, "form"), {
        values,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // alert("Register Successfully");
  };

  // get data from firestore
  const userCollectionRef = collection(db, "form");
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [user]);
  console.log(user);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      interested: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className=" p-5  m-5 flex  flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex  flex-col  justify-center w-1/5 bg-white shadow-xl p-2 "
      >
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="name"
          className={`${
            errors.name && touched.name
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <p className="text-[10px] text-red-400">{errors.name}</p>
        )}
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          className={`${
            errors.email && touched.email
              ? "  p-2 rounded-md border border-red-300"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-[10px] text-red-400">{errors.email}</p>
        )}
        <label>Age</label>
        <input
          name="age"
          type="number"
          placeholder="age"
          className={`${
            errors.age && touched.age
              ? "  p-2 rounded-md border border-red-300"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age && (
          <p className="text-[10px] text-red-400">{errors.age}</p>
        )}
        <label>Interested</label>
        <input
          name="interested"
          placeholder="wish"
          type="text"
          className={`${
            errors.interested && touched.interested
              ? "  p-2 rounded-md border border-red-300"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
          value={values.interested}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.interested && touched.interested && (
          <p className="text-[10px] text-red-400">{errors.interested}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="p-1 bg-green-400 w-1/2  mx-auto my-5 rounded-md"
        >
          Submit
        </button>
      </form>
      <div className="flex my-7 flex-row gap-6">
        {user.map((items) => (
          <>
            <div
              key={items.id}
              className=" bg-gray-400 p-3 m-2 rounded-md  w-1/2 "
            >
              <ShowData items={items} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
