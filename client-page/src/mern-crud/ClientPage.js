import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import css

const ClientPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "https://bismillah-crud-real.herokuapp.com/users"
    );
    setUsers(response.data);
  };

  const notifyFailed = () =>
    toast.error("Oops that's a system error!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  const succesDeleted = () =>
    toast.success("Delete your choosen data!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  const deleteDenied = () =>
    toast.warn("Action has been canceled!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  const deleteUser = async (id) => {
    confirmAlert({
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            try {
              axios.delete(
                `https://bismillah-crud-real.herokuapp.com/users/${id}`
              );
              getUsers();
              succesDeleted();
              getUsers();
              getUsers();
            } catch (error) {
              notifyFailed();
              console.log(error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            getUsers();
            deleteDenied();
            getUsers();
          },
        },
      ],
    });
  };
  return (
    <>
      <div className="px-10 pt-10 flex flex-col font-poppins">
        <div className="flex space-x-2">
          <Link to="/">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Back To Portfolio
            </button>
          </Link>
        </div>
        <h1 className="text-xl">
          Lady and Gentlemen let me introduce my realtime database using MERN +
          Tailwind!
        </h1>
        <div className="flex space-x-2 pt-5">
          <Link to="/crud-mern/add">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight  rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              Click Me to Add Data To The List Below
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 pt-10">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {users == "" ? (
                <h1 className="text-base flex justify-center">
                  Data does not exist, please fill in first
                </h1>
              ) : (
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        key={user._id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.gender}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2 justify-center">
                            <div>
                              <Link to="/crud-mern/edit" state={user._id}>
                                <button
                                  type="button"
                                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Edit
                                </button>
                              </Link>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => deleteUser(user._id)}
                                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ClientPage;
