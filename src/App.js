import './App.css';
import ContactMeSection from './components/ContactMeSection';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <main>

      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </AlertProvider>

    </main>
  );
}

export default App;
