import { Link } from "react-router-dom";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import PlusSVG from "../components/UI/PlusSVG";

export const SavedPasswords = () => {
  // state to save the passwords fetched from local storage
  const [savedPasswords, setSavedPasswords] = useState([]);  

  // state to determine loading state
  const [loading, setLoading] = useState(false);

  // function to fectch the data from local storage
  const fetchAllPasswordsAPI = () => {
    setLoading(true);
    const existingPasswords =
      JSON.parse(localStorage.getItem("passwords")) || [];
    setSavedPasswords(existingPasswords);
    setLoading(false);
  };

  // fetching the password when the page loads
  useEffect(() => {
    fetchAllPasswordsAPI(); // Fetch passwords when the component mounts
  }, []);

  return (
    <div className="card w-full p-3 lg:w-auto lg:p-0">
      <div className="card-inner flex flex-col">
        <h1 className="title">Saved Passwords</h1>
        <Table
          className="px-1"
          pending={loading}
          data={savedPasswords}
          fetchPasswords={fetchAllPasswordsAPI}
        />
        <Link to="/" className="newPasss-button mx-auto my-4">
          <span className="button__text">Generate</span>
          <span className="button__icon">
            <PlusSVG />
          </span>
        </Link>
      </div>
    </div>
  );
};
