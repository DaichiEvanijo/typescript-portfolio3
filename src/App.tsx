
import { Routes, Route } from 'react-router-dom';import Home from './pages/Home/Home';
import { Navigate } from 'react-router-dom';

import Layout from './layout/Layout';

import Leistung1 from './pages/Leistungen/Leistung1';
import Leistung2 from './pages/Leistungen/Leistung2';
import Leistung3 from './pages/Leistungen/Leistung3';
import Leistung4 from './pages/Leistungen/Leistung4';
import Leistung5 from './pages/Leistungen/Leistung5';
import Forschung from './pages/Forschung/Forschung';
import Aboutme from './pages/Aboutme/Aboutme';
import Contact from './pages/Contact/Contact';

import Impressum from "./pages/ImpressumDatenschutz/Impressum"
import Datenschutz from "./pages/ImpressumDatenschutz/Datenschutz"

import {useLocation} from "react-router-dom"
import { useEffect } from 'react';



function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="leistung">
            <Route path='1' element={<Leistung1/>}/>
            <Route path="2" element={<Leistung2/>}/>
            <Route path="3" element={<Leistung3/>}/>
            <Route path="4" element={<Leistung4/>}/>
            <Route path="5" element={<Leistung5/>}/>
          </Route>
          <Route path="forschung" element={<Forschung/>}/>
          <Route path="aboutme" element={<Aboutme/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="datenschutz" element={<Datenschutz/>}/>  
          <Route path="impressum" element={<Impressum/>}/>  
          <Route path="*" element={<Navigate to="/" replace/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App


// ページの最初へscroll↓
const ScrollToTop = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  },[pathname])

  return null
}

// ページの最初でなくページの途中のrefが付いている場所に飛ぶ方法↓
// ページの上にbuttom、その中にonClickを設けてそれを使ってrefが付いているhtmlタグに飛ぶには
// ref.current.scrollIntoView({behavior:"smooth"})のようにscrollIntoViewメソッドを使う
