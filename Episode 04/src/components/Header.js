import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logo-img" src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png' />
            </div>
            <div className='items'>
                <ul>
                    <li>
                       <Link to="/"> Home</Link>
                    </li>
                    <li>
                    <Link to="/about"> About</Link>
                    </li>
                    <li>
                    <Link to="/contact"> Contact</Link>
                    </li>
                    <li>
                    <Link to="/"> Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;