import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../firebase/config";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext2";

import { ReactComponent as CoffeeLogo } from '../assets/coffee.svg'
import CartIcon from "../components/cart/CartIcon";
import CartDropdown from "../components/cart/CartDropdown";
import './styles/navigation.scss';

const Navigation = () => {
    const { currentUser } = useContext(AuthContext);
    const { cartOpen } = useContext(CartContext);

    const handleLogout = async () => { await signOutUser() };

    return (
        <>
            <nav className='nav'>
                <Link className='nav__logo-container' to='/'>
                    <CoffeeLogo /> Cozy
                </Link>

                <div className='nav__links-container'>
                    <Link className='nav__link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav__link' to='/'>
                        Contact
                    </Link>
                    {
                        !currentUser ?
                            <Link className='nav__link' to='/signin'>
                                Sign in
                            </Link> :
                            <button className='nav__link' onClick={handleLogout}>logout</button>
                    }

                    <CartIcon />
                    {cartOpen && <CartDropdown />}

                </div>

            </nav>
            <Outlet />
        </>
    )
};

export default Navigation;