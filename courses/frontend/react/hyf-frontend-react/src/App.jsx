{
  /*import Greeting from "./components/greeting";
import Card from "./components/Card";
import Cards from "./components/cards";
import Person from "./components/person";
import DangerButton from "./components/dangerbtn";
import TextInput from "./components/Textinput"; 
import ProfileImage from "./components/ProfileImage";*/
}
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <>
      <h1>Reusable Component</h1>
      <Button text="Click Me" onClick={handleClick} />
      <div className="card-grid">
        <Card
          title="Landscape"
          description="A peaceful view of mountains."
          imageUrl="/landscape.jpg"
        />
        <Card
          title="Ocean"
          description="Blue water and waves."
          imageUrl="/ocean.jpeg"
        />
        <Card
          title="forest"
          description="A calm green forest."
          imageUrl="/forest.jpg"
        />
      </div>
    </>
  );
}
export default App;
