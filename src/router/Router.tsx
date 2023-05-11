import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";

const Router = () => {
  return (
    <HashRouter>
      <div className="bg-white dark:bg-black">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/messages/:id" element={<Messages/>} />
        </Routes> 
      </div>
    </HashRouter>
  );
}

export default Router;
