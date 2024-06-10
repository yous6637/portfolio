"use client";

import { navItems, projects, technologies, testimonials } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Technologies from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { MovingPictures } from "@/components/ui/MovingPictures";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="relative bg-backgoround-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        <Technologies />
        <Experience />
        <Projects projects={projects} />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
