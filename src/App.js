import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import Orders from './components/orders/Orders';
import Shop from './components/shop/Shop';
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
