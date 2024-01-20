import { useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
    const [open, setOpen] = useState(false);


    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                delay: 0.8,
                stiffness: 200,
                damping: 40,
            },
        },
    };

    const textVariants = {
        open: {
            opacity: 1,
            transition: {
                delay: 0.5, 
            },
        },
        closed: {
            opacity: 0,
        },
    };

  return <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <motion.div className="navLogo" variants={variants}>
            <motion.h1 
            variants={textVariants}
            animate={open ? "open" : "closed"}     >
                NB</motion.h1>
        </motion.div>
            <Links />
        </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>;

};

export default Sidebar;