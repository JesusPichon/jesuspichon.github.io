import Header from "../components/Header";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import '../styles/Home.css'

function HomePage() {
    return (
        <div className="bg-gradient-to-r from-[#051D35] to-[#050E17]">
            <Header />
            <HeroSection />
            <ProjectsSection /> 
            <AboutSection />
        </div>
    );
}

export default HomePage;