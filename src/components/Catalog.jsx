// import { Button } from "./utils/Button";
import snowboard from "../images/snowboard.png";

export const Catalog = () => {
    return (
        <div className="catalog">
            <hr />
            <p>Catalog</p>
            <h2>Our Most Popular Board category</h2>
            <div className="catalog__filters">
                <p>All</p>
                <p>Sky</p>
                <p>Ski</p>
                <p>Boards</p>
                <p>Other</p>
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