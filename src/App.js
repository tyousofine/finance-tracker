import './App.css';

// import router dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<Home />}></Route>

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
