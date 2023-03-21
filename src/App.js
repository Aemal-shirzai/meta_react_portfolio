import './App.css';
import ContactMeSection from './components/ContactMeSection';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import Alert from "./components/Alert";

function App() {
  return (
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Alert />
      </main>
  );
}

export default App;
