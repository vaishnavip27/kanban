import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from "../src/pages/Authentication/LoginPage";
import SignupPage from '../src/pages/Authentication/SignupPage';
import DashboardPage from './pages/dashboard/page';
import KanbanBoard from "./pages/kanban/page";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Main Application Routes */}
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/kanban" element={<KanbanBoard />} />
        

          {/* Redirect any unknown routes to the landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
