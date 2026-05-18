// src/features/mobiles/components/MobilesCard.jsx

const MobilesCard = ({
    product,
    onClick
}) => {

    return (

        <div
            className="product-card"
            onClick={onClick}
        >

            <div className="img-wrapper">

                <img
                    src={product.image}
                    alt={product.title}
                />

                {product.discount > 0 && (

                    <span className="discount-badge">
                        -{product.discount}%
                    </span>

                )}

            </div>

            <div className="card-body">

                <h4 className="title">
                    {product.title}
                </h4>

                <div className="price-box">

                    <span className="price">
                        {product.price} EGP
                    </span>

                    {product.oldPrice && (

                        <span className="old-price">
                            {product.oldPrice} EGP
                        </span>

                    )}

                </div>

            </div>

        </div>

    );
};

export default MobilesCard;