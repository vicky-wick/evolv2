import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import {useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useEffect,useLayoutEffect} from 'react';
export default function App(){const loc=useLocation();useEffect(()=>{if('scrollRestoration' in history)history.scrollRestoration='manual'},[]);useLayoutEffect(()=>{window.scrollTo(0,0)},[loc.pathname]);return <div className="site"><div className="bg-blend" aria-hidden="true"><i/><i/><i/></div><motion.div key={'bar'+loc.pathname} className="route-bar" initial={{scaleX:0,opacity:1}} animate={{scaleX:1,opacity:0}} transition={{scaleX:{duration:.6,ease:[.22,1,.36,1]},opacity:{delay:.55,duration:.3}}}/><Navbar/><main><motion.div key={loc.pathname} initial={{opacity:0,y:10}} animate={{opacity:1,y:0,transition:{duration:.4,ease:[.22,1,.36,1]}}}><Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/projects" element={<Projects/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Routes></motion.div></main><Footer/></div>}
