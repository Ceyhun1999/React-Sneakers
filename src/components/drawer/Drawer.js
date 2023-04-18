import "./Drawer.css";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvasExample({ name, show, handleClose, ...props }) {
    return (
        <>
            
            <Offcanvas style={{ maxHeight: "100vh" }} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Body>
                    <div className="drawer">
                        <div className="overlay">
                            <div>
                                <h3 className="overlay__title">Корзина</h3>
                                <div className="price__btn" onClick={handleClose}>
                                    <img className="price__btn-icon remove" src="/img/plyus.svg" alt="" />
                                </div>
                            </div>
                            <div className="items">
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn border-none">
                                        <img className="price__btn-icon remove" src="/img/plyus.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <ul className="cart__totalBlock">
                                <li>
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                                <button>Оформить заказ</button>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
