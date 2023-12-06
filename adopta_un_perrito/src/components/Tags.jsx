import Badge from "react-bootstrap/Badge";

const CardBadge = ({ color, text }) => {
  return (
    <div>
      <h2>
        <Badge color={color}>{text}</Badge>
      </h2>
    </div>
  );
};

export default CardBadge;
