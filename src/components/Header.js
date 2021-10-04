import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import user from '../assets/user.svg'

function Header(){
    return(
        <div className='header'>
            <div className="logo-text">
                <img src={logo}
                     alt="logo"
                     width='40'
                     height='40'
                />
                <div className='nameCompany'>
                    <h1>react sneakers</h1>
                    <h3>Магазин лучших кроссовок</h3>
                </div>
            </div>
            <div className="menu">
                <div className="leftMenu">
                    <img src={cart}
                         alt="cart"
                         width='18'
                         height='18'
                    />
                    <div className="totalPrice">1205 руб.</div>
                </div>
                <div className="rightMenu">
                    <img src={heart}
                         className='heart'
                         alt="heart"
                         width='21'
                         height='19'
                    />
                    <img src={user}
                         className='user'
                         alt="user"
                         width='20'
                         height='20'
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;