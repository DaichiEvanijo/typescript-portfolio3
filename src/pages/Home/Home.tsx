import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap"
import HeroImage1 from "../../assets/HomeImage1.jpg"
import HomeImage2 from "../../assets/HomeImage2.jpg"

import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { useRef } from "react"
import styles from "./Home.module.css"


import cards from "../../data/cards"
import { Link } from "react-router-dom"

const Home = () => {
  const section1Ref = useRef<HTMLParagraphElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const isLoaded = useIntersectionObserver({
    options: [{threshold:0},{threshold: 0.4}, {threshold:0.4},{threshold:0.2}],
    refs: [section1Ref, section2Ref, section3Ref, section4Ref],
  });

  return (
    <Stack gap={5} className="mb-5">
      <section style={{height:"calc(100vh - 40px)"}} className="position-relative">
        <img src={HeroImage1} alt="Hero Image" width="100%" height="100%"/>
        <p ref={section1Ref} style={{top:"50%", left:"10%"}} className={`position-absolute fs-2 fw-bold ${isLoaded[0] ? styles.appear1 : styles.hidden1}`} >Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. Nobis, nihil Loremdistinctio<br/> inventore i ex!fmag gagef z:;  gag</p>
      </section>
      <section>
        <Container>
          <Row xs={1} md={2}>
            <Col ref={section2Ref} className={`d-flex flex-column align-items-center justify-content-center ${isLoaded[1] ? styles.appear2 : styles.hidden2}`}>
              <div className="fs-4">My Life is..</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit possimus hic a voluptates necessitatibus cum laborum iusto numquam sed dolore voluptatem doloribus corporis enim sequi vero, quis provident praesentium voluptas.</p>
            </Col>
            <Col ref={section3Ref} className={`${isLoaded[2] ? styles.appear3 : styles.hidden3}`}>
              <img src={HomeImage2} width="110%" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Stack gap={4}>
            <div className="text-center fs-4">Leistungen</div>
            <Row ref={section4Ref} xs={1} sm={2} md={3} xl={5} className={`justify-content-center align-items-center row-gap-4 ${isLoaded[3] ? styles.appear4 : styles.hidden4}`}>
              {cards.map(card => <CardItem key={card.id} card={card}/>)}
            </Row>
          </Stack>
        </Container>
      </section>
    </Stack>
  )
}

export default Home






type CardItemProps ={
  card:{
    id:number, 
    image:string,
    title:string,
    text:string,
    linktext:string,
    linkto:string
  }
}
export const CardItem = ({card}:CardItemProps) => {
  return (
    <>
     <Col className="d-flex justify-content-center">
      {/* <Col>にclassName="d-flex justify-content-center"を加えたのはxs=1の時にcardがページの真ん中ン来るため */}
      <Card style={{ width: '15rem' }} className={styles.card}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Link to={card.linkto}><Button variant="primary">{card.linktext}</Button></Link>
        </Card.Body>
    </Card>
  </Col>
    
    </>
  )
 
}