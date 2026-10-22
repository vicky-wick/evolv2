import {useEffect,useRef,useState} from 'react';import {motion} from 'framer-motion';import {Pause,Play,PhoneCall} from 'lucide-react';
const bars=Array.from({length:36},(_,i)=>.3+Math.abs(Math.sin(i*1.7))*.7);
const fmt=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
export default function CallingAgentDemo(){const audio=useRef(null);const[playing,setPlaying]=useState(false);const[time,setTime]=useState(0);const[dur,setDur]=useState(0);
useEffect(()=>{const a=audio.current;const t=()=>setTime(a.currentTime),d=()=>setDur(a.duration),e=()=>setPlaying(false);a.addEventListener('timeupdate',t);a.addEventListener('loadedmetadata',d);a.addEventListener('ended',e);return()=>{a.removeEventListener('timeupdate',t);a.removeEventListener('loadedmetadata',d);a.removeEventListener('ended',e)}},[]);
const toggle=()=>{const a=audio.current;if(a.paused){a.play();setPlaying(true)}else{a.pause();setPlaying(false)}};
const seek=e=>{const r=e.currentTarget.getBoundingClientRect();if(dur)audio.current.currentTime=(e.clientX-r.left)/r.width*dur};
const pct=dur?time/dur:0;
return <div className="call-card"><audio ref={audio} src="/calling-agent-demo.mp3" preload="metadata"/><div className="call-head"><div className="call-id"><span className={`call-dot ${playing?'live':''}`}/><div><b>EVOLV Voice Agent</b><small>{playing?'On call · live demo':'Sample call recording'}</small></div></div><PhoneCall size={18}/></div>
<div className="wave" onClick={seek}>{bars.map((h,i)=><motion.i key={i} className={i/bars.length<pct?'on':''} animate={playing?{scaleY:[h,h*.35+.15,h]}:{scaleY:h}} transition={playing?{duration:.9+(i%5)*.12,repeat:Infinity,ease:'easeInOut'}:{duration:.3}}/>)}</div>
<div className="call-foot"><motion.button whileTap={{scale:.92}} className="play-btn" onClick={toggle} aria-label={playing?'Pause demo':'Play demo'}>{playing?<Pause size={18}/>:<Play size={18}/>}</motion.button><span>{fmt(time)} / {dur?fmt(dur):'--:--'}</span><div className="call-tags"><em>Inbound</em><em>Qualification</em><em>Follow-ups</em></div></div></div>}
