import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export default function NotFound(){return <div className="not-found"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>Looks like a missing tool.</h1><p>The page may have moved, or the address might be off.</p><Link to="/" className="button"><ArrowRight size={16}/> Return to Nexora</Link></div>}
