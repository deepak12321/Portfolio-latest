import React, { useState } from "react";
import Navbar from "./components/global/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ThemeSwitch from "./components/global/ThemeSwitch";
import Lenis from "lenis";
import AdminPage from "./components/admin/AdminPage";
import AddSkill from "./components/admin/AddSkill";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className={` text-(--text-color) bg-(--bg-main) transition-all`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-content-section ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deepak/admin" element={<AdminPage />} />
          <Route path="/deepak/admin/add-skill" element={<AddSkill />} />
        </Routes>
      </div>
      <div className="footer mt-10 uppercase text-center pb-3 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
        <p>{`Designed and Developed By Deepak Phulara`}</p>
        <p>{`All Copyright Reserved @ ${new Date().getFullYear()}`}</p>
      </div>
    </div>
  );
};

export default App;
