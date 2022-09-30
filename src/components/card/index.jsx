import "./style.css";

const Card = ({ card }) => {
  return (
    <li className="card">
      <img src={card.image} alt={card.code} />
    </li>
  );
};

export default Card;
