'use client'
import {useState,useEffect} from "react";
 import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { searchUser } from "@/redux/slices/userCrudSlice";

function Navbar() {
  const userCount = useAppSelector(store => store.users.users)
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    dispatch(searchUser(searchText));
   }, [searchText]);
  
 
  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://share.ftimg.com/aff/flamingtext/2019/03/28/flamingtext__26068056772646949.png"
              className="h-12 mr-3"
              alt="Flowbite Logo"
            />
          </a>

          <div className="" id="navbar-hamburger">
            <ul className="flex flex-row font-medium rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  href="/create"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Create User
                </Link>
              </li>
              <li>
                <Link
                  href="/read"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  All Users ({userCount.length})
                </Link>
              </li>
              <li className="ml-3">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="block py-2 pl-3 pr-4 text-black border border-gray-300  focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5"
                  type="search"
                  placeholder="Search Here..."
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
