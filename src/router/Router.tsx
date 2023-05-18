import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";
import Resources from "../views/resources/Resources";
import Brief from "../views/brief/Brief";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const Router = () => {
  return (
    <HashRouter>
      <div className="bg-white dark:bg-black">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/messages/:id" element={<Messages/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/brief/:id" element={<Brief/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes> 
      </div>
    </HashRouter>
  );
}

export default Router;
