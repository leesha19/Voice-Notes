import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Courses' element={<Courses />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
