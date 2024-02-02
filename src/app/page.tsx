import Onboarding from "@/components/onboarding";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1e3a8a] to-[#c54245]">
      <Onboarding />      
    </main>
  );
}
