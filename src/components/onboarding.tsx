'use client';

import { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import { Step1, Step2, Step2Errors } from "../types";
import { validateFounded, validateIndustry, validateLocation, validateName, validateTechnology, validateWebsite } from "@/lib/validations";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [step1Errors, setStep1Errors] = useState<Step1>({ name: '', website: '', location: '' });
  const [step2Errors, setStep2Errors] = useState<Step2Errors>({ industry: '', technology: '', founded: '' });
  const router = useRouter();

  const handleNextStep = () => {
    if (step === 1) {
      const step1: Step1 = JSON.parse(sessionStorage.getItem('step1') || '{}');
      const step1Errors = {
        name: validateName(step1.name),
        website: validateWebsite(step1.website),
        location: validateLocation(step1.location),
      };
      setStep1Errors(step1Errors);
      if (step1Errors.name || step1Errors.website || step1Errors.location) return;
      setStep(2);
    }

    if (step === 2) {
      const step2: Step2 = JSON.parse(sessionStorage.getItem('step2') || '{}');
      const stepErrors = {
        industry: validateIndustry(step2.industry),
        technology: validateTechnology(step2.technology),
        founded: validateFounded(step2.founded),
      };
      setStep2Errors(stepErrors);
      if (stepErrors.industry || stepErrors.technology || stepErrors.founded) {
        return;
      }
      alert('You have been successfully onboarded!');
      sessionStorage.clear();
      setStep(1)
      router.push('/');
    }
  };

  return (
    <section className="w-full max-w-[32rem] p-10 rounded-2xl shadow-2xl bg-white">
      <h2 className="text-3xl font-bold mb-4">Welcome to Vester.AI</h2>
      <p className="text-gray-800 text-base">We're excited to have you onboard. Let's get started by collecting some information about your startup.</p>
    
      <div className="mt-8">
        {step === 1 ? <Form1 errors={step1Errors}/> : <Form2 errors={step2Errors} />}
        <button type="submit" 
          onClick={handleNextStep} 
          className="w-full p-3 mt-6 rounded-xl bg-[#1e3a8a] hover:bg-blue-600 text-white text-xl font-semibold"
        >
          {step === 1 ? 'Next': 'Submit'}
        </button>
      </div>
    </section>
  );
}
