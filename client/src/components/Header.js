import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLogOut, FiUser, FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const NavButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          MERN Auth
        </Logo>

        <Nav>
          {isAuthenticated ? (
            <>
              <NavLink 
                to="/" 
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiUser />
                Dashboard
              </NavLink>
              <NavButton 
                onClick={handleLogout}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiLogOut />
                Logout
              </NavButton>
            </>
          ) : (
            <>
              <NavLink 
                to="/login"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Login
              </NavLink>
              <NavLink 
                to="/register"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  backgroundColor: '#4361ee',
                  color: 'white'
                }}
              >
                Register
              </NavLink>
            </>
          )}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
