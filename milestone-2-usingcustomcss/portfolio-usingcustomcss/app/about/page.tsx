import React from "react";
import Image from "next/image";
import { ImHtmlFive } from "react-icons/im";
import { FaReact,FaStar } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCss3, SiJavascript, SiTailwindcss, SiNodedotjs, SiGithub } from "react-icons/si";
import Link from "next/link";
import certificate1 from '/public/javascript.png';
import certificate2 from '/public/git.png';
import styles from './about.module.css';

function AboutPage() {
  const certifications = [{
    id: 1,
    title:"JavaScript",
    image:certificate1,
  },
  {
    id: 2,
    title:"Git/GitHub",
    image:certificate2,
  }
]
  return (
    <>
      <div>

        <section id="about">
          <div className={styles.main}>
            <div className={styles.textContainer}>
              <h1 className="">About Me</h1>
              <p className="">
                Hello, I am <span className={styles.nameStyle}>Fiza Sohail</span>!<br></br><br></br> With a background in computer science, I have embarked on an exciting journey as a web developer specializing in frontend development. I am proficient in essential languages and tools such as
                <span className={styles.textStyle}>HTML</span>, <span className={styles.textStyle}>CSS</span>, <span className={styles.textStyle}>JavaScript/TypeScript</span>.<br></br><br></br>In addition to these core skills, I have also honed my expertise in <span className={styles.textStyle}>Tailwind CSS</span>, which empowers me to create visually appealing and responsive designs with efficiency. This combination of technical knowledge and aesthetic sensibility allows me to craft web experiences that are not only functional but also engaging and user-friendly. 
                I am passionate about creating functional, engaging, and user-friendly web experiences.<br></br> <br></br>
              Currently, I am delving deeper into <span className={styles.textStyle}>React.js</span> and <span className={styles.textStyle}>Next.js</span>two powerful frameworks that are revolutionizing frontend development. As I continue to explore and master these technologies, I am eager to apply my growing skillset to innovative projects that push the boundaries of web design and functionality.<br></br><br></br> My enthusiasm for learning and staying updated with the latest trends in the industry fuels my commitment to continuous improvement. I am passionate about transforming creative ideas into reality and am excited to contribute to the web development community through meaningful and impactful work.</p>
            </div>
            <div className={styles.contactBtnSec}>
              <Link href="/contact" className={styles.contactBtn}> Contact Me</Link>
            </div>
          </div>
        </section>
        <h2 className={styles.skillsHeading}>My Skills</h2>
        <section className={styles.skillsSection}>
          <div className="container">
            <div className={styles.container}>
              <div className={styles.icons}>
                <ImHtmlFive className={styles.icon1} />
                <span className={styles.iconName}>HTML5</span>
              </div>

              <div className={styles.icons}>
                <SiCss3 className= {styles.icon2} />
                <span className={styles.iconName}>CSS3</span>
              </div>

              <div className={styles.icons}>
                <SiJavascript className={styles.icon3} />
                <span className={styles.iconName}>JavaScript</span>
              </div>

              <div className={styles.icons}>
                <SiTailwindcss className= {styles.icon4} />
                <span className={styles.iconName}>Tailwind CSS</span>
              </div>

              <div className={styles.icons}>
                <FaReact className={styles.icon5} />
                <span className={styles.iconName}>React.js</span>
              </div>

              <div className={styles.icons}>
                <RiNextjsFill className= {styles.icon6} />
                <span className={styles.iconName}>Next.js</span>
              </div>

              <div className={styles.icons}>
                <SiNodedotjs className= {styles.icon7} />
                <span className={styles.iconName}>Node.js</span>
              </div>

              <div className={styles.icons}>
                <SiGithub className= {styles.icon8} />
                <span className={styles.iconName}>GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.certificate}>
        <h2>Certifications <span><FaStar/></span></h2>

      <div className={styles.certificatesContainer}>
        {certifications.map((certificate) => (
          <div
            key={certificate.id}
            className={styles.certificateCards}>
            <div className={styles.displayCertificates}>
              <Image
                src={certificate.image}
                alt={certificate.title}
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <div className={styles.title}>
              <h3 className="text-xl text-black font-bold mb-2">{certificate.title}</h3>
    
            </div>
          </div>
        ))}
      </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
