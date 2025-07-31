import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { 
  PageContainer, 
  CardContainer, 
  FormGroup, 
  Title, 
  Subtitle,
  Label, 
  Input, 
  Button, 
  TextLink,
  Alert,
  pageAnimation,
  formAnimation,
  formItemAnimation,
  buttonAnimation
} from '../styles/StyledComponents';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = formData;
  const { login, isAuthenticated, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate('/');
    }
    
    // Clear errors when component mounts
    clearError();
  }, [isAuthenticated, navigate, clearError]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = await login(formData);
    if (success) {
      navigate('/');
    }
    
    setIsLoading(false);
  };

  return (
    <PageContainer
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CardContainer>
        <motion.div variants={formAnimation} initial="initial" animate="animate">
          <Title>Welcome Back</Title>
          <Subtitle>Log in to access your account</Subtitle>
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert type="error">
                <FiAlertCircle size={18} />
                {error}
              </Alert>
            </motion.div>
          )}
          
          <form onSubmit={onSubmit}>
            <motion.div variants={formItemAnimation}>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <div style={{ position: 'relative' }}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    placeholder="Enter your email"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <FiMail 
                    style={{ 
                      position: 'absolute', 
                      left: '1rem', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#888'
                    }} 
                  />
                </div>
              </FormGroup>
            </motion.div>
            
            <motion.div variants={formItemAnimation}>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <div style={{ position: 'relative' }}>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    placeholder="Enter your password"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <FiLock 
                    style={{ 
                      position: 'absolute', 
                      left: '1rem', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#888'
                    }} 
                  />
                </div>
              </FormGroup>
            </motion.div>
            
            <motion.div variants={formItemAnimation}>
              <FormGroup>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  variants={buttonAnimation}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </FormGroup>
            </motion.div>
          </form>
          
          <motion.div 
            variants={formItemAnimation}
            style={{ textAlign: 'center', marginTop: '1.5rem' }}
          >
            Don't have an account? <Link to="/register"><TextLink>Register</TextLink></Link>
          </motion.div>
        </motion.div>
      </CardContainer>
    </PageContainer>
  );
};

export default Login;
