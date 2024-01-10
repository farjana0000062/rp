// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

import "../styles/App.css";
import Layout from "./Layout.jsx";

import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
function App() {
  return (
    <Router>
      <Layout>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </AuthProvider>
      </Layout>
    </Router>
  );
}

export default App;
