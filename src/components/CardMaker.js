import "tachyons";
import Card from "./Card";

const CardMaker = ({ roboList }) => {
  const cardcomponents = roboList.map((robo) => {
    const id = robo.id;
    const name = robo.name;
    const username = robo.name;
    const email = robo.email;
    return (
      <Card
        key={id}
        name={`Name: ${name}`}
        username={`User aneme: ${username}`}
        email={`Email: ${email}`}
        img={`https://robohash.org/${id}?size=200x200`}
      />
    );
  });
  return <div className="CardMaker">{cardcomponents}</div>;
};

export default CardMaker;
