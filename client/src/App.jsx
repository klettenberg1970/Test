import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import './components/footer.js';

import Start from './pages/Start/start';
import Wetter from "./pages/Wetter/wetter";
import Umfragen from './pages/Umfragen/umfragen';

import Impressum from './data/Impressum/impressum.jsx';

function App() {


  return (
    <div   >

      <Router>
        <Navigation />
        <Routes>

          <Route path="/" element={<Start />} />
          <Route path="/wetter" element={<Wetter />} />
          <Route path="/umfragen" element={<Umfragen />} />
          <Route path="/impressum" element={<Impressum />} />

        </Routes>
        <webcomponent-footer></webcomponent-footer>
      </Router>
    </div>


  )
}

export default App