import Card from "../card/Card";
import Slider from "../slider/Slider";
import "./Main.css";

export default function Main() {
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
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    );
}
