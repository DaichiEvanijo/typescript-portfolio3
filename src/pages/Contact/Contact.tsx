import { Button, Col, Container, Row, Stack } from "react-bootstrap"
import GoogleMapComponent from "../../components/GoogleMapComponent"

import HomeImage2 from "../../assets/HomeImage2.jpg"
import { Link } from "react-router-dom"
import { FaTelegramPlane } from "react-icons/fa"

import styles from "./Contact.module.css"


const Contact = () => {
  return (
    <Stack gap={5} className="mb-5">
      <section>
        <Container>
          <Row xs={1} md={2}  >
            <Col className="text-center overflow-hidden">
              <img src={HomeImage2} width="90%" className={styles.contactImg}/>
            </Col>
            <Col className="d-flex flex-column justify-content-center text-center py-4">
              <div className="fs-4">My Life is..</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit possimus hic a voluptates necessitatibus cum laborum iusto numquam sed dolore voluptatem doloribus corporis enim sequi vero, quis provident praesentium voluptas.</p>
              <Stack direction="horizontal" gap={2} className="mx-auto">
                <Link to="mailto:info@stefanie-lange.com"><Button variant="primary">Send Email</Button></Link>
                <Link to="https://t.me/geistheilerinstefanielange"  rel="noopener noreferrer" target="_blank"><Button variant="secondary">Über Telegram Nachricht senden <FaTelegramPlane size={24} /></Button></Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <GoogleMapComponent/>
        </Container>
      </section>
    </Stack>
  )
}

export default Contact