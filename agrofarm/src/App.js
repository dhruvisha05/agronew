import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css'
import Home from './Component/Home';
import About from './Component/About';
import Produce from './Component/Produce';
import Blog1 from './Component/Blog1';
import Pages from './Component/Pages';
import Contacts from './Component/Contacts';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
      
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/About" element={<About/>} exact />
          <Route path="/Produce" element={<Produce/>} exact />
          <Route path="/Blog1" element={<Blog1/>} exact />
          <Route path="/Pages" element={<Pages/>} exact />
          <Route path="/Contacts" element={<Contacts/>} exact />
        </Routes>
      </div>

    </>

  );
}

export default App;
