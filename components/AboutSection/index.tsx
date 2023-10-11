"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        <div className="h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("Skills")} active={tab === "Skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}>
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find(item => item.title === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
