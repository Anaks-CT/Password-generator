import { useState } from "react";
import { copyToClipboardIMG } from "../assets";
import { toast } from "react-hot-toast";
import { CheckWrapper } from "../components/CheckWrapper";
import { Link } from "react-router-dom";

export const Home = () => {
  const [options, setOptions] = useState({
    length: 8,
    lowercase: true,
    uppercase: true,    
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const submitHandler = () => {};
  return (
    <div className="card w-full p-3 lg:w-auto lg:p-0">
      <div className="card-inner flex flex-col justify-center">
        <h1 className="title">Password Generator</h1>
        <form
          className="flex flex-col items-stretch justify-center gap-6 p-3 md:px-10 "
          onSubmit={submitHandler}
        >
          <div className="input flex w-full">
            <input
              type="text"
              placeholder="Select preferences"
              name="password"
              className="grow"
              value={password ? password : ""}
              disabled
            />
            <img
              src={copyToClipboardIMG}
              className="w-7 h-7 cursor-pointer active:animate-ping"
              alt="Copy to clipboard"
              title="Copy to clipboard"
              onClick={() => {
                if (!password) {
                  return false;
                }
                navigator.clipboard.writeText(password);
                return toast.success("Copied to clipboard", {
                  id: "copy",
                  duration: 1000,
                });
              }}
            />
          </div>
          <div className="pass-length flex flex-col">
            <label
              htmlFor="pass-length"
              className="flex justify-between w-full"
            >
              <span>Password Length</span>
              <span>{options.length}</span>
            </label>
            <input
              id="pass-length"
              type="range"
              min="1"
              max="30"
              step="1"
              name="length"
              onChange={(e) =>
                setOptions({ ...options, length: e.target.value })
              }
              value={options.length}
              className="range mt-3"
            />
          </div>
          <div className="flex flex-col">
            <CheckWrapper>
              <input
                type="checkbox"
                className="border-1 rounded-md px-4 py-2 shadow focus:outline-none w-5 h-5 accent-green-400"
                name="lowercase"
                id="lowercase"
                onChange={() =>
                  setOptions({ ...options, lowercase: !options.lowercase })
                }
                checked={options.lowercase}
              />
              <label htmlFor="lowercase">Lowercase ( a-z )</label>
            </CheckWrapper>
            <CheckWrapper>
              <input
                type="checkbox"
                className="border-1 rounded-md px-4 py-2 shadow focus:outline-none w-5 h-5 accent-green-400"
                name="uppercase"
                checked={options.uppercase}
                onChange={() =>
                  setOptions({ ...options, uppercase: !options.uppercase })
                }
                id="uppercase"
              />
              <label htmlFor="uppercase">Uppercase ( A-Z )</label>
            </CheckWrapper>
            <CheckWrapper>
              <input
                type="checkbox"
                className="border-1 rounded-md px-4 py-2 shadow focus:outline-none w-5 h-5 accent-green-400"
                checked={options.symbols}
                onChange={() =>
                  setOptions({ ...options, symbols: !options.symbols })
                }
                name="symbols"
                id="symbols"
              />
              <label htmlFor="symbols">Symbols ( ~!@#$%^&*(/_+-= )</label>
            </CheckWrapper>
            <CheckWrapper>
              <input
                checked={options.numbers}
                onChange={() =>
                  setOptions({ ...options, numbers: !options.numbers })
                }
                type="checkbox"
                className="border-1 rounded-md px-4 py-2 shadow focus:outline-none w-5 h-5 accent-green-400"
                name="numbers"
                id="numbers"
              />
              <label htmlFor="numbers">Numbers ( 0-9 )</label>
            </CheckWrapper>
          </div>
          <button className="ui-btn">
            <span>Generate</span>
          </button>
        </form>
        {userEmail ? (
          <>
            <button
              className="buttonDownload w-3/4 mx-auto"
              
            >
              Save Password
            </button>
            <Link to="/savedPasswords">
              <button className="continue-application w-3/4">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                Saved Passwords
              </button>
            </Link>
          </>
        ) : (
          <button className="btn-google">
            Continue with Google
          </button>
        )}
      </div>
    </div>
  );
};