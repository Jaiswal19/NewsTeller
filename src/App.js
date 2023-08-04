import  './App.css';
import Navbar from './Components/Navbar'
import React,{Component} from 'react'
import News from './Components/Newsmain'
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom'
import Design from './Components/Design/Design';
export default class App extends Component{
  //  c="kamine";
   render(){
    // console.log(this.c);
    return(
       <div>
         <Design/>
           <Router>
           <Navbar ></Navbar>
           <Routes>
            <Route exact path="/india" element={<News key="India"  pagesize={9} country='in' ></News>}></Route>
            <Route exact path="/United States" element={<News key="United States"  pagesize={9} country='us' ></News>}></Route>
            <Route exact path="/Ukraine" element={<News key="Ukraine"  pagesize={9} country='ua' ></News>}></Route>
            <Route exact path="/Japan" element={<News key="Japan"  pagesize={9} country='jp' ></News>}></Route>
            <Route exact path="/South Korea" element={<News key="South Korea" pagesize={9} country='kr' ></News>}></Route>
            <Route exact path="/Dutch" element={<News key="Dutch" pagesize={9} country='nl' ></News>}></Route>
           </Routes>
           </Router>
       </div>
    )
  }
}
