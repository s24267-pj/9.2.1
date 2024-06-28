import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './src/About';
import Services from './Services';
import Contact from './Contact';
import ContactUs from './ContactUs';
import ContactPl from './ContactPl';
import ContactDe from './ContactDe';
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/us" element={<ContactUs />} />
                <Route path="/contact/pl" element={<ContactPl />} />
                <Route path="/contact/de" element={<ContactDe />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
    