import './globals.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from './Components/layout';
import Home from './Components/Home';
import Add from './Components/Add';
import Volunteer from './Components/Volunteer';
import Donate from './Components/Donate';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/add' element={< Add/>} />
          <Route path='/volunteer' element={< Volunteer/>} />
          <Route path='/donate' element={< Donate />} />
          <Route path='/profile' element={< Profile/>} />


      </Routes>
    </Router>
  );
}

export default App;
