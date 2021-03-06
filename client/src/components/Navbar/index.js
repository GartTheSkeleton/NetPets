import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faChartBar, faUsers, faStore, faHouse } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../utils/auth';

const Navbar= () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
      <>
        <header>
            <div className="container">
                <nav className="text-center">
                  <NavLink className="navlink NetPets-container" exact="true" activeclassname="active" to="/">
                      <a className='NetPets'><FontAwesomeIcon  />Net Pets</a>
                  </NavLink>
          {Auth.loggedIn() ? (
            <>
                  <NavLink className="navlink" exact="true" activeclassname="active" to="/profile">
                    <a><FontAwesomeIcon icon={faAddressCard} />Profile</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/activities">
                    <a><FontAwesomeIcon icon={faChartBar} />Activities</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/users">
                    <a><FontAwesomeIcon icon={faUsers} />Users</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/store">
                    <a><FontAwesomeIcon icon={faStore} />Store</a>
                </NavLink>
                <NavLink className="navlink" exact="true" activeclassname="active" to="/store">
                <a href="/" onClick={logout} className='logout'>
                Logout
                </a>
                </NavLink>

                
            </>
          ) : (
            <>
              <NavLink className="navlink" exact="true" activeclassname="active" to="/login">
                <a>Login</a>
              </NavLink>
              <NavLink className="navlink" exact="true" activeclassname="active" to="/signup">
                <a>Signup</a></NavLink>
            </>
          )}
        </nav>
      </div>
             
            
        </header>
    </>
    )
}

export default Navbar