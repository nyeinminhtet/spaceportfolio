import { Backend_skill, Frontend_skill, Other_skill } from "@/constants";
import React from "react";
import SkillData from "../sub/SkillData";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center gap-3 h-full overflow-hidden relative pb-[21rem] py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((skill, index) => (
          <SkillData
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            key={skill.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((skill, index) => (
          <SkillData
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            key={skill.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((skill, index) => (
          <SkillData
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            key={skill.skill_name}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
