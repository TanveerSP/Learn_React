import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-?/><{}[]";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password);

    setCopied(true)

    // Hide the copied msg after 2 seconds
    setTimeout(() => setCopied(false), 2000)
  }, [password]);

  // userRef hook
  const passwordRef = useRef(null);

  return (
    <div className=" w-full h-screen bg-gray-800 flex flex-col items-center justify-center  ">
      <h1 className="text-3xl font-semibold text-white "> Password Genrator</h1>

      <div className=" p-5 relative rounded-3xl w-full max-w-md bg-gray-900 mx-auto gap-8 shadow-md my-8 text-orange-800">
        {copied &&(<div className="absolute w-28 h-8 z-10 bg-gray-100 top-[-2vw] right-8 rounded-md shadow-md flex items-center justify-center">
          <h2 className="z-10 text-sm font-semibold text-gray-700">Copied</h2>
          <div className="absolute rotate-45 left-20 bottom-[-4px] w-3 h-3 bg-gray-100 shadow-md"></div>
        </div>)}

        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input
            type=""
            value={password}
            className="outline-none w-full py-3 px-3 font-semibold text-xl bg-white"
            placeholder="password"
            readOnly
            id=""
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 cursor-pointer text-white px-3 py-0.5 shrink-0 "
          >
            copy
          </button>
        </div>

        <div className="flex  items-center justify-between gap-x-4 mx-4">
          <div className="flex flex-col items-center gap-y-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-lg text-white font-semibold" htmlFor="">
              Length: {length}
            </label>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <input
              type="checkbox"
              d
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((perv) => !perv);
              }}
            />
            <label className="text-lg text-white font-semibold" htmlFor="">
              Numbers
            </label>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <input
              type="checkbox"
              d
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((perv) => !perv);
              }}
            />
            <label className="text-lg text-white font-semibold" htmlFor="">
              Charaters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
