import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import ChatRoom from "./pages/ChatRoom";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CHAT_ROOM} element={<ChatRoom />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
