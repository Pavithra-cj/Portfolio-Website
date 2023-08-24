import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utilities/Theme";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import ProjectDetails from "./Components/ProjectDetails";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Profile />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
