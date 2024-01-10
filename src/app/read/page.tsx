"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteUser, readUser } from "@/redux/slices/userCrudSlice";
import { useRouter } from "next/navigation";

function Read() {
  const dispatch = useAppDispatch();
  const { users, status, searchText } = useAppSelector((store) => store.users);
  const [radioInput, setRadioInput] = useState("");

  useEffect(() => {
    dispatch(readUser());
  }, []);

  const router = useRouter();

  return (
    <>
      <div className="w-full max-w-[70%] p-4 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl mb-3 font-bold text-center leading-none text-gray-900 dark:text-white">
          All Users
        </h5>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Gender
        </label>
        <div className="flex gap-5 my-3">
          <div className="flex items-center mb-4">
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setRadioInput(e.target.value)
              }
              type="radio"
              value=""
              name="gender"
              checked={radioInput === ""}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="male"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setRadioInput(e.target.value)
              }
              type="radio"
              value="male"
              name="gender"
              checked={radioInput === "male"}
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
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setRadioInput(e.target.value)
              }
              type="radio"
              value="female"
              name="gender"
              checked={radioInput === "female"}
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
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {status === "idle" ? (
              <div className="flex items-center justify-center  text-gray-900 truncate dark:text-white">
                Data loading... Please wait!
              </div>
            ) : (
              users
                .filter((item) => {
                  if (searchText.length === 0) {
                    return item;
                  } else {
                    return item?.name
                      ?.toLowerCase()
                      .includes(searchText.toLowerCase());
                  }
                })
                .filter((item) => {
                  if (radioInput === "male") {
                    return item?.gender == radioInput;
                  } else if (radioInput === "female") {
                    return item?.gender == radioInput;
                  } else {
                    return item;
                  }
                })
                .map((item, index) => (
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {item?.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {item?.email}
                        </p>
                      </div>
                      <div className="inline-flex gap-3 items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button
                          type="button"
                          onClick={() => router.push("/read/" + +item?.id)}
                          data-modal-target="popup-modal"
                          data-modal-toggle="popup-modal"
                          className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => router.push("/update/" + +item?.id)}
                          className="px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg cursor-pointer hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => dispatch(deleteUser(item?.id))}
                          className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg cursor-pointer hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Read;
