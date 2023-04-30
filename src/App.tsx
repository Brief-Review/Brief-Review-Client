import { toggleDarkMode } from "./utilities/darkMode";

function App() {
  return (
    <>
      <h1 className="text-black font-bold text-4xl dark:text-red-600">
        Hola mundo
      </h1>
      <button className="border-2 border-green-500 hover" onClick={() => toggleDarkMode()}>
        Darkmode
      </button>
    </>
  );
}

export default App;
