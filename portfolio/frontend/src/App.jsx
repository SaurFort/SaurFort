import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
//import Footer from './components/Footer';
import Projects from './pages/Projects';
//import Blog from './pages/Blog';
//import Contact from './pages/Contact';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Header />
      <main>
        <h1>{t('welcome')}</h1>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
