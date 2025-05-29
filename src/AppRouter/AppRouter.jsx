import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../components/Auth/Login";
import EmailVerification from "../components/Auth/EmailVerification";
import ChangePassword from "../components/Auth/ChangePassword";
import Dashboard from "../components/Dashboard/Dashboard";
import UserDashboard from "../userComponent/Dashboard";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/emailVerification"
            element={<EmailVerification/>}
          />
          <Route path="/changePassword" element={<ChangePassword/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/userdashboard" element={<UserDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
