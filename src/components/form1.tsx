'use client';

import { useState, useEffect } from "react";
import { Step1 } from "@/types";

export default function Form1({ errors }: { errors: Step1 }) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    website: "",
    location: "",
  });

  useEffect(() => {
    const storedStep1: Step1 = JSON.parse(sessionStorage.getItem('step1') || '{}');
    setFormInfo(storedStep1);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    sessionStorage.setItem('step1', JSON.stringify({ ...formInfo, [e.target.name]: e.target.value }));
  }

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-black">Startup Name</label>
        <input type="text" id="name" name="name" className="p-2.5 rounded-lg border border-gray-300 w-full focus:border-red-500" placeholder="Enter your Startup's Name" onChange={handleChange} value={formInfo.name} required/>
        <p className="text-red-500 text-base italic">{errors.name}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="website" className="block mb-2 font-medium text-black">Startup Website</label>
        <input type="url" id="website" name="website" className="p-2.5 rounded-lg border border-gray-300 shadow-inner w-full focus:border-red-500" placeholder="Enter your Startup's Website" onChange={handleChange} value={formInfo.website} required/>
        <p className="text-red-500 text-base italic">{errors.website}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 font-medium text-black">Startup Registered Location in Africa</label>
        <input type="text" id="location" name="location" className="p-2.5 rounded-lg border border-gray-300 w-full focus:border-red-500" placeholder="Enter your Legally Registered Location in Africa" onChange={handleChange} value={formInfo.location} required/>
        <p className="text-red-500 text-base italic">{errors.location}</p>
      </div> 
    </form>
  );
}
