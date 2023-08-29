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
                    <button type="button" class="btn btn-light"><Link to="/" className="btn btn-success justify-content-between"> Accueil </Link></button>
                    <button type="button" class="btn btn-light"><Link to="/search" className="btn btn-success">Listes</Link></button>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
