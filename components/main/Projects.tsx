import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-col w-full h-full md:grid md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          demo="https://sarrmal.vercel.app/"
          github="https://github.com/nyeinminhtet/happy-pos-nextjs"
          src="/sarrmal.png"
          title="SarrMal(POS)"
          desc="Customers no need to wait for orders, they can do it by scan qr-code that provided restaurants. SarrMal(POS) provide for restaurants that include manage menus, qr-code for order, customers side and restaurant side for Manager."
        />
        <ProjectCard
          demo="https://short-video-platform.vercel.app/"
          github="https://github.com/nyeinminhtet/short-video-platform"
          src="/tiktok.png"
          title="Short Video Platform"
          desc="Short video platform is similar with TikTok because I like watching TikTok so I did it.There you can post a video,like and comment."
        />
        <ProjectCard
          demo="https://phay-kyi.vercel.app/dashboard"
          github="https://github.com/nyeinminhtet/phay-kyi"
          src="/phaykyi.png"
          title="Phay Kyi"
          desc="A game that users created what they wanted, and answer the quiz. Then, they can check how many answers they did. They can also choose Hot topic."
        />
        <ProjectCard
          demo="https://breadid.vercel.app/"
          github="https://github.com/nyeinminhtet/reddit-clone"
          src="/breadid.png"
          title="Breadit"
          desc="Create communite and create a post for vote and comment to know who liked your thought."
        />
      </div>
    </div>
  );
};

export default Projects;
