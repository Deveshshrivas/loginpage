import React from 'react';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { pageAnimation } from '../styles/StyledComponents';

const DashboardContainer = styled(motion.div)`
  padding: 2rem 0;
`;

const WelcomeCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.accent}
    );
  }
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const UserInfoCard = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const UserInfoItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  align-items: center;
  
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
  }
  
  .info-content {
    flex: 1;
    
    h4 {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.text.secondary};
      margin-bottom: 0.25rem;
      font-weight: 500;
    }
    
    p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 500;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.success + '15'};
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  margin-top: 2rem;
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const Dashboard = () => {
  const { user } = useAuth();
  
  // Get formatted date
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  // Animation variants
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <DashboardContainer
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {user && (
        <motion.div variants={containerAnimation} initial="hidden" animate="visible">
          <WelcomeCard variants={itemAnimation}>
            <WelcomeTitle>Welcome, {user.name}!</WelcomeTitle>
            <p>Here's your personalized dashboard. You've successfully logged in to your account.</p>
            
            <UserInfoCard>
              <UserInfoItem variants={itemAnimation}>
                <FiUser />
                <div className="info-content">
                  <h4>Account Name</h4>
                  <p>{user.name}</p>
                </div>
              </UserInfoItem>
              
              <UserInfoItem variants={itemAnimation}>
                <FiMail />
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>{user.email}</p>
                </div>
              </UserInfoItem>
              
              <UserInfoItem variants={itemAnimation}>
                <FiCalendar />
                <div className="info-content">
                  <h4>Current Date</h4>
                  <p>{getCurrentDate()}</p>
                </div>
              </UserInfoItem>
            </UserInfoCard>
            
            <SuccessMessage variants={itemAnimation}>
              <FiCheckCircle />
              <p>You have successfully authenticated using JWT token-based authentication.</p>
            </SuccessMessage>
          </WelcomeCard>
        </motion.div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
