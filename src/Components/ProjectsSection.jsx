import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiChakraui, SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Stylecraze.com clone",
    img: "/stylecraze.png",
    link: "https://stylecreaze.netlify.app/",
    git: "https://github.com/Prashant-Bhatiya/Stylecraze.backend.io",
    about:
      "This is e-commerce website used for shopping womans beauty products.This was a team project where I with my teammates had created. ",
    stacks: [
    
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Expedia.com clone",
    img: "/expedia.jpeg",
    link: "https://expedia-clone-rct-211.netlify.app/",
    git: "https://github.com/shriram083/expedia-clone",
    about:
      "This is e-commerce website used for ticket booking, hotel booking which gives best packages in offordable price  .This was a team project where I with my teammates had created. ",
    stacks: [
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiRedux  className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "Tomtop.com clone",
    img: "/tomtop.png",
    link: "https://tomtop.netlify.app/",
    git: "https://github.com/RohitBhaud/tomtop_clone.git",
    about:
      " This is e-commerce application for Clothes, Electronic-devices. This was my individual project.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },


  {
    name: "Westside.com clone",
    img: "/westside.png",
    link: "https://westside-ecommerce-clone.vercel.app/",
    git: "https://github.com/mdalishanali/Westside-ecommerce-Clone.git",
    about:
      "This is e-commerce website used for womans, mens, kids related shopping .This was a team project where I with my teammates had created. ",
    stacks: [
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,

    ],
  }
 
  


 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
