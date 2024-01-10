"use client";
import { readUser } from "@/redux/slices/userCrudSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect ,useState} from "react";

function UserDetails({ params }: { params: { users: number } }) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, []);

const [userDetails, setUserDetails] = useState({} || undefined)

  const userId = params.users;
 
  const allUsers = useAppSelector((store) => store.users.users);

  const userDtls = allUsers?.find((item) => item?.id === userId);
  
  useEffect(() => {
    setUserDetails(userDtls);
  }, [userDetails]);
  
   return (
     <div className="max-w-md m-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <a href="#">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {userDetails?.name}
         </h5>
       </a>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         <b>Email Id : </b>
         {userDetails?.email}
       </p>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         <b>Age :</b> {userDetails?.age}
       </p>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         <b>Gender :</b> {userDetails?.gender}
       </p>
       <a
         href="#"
         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       >
         Edit Details
       </a>
     </div>
   );
}

export default UserDetails;
