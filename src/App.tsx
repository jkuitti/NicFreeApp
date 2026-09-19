import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import StartPage from "./pages/StartPage";
import AcceptInvite from "./pages/AcceptInvite";

const App = () => {
  return (
    <div className="m-5 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/startpage"
          element={
            <ProtectedRoute>
              <StartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/accept-invite"
          element={
            <ProtectedRoute>
              <AcceptInvite />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
