
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import DirectoryPage from './pages/DirectoryPage';
import ProfilePage from './pages/ProfilePage';
import SpecialismsPage from './pages/SpecialismsPage';
import ClinicsPage from './pages/ClinicsPage';
import ClinicDetailPage from './pages/ClinicDetailPage';
import RequestMatchPage from './pages/RequestMatchPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/specialisms" element={<SpecialismsPage />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/clinic/:id" element={<ClinicDetailPage />} />
          <Route path="/tutors" element={<DirectoryPage />} />
          <Route path="/tutor/:id" element={<ProfilePage />} />
          <Route path="/request-match" element={<RequestMatchPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
