import { Col, Container, Row, Stack } from "react-bootstrap"
import { Link} from "react-router-dom"
import { FaInstagram,  FaTelegramPlane,  FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row xs={1} md={3} className="mx-auto text-center">
          <Col className="p-3 border">
            <Stack>
              <p className="fs-4">Pages</p>
              <Link to="/" className="" preventScrollReset={false}>Home</Link>
              <Link to="/leistung/1" className="">Leistungen</Link>
              <Link to="/forschung" className="">Forschung</Link>
              <Link to="/aboutme" className="">Über mich</Link>
              <Link to="/contact" className="">Contact</Link>
            </Stack>
          </Col>
          <Col className="p-3 border">
            <p className="fs-4">Kontakt</p>
            <div className="fs-6">Kurfürstenstraße 31</div>
            <div className="fs-6">40211 Düsseldorf Deutschland</div>
            <br/>
            <div className="fs-6">+49160-5072036</div>
            <div className="fs-6">info@stefanie-lange.com</div>
          </Col>
          <Col className="p-3 border">
            <p className="fs-4">Socials</p>
            <Stack gap={3}>
              <Link to="https://www.youtube.com/@Ginjuu"  target="_blank" className="" ><FaYoutube size={24} /> Youtube</Link>
              <Link to="/"  target="_blank" className="" ><FaInstagram size={24} /> Instagram</Link>
              <Link to="https://t.me/geistheilerinstefanielange"  rel="noopener noreferrer" target="_blank" className="" ><FaTelegramPlane size={24} /> Telegram</Link>
            </Stack>
          </Col>
        </Row> 
        <Row className="text-center mt-4">
          <Col>
            <p><span>&copy;{new Date().getFullYear()} -Stefanie Lange- </span> <span><Link to="/datenschutz" className=" text-decoration-underline">Datenschutz</Link></span> <span><Link to="/Impressum" className=" text-decoration-underline">Impressum</Link></span></p>
          </Col>
        </Row> 
    </Container>
    </footer>
  )
}

export default Footer