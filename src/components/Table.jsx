import { useMemo } from "react";
import DataTable, { Media, createTheme } from "react-data-table-component";
import { toast } from "react-hot-toast";
import { binImage, copyToClipboardIMG } from "../assets";

export const Table = ({ className, data, pending, fetchPasswords }) => {
  // custom style created for the table
  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        background: "dimgrey",
      },
    },
  };

  // custom theme created for the table
  createTheme(
    "solarized",
    {
      text: {
        primary: "white",
        secondary: "white",
      },
      background: "transparent",
      divider: {
        default: "grey",
      },
    },
    "dark"
  );

  // copy to clipBoard function
  const copyToClipboard = (row) => {
    toast.dismiss();
    navigator.clipboard.writeText(row.password, {
      id: "removePassword",
      duration: 1000,
    });
    return toast.success("Copied to clipboard", {
      id: "copy",
      duration: 1000,
    });
  };

  // delete saved password function
  const deleteHandler = (name) => {
    const existingPasswords = JSON.parse(localStorage.getItem("passwords"));
    const updatedPasswords = existingPasswords.filter(
        (password) => password.name !== name
        );
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        fetchPasswords()
        toast.dismiss();
        return toast.success(`Password deleted`);
    };

  // columns inside the table wrapped in usememo to understand which row was clicked
  const columns = useMemo(
    () => [
      {
        name: "Name",
        sortable: true,
        selector: (row) => row.name,
      },
      {
        name: "Actions",
        selector: (row) => (
          <>
            <button
              // passing the row to the function to under stand which row to copy the password
              onClick={() => copyToClipboard(row)}
            >
              <img
                src={copyToClipboardIMG}
                alt="Copy Password"
                className="w-6 h-6 mr-1 active:animate-ping"
              />
            </button>
            <button
              onClick={() =>
                toast(
                  () => (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Delete Password</span>
                      <span className="flex flex-col gap-2">
                        <input
                          type="text"
                          value={row.name}
                          name="name"
                          id="name"
                          disabled
                          className="text-sm border rounded-md p-2"
                        />
                      </span>
                      <div className="flex justify-between gap-2 mt-2">
                        <button
                          className="border rounded-md text-white bg-green-400 p-2"
                          type="submit"
                          onClick={() => deleteHandler(row.name)}
                        >
                          Confirm
                        </button>
                        {/* closing the toast if cancelled deleting */}
                        <button
                          type="button"
                          className="border rounded-md text-white bg-red-400 p-2"
                          onClick={() => toast.dismiss()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ),
                  {
                    position: "top-center",
                  }
                )
              }
            >
              <img
                src={binImage}
                alt="Delete Password"
                className="w-6 h-6 active:animate-ping"
              />
            </button>
          </>
        ),
      },
    //   hiding the password in mobile view for nice UI
      {
        name: "Password",
        grow: 2,
        selector: (row) => row.password,
        hide: Media.SM,
      },
    ],
    []
  );
  return (
    <DataTable
      className={`${className} min-w-max`}
      columns={columns}
      data={data}
      fixedHeader
      customStyles={tableCustomStyles}
      responsive
      highlightOnHover
      persistTableHead
      pagination
      progressPending={pending}
      theme="solarized"
      progressComponent={<div className="p-4 my-6">Loading Passwords...</div>}
      noDataComponent={
        <p className="my-8 font-semibold">No saved passwords.</p>
      }
    ></DataTable>
  );
};
