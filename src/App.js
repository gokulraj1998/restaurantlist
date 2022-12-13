
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details from './Components/Details';
function App() {
  return (
    
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant/:id' element={<Details/>}/>
      </Routes>
  
    </Router>
  );
}

export default App;
