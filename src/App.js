import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <Routes>
      <Switch>
      <Route path="/about" exact component ={About}/>
        <Route path="/" exact component ={Home}/>
      </Switch>
    </Routes>
  );
}

export default App;
