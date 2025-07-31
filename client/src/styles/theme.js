import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    accent: '#4895ef',
    background: '#f8f9fa',
    surface: '#ffffff',
    success: '#4caf50',
    error: '#f44336',
    text: {
      primary: '#333333',
      secondary: '#666666',
      white: '#ffffff'
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px'
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.15s ease'
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)',
    button: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    pill: '9999px'
  }
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;
