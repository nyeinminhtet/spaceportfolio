import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full h-[60px] fixed top-0 shadow-lg shadow-[#2A0E61]/50
    bg-[#03001417] backdrop:blur-md z-50 px-10p"
    >
      <div className="flex w-full h-full flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="flex h-auto w-auto flex-row items-center"
        >
          <Image
            src="/me.jpg"
            alt="me"
            width={40}
            height={40}
            className="cursor-pointer rounded-full object-cover hover:animate-spin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Nyein Min Htet
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div
            className="flex items-center w-full h-auto justify-between border border-[#7042f861]
           bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"
          >
            <a href="#about-me" className="cursor-pointer">
              Aboute me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
