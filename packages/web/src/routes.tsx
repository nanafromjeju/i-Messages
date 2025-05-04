import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Chat from "./pages/Chat";
import List from "./pages/List";
import SignIn from "./pages/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.LIST} element={<List />} />
      <Route path={ROUTES.CHAT} element={<Chat />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
