import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import MainLayout from './Layout/MainLayout';
import Employement from './pages/Employee';
// Import other components as needed

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<MainLayout title="Dashboard"><Dashboard /></MainLayout>} />
            <Route path="/employees" element={<MainLayout title="Dashboard"><Employement /></MainLayout>} />
            <Route path="/messages" element={<MainLayout title="Dashboard"><div>Messages</div></MainLayout>} />
            <Route path="/jobs" element={<MainLayout title="Dashboard"><div>Jobs</div></MainLayout>} />
            <Route path="/candidates" element={<MainLayout title="Dashboard"><div>candidates</div></MainLayout>} />
            <Route path="/resumes" element={<MainLayout title="Dashboard"><div>resumes</div></MainLayout>} />
            <Route path="/leave" element={<MainLayout title="Dashboard"><div>Leave Management</div></MainLayout>} />
            <Route path="/performance" element={<MainLayout title="Dashboard"><div>Perforamnce Management</div></MainLayout>} />
            <Route path="/payroll" element={<MainLayout title="Dashboard"><div>Payroll</div></MainLayout>} />

         
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;