import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// Import other components as needed

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;