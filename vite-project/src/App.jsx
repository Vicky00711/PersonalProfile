import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar2 from './Components/Navbar2';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Education from './Components/Education';
import usePosts from './hooks/usePosts';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [data, setData] = useState([]);
  const postData = usePosts();

  useEffect(() => {
    setData(postData);
  }, [postData]);

  return (
    <>
      {/* Use min-h-screen to ensure video covers content beyond initial viewport */}
      <div className='relative min-h-screen bg-custom-gradient'>
        {/* Router should wrap everything */}
        <Router>
          <AppContent data={data} />
        </Router>
      </div>
    </>
  );
}

function AppContent({ data }) {
  const location = useLocation(); // Now correctly inside Router

  return (
    <>
      {/* Navbar positioned above video with proper z-index */}
      <Navbar2 />

      {/* Routes inside the Router */}
    <AnimatePresence >
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </>
    
  );
}

export default App;
