import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiUserPlus } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import {
  GlobalStyle,
  FlexCenter,
  Card,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  LinkButton,
  ErrorMessage,
  SuccessMessage,
  IconWrapper
} from '../styles/StyledComponents';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, switchToLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      if (success) {
        setSuccess('Registration successful! You can now login.');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FlexCenter>
        <Card
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <IconWrapper>
              <FiUserPlus />
            </IconWrapper>
            Create Account
          </Title>

          {error && (
            <ErrorMessage
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {error}
            </ErrorMessage>
          )}

          {success && (
            <SuccessMessage
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {success}
            </SuccessMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="name">
                <FiUser style={{ marginRight: '8px' }} />
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="email">
                <FiMail style={{ marginRight: '8px' }} />
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Label htmlFor="password">
                <FiLock style={{ marginRight: '8px' }} />
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Label htmlFor="confirmPassword">
                <FiLock style={{ marginRight: '8px' }} />
                Confirm Password
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </InputGroup>

            <Button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </Form>

          <motion.div
            style={{ textAlign: 'center', marginTop: '20px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span style={{ color: theme.colors.text }}>
              Already have an account?{' '}
            </span>
            <LinkButton
              onClick={switchToLogin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </LinkButton>
          </motion.div>
        </Card>
      </FlexCenter>
    </ThemeProvider>
  );
};

export default Register;
