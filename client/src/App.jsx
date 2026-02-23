import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';

import Start from './pages/Start/start';
import Wetter from "./pages/Wetter/wetter";

function App() {
  

  return (
       <div   >

    <Router>
      <Navigation />
      <Routes>

        <Route path="/" element={<Start />} />
         <Route path="/wetter" element={<Wetter />} />
 

      </Routes>
 </Router>
 </div>
      
       
  )
}

export default App