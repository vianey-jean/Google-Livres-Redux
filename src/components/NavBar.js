import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row p-4 border-bottom bg-dark text-white">
                <h4 className="mr-md-auto">
                   <a href="/" className="text-decoration-none text-red">Recherche des Livres</a>
                </h4>

                <nav className="btn-group">
                    <Link to="/" className="btn btn-success btn-lg ml-4"> Accueil </Link>
                    <Link to="/search" className="btn btn-success btn-lg ml-4">Listes</Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
