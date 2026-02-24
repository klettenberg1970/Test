import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';

import Start from './pages/Start/start';
import Wetter from "./pages/Wetter/wetter";
import Umfragen from './pages/Umfragen/umfragen';

function App() {
  

  return (
       <div   >

    <Router>
      <Navigation />
      <Routes>

        <Route path="/" element={<Start />} />
         <Route path="/wetter" element={<Wetter />} />
          <Route path="/umfragen" element={<Umfragen />} />
 

      </Routes>
 </Router>
 </div>
      
       
  )
}

export default App