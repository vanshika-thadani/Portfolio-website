import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import EarthCanvas from './Earth';
import StarsCanvas from './Stars';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_nbswd8s',
        'template_vm5ycj9',
        {
          from_name: form.name,
          to_name: "Vanshika Thadani",
          from_email: form.email,
          to_email: "vanshikathadani623@gmail.com",
          message: form.message,
        },
        'Snjis_gKMg-0TZsEk'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }


  return (
    <div className='relative h-screen'>
<img src="https://img.freepik.com/premium-photo/technology-related-background_811396-26657.jpg"  alt="bg-img-projects"  className=" fixed top-0  -z-50 w-full h-full bg-cover bg-center bg-no-repeat " /> 
<StarsCanvas/>
    
    <div className=' md:mt-12 flex md:flex-row flex-col-reverse gap-5 overflow-hidden md:ml-32  '>
      <div  className='md:w-[50%]  p-8 rounded-2xl '>
          <h1 className='text-white font-extrabold  text-2xl capitalize'>Get in Touch</h1>
          <p className='text-left mt-5 font-medium font-inter text-4xl text-white'>Contact</p>
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-7 flex flex-col gap-3 w-full'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=' py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=' py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className=' py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className=' md:w-[50%]'>
        <EarthCanvas />
      </div>
      
    </div>
    </div>
  )
}

export default Contact
