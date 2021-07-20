import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { TransationProvider } from "./transationContext";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <TransationProvider>
      <Child />
    </TransationProvider>
  );
}

export default App;
