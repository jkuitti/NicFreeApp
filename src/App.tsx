import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import StartPage from "./pages/StartPage";

const App = () => {
  return (
    <div className="m-5">
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
      </Routes>
    </div>
  );
};

export default App;
