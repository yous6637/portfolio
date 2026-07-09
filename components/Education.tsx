"use client";
import React from "react";
import Image from "next/image";
import { education } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full mt-12 flex flex-col gap-10 items-stretch">
        {education.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{ borderRadius: `calc(1.75rem * 0.96)` }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex items-center p-5 lg:p-8 gap-5 w-full">
              <Image
                src={item.thumbnail}
                alt={item.institution}
                width={200}
                height={200}
                className="object-contain rounded-xl bg-white p-2 shrink-0 mt-1"
              />

              <div className="flex flex-col gap-3 min-w-0">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-purple text-xl shrink-0" />
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      item.status === "Graduated"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-purple/20 text-purple"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div>
                  <h2 className="text-left text-lg md:text-xl font-bold leading-snug">
                    {item.degree}
                  </h2>
                  <p className="text-left text-white-100 mt-1 font-semibold">
                    {item.institution}
                  </p>
                  <p className="text-left text-sm text-gray-400 mt-1">
                    {item.period}
                  </p>
                </div>

                {item.project && (
                  <div className="mt-1 border-l-2 border-purple pl-4">
                    <p className="text-xs uppercase tracking-widest text-purple font-semibold mb-1">
                      Capstone Project
                    </p>
                    <p className="font-bold text-white text-left">{item.project.title}</p>
                    <p className="text-sm text-white-100 mt-1 text-left">{item.project.desc}</p>
                    {item.project.link && (
                      <a
                        href={item.project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-purple text-sm font-semibold hover:underline mt-2"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
