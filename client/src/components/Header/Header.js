import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
                <nav className='navbar'>
                    
                        <div className='icon'>
                        <Link className='navlink' style={{textDecoration:'none'}} to='/'>
                            MC
                        </Link></div>
                        <h3>Movie Cart</h3>
                    
                </nav>
        </>
    )
}

export default Header
