import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, TypeBold } from "react-bootstrap-icons";
import profilePic from "../assets/img/profilePic.webp";
import CTA from './CTA';
import 'animate.css';

export const Banner = () => {
    const[loopNum, setLoopNum] = useState(0); /* 0 since starting at first word in list*/
    const[isDeleting, setIsDeleting]=useState(false); /*initially set at false since start off typing*/
    const toRotate = ["She/her", "Electrical Engineer", "Biomedical Engineer"];
    const[text, setText] = useState('');
    const[delta, setDelta]=useState(300-Math.random()*200); /*how fast one letter comes after the first one is typed*/
    const [index, setIndex] = useState(1);
    const period=100; /*time between each word typed*/

    useEffect(()=> {       
        let ticker=setInterval(()=> {
            tick();
        }, delta);
        return() => { clearInterval(ticker)};
    },[text] )

    const tick=() => {
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(isDeleting) { /*makes deleting pace different than typing (slower) */
            setDelta(prevDelta => prevDelta*0.75);
        }
        /*checks if finished typing word*/
        if(!isDeleting && updatedText ===fullText) { 
            setIsDeleting(true);
            setDelta(period); /*set speed to normal pace*/
        }
        /*finished deleting*/
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1); /*moves to next text*/
            setIndex(1);
            setDelta(500);
        }
        else{
            setIndex(prevIndex => prevIndex+1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1> {"Hi! I'm Clara Wong "}</h1>
                        <h3><span className="wrap">{text}</span></h3>
                        <p>An enthusiastic, resilient, and passionate <strong>electrical and biomedical engineering </strong> student at McMaster University. Currently seeking industry experience and opportunities to broaden my knowledge in the technological field, with an interest in front-end and back-end development and biomedical engineering. I look forward to connecting with you!</p>
                        <Col xs={8} md={6} xl={3}>
                            <CTA/>
                        </Col>
                        <a href="#contact" className="noline"><button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={profilePic} alt ="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}