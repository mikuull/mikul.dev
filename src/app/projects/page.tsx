import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="xl:text-3xl text-white/60 xl:p-72 pt-40 px-6 pb-3 text-2xl">
          There aren't any projects yet...
        </h1>
        <Button
          variant={"outline"}
          size={"lg"}
          className="rounded-2xl border-accent"
        >
          <Link href={"/"}>Back</Link>
        </Button>
      </div>
    </>
  );
};

export default Projects;
