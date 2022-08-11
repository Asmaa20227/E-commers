  
import  Product from './component/Product';
import Navbar from './component/Navbar';
import './App.css' ;
import {Route,Routes} from 'react-router-dom'
 import Cart from './component/Cart';
import Home from "./component/Home";
import Singleproduct from './component/Singleproduct';
import Checkout from "./component/Checkout"


function App() {
 return (  
    <div> 
     
   <Navbar/>

  <Routes>
   
  <Route  path="/" element={<Home/>} />  
  <Route  path="/Product" element={<Product/>} /> 
  <Route  path="/Cart" element={<Cart/>} />
  <Route  path="/Checkout" element={< Checkout/>} />       
  <Route  path="/Product/:id" element={<Singleproduct/>} />  
    
       
     </Routes>
   
   
 </div>
 );

  
}

export default App;
