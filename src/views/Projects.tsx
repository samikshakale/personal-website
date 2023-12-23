// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "frontend" | "aiml";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("aiml");

  const filteredProjects = () => {
    if (activeCategory === "frontend") {
      return projects.filter((item) => item.category === "frontend");
    } else {
      return projects.filter((item) => item.category === "aiml");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "aiml" ? true : false}
              onClick={() => setActiveCategory("aiml")}
            >
              ML/AI
            </Button>
            <Button
              secondary={activeCategory === "frontend" ? true : false}
              onClick={() => setActiveCategory("frontend")}
            >
              Frontend
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            {filteredProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} description={item.description} link={item.link} tech={item.tech}/>
            ))}
          </motion.div>
        </div>
        
      </div>
      <div className="flex items-center justify-center xl:text-start text-base sm:text-lg text-textSecondary">
      © Andrei Ion for website template
      </div>
    </div>
  );
};

export default Projects;
