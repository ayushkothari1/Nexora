import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart } from 'lucide-react'
import { iconMap } from '../data/tools'
function Icon({name,size=20}){const I=iconMap[name];return I?<I size={size} strokeWidth={1.8}/>:null}
function ToolCard({tool,favorites,onFavorite,compact=false}){return <article className={`tool-card ${compact?'compact':''}`}><Link className="card-hit" to={tool.route}><span className="tool-icon"><Icon name={tool.icon}/></span><span className="card-copy"><span className="card-name">{tool.name}</span><span className="card-desc">{tool.description}</span></span><ArrowUpRight className="card-arrow" size={17}/></Link><button className={`favorite-button ${favorites.includes(tool.id)?'is-favorite':''}`} aria-label={favorites.includes(tool.id)?`Remove ${tool.name} from favorites`:`Add ${tool.name} to favorites`} onClick={()=>onFavorite(tool.id)}><Heart size={16} fill={favorites.includes(tool.id)?'currentColor':'none'}/></button></article>}
export default ToolCard
