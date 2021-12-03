import { Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/home/:id" exact component={Detail} />
    </BrowserRouter>
  );
}

export default App;
