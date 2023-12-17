import Image from "next/image";
import React from "react";

interface ProjectCartProps {
  src: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
}

const ProjectCard = ({ src, title, desc, demo, github }: ProjectCartProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 z-20">
        <div className="flex gap-3 items-center">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <a
            href={demo}
            target="_blank"
            className="text-zinc-500 hover:text-purple-500 font-semibold text-lg cursor-pointer"
          >
            Live
          </a>
          <a
            href={github}
            target="_blank"
            className=" font-semibold text-lg hover:opacity-75 cursor-pointer"
          >
            <Image
              src="/gitwhite.png"
              alt="github"
              width={25}
              height={25}
              className="object-cover cursor-pointer opacity-60 hover:opacity-100"
            />
          </a>
        </div>
        <p className="mt-2 text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
