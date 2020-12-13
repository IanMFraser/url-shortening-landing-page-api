import React from 'react'

const Navigation = () => {
    return(
        <nav className="navigation">
            <ul>
                <div className="nav-sections">
                    <li><a href="http://localhost:3000/">Features</a></li>
                    <li><a href="http://localhost:3000/">Pricing</a></li>
                    <li><a href="http://localhost:3000/">Resources</a></li>
                </div>
                <div className="nav-sections right">
                    <li><a href="http://localhost:3000/">Login</a></li>
                    <li><button className="button sign-up-button">Sign Up</button></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation