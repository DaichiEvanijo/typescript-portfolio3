import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import {  Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaYoutube } from "react-icons/fa";

import Hamburger from "hamburger-react"

import { useState } from "react"
import useWindowSize from "../hooks/useWindowSize"


type HeaderProps ={
  theme:string,
  setTheme:React.Dispatch<React.SetStateAction<string>>
}
const Header = ({theme, setTheme}:HeaderProps) => {
  
  const [isClicked, setIsClicked] = useState(false)
  const windowSize = useWindowSize()

  const items =[...Array(5).keys()].map(i => i + 1)
  // [1,2,3,4,5]の配列を作る
  
  return (
    <header className="sticky-top bg-body-tertiary bg-opacity-75">
      <Container className={styles.header} >
        <h1><Navbar.Brand as={Link} to="/" className="fs-4">Stefanie Lange</Navbar.Brand></h1>

        {767 >= windowSize ? (
          <Nav.Link as={Form} onClick={()=> setTheme(prev => prev === "light" ? "dark":"light")}>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label={theme=== "light"? "dark":"light"}
              className="m-0"
            />
        </Nav.Link>):""}

        <Nav className={`${styles["nav-ul"]} ${isClicked ? `${styles.navbarchange}` : ''}`}>
        {/* CSSモジュールでは、クラス名にハイフン（-）が含まれている場合、ドット表記ではなくブラケット表記（[]）を使用する必要があります。 */}

          <Nav.Link as={Link} to="/"  className="" onClick={() => windowSize < 767 ? setIsClicked(prev => !prev):null}>Home</Nav.Link>

          <NavDropdown title={<span className="">Leistung</span>} id="basic-nav-dropdown" >
            <div  className={styles.navdropdown}>
              {items.map((item, index) => 
                <NavDropdown.Item as={Link} to={`leistung/${item}`} className="" key={index}  onClick={() => windowSize < 767 ? setIsClicked(prev => !prev):null}>
                  Leistung{item}
                </NavDropdown.Item>
              )}
            </div>
          </NavDropdown>

          {767 <= windowSize && windowSize < 992 ? (
            <>
              <NavDropdown title={<span className="">Mehr</span>} id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to="aboutme"className="" >Über mich</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="forschung" className="" >Forschung</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="contact"className="" >Termin/Kontakt</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="https://www.youtube.com/@Ginjuu"  target="_blank"><FaYoutube size={24} /> Youtube</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Form} onClick={()=> setTheme(prev => prev === "light" ? "dark":"light")}>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label={theme=== "light"? "dark":"light"}
                    className="m-0"
                  />
               </Nav.Link>
            </>
          ) : ""}

          {992 <= windowSize || 767 >= windowSize ? (
            <>
              <Nav.Link as={Link} to="/aboutme" className="" onClick={() => windowSize < 767 ? setIsClicked(prev => !prev):null}>Über mich</Nav.Link>
              <Nav.Link as={Link} to="/forschung" className="" onClick={() => windowSize < 767 ? setIsClicked(prev => !prev):null}>Forschung</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="" onClick={() => windowSize < 767 ? setIsClicked(prev => !prev):null}>Termin/Kontakt</Nav.Link>
              <Link to="https://www.youtube.com/@Ginjuu"  target="_blank" className="" ><FaYoutube size={24} />{768 >= windowSize ?" Youtube":""}</Link>
              {992 <= windowSize ? (
                <Nav.Link as={Form} onClick={()=> setTheme(prev => prev === "light" ? "dark":"light")}>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label={theme=== "light"? "dark":"light"}
                    className="m-0"
                  />
               </Nav.Link>):""}
            </>
          ): ""}
        </Nav>
        
        {767 >= windowSize && (
          <div>
          <Hamburger toggled={isClicked} toggle={setIsClicked} size={24} />
        </div>)}

      </Container>
    </header>
  )
}

export default Header