import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/continents/:continentCode" element={<CountriesPage />} />
        <Route path="/countries/:countryCode" element={<CountryDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;



