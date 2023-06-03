import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "../views/home/Home";
import Messages from "../views/messages/Messages";
import Resources from "../views/resources/Resources";
import Brief from "../views/brief/Brief";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import AdminDashboard from "../views/adminDashboard/AdminDashboard";
import Briefings from "../views/Briefings/Briefings";
import TestView from "../views/testView/TestView";
import { useContext, useEffect } from "react";
import AppContext from "../context/global/AppContext";
import { getUser } from "../services/userServices/user.services";

const Router = () => {
  const { token, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetUser = async () => {
    const { data } = await getUser();
    setUser(data.data);
  };

  useEffect(() => {
    if (!token && location.pathname !== "/register") {
      return navigate("/login");
    }
    if(token && location.pathname === "/register" || location.pathname === "/login"){
      return navigate("/home")
    }
    handleGetUser();

  }, [token, location.pathname, navigate]);


  return (
    <div className="bg-white dark:bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/messages/:id" element={<Messages />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/briefings" element={<Briefings />} />
        <Route path="/brief/:id" element={<Brief />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="test" element={<TestView />} />
      </Routes>
    </div>
  );
};

export default Router;
