'use client';

import { Step2, Step2Errors } from "@/types";
import { useEffect, useState } from "react";

export default function Form2({ errors }: { errors: Step2Errors }) {
  const [formInfo, setFormInfo] = useState({
    industry: "",
    technology: [] as string[],
    founded: "",
  });

  useEffect(() => {
    const storedStep2: Step2 = JSON.parse(sessionStorage.getItem('step2') || '{}');
    setFormInfo(storedStep2);
  }, []);

  const industryOptions = [
    "Agriculture",
    "Artificial Intelligence",
    "E-commerce",
    "Education",
    "Energy",
    "Entertainment",
    "Finance",
    "Healthcare",
    "Logistics",
    "Manufacturing",
    "Media",
    "Retail",
    "Social Impact",
    "Transportation",
    "Travel",
    "Other",
  ];

  const technologyOptions = [
    "Android",
    "Angular",
    "AWS",
    "Blockchain",
    "Django",
    "Firebase",
    "Flutter",
    "GCP",
    "iOS",
    "Java",
    "JavaScript",
    "Laravel",
    "MongoDB",
    "Node.js",
    "PHP",
    "Python",
    "React",
    "React Native",
    "Ruby on Rails",
    "SQL",
    "Vue",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    //@ts-ignore
    const updatedValue = e.target.type === 'select-multiple' ? Array.from(e.target.selectedOptions).map(option => option.value) : e.target.value;  
    
    setFormInfo(prevState => ({
      ...prevState,
      [e.target.name]: updatedValue
    }));
    sessionStorage.setItem('step2', JSON.stringify({ ...formInfo, [e.target.name]: updatedValue }));
  }

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="industry" className="block mb-2 font-medium text-black">Which of these best describes your Industry?</label>
        <select name='industry' id='industry' className="p-2.5 rounded-xl border border-gray-300 w-full focus:border-red-500" value={formInfo.industry} onChange={handleChange}>
          {industryOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-red-500 text-base italic">{errors.industry}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="technology" className="block mb-2 font-medium text-black">What technology does your company mainly use? (select all that apply)</label>
        <select name='technology' id='technology' className="p-2.5 rounded-xl border border-gray-300 w-full focus:border-red-500" value={formInfo.technology} multiple onChange={handleChange}>
          {technologyOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-red-500 text-base italic">{errors.technology}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="founded" className="block mb-2 font-medium text-black">When was your company founded?</label>
        <input type="date" id="founded" name="founded" className="p-2.5 rounded-xl border border-gray-300 w-full focus:border-red-500" onChange={handleChange} value={formInfo.founded} />
        <p className="text-red-500 text-base italic">{errors.founded}</p>
      </div>
    </form>
  );
}