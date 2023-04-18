import { sneakers } from "../../data/Data";
import Card from "../card/Card";
import Slider from "../slider/Slider";
import "./Main.css";

export default function Main({ onClickFavorite, onClickAdd }) {
    return (
        <main>
            <Slider />
            <div className="container">
                <div className="main__top">
                    <h2>Все Кроссовки</h2>
                    <div className="search">
                        <img className="search__img" src="/img/search.svg" alt="" />
                        <input className="search__input" placeholder="Поиск" type="text" />
                    </div>
                </div>
                <div className="main__bottom">
                    <div className="cards">
                        {sneakers.map((item, idx) => (
                            <Card
                                onClickAdd={onClickAdd}
                                onClickFavorite={onClickFavorite}
                                key={idx}
                                name={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
