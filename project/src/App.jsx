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
import UseEffect from './components/06-12/UseEffect';
import Counter22 from './components/06-12/Counter22';
import Useeffect2 from './components/08-12/Useeffect2';
import Useeffect3 from './components/08-12/Useeffect3';
import Useeffect4 from './components/08-12/Useeffect4';
import Useparams from './components/08-12/Useparams';
import Dynamicrouting from './components/08-12/Dynamicrouting';
import Propsmaps from './components/09-12/Propsmaps'
import { useState } from 'react';
import Mapobject from './components/09-12/Mapobject';
import Styledcomponent from './components/09-12/Styledcomponent';
import Childrenprop from './components/10-12/Childrenprop';

import Registerform from './components/10-12/Registerform';
import Jss from './components/10-12/Jss';
import Loginform from './components/15-12/Loginform';
import AllProducts from './components/16-12/AllProducts';
import ChildToParent from './components/16-12/ChildToParent';
import Singleproduct from './components/20-12/Singleproduct';
import Usememo from './components/22-12/Usememo';
import Callback from './components/23-12/Callback';
import Usereducer from './components/24-12/Usereducer';








function App() {
  
     const [myName, setmyname] =useState ("krushna")

     const [students, mystudents]= useState([{image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name:"virat", marks:"100"},{image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name:"rohit", marks:"100"},{image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name:"rahul", marks:"100"}])

     function Changename(){
      setmyname("krushna daw")
     }



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
        <Route path='/Counter2' element={<Counter22/>}/>
        <Route path='/useeffect' element={<UseEffect/>}/>
        <Route path='/useeffect2' element={<Useeffect2/>}/>
        <Route path='/useeffect3' element={<Useeffect3/>}/>
        <Route path='/useeffect4' element={<Useeffect4/>}/>
        <Route path='/useparams' element={<Useparams/>}/>
        <Route path='/dynamicrouting' element={<Dynamicrouting/>}/>
        <Route path='/use-params/:age' element={<Useparams/>} />
        <Route path='/propsmaps' element={<Propsmaps krish={myName} myage="25" anything={Changename} students={["shahbaz", "devesh", "bhoami", "akash"]}/>} />
        <Route path='/mapobject' element={<Mapobject mystudentsdata={students}/>}/>
        <Route path='/styledcomponent' element={<Styledcomponent/>}/>  
        <Route path='/childrenprop' element={<Childrenprop/>}/>  
        <Route path='registerform' element={<Registerform/>}/>
        <Route path='jss' element={<Jss/>}/>
        <Route path='loginform' element={<Loginform/>}/>
        <Route path='/child-to-parent' element={<ChildToParent/>} />
        <Route path='/all-products' element={<AllProducts/>} />
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='usememo' element={<Usememo/>}/>
        <Route path='Callback' element = {<Callback/>}/>
        <Route path='usereducer' element= {<Usereducer/>}/>    


      </Routes>
      <footer/>
    </div>
  );
}

export default App;
