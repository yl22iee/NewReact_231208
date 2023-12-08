import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "James";
  const color = ["red", "green", "yellow", "Blue", "Black"];
  const menu = [
    {
      id: 1,
      name: "Pizza",
    },
    {
      id: 2,
      name: "Hamburger",
    },
    {
      id: 3,
      name: "Pasta",
    },
  ];

  return (
    <>
      <p className="orange">{`Hello ${name}`}</p>
      {/* 문자열과 조합하여 jsx를 사용하고자 한다면 templeString(``)으로 묶어서 변수와 같이 사용할 수 있다. */}

      <p className="orange">Hello {name}</p>
      <p>Hello my name is {name}</p>
      <h3>The Color</h3>
      {/* <p className="box">Box1</p> */}
      {color.map((data) => (
        <li>{data}</li>
      ))}
    </>
  );
}

export default AppJSX;
