import "./App.css";
import Greeting from "./Greeting";
import Message from "./Message";
import Moodcard from "./Moodcard";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "10px",
        color: "orangered",
      }}
    >
      s<h1>Hello World!</h1>
      <Message />
      <Greeting name="Jeni" />
      <Moodcard mood="happy" />
    </div>
  );
}

export default App;
