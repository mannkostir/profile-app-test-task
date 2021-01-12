import { appTheme } from 'constants/appTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { AppStyles } from './App.styles';
import { AuthProvider } from './context/AuthContext/AuthContext';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <AppStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
