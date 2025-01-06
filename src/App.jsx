import LandingPage from './pages/LandingPage.jsx';
import StaticSw from './pages/staticSampleworks';
import StaticPi from './pages/staticPersonalInfo.jsx';
import Certificates from './pages/Certificates.jsx';


import{BrowserRouter as  Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/staticSw" element={ < StaticSw />}/>
          <Route path="/StaticPi" element={<StaticPi/>}/>
          <Route path="/certificates" element={<Certificates/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
