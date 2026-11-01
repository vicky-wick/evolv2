import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import {useLocation} from 'react-router-dom';
import {AnimatePresence,motion} from 'framer-motion';
import {useEffect} from 'react';
export default function App(){const loc=useLocation();useEffect(()=>window.scrollTo(0,0),[loc.pathname]);return <div className="site"><div className="bg-blend" aria-hidden="true"><i/><i/><i/></div><Navbar/><main><AnimatePresence mode="wait"><motion.div key={loc.pathname} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.35,ease:[.22,1,.36,1]}}><Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/projects" element={<Projects/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Routes></motion.div></AnimatePresence></main><Footer/></div>}
