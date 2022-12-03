import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom'
import Home from "./components/Home"

function App() {
  return (
    <Routes>
      <Switch>
        <Route path="/" exact component ={Home}/>
      </Switch>
    </Routes>
  );
}

export default App;
