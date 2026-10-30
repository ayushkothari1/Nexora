import React from 'react'
import { Link } from 'react-router-dom'
import { Command } from 'lucide-react'
function Brand(){return <Link to="/" className="brand"><span className="brand-mark"><Command size={18}/></span><span>Nexora</span></Link>}
export default Brand
