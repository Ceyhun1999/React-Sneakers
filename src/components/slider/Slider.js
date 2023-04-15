import "./Slider.css";

export default function Slider() {
    return (
        <div className="slider">
            <div className="container">
                <div className="slider__inner">
                    <div className="slider__left">
                        <img src="/img/slider-logo.png" alt="" />
                        <div className="slider__left-text">
                            <h2>Stan Smith,</h2>
                            <h2>Forever!</h2>
                            <button>Купить</button>
                        </div>
                    </div>
                    <div className="slider__right"></div>
                </div>
            </div>
        </div>
    );
}
