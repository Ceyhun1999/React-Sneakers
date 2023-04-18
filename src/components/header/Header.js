import "./Header.css";

export default function Header({ handleShow }) {
    return (
        <header>
            <div className="container">
                <div className="header__left">
                    <img width={40} height={40} src="/img/logo.jpg" alt="Logo" />
                    <div>
                        <h2>React Sneakers</h2>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
                <div className="header__right">
                    <div className="btn__shop" onClick={handleShow}>
                        <img src="/img/shop.svg" alt="Shop" />
                        <span>1205 руб.</span>
                    </div>
                    <img src="/img/heart.svg" alt="Heart" />
                    <img src="/img/login.svg" alt="Login" />
                </div>
            </div>
        </header>
    );
}
