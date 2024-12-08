
import About from "./about/page";
import BrandDifferent from "./brand/brand";
import Creamics from "./creamics/page";
import Email from "./email/page";
import Header from "./header/page";
import HeroSection from "./heroSection/page";
import PopularProducts from "./popularProduct/page";
import BrandStorySection from "./storySection/page";


export default function Home() {
  return (
   <div className="ml-[80px]">
     <Header/>
    <HeroSection/>
    <BrandDifferent/>
    <Creamics/>
    <PopularProducts/>
    <Email/>
    <BrandStorySection/>
   

   

   </div>
  );
}
