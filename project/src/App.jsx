import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

import Register from "./components/Register";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoPageFound from './components/NoPageFound';
import Counter from './components/Counter';
import Counter2 from './components/06-12/Counter22';
import UseEffect from './components/06-12/UseEffect';






function App() {
  return (
   <div className="App">
    <Navbar />
      <Routes>
      <Route path='*' element={<NoPageFound />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Counter2' element={<Counter2/>}/>
        <Route path='/UseEffect' element={<UseEffect/>}/>

      
       
      


      </Routes>
      <footer/>
    </div>
  );
}

export default App;
