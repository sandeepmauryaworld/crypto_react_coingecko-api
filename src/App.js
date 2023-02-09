
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchnages from './components/Exchnages'
import CoinDetails from './components/CoinDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coins" element={<Coins/>}/>
          <Route path='/exchange' element={<Exchnages/>} />
          <Route path='/coin/:id' element={<CoinDetails/>}/>
            
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
