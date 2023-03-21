import './App.css';
import ContactMeSection from './components/ContactMeSection';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import Alert from "./components/Alert";
import { AlertProvider } from './context/alertContext';

function App() {
  return (
    <AlertProvider>
      <main>

        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Alert />

      </main>
    </AlertProvider>
  );
}

export default App;
