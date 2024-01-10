"use client";
import React, { useEffect,useState } from "react";
import {  useAppDispatch, useAppSelector } from "@/redux/store";
 import { useRouter } from "next/navigation";
import { updateUser } from "@/redux/slices/userCrudSlice";

function Update({ params }: { params: { users: number } }) {
  
  const allUsers = useAppSelector((store) => store.users.users);
  const userId = params.users;
  const router = useRouter();
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (userId) {
      const userDtls = allUsers?.find((item) => item?.id === userId);
      setUserDetails(userDtls);
    }
  }, []);
  
  const [userDetails, setUserDetails] = useState({});
   

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        dispatch(updateUser(userDetails));
     router.push("/read", { scroll: false });
  };

  return (
    <form className="w-[50%] mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          onChange={onchangeHandler}
          type="text"
          id="name"
          name="name"
          value={userDetails?.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          onChange={onchangeHandler}
          type="email"
          id="email"
          name="email"
          value={userDetails?.email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Age
        </label>
        <input
          onChange={onchangeHandler}
          type="number"
          id="age"
          name="age"
          value={userDetails?.age}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Your Age"
          required
        />
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Gender
      </label>
      <div className="flex gap-5 my-3">
        <div className="flex items-center mb-4">
          <input
            onChange={onchangeHandler}
            type="radio"
            value="male"
            name="gender"
            checked={userDetails?.gender === "male" ? true : false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="male"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div className="flex justify-start">
          <input
            onChange={onchangeHandler}
            type="radio"
            value="female"
            name="gender"
            checked={userDetails?.gender === "female" ? true : false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="female"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
}

export default Update;
