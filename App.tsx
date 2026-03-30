import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Eager-load only the home page (above the fold)
import Home from './pages/Home';
import Hero from './components/Hero';

// Lazy-load everything else — each route becomes its own chunk
const DepartmentPage   = lazy(() => import('./pages/DepartmentPage'));
const PlaceholderPage  = lazy(() => import('./pages/PlaceholderPage'));
const DitetTona        = lazy(() => import('./pages/kontakt'));
const Rregjistrohu     = lazy(() => import('./pages/Rregjistrohu'));
const PrivacyPolicy    = lazy(() => import('./pages/privacy-policy'));
const TermsOfUse       = lazy(() => import('./pages/terms-of-use'));
const QendraDitore     = lazy(() => import('./pages/QendraDitore'));

// Shkolla
const ShkollaFillore      = lazy(() => import('./pages/shkolla/ShkollaFillore'));
const Shkolla9Vjecare     = lazy(() => import('./pages/shkolla/Shkolla9Vjecare'));
const ShkollaMesme        = lazy(() => import('./pages/shkolla/ShkollaMesme'));
const ShkollaProfesionale = lazy(() => import('./pages/shkolla/ShkollaProfesionale'));
const PlaniAkademik       = lazy(() => import('./pages/shkolla/PlaniAkademik'));
const Staff               = lazy(() => import('./pages/shkolla/Staff'));

// Oratori
const Aktiviteti = lazy(() => import('./pages/oratori/Aktiviteti'));
const Oratori    = lazy(() => import('./pages/oratori/Oratori'));

// Famullia
const FamulliaHistoria = lazy(() => import('./pages/famullia/FamulliaHistoria'));
const Famullia         = lazy(() => import('./pages/famullia/Famullia'));
const Rektori          = lazy(() => import('./pages/famullia/Rektori'));
const ZeriFamullise    = lazy(() => import('./pages/famullia/ZeriFamullise'));
const RektoretVite     = lazy(() => import('./pages/famullia/RektoretVite'));
const OraretMeshave    = lazy(() => import('./pages/famullia/OraretMeshave'));
const Kalendari        = lazy(() => import('./pages/famullia/Kalendari'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* 1. SHKOLLA */}
            <Route path="/shkolla/fillore"       element={<ShkollaFillore />} />
            <Route path="/shkolla/9-vjecare"     element={<Shkolla9Vjecare />} />
            <Route path="/shkolla/mesme"         element={<ShkollaMesme />} />
            <Route path="/shkolla/profesionale"  element={<ShkollaProfesionale />} />
            <Route path="/shkolla/stafi-yne-akademik" element={<Staff />} />
            <Route path="/shkolla/staff"         element={<Navigate to="/shkolla/stafi-yne-akademik" replace />} />
            <Route path="/shkolla/plani-akademik" element={<Navigate to="/shkolla/plani-akademik/9-vjecare" replace />} />
            <Route path="/shkolla/plani-akademik/:level" element={<PlaniAkademik />} />

            {/* 2. ORATORI */}
            <Route path="/oratori"            element={<Oratori />} />
            <Route path="/oratori/aktiviteti" element={<Aktiviteti />} />
            <Route path="/oratori/historia"   element={<PlaceholderPage title="Historia" />} />
            <Route path="/oratori/zyrtaret"   element={<PlaceholderPage title="Zyrtarët" />} />

            {/* 3. FAMULLIA */}
            <Route path="/famullia"           element={<Famullia />} />
            <Route path="/famullia/historia"  element={<FamulliaHistoria />} />
            <Route path="/famullia/rektori"   element={<Rektori />} />
            <Route path="/famullia/zeri"      element={<ZeriFamullise />} />
            <Route path="/famullia/rektoret"  element={<RektoretVite />} />
            <Route path="/famullia/ora-met"   element={<OraretMeshave />} />
            <Route path="/famullia/kalendari" element={<Kalendari />} />

            {/* 4. KONTAKT & REGJISTRIMI */}
            <Route path="/kontaktoni-me-ne"  element={<DitetTona />} />
            <Route path="/contact"           element={<Navigate to="/kontaktoni-me-ne" replace />} />
            <Route path="/ditet-tona"        element={<Navigate to="/kontaktoni-me-ne" replace />} />
            <Route path="/rregjistrohu-tani" element={<Rregjistrohu />} />
            <Route path="/rregjistrohu"      element={<Navigate to="/rregjistrohu-tani" replace />} />

            <Route path="/stafi"        element={<Staff />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use"   element={<TermsOfUse />} />
            <Route path="/qendra-ditore"  element={<QendraDitore />} />

            {/* 5. PLACEHOLDERS */}
            <Route path="/te-tjera/komuniteti-salezian"      element={<PlaceholderPage title="Komuniteti Salezian" />} />
            <Route path="/te-tjera/jeta-e-don-boskos"        element={<PlaceholderPage title="Jeta e Don Boskos" />} />
            <Route path="/te-tjera/salezianet-ne-shqiperi"   element={<PlaceholderPage title="Salezianët në Shqipëri" />} />
            <Route path="/te-tjera/levizja-rinore-saleziane" element={<PlaceholderPage title="Lëvizja Rinore Saleziane" />} />

            {/* 6. CATCH-ALL */}
            <Route path="/:id" element={<DepartmentPage />} />
            <Route path="*"    element={<PlaceholderPage title="404 - Faqja nuk u gjend" />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
