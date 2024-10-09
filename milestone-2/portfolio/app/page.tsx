import Image from "next/image";
import MyHome from "/public/gpt img.webp";
import { AiFillCode } from "react-icons/ai";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import Sidebar from "./components/sidebar/page";
import TextEditor from "/public/ProjectOne.jpg";
import dynamic from '/public/dynamic.png';
import NextImg1 from '/public/next.png';
import Link from "next/link";


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
      link: "https://github.com/FizaSohail1/Hackhathons.git",
    },
    {
      id: 1,
      title: "Text Editor",
      description: "Text Editor built with React! Having features of Bold & Italic for Styling your text, Text Alignment Options, Text Transformation to Upercase or lowercase, and many more.",
      image: TextEditor,
      link: "https://fizasohail1.github.io/Text-Editor/",
    },
  ];
  return (
    <div className=" overflow-x-hidden">
      <div className="md:flex ">
        <Sidebar />
        <div className="flex flex-col w-full gap-6">
          <div className=" main bg-white p-8 shadow-md shadow-yellow-600/50 md:flex flex-col md:w-[85%] h-fit md:h-[500px] mx-auto rounded-md my-4">
            <div className="content  md:flex items-center">
              <div>
                <h2 className="text-3xl mt-10">Hi, I am</h2>
                <h1 className="font-bold text-5xl my-2">Fiza Sohail</h1>
                <h2 className="text-3xl"> And I am a <span className="text-yellow-500 text-4xl font-semibold">Web-Developer</span></h2>
                <p className="my-2 text-gray-600 md:w-[60%]">I am a web developer with a background in computer science, specializing in responsive websites using HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. Currently focused on mastering React.js and Next.js to bring creative ideas to life.</p>
                <Link href="/contact">
                <button className="my-6 bg-yellow-500 hover:bg-yellow-600 font-bold text-white py-2 px-4 rounded-lg md:w-[20%] w-fit animate-bounce">Hire Me</button>
                </Link>
              </div>

              <div className="border-yellow-600 w-[350px] md:w-[700px] border-x-4 border-y-4 flex justify-center items-center rounded-full h-[350px] md:h-[250px] mr-10 overflow-hidden">
                <Image src={MyHome} alt="abc" objectFit="cover" objectPosition="center" className="h-full w-full" />
              </div>
            </div>
          </div>

          <div className=" services mx-10 my-14 ">
            <h2 className="text-4xl font-bold mb-10 text-center text-white"> My <span className="text-yellow-500">Services</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mx-auto">
              <div className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500">
                <FaCode className="text-5xl mx-auto text-yellow-500 mb-3" />
                <h3 className="font-bold text-xl my-6">Responsive Web Design</h3>
                <p>Building responsive, modern websites with a clean code for a smooth user experience across all devices</p>
              </div>
              <div className="p-6  bg-white border-2 border-transparent rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500">
                <AiFillCode className="text-5xl mx-auto text-yellow-500 mb-3" />
                <h3 className="font-bold text-xl my-6">Frontend Development</h3>
                <p>I specialize in building dynamic, interactive user interfaces using JavaScript and TypeScript to bring designs to life.</p>
              </div>
              <div className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md transition-transform transform hover:scale-105 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500">
                <HiMiniPaintBrush className="text-5xl mx-auto text-yellow-500 mb-3" />
                <h3 className="font-bold text-xl my-6">Graphic Designing</h3>
                <p>I craft visually appealing designs, including logos, thumbnails, resumes, and more. With a focus on creativity and clarity, I bring ideas to life through professional graphic design solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="image lg:w-1/2 w-full mb-10 lg:mb-0">
          <div className="h-[500px] w-[500px]">
            <Image
              src={MyHome} 
              alt="About Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-[500px] w-[500px]"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hello, I am Fiza Sohail! With a background in computer science, I am a passionate web developer specializing in frontend development. I bring creativity, technical expertise, and a love for technology to my work, crafting user-friendly and visually appealing web experiences.<br></br><br></br>I am skilled in <span className="text-gray-900 font-semibold">HTML, CSS, JavaScript, Tailwind CSS</span> and more. I am always exploring the latest frameworks like <span className="text-gray-900 font-semibold">React.js and Next.js</span> to build innovative projects. Currently, I am honing my skills in React.js and Next.js, eager to transform creative ideas into dynamic web experiences.
          </p>
           <Link href="/contact" className="bg-gray-900 hover:bg-gray-700 text-white text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block">Contact Me</Link>
        </div>
      </div>
    </section>


    <section className="mt-10 md:my-20 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-white ">
        Recent Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg  overflow-hidden border-2 border-transparent  shadow-md transition-transform transform hover:scale-105 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500">
            <div className="relative w-full h-44">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <div className="p-2">
              <h3 className="text-xl text-black font-bold mb-2">{project.title}</h3>
              <p className="text-black">{project.description}</p>
              <Link href={project.link} className="block mt-4 font-bold hover:text-black hover:duration-150 text-yellow-500">
                View Project</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Link href="/portfolio" className="bg-white text-black text-sm  my-10 mx-auto justify-center flex md:text-lg text-center items-center rounded-full p-2 font-bold w-44 h-full animate-bounce">View More</Link>
   
    </div>
  );
}

