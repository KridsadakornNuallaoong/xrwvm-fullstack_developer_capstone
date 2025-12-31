import { Route, Routes } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      {/* Register */}
      <Route path="/register" element={<Register />} />
      {/* Login */}
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
