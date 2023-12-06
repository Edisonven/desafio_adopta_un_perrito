import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard({ url, name, description }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card__img" variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card>
    </>
  );
}

export default MyCard;
