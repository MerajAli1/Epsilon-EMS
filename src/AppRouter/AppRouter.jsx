import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../components/Auth/Login";
import EmailVerification from "../components/Auth/EmailVerification";
import ChangePassword from "../components/Auth/ChangePassword";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
