import { FaFacebook, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex gap-4 flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:youcef.gagi01@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex gap-4 mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/in/youcef-gagi-ab58a2288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="bg-[#0a66c2] p-1 rounded-sm">
              <Linkedin className="text-white" fill="white" size={20} />
            </Badge>
          </Link>
          <Link
            className="cursor-pointer"
            href="https://www.facebook.com/gagi.youcef"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="bg-[#1877f2] p-1 rounded-sm">
              <FaFacebook className="text-white" fill="white" size={20} />
            </Badge>
          </Link>
          <Link
            className="cursor-pointer"
            href="https://github.com/WebDev-dz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="bg-[#24292e] p-1 rounded-sm">
              <BsGithub className="text-white" fill="white" size={20} />
            </Badge>
          </Link>

          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Youcef Gagi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
