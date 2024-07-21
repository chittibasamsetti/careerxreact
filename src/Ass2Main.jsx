import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Ass2 from './Ass2'
import Ass2create from './Ass2create'
import "./Ass2.css"
import { IoHomeOutline} from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

export default function Ass2Main() {
  return (
    <div>
        <Router>

            <div className="nav">
                <Link to="/home"><IoHomeOutline />Home</Link>
                <Link to="/about"><FcAbout />About</Link>
                <Link to="/contact"><IoIosContact />Contact</Link>
                <Link to="/ass2"><IoLogInSharp />Login</Link>
                <Link to="/ass2create"><GiArchiveRegister />Register</Link>
            </div>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/ass2" element={<Ass2/>}></Route>
                <Route path="/ass2create" element={<Ass2create/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}
