import logo from './logo.svg';
import Login from './Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
function App() {
  /*
  <Routes>
        <Route path='/'  element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>*/ 
  return (
    <main className="App">
      <Login/>
      <Register/>
      <Home/>
    </main>
  );
}

export default App;
