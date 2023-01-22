import logo from './logo.svg';
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Protected from "./components/Protected";

import About from "./components/About";
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Channel from './components/Channel';
import Other from './components/Other';
import UseLocationEx from './components/UseLocationEx';


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/" element={<Protected Component={Home}/>}/>
 <Route path="/login" element={<Login/>}/>

 <Route path="/about" element={<Protected Component={About}/>}/>

<Route path="/user/:name" element={<User/>}/>
 {/* <Route path="/*" element={<Page404/>}/> */}
 <Route path="/*" element={<Navigate to="/" />}/>
 <Route path="/filter" element={<Protected Component={Filter}/>}/>
 <Route path="/uselocation" element={<UseLocationEx/>}/>

 <Route path="/contact/" element={<Contact/>}>

<Route path="company" element={<Company/>}/>
<Route path="channel" element={<Channel/>}/>
<Route path="other" element={<Other/>}/>

</Route>
 </Routes>
 </BrowserRouter>

    </div>
  );
}

export default App;
