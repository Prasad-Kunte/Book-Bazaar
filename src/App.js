import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontent from './Homecontent';
import {Link} from 'react-router-dom'
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit';


function App() {
  return (
    <>
   
   <Navbar/>
  <Homecontent/>
   <Footer></Footer>
   </>
   
  );
}

export default App;
