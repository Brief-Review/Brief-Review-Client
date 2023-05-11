import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-black">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/messages/:id" element={<Messages/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
