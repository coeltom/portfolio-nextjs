// components/AboutMe.js

import Image from 'next/image';
import proficePic from '@/assets/profile.png';

const AboutMe = () => {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={proficePic}
          alt="Picture of me"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="ml-10">
          <p className="text-lg">
            As a web development enthusiast, I have pursued my passion for
            technology and programming by obtaining a Fontend web developer
            degree from Coderhouse. There, I learned and applied various skills
            and tools, such as Figma, GitHub, and Bootstrap, to design and
            develop user-friendly websites. I have also gained valuable
            experience as a Freelance Web Developer, working on projects for
            different clients and companies, such as Sweet&Fresh, a Mexican
            Import/Export business.
          </p>
          <p className="text-lg my-2">
            Additionally, I had the opportunity to work as an Account Manager at
            Hilti Italia, a leading provider of construction solutions, for
            three months, where I supported the sales and service team and
            managed customer relations. My goal is to deepen my knowledge and
            expertise in web development by joining a professional team that
            values innovation, collaboration, and quality.
          </p>
          <p className="text-lg">
            {' '}
            Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
