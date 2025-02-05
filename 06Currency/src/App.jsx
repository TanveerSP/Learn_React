

function App() {

  return (
    <div className="bg-blue-400  w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Currency Conveter App</h1>

      <div className="bg-white/30 relative shadow-lg backdrop-blur-md w-full max-w-md border-[2px] border-white p-4 flex flex-col justify-between items-center gap-4 rounded-lg">
        <div className="w-full bg-white flex justify-between items-center p-4 rounded-xl">
          <div>
            <p className="text-gray-600">From</p>
            <h1>0</h1>
          </div>
          <div>
            <p className="text-gray-600">Currency Type</p>
            <h1>usd</h1>
          </div>
        </div>

        <div className="w-full bg-white flex justify-between items-center p-4 rounded-xl">
          <div>
            <p className="text-gray-600">To</p>
            <h1>0</h1>
          </div>
          <div>
            <p className="text-gray-600">Currency Type</p>
            <h1>ind</h1>
          </div>
        </div>

        <div className="w-full cursor-pointer bg-blue-700 py-4 text-white text-center rounded-xl">
          <h1 className="text-xl font-thin">Convert usd to ind</h1>
        </div>
        <div className="absolute bg-blue-600 text-white px-2 py-1 border-2 border-white top-[31%] rounded-lg">
          {" "}
          Swap{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
