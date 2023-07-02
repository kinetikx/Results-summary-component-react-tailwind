import logo from "./logo.svg";
import "./App.css";
import Results from "./Components/results";
import Summary from "./Components/summary";

function App() {
  return (
    <div className="flex flex-row max-w-[68vh] mt-40 m-auto  sm:flex-col  ">
      <div className="flex-1  z-10">
        <Results />
      </div>
      <div className="flex-1   z-0">
        <Summary />
      </div>
    </div>
  );
}

export default App;
