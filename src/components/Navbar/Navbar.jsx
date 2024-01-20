import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
import CVDoc from "../../assets/NataliaBuxton_CV_Hosp.pdf";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const socialContainerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        >
        </motion.span>

        <motion.div
          className="social"
          variants={socialContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline-light"
              href={CVDoc}
              download="Natalia's CV"
              target="_blank"
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline-light"
              href="https://github.com/NataliaBuxton"
              target="_blank"
            >
              GitHub
            </Button>
          </motion.div>          
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline-light"
              href="#Contact"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
