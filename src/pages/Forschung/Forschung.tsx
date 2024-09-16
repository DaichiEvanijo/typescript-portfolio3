import { Col, Container, Nav, Row, Stack, Tab } from "react-bootstrap"

import HeroImage1 from "../../assets/HomeImage1.jpg"
import tabItems from "../../data/tabItems"

import styles from "./Forschung.module.css"

const Forschung = () => {

  return (
    <Stack gap={5} className="mb-5" > 
      <section className={styles.firstSectionAnimation} >
        <div style={{height:"calc((100vh - 40px)/2)"}} className="position-relative">
          <img src={HeroImage1} alt="Hero Image" width="100%" height="100%" />
          <p className={`${styles.textAnimation1} position-absolute fw-bold fs-3 text-start`} style={{top:"40%", left:"10%"}} >lorem argan gaegjajr gaegija r fa gaega g a  aaff </p>
        </div>
        <div style={{height:"calc((100vh - 40px)/2)"}} className="d-flex justify-content-center align-items-center" >
          <p className={`${styles.textAnimation2} fs-5 fw-bold text-start p-5`} >lorem argan gaegjajr gaegija r fa gaega g a  aaff </p>
        </div>
      </section>
      <section>
        <Container>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam quas vel obcaecati sapiente, perferendis, voluptatem error ex dignissimos enim, ea odit neque necessitatibus recusandae! Ea doloremque id fugiat repellat, obcaecati non sit recusandae quae dolorum eius qui asperiores eos, fuga distinctio fugit harum, nihil optio ad laboriosam voluptate laborum aperiam eveniet? Dicta provident veniam laboriosam, laudantium nihil sed cumque, dolorum praesentium ipsum nemo quibusdam. Saepe quasi adipisci aliquid fuga, sit doloremque. Optio vel ut beatae ullam nobis hic. Tenetur, modi ab, dolores esse ipsam sequi earum cum asperiores, repudiandae corporis dolorem perferendis iusto quasi possimus dicta exercitationem pariatur labore.</p>
        </Container>
      </section>
      <section>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column text-center">
                  {tabItems.map(item => <TabItem key={item.id} item={item}/>)}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {tabItems.map(item => <TabContent key={item.id} item={item}/>)}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

    </Stack>
  )
}

export default Forschung




type TabItemProps ={
  item:{
    id:number, 
    name:string,
    text:string
  }
}
const TabItem = ({item}:TabItemProps) => (
  <Nav.Item>
    <Nav.Link eventKey={item.name} >{item.name}</Nav.Link>
  </Nav.Item>
)
const TabContent = ({item}:TabItemProps) => <Tab.Pane eventKey={item.name}>{item.text}</Tab.Pane>
