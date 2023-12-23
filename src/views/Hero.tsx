// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import  pdf  from "../types.s";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const resumePDF = pdf("Kale_Samiksha_Resume.pdf");

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
        <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className= "text-center xl:text-start text-2xl sm:text-4xl lg:text-6xl text-textPrimary"
          >
            Hi there! <br />
            My name is Samiksha Kale and I'm  
          
          {/* <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
            font-bolt text-textPrimary uppercase"
          > */}
            <span className="text-secondary">
              <Typewriter
                words={[" a ML Enthusiast", " an Avid Coder", " a Passionate Engineer"]}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                loop
              />
            </span>
          {/* </motion.h1> */}
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <a href={resumePDF} download>
            <Button icon={downloadIcon}>Resume</Button>
            </a>
              
            
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
