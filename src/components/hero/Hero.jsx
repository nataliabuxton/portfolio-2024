import React, { useState, useEffect, Suspense } from "react";
import "./hero.scss";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Button from "react-bootstrap/Button";


const Section = styled.div`
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
    z-index: 1;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 200px) !important;
    position: relative;
    scroll-snap-align: none;
  }`
  ;


const Container = styled.div`
height: 100%;
width: 100%;
padding-left: 100px;
display: flex;
justify-content: space-between;
z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
width: 100%;
height: 100%;
display: flex;
padding-bottom: 250px;
flex-direction: column;
justify-content: center;
gap: 4px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 8px;
    margin-left: -50px;
    display: flex;
    flex-direction: column;
  }
`;

const LeftMain = styled.div`

  @media only screen and (max-width: 768px) {
    padding-top: 200px;
    padding-left: 30px;
  }
}`;

const Title = styled.h1`
font-family: "M PLUS Rounded 1c", sans-serif;
font-weight: 300;
font-style: normal;
font-size: 42px;
color: black;
text-transform: uppercase;
letter-spacing: 11px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
    display: flex;
    align-items: center;
    letter-spacing: 5px;
  }
`;

const Sub = styled.h2`
  font-size: 30px;
  color: azure;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 200;
  letter-spacing: 7px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding-top: 20px;
  }
`;


const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  position: relative;
  z-index: 100;
  display: inline-block;
  overflow: true;
  

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    z-index: -1;
    
  }
`;

const SlidingMain = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
    height: -50%;
    width: 0%;
  }`;


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
    display: none;
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
opacity: 70%;

  @media only screen and (max-width: 768px) {
    display: none;
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
opacity: 80%;

  @media only screen and (max-width: 768px) {
    display: none;
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
opacity: 90%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Img4 = styled.img`
width: 700px;
height: 500px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 40%;
margin: auto;
animation: animate 2.3s infinite ease alternate;
z-index: 10;
opacity: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    },
  },
};


const CanvasContainer = styled.div`
  height: 100%;

  @media only screen and (max-width: 768px) {
    height: 40vh;
    padding-right: 100px;
    padding-top: 100px;
  }
`;


const Hero = () => {


  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const originalText = "Hi, I'm Natalia";
    let currentIndex = 0;
    let isTyping = true;

    const updateText = () => {
      if (isTyping) {
        setDisplayedText(originalText.substring(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        setDisplayedText(originalText.substring(0, currentIndex - 1));
        currentIndex -= 1;
      }

      if (currentIndex === originalText.length) {
        isTyping = false;
        setTimeout(() => {
          isTyping = true;
        }, 800); 
      }

      if (currentIndex === 0 && !isTyping) {
        isTyping = true;
        setTimeout(() => {
          setDisplayedText("");
        }, 1000); 
      }
    };

    let intervalId = setInterval(updateText, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section>
      <Container>
        <LeftMain>
        <Left
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Title variants={textVariants}>{displayedText}</Title>
            <Sub variants={textVariants}>A Frontend Developer & <br /> UX/UI Designer</Sub>
            <Button className="btn btn-light"
             href="https://github.com/nataliabuxton/kikagram"
             target="_blank"
             > 
             See what Im working on at the moment!
             </Button>
          </motion.div>
        </Left>
        </LeftMain>
        <SlidingMain>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Design, Create, Perfect, Initiate
        </motion.div>
        </SlidingMain>
        <Right>
        <CanvasContainer>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 1]} />
          <Sphere args={[1, 60, 1340]} scale={[2.1, 2.1, 2.1]}>
            <MeshDistortMaterial
              clearcoat={2}
              roughness={1}
              color="#35484F"
              attach="material"
              distort={0.55}
              speed={1.2}
            />
          </Sphere>
      </Canvas>
    </CanvasContainer>
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
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
