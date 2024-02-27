import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortafolio";
import MySkills from "../MySkills";

export default function Home(){
    return(
        <>
        <HeroSection></HeroSection>
        <MySkills></MySkills>
        <AboutMe></AboutMe>
        <MyPortfolio></MyPortfolio>        
        <Footer></Footer>
        </>
    )
}