import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { theme, GlobalStyles } from './styles/theme';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const { isAuthenticated, loading } = useAuth();

  // Protected route component
  const PrivateRoute = ({ children }) => {
    if (loading) {
      return <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>;
    }
    
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <div className="app-container">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
