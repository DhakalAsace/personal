import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Your Name" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hello! I'm [Your Name], a passionate WordPress developer and digital creator with a keen eye for design and a love for clean, efficient code. With [X] years of experience in web development, I specialize in crafting bespoke WordPress solutions that not only look great but also perform exceptionally well.
            </p>
            <p className="mb-4">
              My journey in web development started [brief background]. Since then, I've honed my skills in HTML, CSS, JavaScript, PHP, and WordPress development. I'm constantly learning and staying up-to-date with the latest web technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me [your hobbies or interests]. I believe that a well-rounded life fuels creativity and problem-solving skills, which I bring to every project I work on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About