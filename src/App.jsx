import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Search, Sun, Moon, Heart, Clock3, LayoutGrid, Menu, X, ChevronRight, Github, Sparkles } from 'lucide-react'
import { tools } from './data/tools'
import { read, write } from './utils/helpers'
import Brand from './components/Brand'
import Home from './pages/Home'
import ToolPage from './pages/ToolPage'
import NotFound from './pages/NotFound'
const categories=[...new Set(tools.map(t=>t.category))]

function App(){const [theme,setTheme]=useState(()=>read('nexora-theme','light'));const [favorites,setFavorites]=useState(()=>read('nexora-favorites',[]));const [recent,setRecent]=useState(()=>read('nexora-recent',[]));const [mobileOpen,setMobileOpen]=useState(false);const location=useLocation();
 useEffect(()=>{document.documentElement.dataset.theme=theme;write('nexora-theme',theme)},[theme]);useEffect(()=>{setMobileOpen(false);const item=tools.find(t=>t.route===location.pathname);if(item){setRecent(v=>{const next=[item.id,...v.filter(id=>id!==item.id)].slice(0,6);write('nexora-recent',next);return next})}window.scrollTo(0,0)},[location.pathname]);
 const toggleFav=id=>setFavorites(v=>{const n=v.includes(id)?v.filter(x=>x!==id):[id,...v];write('nexora-favorites',n);return n})
 return <div className="app-shell"><aside className={`sidebar ${mobileOpen?'open':''}`}><div className="side-top"><Brand/><button className="icon-button close-mobile" onClick={()=>setMobileOpen(false)} aria-label="Close menu"><X size={19}/></button></div><div className="side-label">WORKSPACE</div><nav className="side-nav"><NavLink to="/" end><LayoutGrid size={17}/> Overview</NavLink><a href="/#tools"><Search size={17}/> All tools</a><a href="/#favorites"><Heart size={17}/> Favorites {favorites.length>0&&<span className="nav-count">{favorites.length}</span>}</a><a href="/#recent"><Clock3 size={17}/> Recently used</a></nav><div className="side-label category-label">CATEGORIES</div><nav className="side-nav categories-nav">{categories.map((cat,i)=><a key={cat} href={`/#category-${i}`}><span className="category-dot"/> {cat}</a>)}</nav><div className="side-bottom"><div className="side-promo"><span className="promo-icon"><Sparkles size={16}/></span><strong>Small tools.<br/>Clear head.</strong><span>Everything you need, close at hand.</span></div><button className="theme-control" onClick={()=>setTheme(theme==='light'?'dark':'light')}><span>{theme==='light'?<Sun size={17}/>:<Moon size={17}/>} Appearance</span><span className="theme-state">{theme==='light'?'Light':'Dark'}</span></button><div className="side-footer">Nexora · Your everyday toolkit</div></div></aside>{mobileOpen&&<button className="mobile-backdrop" aria-label="Close navigation" onClick={()=>setMobileOpen(false)}/>}
 <div className="main-column"><header className="topbar"><button className="icon-button mobile-menu" onClick={()=>setMobileOpen(true)} aria-label="Open menu"><Menu size={20}/></button><div className="crumb"><span>Workspace</span><ChevronRight size={14}/><span>{location.pathname==='/'?'Overview':(tools.find(t=>t.route===location.pathname)?.name||'Page')}</span></div><div className="top-actions"><span className="top-tag"><span className="online-dot"/> All tools ready</span><button className="icon-button theme-mobile" onClick={()=>setTheme(theme==='light'?'dark':'light')} aria-label="Toggle theme">{theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button></div></header><main><Routes><Route path="/" element={<Home favorites={favorites} onFavorite={toggleFav} recent={recent}/>}/><Route path="/tools/:toolId" element={<ToolPage/>}/><Route path="*" element={<NotFound/>}/></Routes></main><footer className="footer"><div><Brand/><span>Made for the little things that keep your day moving.</span></div><div className="footer-links"><a href="/#tools">Explore tools</a><a href="/#categories">Categories</a><a href="https://github.com" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a></div><div className="copyright">© {new Date().getFullYear()} Nexora</div></footer></div></div>
}



export default App
