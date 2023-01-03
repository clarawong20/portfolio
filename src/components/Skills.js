import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import coding from "../assets/img/coding.png";
import productDevelop from "../assets/img/productDevelop.png";
import MOffice from "../assets/img/MOffice.png";
import cad from "../assets/img/cad.webp";
import printing from "../assets/img/printing.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024 },
            items:3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464 },
            items:1
        },
        mobile: {
            breakpoint: {max: 464, min:0},
            items:1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>Here is a highlight of the technical skills I have developed through school, work, and extracurricular experiences!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={coding} alt="coding pic"/>
                                    <h5><strong>Programming</strong></h5>
                                    <h8>Python, React, Node JS, HTML, CSS, C, C++, Matlab, Figma</h8>
                                </div>
                                <div className="item">
                                    <img src={productDevelop} alt="productDevelopment pic" />
                                    <h5><strong>Product Development</strong></h5>
                                </div>
                                <div className="item">
                                    <img src={MOffice} alt="Microsoft office pic"/>
                                    <h5><strong>Microsoft Office</strong></h5>
                                </div>
                                <div className="item">
                                    <img src={cad} alt="cad pic"/>
                                    <h5><strong>Autodesk Inventor and Solidworks</strong></h5>
                                </div>
                                <div className="item">
                                    <img src={printing} alt="3D printing pic" />
                                    <h5><strong>3D Printing</strong></h5>
                                    <h6>Prusa and Ultimaker Cura</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}