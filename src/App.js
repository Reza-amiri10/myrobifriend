import Card from "./Card";
import "tachyons";
import "./App.css";
function App() {
  const roboList = [
    { name: "Mamy MO", email: "mamymo@gamil.com" },
    { name: "Dady MO", email: "dadymo@gmail.com" },
    { name: "Bory MO", email: "borymo@gamil.com" },
    { name: "Sisy MO", email: "sisymo@gamil.com" },
  ];

  return (
    <div className="App t-row items-center">
      <Card
        name={roboList[0].name}
        email={roboList[0].email}
        img="https://robohash.org/mamy mo"
      />
      <Card
        name={roboList[1].name}
        email={roboList[1].email}
        img="https://robohash.org/dady%20mo"
      />
      <Card
        name={roboList[2].name}
        email={roboList[2].email}
        img="https://robohash.org/borom mo"
      />
      <Card
        name={roboList[3].name}
        email={roboList[3].email}
        img="https://robohash.org/sisi%20mo"
      />
    </div>
  );
}

export default App;
