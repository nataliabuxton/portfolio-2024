import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './tech.scss';

const Tech = () => {
  const [imagesVisible, setImagesVisible] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setImagesVisible(false);
    setTimeout(() => {
      alert('oops, theyve vanished. click ok to bring them back');
      setImagesVisible(true); 
    }, 500); 
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 10, duration: 1 } },
  };

  return (
    <div className="section">
      <div className="textContainer">
        <motion.h1 className="title" variants={titleVariants} initial="hidden" animate="visible">
          My Stack
        </motion.h1>
        <motion.h2 className="subtitle" variants={subtitleVariants} initial="hidden" animate="visible">
          Below are the resources I used to create this portfolio:
        </motion.h2>
      </div>
      <AnimatePresence>
        {imagesVisible && (
          <>
            <motion.div className="left-col" variants={containerVariants} initial="hidden" animate="visible">
              <motion.img
                src="/atoms.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
                <motion.img
                src="/html-5.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
              <motion.img
                src="/bootstrap.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
              <motion.img
                src="/css-3.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
              <motion.img
                src="/tailwindcss.svg"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
            </motion.div>
            <motion.div className="right-col" variants={containerVariants} initial="hidden" animate="visible">
              <motion.img
                src="/sass.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
                <motion.img
                src="/js.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
              <motion.img
                src="/vite.svg"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
              <motion.img
                src="/Three.js_Icon.svg.png"
                alt=""
                variants={imageVariants}
                whileHover={{ y: -20, scale: 1.1 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="btnContainer">
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={handleButtonClick}
        >
          Click Me
        </motion.button>
      </div>
    </div>
  );
};

export default Tech;
