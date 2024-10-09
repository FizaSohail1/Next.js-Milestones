import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Travel from "/public/Mythumb.png";
import TextEditor from "/public/ProjectOne.jpg";
import NumGuess from "/public/num-guess.jpg";
import NextImg1 from '/public/next.png';
import NextImg2 from '/public/next2.png';
import dynamic from '/public/dynamic.png';
import Ecommerce from '/public/ecommerce.jpg';
import TravelWeb from '/public/travel.gpt2.webp'
import Ts1 from '/public/100days.jpg';
import Ts2 from '/public/ts-projects.jpg'


function Portfolio() {
    const nextProjects = [
          {
            id: 1,
            title: "Next.js Mini Projects",
            description: "A series of 30 mini projects built using Next.js, showcasing dynamic routing, and key features of the framework. Each project highlights practical implementations and core functionalities of Next.js.",
            image: NextImg1,
            link: "https://github.com/FizaSohail1/30days-projects-next.js.git",
          },
          {
            id: 2,
            title: "Text Editor",
            description:"Text Editor built with React! Features include Bold & Italic for styling, text alignment options, and text transformation to uppercase or lowercase.",
            image: TextEditor,
            link: "https://fizasohail1.github.io/Text-Editor/",
          },
    ]
     const htmlProjects = [
          {
              id: 1,
              title: "Dynamic Resume Builder",
              description:"I developed a dynamic resume builder using HTML, CSS, and TypeScript, allowing users to easily add skills, experience, and education.",
              image: dynamic,
              link: "https://github.com/FizaSohail1/Hackhathons.git",
          },
          {
            id: 2,
            title: "Traveling Website",
            description: "Built with HTML, Tailwind CSS, and JavaScript, this fully responsive website ensures a seamless experience across all devices, showcasing the beauty of beaches at your fingertips.",
            image: Travel,
            link: "https://fizasohail1.github.io/Travel-website/",
          },
          {
            id: 3,
            title: "Number Guessing Game",
            description:"Check out this cool Number Guessing Game I created using HTML, Tailwind CSS, and JavaScript!",
            image: NumGuess,
            link: "https://fizasohail1.github.io/Num-guessing-game/",
          },
          {
            id: 4,
            title: "Typescript and Node.js Assignments",
            description:"Created multiple CLI projects using Typescript and Node.js!",
            image: Ts2,
            link: "https://github.com/FizaSohail1?tab=repositories",
          },
          {
            id: 5,
            title: "100 Days Of Typescript Coding",
            description:"Completed 100 days of coding with Typescript!",
            image: Ts1,
            link: "https://github.com/FizaSohail1/100daysofcodechallenge.git",
          },
        ]
     const otherProjects = [
          {
            id: 1,
            title: "Dynamic Resume Builder",
            description: "This project was developed during a hackathon, focusing on building a dynamic resume builder through five key milestones.Developed a dynamic resume builder during a hackathon, incorporating real-time skill addition, experience inputs, and image uploads. Built using HTML, CSS, and TypeScript",
            image: dynamic,
            link: "https://github.com/FizaSohail1/Hackhathons.git",
          },
        ]
        const CurrentProjects = [
          {
            id: 1,
            title: "30 Mini Next.js Projects",
            description: "Currently exploring Next.js by developing 30 mini projects, each focusing on various features and functionalities of the framework.",
            image: NextImg2,
          },
          {
            id: 2,
            title: "Traveling Website",
            description: "Currently building a travel website using Next.js, showcasing stunning destinations and providing users with an intuitive browsing experience.",
            image: TravelWeb,
          },
          {
            id: 3,
            title: "E-commerce Website",
            description: "Currently creating an e-commerce website with Next.js, implementing features like dynamic product listings and a seamless shopping experience for users.",
            image: Ecommerce,
          },
        ]
 
  return (
    <div>
     <h1 className='text-center text-4xl font-bold text-white my-5 mt-14'>Welcome To My<span className='text-yellow-500'>Portfolio!</span></h1>
     <p className='text-white text-lg my-4 text-center max-w-4xl mx-auto'>Welcome to my personal portfolio! Here, you can explore my work, discover the projects I have built, and see how I bring creative ideas to life through code. Dive in to learn more about my skills and journey as a developer.</p>
     <section className="mt-10 py-12">
        <h2 className="text-center text-2xl flex ml-14 font-bold mb-8 text-white ">Next.js and React.js Projects:</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {nextProjects.map((project) => (
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
              <Link href={project.link} className="block mt-4 font-bold hover:text-black hover:duration-150 text-orange-700">
              View Project</Link>
            </div>
          </div>
          
        ))}
      </div>
        </section>
        <section>
        <h2 className="text-center text-2xl flex ml-14 font-bold mb-8 text-white ">Html, CSS and TypeScript Projects:-</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-12">
        {htmlProjects.map((project) => (
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
              <Link href={project.link} className="block mt-4 font-bold hover:text-black hover:duration-150 text-orange-700">
              View Project</Link>
            </div>
          </div>
        ))}
      </div>
        </section>

        <section>
        <h2 className="text-center text-2xl flex ml-14 font-bold mb-8 text-white ">Hackathons:-</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {otherProjects.map((project) => (
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
              <Link href={project.link} className="block mt-4 font-bold hover:text-black hover:duration-150 text-orange-700">
              View Project</Link>
            </div>
          </div>
        ))}
      </div>
        </section>

        <section className='pb-10'>
        <h2 className="text-center text-2xl flex ml-14 font-bold mb-8 text-white ">Currently Working On:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {CurrentProjects.map((project) => (
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
            </div>
          </div>
        ))}
      </div>
        </section>
    </div>
  )
}

export default Portfolio
