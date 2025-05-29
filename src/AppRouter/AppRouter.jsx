import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../components/Auth/Login";
import UserLogin from "../userComponent/Auth/Login";
import EmailVerification from "../components/Auth/EmailVerification";
import UserEmailVerification from "../userComponent/Auth/EmailVerification";
import ChangePassword from "../components/Auth/ChangePassword";
import Dashboard from "../components/Dashboard/Dashboard";
import EMSUser from "../userComponent/EMSUser";
import EMSIR from "../userComponent/EMSIR";
import Automation from "../userComponent/Automation";
import EmsAndEMSIR from "../userComponent/EmsAndEMSIR";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route
            path="/emailVerification"
            element={<EmailVerification/>}
          />
          <Route
            path="/userEmailVerification"
            element={<UserEmailVerification/>}
          />
          <Route path="/changePassword" element={<ChangePassword/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/emsuser" element={<EMSUser/>} />
          <Route path="/emsir" element={<EMSIR/>} />
          <Route path="/automation" element={<Automation/>} />
          <Route path="/emsAndEmsir" element={<EmsAndEMSIR/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
