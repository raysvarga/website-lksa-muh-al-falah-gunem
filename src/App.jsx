import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Capacity from "./components/Capacity";
import Comment from "./components/Comment";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Documentation from "./components/Documentation";

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
      <div className="mt-5 flex flex-col text-center py-5">
        <p>
          © <span>Hak Cipta</span>
          <strong class="px-1 sitename">
            LKSA Muhammadiyah Al-Falah Gunem
          </strong>
        </p>
        <p>
          <span>Semua Hak Cipta Dilindungi Undang-Undang</span>
        </p>
      </div>
    </>
  );
}
