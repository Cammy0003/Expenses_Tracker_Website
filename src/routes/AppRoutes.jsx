import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
