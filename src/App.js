import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
function App(props) {
  const flg = props.flag;
  console.log(props.flag)
  if (flg) {
    return <App1 />;
  } else {
    return <App2 />;
  }
}

export default App;