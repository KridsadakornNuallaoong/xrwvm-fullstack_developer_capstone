import { Route, Routes } from "react-router-dom";
import Dealer from "./components/Dealers/Dealer";
import Dealers from './components/Dealers/Dealers';
import PostReview from "./components/Dealers/PostReview";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      {/* Register */}
      <Route path="/register" element={<Register />} />
      {/* Login */}
      <Route path="/login" element={<LoginPanel />} />
      {/* Dealers */}
      <Route path="/dealers" element={<Dealers/>} />
      {/* Dealer */}
      <Route path="/dealer/:id" element={<Dealer/>} />
      {/* Post Review */}
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;
