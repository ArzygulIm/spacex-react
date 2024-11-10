import logo from '../../assets/лого.png'
import {Link} from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__wrap">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav>
                        <Link to={"/"}>Главная</Link>
                        <Link to={"/technology"}>Технология</Link>
                        <Link to={"/flights"}>График полетов</Link>
                        <Link to={"/guarantees"}>Гарантии</Link>
                        <Link to={"/about"}>О компаии</Link>
                        <Link to={"/contacts"}>Контакты</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;