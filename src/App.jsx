import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PriceChecker from './component/priceChecker';
import HomePage from './component/HomePage';
import ApiPractice from './component/ApiPractice';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px',
});

function App() {
  return (
    <div style={{ marginTop: '20px' }}>
      <BrowserRouter>
        <nav>
          <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{' '}
          <NavLink to="/PriceChecker" style={navLinkStyles}>Price Checker</NavLink> |{' '}
          <NavLink to="/ApiPractice" style={navLinkStyles}>API Practice</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PriceChecker" element={<PriceChecker />} />
          <Route path="/ApiPractice" element={<ApiPractice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
