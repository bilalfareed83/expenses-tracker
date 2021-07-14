import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";
import { TransationProvider } from "./transationContext";

function App() {
  return (
    <TransationProvider>
      <Child />
    </TransationProvider>
  );
}

export default App;
