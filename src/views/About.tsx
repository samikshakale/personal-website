// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import linkedinIcon from "../assets/icons8-linkedin (1).svg";
import githubIcon from "../assets/icons8-github.svg";
import emailIcon from "../assets/email-icon.svg";
// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-1 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            
          I graduated from Carnegie Mellon University as a CS major with a minor in ML. 
          <br></br>
          <p className="text-center xl:text-start text-base sm:text-lg text-secondary">
          Work Experience
          </p>
          <ul className="list-disc list-inside">
            <li>
            Sep '23 - present: Data Engineer at Hildreth Institute
            </li>
            <li>
            Aug '21 - May '23: Teaching Assistant for ML Department at CMU
            </li>
            <li>
            Jun '22 - Aug '22: Machine Learning Engineer Intern at Acuity Diagnostics
            </li>
            <li>
            Oct '21 - May '22: Data Science Intern at CMU Software Engineering Institute
            </li>
          </ul>
          <br></br>  
          I've done predictive maintenance 
          modeling, built computer vision pipelines, created a RAG-assisted chatbot application,
          made a chrome extension, coded this website, and so much more.

          <br></br>  
          <br></br> 
          Feel free to <span className="text-secondary">connect</span> with me, check out my <span className="text-secondary">projects</span>, or <span className="text-secondary">reach</span> out!
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            {/* <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube" /> */}
            <a href="https://www.linkedin.com/in/samikshakale/" target="_blank">
            <SocialMediaIcon imgSrc={linkedinIcon} title="LinkedIn" />
            </a>
            <a href="https://github.com/samikshakale" target="_blank">
            <SocialMediaIcon imgSrc={githubIcon} title="Github" />
            </a>
            <a href="mailto:samikshakale@gmail.com">
            <SocialMediaIcon imgSrc={emailIcon} title="Email" />
            </a>

            
            
            
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
