import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import HomePage from "./pages/homePage";
import ActivityLog from "./pages/activityLog";
import Layout from "./components/layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/activity-log"
          element={
            <Layout>
              <ActivityLog />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
