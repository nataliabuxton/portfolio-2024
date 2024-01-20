import "./works.scss";
import { motion } from "framer-motion";

const Services = () => {
  const containerAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const boxAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleAnimation = {
    scale: 1.05, 
    transition: {
      duration: 1,
      ease: "easeInOut",
      easeOut: "easeOut",
    },
  };

  const scaleOutAnimation = {
    scale: 1,
    transition: {
      duration: 0.5, 
      ease: "easeOut", 
    },
  };

  return ( 
    <motion.div className="services" variants={containerAnimation} initial="hidden" animate="visible">
      <motion.div className="titleContainer">
        <motion.div className="title" variants={titleAnimation}>
          <h1>Creating Unique, Beautiful and <b>functional</b> Web Designs</h1>
        </motion.div>
        <motion.div className="title" variants={titleAnimation}>
          <h1>
            Here's a <b>Sneak Peak</b> at some of my popular projects.
          </h1>
        </motion.div>
        <motion.p className="subtitle" variants={titleAnimation}>
          <a href="https://github.com/nataliabuxton" target="_blank">
            Head over to my github to see them in action!
          </a>
        </motion.p>
      </motion.div>
      <motion.div className="listContainer" variants={boxAnimation}>
        <motion.div className="box box1" whileHover={scaleAnimation} animate={scaleOutAnimation}>
          <div className="boxText">
            <h2>Web Design</h2>
          </div>
        </motion.div>
        <motion.div className="box box2" whileHover={scaleAnimation} animate={scaleOutAnimation}>
          <div className="boxText">
            <h2>UX & UI Services</h2>
          </div>
        </motion.div>
        <motion.div className="box box3" whileHover={scaleAnimation} animate={scaleOutAnimation}>
          <div className="boxText">
            <h2>App & Mobile</h2>
          </div>
        </motion.div>
        <motion.div className="box box4" whileHover={scaleAnimation} animate={scaleOutAnimation}>
          <div className="boxText">
            <h2>App & Mobile</h2>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
