import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faChartBar, faUsers, faStore, faHouse } from '@fortawesome/free-solid-svg-icons';

const Navbar= () => {
    return (
        <header>
            <nav>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/profile">
                    <a><FontAwesomeIcon icon={faAddressCard} />Profile</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/activities">
                    <a><FontAwesomeIcon icon={faChartBar} />Activities</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/user">
                    <a><FontAwesomeIcon icon={faUsers} />Users</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/store">
                    <a><FontAwesomeIcon icon={faStore} />Store</a>
                </NavLink>
            </nav>
            <nav className='logout'>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/home">
                    <a><FontAwesomeIcon icon={faHouse} />Home</a>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar