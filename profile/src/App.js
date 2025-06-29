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
    <div className="min-h-screen md:flex">
      {/* Sidebar on left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editProfile" element={<EditProfiles />} />
          <Route path="/notification" element={<NotificationPre />} />
          {/* <Route path="/photos" element={<PhotoUpload />} /> */}
          <Route path="/closeAccount" element={<CloseAccount />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
