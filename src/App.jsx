import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Add a fallback route */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {children}
      </div>
      <Footer />
    </>
  );
};
