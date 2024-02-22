const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logo-img" src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png' />
            </div>
            <div className='items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Offers
                    </li>
                    <li>
                        Sign
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;