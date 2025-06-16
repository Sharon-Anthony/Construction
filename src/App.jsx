import HomePage from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import HomeProjects from './Components/Projects/HomeProjects';
import Services from './Components/Services/Services';
import WelcomeSection from './Components/WelCome/WelcomeSection';
import WhyChooseUs from './Components/WhychooseUs/WhyChooseUs';
import CTA from './Components/CTA/CTA';
import VisionMission from './Components/VisionAndMission/VisionMission';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUS/AboutUs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ServiceDetail from './Components/Services/ServiceDetails';

import ScrollToTop from './Components/ScrollToTop';
import ServicesPage from './Components/Services/ServicesPage';
import ProjectsGallery from './Components/Projects/ProjectsGallery';

function App() {
  return (
    <BrowserRouter className="scroll-smooth">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <div id="home"><HomePage /></div>
                  <WelcomeSection />
                  <div id="services"><Services /></div>
                  <WhyChooseUs />
                  <VisionMission />
                  <div id="projects"><HomeProjects /></div>
                </main>
                <CTA />
                <Footer />
              </>
            }
          />
           <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/services/" element={<ServicesPage />} />
            
               <Route path="/projects" element={<ProjectsGallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;