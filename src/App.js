import MainComponent from "./Components/MainComponent/MainComponent";
import ChooseParent from "./Components/ChooseParent/ChooseParent";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" children={<MainComponent />} />
          <Route path="/" exact children={<ChooseParent />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
