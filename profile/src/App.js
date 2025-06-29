import { Routes, Route } from 'react-router-dom';
import CloseAccount from './buyers-pages/CloseAccount';
// import PhotoUpload from './buyers-pages/PhotoUpload';
import Profile from './buyers-pages/Profile';
import NotificationPre from './buyers-pages/NotificationPre';
import EditProfiles from './buyers-pages/EditProfiles';
import Dashboard from './buyers-pages/Dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays always visible */}
      <Sidebar />

      {/* Right section: pages change here */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editProfile" element={<EditProfiles />} />
          <Route path="/notification" element={<NotificationPre />} />
          {/* <Route path="/photos" element={<PhotoUpload />} /> */}
          <Route path="/closeAccount" element={<CloseAccount />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
