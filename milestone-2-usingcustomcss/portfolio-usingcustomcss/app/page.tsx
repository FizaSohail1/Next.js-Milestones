import Image from "next/image";
 import MyHome from "/public/gpt-img.webp";
import { AiFillCode } from "react-icons/ai";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import TextEditor from "/public/ProjectOne.jpg";
import dynamic from "/public/resume.png";
import NextImg1 from "/public/next.png";
import Link from "next/link";
import styles from "./page.module.css";
import Sidebar from "./components/sidebar/page";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Next.js Mini Projects",
      description: "A series of 30 mini projects built using Next.js, showcasing dynamic routing, and key features of the framework. Each project highlights practical implementations and core functionalities of Next.js.",
      image: NextImg1,
      link: "https://github.com/FizaSohail1/30days-projects-next.js.git",
    },
    {
      id: 2,
      title: "Dynamic Resume Builder",
      description: "This project was developed during a hackathon, focusing on building a dynamic resume builder through five key milestones.Developed a dynamic resume builder during a hackathon, incorporating real-time skill addition, experience inputs, and image uploads. Built using HTML, CSS, and TypeScript",
      image: dynamic,
      link: "https://hackhathons-milestone5.vercel.app/",
    },
    {
      id: 3,
      title: "Text Editor",
      description: "Text Editor built with React! Having features of Bold & Italic for Styling your text, Text Alignment Options, Text Transformation to Upercase or lowercase, and many more.",
      image: TextEditor,
      link: "https://fizasohail1.github.io/Text-Editor/",
    },
  ];

  return (

    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Sidebar/>
        <div className={styles.mainContent}>
          <div className={styles.mainCard}>
            <div className={styles.content}>
              <div>
                <h2 className={styles.heading}>Hi, I am</h2>
                <h1 className={styles.subheading}>Fiza Sohail</h1>
                <h2> And I am a <span className={styles.webDevTitle}>Web-Developer</span></h2>
                <p className={styles.description}>I am a web developer with a background in computer science, specializing in responsive websites using HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. Currently focused on mastering React.js and Next.js to bring creative ideas to life.</p>
                <Link href="/contact"> <button className={styles.hireButton}>Hire Me</button> </Link> </div>
              <div className={styles.imageContainer}>
                <Image src={MyHome} alt="abc" width={100} height={100} objectFit="cover" objectPosition="center" className={styles.image} />
              </div>
            </div>
          </div>

          <div className={styles.servicesContainer}>
            <h2 className={styles.servicesHeading}> My <span>Services</span></h2>
            <div className={styles.cardsContainer}>
              <div className={styles.serviceCard}>
                <FaCode className={styles.icon} />
                <h3>Responsive Web Design</h3>
                <p>Building responsive, modern websites with a clean code for a smooth user experience across all devices</p>
              </div>
              <div className={styles.serviceCard}>
                <AiFillCode className={styles.icon} />
                <h3>Frontend Development</h3>
                <p>I specialize in building dynamic, interactive user interfaces using JavaScript and TypeScript to bring designs to life.</p>
              </div>
              <div className={styles.serviceCard}>
                <HiMiniPaintBrush className={styles.icon} />
                <h3>Graphic Designing</h3>
                <p>I craft visually appealing designs, including logos, thumbnails, resumes, and more. With a focus on creativity and clarity, I bring ideas to life through professional graphic design solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <div className={styles.imagestyle}>
            <Image
              src={MyHome} 
              alt="About Image"
              width={600}
              height={400}
              className={styles.aboutimage}
            />
          </div>
        </div>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p >
            Hello, I am Fiza Sohail! With a background in computer science, I am a passionate web developer specializing in frontend development. I bring creativity, technical expertise, and a love for technology to my work, crafting user-friendly and visually appealing web experiences.<br></br><br></br>I am skilled in <span className="text-gray-900 font-semibold">HTML, CSS, JavaScript, Tailwind CSS</span> and more. I am always exploring the latest frameworks like <span className="text-gray-900 font-semibold">React.js and Next.js</span> to build innovative projects. Currently, I am honing my skills in React.js and Next.js, eager to transform creative ideas into dynamic web experiences.
          </p>
           <Link href="/contact" className={styles.aboutLink}>Contact Me</Link>
        </div>
      </div>
    </section>


    <section className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}> Recent Projects </h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}>
            <div className={styles.displayProject}>
              <Image
                src={project.image}
                alt={project.title}
               layout="fill"
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <div className={styles.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href={project.link} className={styles.projectLink}>
                View Project</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Link href="/portfolio" className={styles.viewMoreLink}>View More</Link>
   
    </div>
  );
}
