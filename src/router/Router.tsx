import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";

function Router() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Messages/>} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default Router;
