import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Main from "./components/Main";
import BrandsSlider from "./components/BrandsSlider";
import ProblemsCard from "./components/ProblemsCard";
import FeatureTabs from "./components/FeatureTabs";
import Founder from "./components/Founder";
import FAQs from "./components/FAQs"
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FT2 from "./components/FT2";

export default function Home() {
  return (
      <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Navbar />
        <SocialBar />
        <Main />
        <ProblemsCard />
        {/* <FeatureTabs /> */}
        <FT2 />
        <Process />
        <FAQs />
        <Founder />
        <Testimonials />
        <Footer />
      </div>
      </>
  );
}
