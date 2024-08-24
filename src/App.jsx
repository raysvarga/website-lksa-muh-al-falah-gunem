import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Capacity from "./components/Capacity";
import Comment from "./components/Comment";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Documentation from "./components/Documentation";
import Copyrigth from "./components/Copyrigth";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Capacity />
      <Comment />
      <Program />
      <Documentation />
      <Contact />
      <Copyrigth />
    </>
  );
}
