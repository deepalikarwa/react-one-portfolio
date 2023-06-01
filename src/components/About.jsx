import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, My name is Deepali and I am a third-year undergrad pursuing Computer Science Engineering.
        I am a tech enthusiast and self-proclaimed computer nerd, driven by an insatiable curiosity for all things tech-related.
        With a deep love for exploring the intricacies of technology and finding innovative solutions, I thrive in the ever-evolving world of bits and bytes.
        </p>

        <br />

        <p className="text-xl">
        I am a versatile and passionate individual, constantly exploring and expanding my skills in various domains. I am a Java Developer and Web Developer.
        Continuous learning is an integral part of my journey as a programmer.Currently I am learning android development and DSA.
        Learning new techniques like AI driven technologies and contributing to the open-source community are my two main aspects.
        I am actively refining my expertise, while maintaining a high level of proficiency across aforementioned domains
       </p>
      </div>
   </div>
  );
};

export default About;