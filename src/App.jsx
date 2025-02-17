import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
