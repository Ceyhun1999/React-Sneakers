import { useState } from "react";
import "./Card.css";

export default function Card({ name, price, imgUrl, onClickFavorite }) {
    const [isAdded, setIsAdded] = useState(false);
    const onClickAdd = () => setIsAdded(!isAdded);

    return (
        <div className="card">
            <div onClick={onClickFavorite} className="btn-like">
                <img className="favorite" src="/img/heart.svg" alt="Favorite" />
                <div className=""></div>
            </div>
            <img className="card__img" src={imgUrl} alt="" />
            <p className="card__desc">{name}</p>
            <div className="price">
                <div className="price__text">
                    <span>Цена:</span>
                    <span>{price} руб.</span>
                </div>
                <div className="price__btn" onClick={onClickAdd}>
                    <img src={!isAdded ? "/img/plyus.svg" : "/img/added.svg"} alt="" />
                </div>
            </div>
        </div>
    );
}
