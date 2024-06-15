"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mikuull from "@/assets/mikuull.png";

const Photo = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[158px] h-[158px] xl:w-[358px] xl:h-[358px] mix-blend-lighten relative"
          >
            <Image
              src={mikuull.src}
              alt="logo"
              priority
              quality={100}
              fill
              className="object-contain rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Photo;
