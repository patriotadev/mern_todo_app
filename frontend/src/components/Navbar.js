import React from 'react'
import logo from './science.png'

const Navbar = ({title}) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <img src={logo} width='30' alt='logo'/>
                    <span className="fst-italic navbar-brand mb-0 h1">{title ? title : "React Todo's"}</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
