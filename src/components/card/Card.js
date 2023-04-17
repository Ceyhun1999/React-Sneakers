import "./Card.css";

export default function Card({ name, price, imgUrl, onClickButton }) {
    return (
        <div className="card">
            <div className="btn-like">
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
                <div className="price__btn" onClick={onClickButton}>
                    <div className="price__btn-icon"></div>
                </div>
            </div>
        </div>
    );
}
