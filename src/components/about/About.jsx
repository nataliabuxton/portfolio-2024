import React, { Suspense } from "react";
import "./about.scss";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, StatsGl } from "@react-three/drei";
import CloudComponent from "./Cloud.jsx";
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Section = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 200;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0%;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  gap: 6px;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 2em;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 200;
  text-align: center;
  text-decoration: underline 0.5px solid white;
`;

const BodyTxt = styled(motion.p)`
  font-size: 1em;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 200;
  line-height: 1.5;
  color: white;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  justify-content: flex-center;
`;

const Img1 = styled.img`
  width: 140px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 1;
  right: 20%;
  margin: auto;
  animation: animate 1.2s infinite ease alternate;
  z-index: 10;
  opacity: 70%;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Img1a = styled.img`
  width: 160px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 40%;
  bottom: 2%;
  right: 10%;
  margin: auto;
  animation: animate 1.5s infinite ease alternate;
  z-index: 10;
  opacity: 30%;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Img2 = styled.img`
  width: 190px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 2;
  left: 8%;
  margin: auto;
  animation: animate 1.6s infinite ease alternate;
  z-index: 10;
  opacity: 20%;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Img3 = styled.img`
  width: 220px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 3;
  bottom: 0;
  right: 1;
  left: 0;
  margin: auto;
  animation: animate 1.8s infinite ease alternate;
  z-index: 10;
  opacity: 40%;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Img4 = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 10%;
  margin: auto;
  animation: animate 2.3s infinite ease alternate;
  z-index: 10;
  opacity: 20%;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <CloudComponent />
            </Suspense>
          </Canvas>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Img1 src="./3dhero.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <Img1a src="./3dhero.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
          >
            <Img2 src="./3dhero.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          >
            <Img3 src="./3dhero.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 5 }}
          >
            <Img4 src="./3dhero.png" />
          </motion.div>
        </Left>
        <Right>
          <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me:
          </Title>
          <BodyTxt
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          Hey, I'm  <b> Natalia! </b> By day, I'm diving into the tech world, focusing on development—front-end and UX/UI are my playgrounds. 
          But after work hours, you'll catch me soaking up the creative vibes in the performance scene. With a background in Psychology and Music Production & Performance, 
          I bring a diverse set of skills and a genuine love for putting on a show. It's all about finding the perfect balance between code and creativity!          
          </BodyTxt>
          <BodyTxt
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Beyond my professional pursuits, I currently reside in the countryside with my Samoyed and cats, cultivating an 
            environment that balances nature with technology. Embracing a commitment to continuous self-improvement, 
            I consistently work on honing my skills and expanding my knowledge.
          </BodyTxt>
          <BodyTxt
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Recognized for my strong work ethic, excellent communication, and problem-solving skills, 
            I'm currently immersed in self-paced training to excel in development. My proficiency extends beyond coding; 
            I possess a deep understanding of color theory, experimental design methods, and the ability to create compelling digital art. 
          </BodyTxt>
          <BtnContainer>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button href="#" type="button" className="btn btn-dark outline-none">
                Meet the Animals
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Button href="#" type="button" className="btn btn-dark outline-none">
                See My Travels
              </Button>
            </motion.div>
          </BtnContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
