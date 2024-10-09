import React from "react";
import Image from "next/image";
import { ImHtmlFive } from "react-icons/im";
import { FaReact,FaStar } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCss3, SiJavascript, SiTailwindcss, SiNodedotjs, SiGithub } from "react-icons/si";
import Link from "next/link";
import certificate1 from '/public/javascript.png';
import certificate2 from '/public/git.png'

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

        <section id="about" className=" ">
          <div className="mx-auto text-black p-6 ">
            <div className=" mb-10 ">
              <h1 className="font-serif text-4xl font-bold text-white mb-4  text-center">About Me</h1>
              <p className="text-lg text-gray-100 max-w-3xl  mx-auto mt-10">
                Hello, I am <span className="font-bold text-yellow-500">Fiza Sohail</span>!<br></br><br></br> With a background in computer science, I have embarked on an exciting journey as a web developer specializing in frontend development. I am proficient in essential languages and tools such as
                <span className="text-yellow-500">HTML</span>, <span className="text-yellow-500">CSS</span>, <span className="text-yellow-500">JavaScript/TypeScript</span>.<br></br><br></br>In addition to these core skills, I have also honed my expertise in <span className="text-yellow-500">Tailwind CSS</span>, which empowers me to create visually appealing and responsive designs with efficiency. This combination of technical knowledge and aesthetic sensibility allows me to craft web experiences that are not only functional but also engaging and user-friendly. 
                I am passionate about creating functional, engaging, and user-friendly web experiences.<br></br> <br></br>
              Currently, I am delving deeper into <span className="text-yellow-500">React.js</span> and <span className="text-yellow-500">Next.js</span>two powerful frameworks that are revolutionizing frontend development. As I continue to explore and master these technologies, I am eager to apply my growing skillset to innovative projects that push the boundaries of web design and functionality.<br></br><br></br> My enthusiasm for learning and staying updated with the latest trends in the industry fuels my commitment to continuous improvement. I am passionate about transforming creative ideas into reality and am excited to contribute to the web development community through meaningful and impactful work.</p>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-bold py-3 px-6 rounded-full transition-all duration-300">
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <h2 className="text-4xl font-bold text-center text-white my-10">My Skills</h2>
        <section className=" skills bg-gray-100 py-12 mb-10 ">
          <div className="container">
            <div className=" text-6xl  text-white grid grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center my-5">
                <ImHtmlFive className="text-orange-600 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900 ">HTML5</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <SiCss3 className="text-blue-600 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">CSS3</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <SiJavascript className="text-yellow-400 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">JavaScript</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <SiTailwindcss className="text-cyan-400 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <FaReact className="text-blue-500 hover:scale-110 transform transition-transform" />
                <span className="text-lg text-gray-900">React.js</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <RiNextjsFill className="text-gray-900 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">Next.js</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <SiNodedotjs className="text-green-500 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">Node.js</span>
              </div>

              <div className="flex flex-col items-center my-5">
                <SiGithub className="text-gray-700 hover:scale-110 transform transition-transform" />
                <span className="text-lg md:text-xl font-semibold text-gray-900">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications mt-10 py-12">
        <h2 className="text-center text-4xl flex ml-20 font-bold mb-8 text-white ">Certifications <FaStar className="text-yellow-500"/></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {certifications.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white rounded-lg  overflow-hidden border-2 border-transparent  shadow-md transition-transform transform hover:scale-105 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500">
            <div className="relative w-full h-44">
              <Image
                src={certificate.image}
                alt={certificate.title}
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <div className="p-2">
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
