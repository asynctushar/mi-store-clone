import Offer from "./Offer";
import '../styles/Offers.css';

const Offers = ({ offer }) => {
    return (
        <div className="offerSection">
            {offer.map((item, index) => (
                <Offer key={index} index={index} src={item.image} link={item.url} />
            ))}
        </div>
    );
}

export default Offers;