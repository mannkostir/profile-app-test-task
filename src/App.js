import MainNav from 'components/MainNav';
import { appTheme } from 'constants/appTheme';
import { ContactsProvider } from 'context/ContactsContext/ContactsContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { AppStyles, AppWrapper } from './App.styles';
import { AuthProvider } from './context/AuthContext/AuthContext';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={appTheme}>
        <ContactsProvider>
          <AppStyles />
          <Router>
            <AppWrapper>
              <MainNav />
              <Routes />
              <div style={{ backgroundColor: '#EFEFEF', fontSize: '0.8em' }}>
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </AppWrapper>
          </Router>
        </ContactsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
