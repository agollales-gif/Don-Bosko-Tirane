import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import PlaceholderPage from './pages/PlaceholderPage';
// About section - using PlaceholderPage for missing components
// import KomunitetiSalezian from "./pages/about/KomunitetiSalezian";
// import JetaDonBoskos from "./pages/about/JetaDonBoskos";
// import SalezianetShqiperi from "./pages/about/SalezianetShqiperi";
// import KeshilliLRS from "./pages/about/KeshilliLRS";
import DitetTona from './pages/kontakt';
import Rregjistrohu from './pages/Rregjistrohu';
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfUse from './pages/terms-of-use';
import QendraDitore from './pages/QendraDitore';

// Shkolla Imports - Placeholder for deleted files
// The following files were reported as deleted: Staff.
import ShkollaFillore from './pages/shkolla/ShkollaFillore';
import Shkolla9Vjecare from './pages/shkolla/Shkolla9Vjecare';
import ShkollaMesme from './pages/shkolla/ShkollaMesme';
import ShkollaProfesionale from './pages/shkolla/ShkollaProfesionale';
import PlaniAkademik from './pages/shkolla/PlaniAkademik';
import Staff from './pages/shkolla/Staff';
import Stafi9Vjecare from './pages/shkolla/stafi/Stafi9Vjecare';
import StafiGjimnaz from './pages/shkolla/stafi/StafiGjimnaz';
import StafiLendeveProfesionale from './pages/shkolla/stafi/StafiLendeveProfesionale';

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

// Mjediset Imports - Files deleted

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<DepartmentPage />} />

          {/* Staff Routes */}
          <Route path="/stafi" element={<Staff />} />
          <Route path="/shkolla/staff" element={<Staff />} />

          {/* Shkolla Sub-pages (Temporarily placeholders due to missing files) */}
          <Route path="/shkolla/fillore" element={<ShkollaFillore />} />
          <Route path="/shkolla/9-vjeqare" element={<Shkolla9Vjecare />} />
          <Route path="/shkolla/e-mesme" element={<ShkollaMesme />} />
          <Route path="/shkolla/profesionale" element={<ShkollaProfesionale />} />
          <Route path="/shkolla/staff" element={<Staff />} />
          <Route path="/shkolla/stafi/9-vjecare" element={<Stafi9Vjecare />} />
          <Route path="/shkolla/stafi/gjimnaz" element={<StafiGjimnaz />} />
          <Route path="/shkolla/stafi/profesionale" element={<StafiLendeveProfesionale />} />
          <Route path="/shkolla/plani-akademik" element={<Navigate to="/shkolla/plani-akademik/9-vjecare" replace />} />
          <Route path="/shkolla/plani-akademik/:level" element={<PlaniAkademik />} />

          {/* Mjediset Routes - Files deleted */}

          <Route path="/oratori" element={<Oratori />} />
          <Route path="/oratori/aktiviteti" element={<Aktiviteti />} />
          <Route path="/oratori/historia" element={<PlaceholderPage title="Historia" />} />
          <Route path="/oratori/zyrtaret" element={<PlaceholderPage title="Zyrtarët" />} />

          {/* Famullia Sub-pages */}
          <Route path="/famullia/historia" element={<FamulliaHistoria />} />
          <Route path="/famullia/rektori" element={<Rektori />} />
          <Route path="/famullia/zeri" element={<ZeriFamullise />} />
          <Route path="/famullia/rektoret" element={<RektoretVite />} />
          <Route path="/famullia/ora-met" element={<OraretMeshave />} />
          <Route path="/famullia/kalendari" element={<Kalendari />} />

          <Route path="/contact" element={<DitetTona />} />
          <Route path="/ditet-tona" element={<Navigate to="/contact" replace />} />
          <Route path="/rregjistrohu" element={<Rregjistrohu />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/qendra-ditore" element={<QendraDitore />} />

          {/* Të Tjera Pages */}
          <Route path="/te-tjera/komuniteti-salezian" element={<PlaceholderPage title="Komuniteti Salezian" />} />
          <Route path="/te-tjera/jeta-e-don-boskos" element={<PlaceholderPage title="Jeta e Don Boskos" />} />
          <Route path="/te-tjera/salezianet-ne-shqiperi" element={<PlaceholderPage title="Salezianet në Shqipëri" />} />
          <Route path="/te-tjera/levizja-rinore-saleziane" element={<PlaceholderPage title="Lëvizja Rinore Saleziane" />} />

          {/* Catch-all */}
          <Route path="*" element={<PlaceholderPage title="404 - Faqja nuk u gjend" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
