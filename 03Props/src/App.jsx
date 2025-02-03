import Card from "./components/Card";

function App() {
  let myObj = {
    username: "tanvir",
    age: 21,
  };

  let newArr = [1,2,3]

  return (
    <div className="h-screen w-[100%] bg-green-700 flex flex-col justify-center gap-4 items-center mr-auto">
      <h1 className="text-4xl font-semibold bg-green-400 p-4 mb-4">Props</h1>
      <Card palcename="Cicago" btnText="click me"/>
      <Card palcename="Tokyo" btnText="visit me"/>
      {/* <Card username="tanveer" someObj={myObj} /> */}
      {/* <Card arr={newArr}/> */}
    </div>
  );
}

export default App;
