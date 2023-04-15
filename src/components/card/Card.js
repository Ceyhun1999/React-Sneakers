import "./Card.css";

export default function Card() {
    return (
        <div className="card">
            <div className="btn-like">
                <div className="btn-like__icon"></div>
            </div>
            <img className="card__img" src="/img/card-1.jpg" alt="" />
            <p className="card__desc">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="price">
                <div className="price__text">
                    <span>Цена:</span>
                    <span>12 999 руб.</span>
                </div>
                <div className="price__btn">
                    <div className="price__btn-icon"></div>
                </div>
            </div>
        </div>
    );
}
