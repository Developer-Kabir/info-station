import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='slider' element={<Slider></Slider>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
