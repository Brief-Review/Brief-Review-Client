import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../views/home/Home";

function Router() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default Router;
