import React from "react";
import './Header.css';
import '../../Css/aem-grid.css';
import { Link, NavLink } from "react-router-dom";
import search from '../Header/search.png';
import user from '../Header/user.png';
import bag from '../Header/shopping-bag.png';
// import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
// import { FiUser } from '@react-icons/all-files/fi/FiUser';
// import { RiShoppingBag3Line } from '@react-icons/all-files/ri/RiShoppingBag3Line';
import LoginApp from "../../Components/Authenticate/SignIn/LoginApp";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo" >
            <Link to="/"><span>V</span><span>ENIA</span></Link>
          </div>
          <div className="header__categories">
            <nav>
              <ul>
                <li><NavLink to={'/'}>Women</NavLink></li>
                <li><NavLink to={'/men'}>Men</NavLink></li>
                <li><NavLink to={'/jewellery'}>Jewellery</NavLink></li>
                <li><NavLink to={'/accessories'}>Accessories</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <ul>
              <li><NavLink to='#'><img src={search} alt="search" /> Search</NavLink></li>
              <li className="dropdown sign"><NavLink to='#' className='dropbtn'><img src={user} alt="user" /> Sign in</NavLink>
                <div className="dropdown-content">
                  <div className="login">
                    <LoginApp />
                  </div>
                </div>
              </li>
              <li className="itemnumbers">
                <NavLink to="/cart">
                  <img src={bag} alt="bag" /> {' '}
                  {props.countCartItems ? (
                    <span className="">{props.countCartItems}</span>
                  ) : (
                    ''
                  )}
                </NavLink>{' '}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
