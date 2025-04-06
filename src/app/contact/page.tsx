"use client";

import React, { useState } from "react";
import TextInputField from "@/components/TextInputField";
import NumberInputField from "@/components/NumberInputField";
import DropdownInputField from "@/components/DropdownInputField";
import MacOSWindow from "@/components/MacOSWindow";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { theme } = useTheme();
  
  const [dataToSend, setDataToSend] = useState({
    contact: {
      name: "",
      phone_number: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const subjectOptions = [
    "Software Engineering Opportunity",
    "Fullstack Development Project",
    "Competitive Programming",
    "Blockchain Research",
    "Machine Learning Collaboration",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted with data:", dataToSend);
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setDataToSend({
      contact: {
        name: "",
        phone_number: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MacOSWindow
          title="Contact Me"
          variant="system"
          className="w-full max-w-4xl mx-auto"
        >
          <div className="p-4 sm:p-6">
            <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
            
            <p className="mb-8">
              I'm interested in software engineering opportunities, fullstack development projects, and competitive programming collaborations.
              Feel free to reach out if you have a project that matches my skills or want to discuss potential collaboration.
            </p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <TextInputField
                setDataToSend={setDataToSend}
                dataToSend={dataToSend}
                parent_field="contact"
                field_input="name"
                form_name="Name"
                form_id="name"
                give_name="name"
                required={true}
                customPlaceholder={false}
              />
              
              <NumberInputField
                setDataToSend={setDataToSend}
                dataToSend={dataToSend}
                parent_field="contact"
                field_input="phone_number"
                form_name="Phone Number"
                form_id="phone"
                required={false}
              />
              
              <TextInputField
                setDataToSend={setDataToSend}
                dataToSend={dataToSend}
                parent_field="contact"
                field_input="email"
                form_name="Email"
                form_id="email"
                give_name="email"
                required={true}
                customPlaceholder={false}
              />
              
              <DropdownInputField
                setDataToSend={setDataToSend}
                dataToSend={dataToSend}
                parent_field="contact"
                field_input="subject"
                form_name="Subject"
                form_id="subject"
                dropdownOptions={subjectOptions}
                required={true}
              />
              
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message *
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={dataToSend.contact.message}
                    onChange={(e) => 
                      setDataToSend({
                        ...dataToSend,
                        contact: {
                          ...dataToSend.contact,
                          message: e.target.value,
                        },
                      })
                    }
                    className="card block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="card w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="card p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p>contact@example.com</p>
              </div>
              
              <div className="card p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">GitHub</h3>
                <p>github.com/gilanglahat22</p>
              </div>
              
              <div className="card p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p>Bandung, West Java, Indonesia</p>
              </div>
            </div>
          </div>
        </MacOSWindow>
      </motion.div>
    </div>
  );
} 