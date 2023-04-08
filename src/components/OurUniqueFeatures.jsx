import freeShippingIcon from "images/icons/free_shoping.svg";
import quickPaymentIcon from "images/icons/quick_payment.svg";
import supportIcon from "images/icons/24_support.svg";

export const OurUniqueFeatures = () => {
  return (
    <div className="our-unique-features">
      <div className="our-unique-features__item">
        <img src={freeShippingIcon} alt="Free shipping Icon" />
        <div className="text-content-shipping">
          <p className="our-unique-features__title">Free Shipping</p>
          <p className="our-unique-features__description">
            No charge for each delivery
          </p>
        </div>
      </div>
      <div className="our-unique-features__item">
        <img src={quickPaymentIcon} alt="Quick payment Icon" />
        <div className="text-content-payment">
          <p className="our-unique-features__title">Quick Payment</p>
          <p className="our-unique-features__description">
            100% secure payment
          </p>
        </div>
      </div>
      <div className="our-unique-features__item">
        <img src={supportIcon} alt="24-7 Support Icon" />
        <div className="text-content-support">
          <p className="our-unique-features__title">24/7 Support</p>
          <p className="our-unique-features__description">Quick support</p>
        </div>
      </div>
    </div>
  );
};
