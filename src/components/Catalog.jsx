// import { Button } from "./utils/Button";
import snowboard from "../images/snowboard.png";

export const Catalog = () => {
    return (
        <div className="catalog">
            <div className="catalog-header-container">
                <hr className="catalog-header-container__horizontal-line" />
                <p className="catalog-header-container__heading">Catalog</p>
            </div>
            <h2>Our Most Popular Board category</h2>
            <div className="catalog__filters">
                <p className="catalog__filter">All</p>
                <p className="catalog__filter">Sky</p>
                <p className="catalog__filter">Ski</p>
                <p className="catalog__filter">Boards</p>
                <p className="catalog__filter">Other</p>
            </div>
            <div className="products">
                <div className="product">
                    <img src={snowboard} alt="snowboard" />
                    <div className="product__text">
                        <p className="product__title">Sardinia White</p>
                        <p className="product__price">312.49 SAR</p>
                    </div>
                    <img src={snowboard} alt="snowboard" />
                    <div className="product__text">
                        <p className="product__title">Sardinia White</p>
                        <p className="product__price">312.49 SAR</p>
                    </div>
                    <img src={snowboard} alt="snowboard" />
                    <div className="product__text">
                        <p className="product__title">Sardinia White</p>
                        <p className="product__price">312.49 SAR</p>
                    </div>
                </div>
            </div>
            {/* <Button /> */}
            <div className="button">More products</div>
        </div>
    )
}