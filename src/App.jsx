import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Blog from './pages/Blog';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
