import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to SignUp */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Normal routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
