"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    title: "Address",
    description: "Warszawa, Polska",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
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
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ea vel commodi cumque et?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="max-w-40 rounded-2xl border-2 border-accent hover:text-primary"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
