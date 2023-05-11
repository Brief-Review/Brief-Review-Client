import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";
import Resources from "../views/resources/Resources";

const Router = () => {
  return (
    <HashRouter>
      <div className="bg-white dark:bg-black">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/messages/:id" element={<Messages/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes> 
      </div>
    </HashRouter>
  );
}

export default Router;
