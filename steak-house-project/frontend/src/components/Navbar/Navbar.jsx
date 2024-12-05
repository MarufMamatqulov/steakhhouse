import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home');
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    };

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="/logo.svg" alt="SteakHouse Logo" />
            </Link>
            <ul className="navbar-menu capitalize">
                <Link
                    to="/"
                    onClick={() => handleMenuClick('home')}
                    className={menu === 'home' ? 'active' : ''}
                >
                    Home
                </Link>
                <Link
                    to="/statistic"
                    onClick={() => handleMenuClick('statistic')}
                    className={menu === 'statistic' ? 'active' : ''}
                >
                    Statistic
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => handleMenuClick('menu')}
                    className={menu === 'menu' ? 'active' : ''}
                >
                    Menu
                </a>
                <a
                    href="#footer"
                    onClick={() => handleMenuClick('contact')}
                    className={menu === 'contact' ? 'active' : ''}
                >
                    Contact Us
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <Link to="/cart" className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket Icon" />
                    <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
                </Link>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="Profile Icon" />
                        <ul className="navbar-profile-dropdown text-center">
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt="Orders Icon" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="Logout Icon" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
