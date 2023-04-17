import { useState } from "react";
import "./Drawer.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {"end"}
            </Button>
            <Offcanvas style={{ maxHeight: "100vh" }} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Body>
                    <div className="drawer">
                        <div className="overlay">
                            <div>
                                <h3 className="overlay__title">Корзина</h3>
                                <div className="price__btn" onClick={handleClose}>
                                    <div className="price__btn-icon remove"></div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn">
                                        <div className="price__btn-icon remove"></div>
                                    </div>
                                </div>
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn">
                                        <div className="price__btn-icon remove"></div>
                                    </div>
                                </div>
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn">
                                        <div className="price__btn-icon remove"></div>
                                    </div>
                                </div>
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn">
                                        <div className="price__btn-icon remove"></div>
                                    </div>
                                </div>
                                <div className="cartItem">
                                    <div className="cartItem__img"></div>
                                    <div>
                                        <p className="cartItem__desc">Мужские Кроссовки Nike Air Max 270</p>
                                        <b>12 999</b>
                                    </div>
                                    <div className="price__btn">
                                        <div className="price__btn-icon remove"></div>
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
