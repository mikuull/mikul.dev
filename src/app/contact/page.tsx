"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_EMAIL_API_KEY);

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { title } from "process";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+48) 000000000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mmikulski643@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Warszawa, Polska",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mmikulski643@gmail.com",
        subject: "Email from mikul.dev",
        html: `<p>Email od: <strong>${formData.email}</strong> </br> Imię: <strong>${formData.name}</strong> </br> Nazwisko: <strong>${formData.surname}</strong> </br> Treść: <strong>${formData.message}</strong></p>`,
      });
      //email sent successfully
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ea vel commodi cumque et?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="firstname"
                    id={"name"}
                    placeholder="First name"
                    onChange={handleChange}
                  />
                  <Input
                    type="lastname"
                    id={"surname"}
                    placeholder="Last name"
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    id={"email"}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  id={"message"}
                  placeholder="Type your message here"
                  onChange={handleChange}
                />
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="max-w-40 rounded-2xl border-2 border-accent hover:text-primary"
                >
                  Send
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
