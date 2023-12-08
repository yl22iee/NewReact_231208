import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handler = (event) => {
    console.log(event);
    alert("click");
  };

  return (
    <>
      <button onClick={handler}>Button</button>
      <Avatar
        image="https://images.unsplash.com/photo-1652218061723-b5b10987f20d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        Isnew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1573088519247-069df372509a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="John"
        job="fighter"
        Isnew={true}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="James"
        job="Sufer"
      />
    </>
  );
}

export default AppProfile;
