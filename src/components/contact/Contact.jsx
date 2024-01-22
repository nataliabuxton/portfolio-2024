import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  font-family: "M PLUS Rounded 1c", sans-serif;

  @media (min-width: 768px) {

  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 450px;
    height: 100%;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "M PLUS Rounded 1c", sans-serif;


  @media only screen and (max-width: 768px) {
    justify-content: center;
    z-index: 3;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  font-family: "M PLUS Rounded 1c", sans-serif;

   @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  `;

const Form = styled(motion.form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  cursor: pointer;
  justify-content: center;
  

  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 80px
  }
`;

const StyledInput = styled(motion.input)`
  padding: 20px;
  background-color: #1B3038;
  border: white .5px solid;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  color: white;

`;

const StyledTextArea = styled(motion.textarea)`
  padding: 20px;
  border: white .5px solid;
  border-radius: 5px;
  background-color: #1B3038;
  color: white;
  font-size: 1rem;
  text-align: center;

`;

const StyledButton = styled(motion.button)`
  background-color: #1B3038;
  color: white;
  border: white .5px solid;
  font-weight: 200;
  cursor: pointer;
  border-radius: 5px;
  padding: 14px;
  width: 100%;
  font-size: 1.2rem;
  transition: background-color 0.6s;
`;

const Right = styled(motion.div)`
  flex: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();


    // emailjs
    //   .sendForm(
    //     "service_id",
    //     "template_id",
    //     ref.current,
    //     "public_key"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSuccess(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setSuccess(false);
    //     }
    //   );

  };

  const formVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form
            ref={ref}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover="hover"
            whiletap="tap"
            variants={formVariants}
          >
            <Title>Write To Me Here: </Title>
            <StyledInput
              placeholder="Your Name"
              name="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover="hover"
              whiletap="tap"
              variants={formVariants}
            />
            <StyledInput
              placeholder="Email"
              name="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover="hover"
              whiletap="tap"
              variants={formVariants}
            />
            <StyledTextArea
              placeholder="Type Your Message Here. ."
              name="message"
              rows={10}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover="hover"
              whiletap="tap"
              variants={formVariants}
            />
            <StyledButton
              type="submit"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              Send Message
            </StyledButton>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
