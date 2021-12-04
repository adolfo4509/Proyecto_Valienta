import { Route, BrowserRouter } from "react-router-dom";
import CardsEpisode from "./components/CardsEpisode";
import Detail from "./components/Detail";
import Episodes from "./components/Episodes";
import Home from "./components/Home";
import CardsLocalization from "./components/CardsLocalization";
import Location from "./components/Location";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/home/:id" exact component={Detail} />
      <Route path="/episode" exact component={Episodes} />
      <Route path="/location" exact component={Location} />
      <Route path="/episode/:id" exact component={CardsEpisode} />
      <Route path="/location/:id" exact component={CardsLocalization} />
    </BrowserRouter>
  );
}

export default App;
