import ContactUsPage from "@/components/Contact";
import ExperienceAndTools from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Projects";

export default function Home() {
  return (
   <>
   <div className="h-screen w-full bg-[#141312]">
      <Hero/>
      <RecentProjects/>
      <ExperienceAndTools/>
      <ContactUsPage/>
   </div>
  
   </>
  );
}
