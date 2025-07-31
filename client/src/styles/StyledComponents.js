import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled(motion.h2)`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Input = styled(motion.input)`
  padding: 15px 20px;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLight};
  }
`;

export const Button = styled(motion.button)`
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export const LinkButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
  padding: 5px;
  
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

export const ErrorMessage = styled(motion.div)`
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`;

export const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #51cf66, #40c057);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: ${props => props.theme.colors.primary};
`;

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const DashboardContent = styled(motion.div)`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WelcomeCard = styled(Card)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.h1)`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
`;

export const LogoutButton = styled(Button)`
  padding: 8px 20px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

// Additional missing components and animations
export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const CardContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const FormGroup = styled(motion.div)`
  margin-bottom: 20px;
  text-align: left;
`;

export const Alert = styled(motion.div)`
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  background: ${props => props.type === 'error' 
    ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)' 
    : 'linear-gradient(135deg, #51cf66, #40c057)'};
  color: white;
`;

export const TextLink = styled.span`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

// Animation variants
export const pageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5 }
};

export const formAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 }
};

export const formItemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

export const buttonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};
