import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Routes>



      </div>
    </BrowserRouter>

    
  );
}

export default App;
