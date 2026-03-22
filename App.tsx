import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import PlaceholderPage from './pages/PlaceholderPage';
import DitetTona from './pages/kontakt';
import Rregjistrohu from './pages/Rregjistrohu';
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfUse from './pages/terms-of-use';
import QendraDitore from './pages/QendraDitore';

// Shkolla Imports
import ShkollaFillore from './pages/shkolla/ShkollaFillore';
import Shkolla9Vjecare from './pages/shkolla/Shkolla9Vjecare';
import ShkollaMesme from './pages/shkolla/ShkollaMesme';
import ShkollaProfesionale from './pages/shkolla/ShkollaProfesionale';
import PlaniAkademik from './pages/shkolla/PlaniAkademik';
import Staff from './pages/shkolla/Staff';

// Oratori Imports
import Aktiviteti from './pages/oratori/Aktiviteti';
import Oratori from './pages/oratori/Oratori';

// Famullia Imports
import FamulliaHistoria from './pages/famullia/FamulliaHistoria';
import Rektori from './pages/famullia/Rektori';
import ZeriFamullise from './pages/famullia/ZeriFamullise';
import RektoretVite from './pages/famullia/RektoretVite';
import OraretMeshave from './pages/famullia/OraretMeshave';
import Kalendari from './pages/famullia/Kalendari';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* 1. SHKOLLA ROUTES */}
          <Route path="/shkolla/fillore" element={<ShkollaFillore />} />
          <Route path="/shkolla/9-vjecare" element={<Shkolla9Vjecare />} />
          <Route path="/shkolla/mesme" element={<ShkollaMesme />} /> 
          <Route path="/shkolla/profesionale" element={<ShkollaProfesionale />} />
          
          {/* Stafi: URL e re dhe Ridrejtimi */}
          <Route path="/shkolla/stafi-yne-akademik" element={<Staff />} />
          <Route path="/shkolla/staff" element={<Navigate to="/shkolla/stafi-yne-akademik" replace />} />
          
          <Route path="/shkolla/plani-akademik" element={<Navigate to="/shkolla/plani-akademik/9-vjecare" replace />} />
          <Route path="/shkolla/plani-akademik/:level" element={<PlaniAkademik />} />

          {/* 2. ORATORI ROUTES */}
          <Route path="/oratori" element={<Oratori />} />
          <Route path="/oratori/aktiviteti" element={<Aktiviteti />} />
          <Route path="/oratori/historia" element={<PlaceholderPage title="Historia" />} />
          <Route path="/oratori/zyrtaret" element={<PlaceholderPage title="Zyrtarët" />} />

          {/* 3. FAMULLIA ROUTES */}
          <Route path="/famullia/historia" element={<FamulliaHistoria />} />
          <Route path="/famullia/rektori" element={<Rektori />} />
          <Route path="/famullia/zeri" element={<ZeriFamullise />} />
          <Route path="/famullia/rektoret" element={<RektoretVite />} />
          <Route path="/famullia/ora-met" element={<OraretMeshave />} />
          <Route path="/famullia/kalendari" element={<Kalendari />} />

          {/* 4. KONTAKT & REGJISTRIMI - URL-TË E REJA NË SHQIP */}
          <Route path="/kontaktoni-me-ne" element={<DitetTona />} />
          <Route path="/contact" element={<Navigate to="/kontaktoni-me-ne" replace />} />
          <Route path="/ditet-tona" element={<Navigate to="/kontaktoni-me-ne" replace />} />
          
          <Route path="/rregjistrohu-tani" element={<Rregjistrohu />} />
          <Route path="/rregjistrohu" element={<Navigate to="/rregjistrohu-tani" replace />} />
          
          <Route path="/stafi" element={<Staff />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/qendra-ditore" element={<QendraDitore />} />

          {/* 5. PAGESA TË TJERA (PLACEHOLDERS) */}
          <Route path="/te-tjera/komuniteti-salezian" element={<PlaceholderPage title="Komuniteti Salezian" />} />
          <Route path="/te-tjera/jeta-e-don-boskos" element={<PlaceholderPage title="Jeta e Don Boskos" />} />
          <Route path="/te-tjera/salezianet-ne-shqiperi" element={<PlaceholderPage title="Salezianët në Shqipëri" />} />
          <Route path="/te-tjera/levizja-rinore-saleziane" element={<PlaceholderPage title="Lëvizja Rinore Saleziane" />} />

          {/* 6. RRUGËT DINAMIKE DHE CATCH-ALL */}
          <Route path="/:id" element={<DepartmentPage />} />
          <Route path="*" element={<PlaceholderPage title="404 - Faqja nuk u gjend" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;