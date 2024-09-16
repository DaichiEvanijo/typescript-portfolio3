import { useRef, useState } from "react";
import { Accordion,Col, Container, Row, Stack } from "react-bootstrap";
import "./Swiper.css"

import slides from "../../data/slides";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/autoplay"

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import styles from "./Aboutme.module.css"

import accordionItems from "../../data/accordionItems"

type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Aboutme = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const isLoaded = useIntersectionObserver({
    options: [{ threshold: 0.1 }, { threshold: 0.1 }, { threshold: 0.1 }],
    refs: [text1Ref, text2Ref, text3Ref],
  });

  return (
    <Stack gap={5} className="mb-5">
      <Container>
        <Swiper
          modules={[Navigation, EffectFade, Pagination, Autoplay]}
          navigation
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          onSlideChange={handleSlideChange}
          speed={1000}
          slidesPerView={1}
          loop
          style={{ width: "100%", height: "80vh" }}
        >
          {slides.map((slide: Slide) => (
            <SwiperSlide key={slide.id} className="swiperslide">
              <img src={slide.image} alt="slide" style={{ width: "100%", height: "80vh" }} />
              <div className={`swipertext ${slide.id - 1 === activeIndex ? "active" : ""}`}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container>
        <Row>
          <Col className="text-center border-end border-3" md={7}>
            <Stack ref={text1Ref} className={isLoaded[0] ? styles.scaleChangeAppear : styles.scaleChangeHidden} >
              <h3>Willkommen</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit consequuntur ducimus porro culpa omnis perferendis, dolore laboriosam. Consectetur, eveniet incidunt consequuntur iusto voluptatum possimus sunt ratione quaerat excepturi, molestias quod eius voluptatibus. Animi iste in similique aperiam corporis est optio aliquam facere officiis ut, provident aut. Cupiditate, doloribus repellendus.</p>
            </Stack>
            <Stack ref={text2Ref} className={isLoaded[1] ? styles.scaleChangeAppear : styles.scaleChangeHidden}>
              <h3>Willkommen</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic provident ipsam sequi quia facilis. Deserunt assumenda provident quia, dicta illo aliquam iste nesciunt quis vitae distinctio? Voluptas nulla asperiores dolor, esse minima expedita velit libero facere facilis, doloremque labore. Atque facere saepe doloribus. Nobis obcaecati necessitatibus aspernatur voluptatum in.</p>
            </Stack>
          </Col>
          <Col md={5}>
            <Stack ref={text3Ref} className={`${isLoaded[2] ? styles.scaleChangeAppear : styles.scaleChangeHidden} text-center`}>
              <h3>Willkommen</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic provident ipsam sequi quia facilis. Deserunt assumenda provident quia, dicta illo aliquam iste nesciunt quis vitae distinctio? Voluptas nulla asperiores dolor, esse minima expedita velit libero facere facilis, doloremque labore. Atque facere saepe doloribus. Nobis obcaecati necessitatibus aspernatur voluptatum in.</p>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container>
        <Stack gap={3}>
          <p className="text-center fs-2">Fragen an Stefanie</p>
          <Accordion defaultActiveKey="0">
            {accordionItems.map(item => <AccordionItem item={item} key={item.id}/>)} 
          </Accordion>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Aboutme;



type AccordionItemProps ={
  item:{
    id:number,
    header:string,
    body:string
  }
}
const AccordionItem = ({item}:AccordionItemProps) => (
  <Accordion.Item eventKey={String(item.id)}>
    <Accordion.Header><div className="fs-4">{item.header}</div></Accordion.Header>
    <Accordion.Body>
      {item.body}
    </Accordion.Body>
  </Accordion.Item>
)
