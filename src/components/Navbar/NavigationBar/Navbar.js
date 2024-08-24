import React, {useState} from 'react';
import './navigation-bar.scss';

const Navbar = ({children}) => {
    const [query, setQuery] = useState("");
    return (
        <nav className="nav-bar">
            {children}
        </nav>
    );
}

export default Navbar;