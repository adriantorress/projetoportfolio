import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import ProjectsByMe from './components/pages/ProjectsByMe.js'
import ProjectsInCourses from './components/pages/ProjectsInCourses.js'
import ProjectsInCollege from './components/pages/ProjectsInCollege'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import AboutMe from './components/pages/AboutMe'


import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/madebyme" element={<ProjectsByMe />} />
          <Route path="/madeincourses" element={<ProjectsInCourses />} />
          <Route path="/madeincollege" element={<ProjectsInCollege />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutme" element={<AboutMe />} />

        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
