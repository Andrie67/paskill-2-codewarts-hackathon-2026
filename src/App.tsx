import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DeviceFrame from './layouts/DeviceFrame';

// Pages
import StartPage from './pages/StartPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import RoleSelectionPage from './pages/auth/RoleSelectionPage';

import CategorySelectionPage from './pages/worker/CategorySelectionPage';
import SkillCheckPage from './pages/worker/SkillCheckPage';
import UploadProofPage from './pages/worker/UploadProofPage';
import DigitalPassportPage from './pages/worker/DigitalPassportPage';
import ProfilePage from './pages/worker/ProfilePage';
import WorkerHomePage from './pages/worker/WorkerHomePage';

import BuildCompanyProfilePage from './pages/employer/BuildCompanyProfilePage';
import EmployerHomePage from './pages/employer/EmployerHomePage';
import SearchWorkersPage from './pages/employer/SearchWorkersPage';
import WorkerProfileEmployerPOVPage from './pages/employer/WorkerProfileEmployerPOVPage';
import ContactHirePage from './pages/employer/ContactHirePage';
import MessagesPage from './pages/employer/MessagesPage';
import ChatPage from './pages/employer/ChatPage';
import PostJobPage from './pages/employer/PostJobPage';
import InterestedWorkersPage from './pages/employer/InterestedWorkersPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/role" element={<RoleSelectionPage />} />
        
        {/* Worker Routes */}
        <Route path="/worker/category" element={<CategorySelectionPage />} />
        <Route path="/worker/skill-check" element={<SkillCheckPage />} />
        <Route path="/worker/upload-proof" element={<UploadProofPage />} />
        <Route path="/worker/passport" element={<DigitalPassportPage />} />
        <Route path="/worker/profile" element={<ProfilePage />} />
        <Route path="/worker/home" element={<WorkerHomePage />} />
        
        {/* Employer Routes */}
        <Route path="/employer/create-profile" element={<BuildCompanyProfilePage />} />
        <Route path="/employer/home" element={<EmployerHomePage />} />
        <Route path="/employer/post-job" element={<PostJobPage />} />
        <Route path="/employer/jobs/:id/interested" element={<InterestedWorkersPage />} />
        <Route path="/employer/search" element={<SearchWorkersPage />} />
        <Route path="/employer/worker/:id" element={<WorkerProfileEmployerPOVPage />} />
        <Route path="/employer/contact/:id" element={<ContactHirePage />} />
        <Route path="/employer/messages" element={<MessagesPage />} />
        <Route path="/employer/messages/:id" element={<ChatPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <DeviceFrame>
        <AnimatedRoutes />
      </DeviceFrame>
    </Router>
  );
}

export default App;
