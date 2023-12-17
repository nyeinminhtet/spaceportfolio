import React from "react";

import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex gap-10 items-center justify-start">
            <div className="font-bold text-base">Community</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div>

          <div className="mb-[20px] text-[15px] text-center">
            &copy; nyeinminhtet 2023 Inc. All rights reserverd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
