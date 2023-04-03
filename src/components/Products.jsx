export const Products = ({ products }) => {
    return (
        <div>
            {products.map((card) => {
                return (
                    <div className="product">
                        <img src={card.img} alt="snowboard" />
                        <div className="product__text">
                            <p className="product__title">{card.title}</p>
                            <p className="product__price">{card.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}