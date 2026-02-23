import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';

import Start from './pages/Start/start';

function App() {
  

  return (
       <div   >

    <Router>
      <Navigation />
      <Routes>

        <Route path="/" element={<Start />} />
 

      </Routes>
 </Router>
 </div>
      
       
  )
}

export default App