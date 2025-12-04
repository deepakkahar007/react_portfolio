import Grid from "@/components/Grid";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { ThemeProvider } from "./ThemeProvider";
import RecentProjects from "./components/RecentProjects";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { navItems } from "./data";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
