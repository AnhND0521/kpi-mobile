import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ConfirmCode from './pages/auth/ConfirmCode';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import AddKPI from './pages/AddKPI';
import Notifications from './pages/Notifications';
import KPIDetails from './pages/KPIDetails';
import EditKPI from './pages/EditKPI';
import TaskDetails from './pages/TaskDetails';
import Settings from './pages/Settings';
import Theme from './pages/Theme';
import PrivacyPolicy from './pages/PrivacyPolicy'
import Feedback from './pages/Feedback'
import Help from './pages/Help'
import EditTask from './pages/EditTask';
import { sortKpis } from './utils/dataUtils';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/add-kpi" element={<AddKPI />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/kpi/:id" element={<KPIDetails />} />
          <Route path="/kpi/:id/edit" element={<EditKPI />} />
          <Route path="/kpi/:id/task/:taskid" element={<TaskDetails />} />
          <Route path="/kpi/:id/task/:taskid/edit" element={<EditTask />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/settings/theme" element={<Theme />} />
          <Route path="/settings/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings/feedback" element={<Feedback />} />
          <Route path="/settings/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
