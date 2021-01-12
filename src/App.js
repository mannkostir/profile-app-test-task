import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppStyles } from './App.styles';
import { AuthProvider } from './context/AuthContext/AuthContext';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <AppStyles />
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
