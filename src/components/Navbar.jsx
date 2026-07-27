import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const links = ["about", "skills", "projects", "education", "contact"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text)",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
          <h1 className="font-heading text-3xl">Ayushi</h1>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  className="cursor-pointer hover:text-purple-500 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="h-11 w-11 rounded-full border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
            >
              {darkMode ? (
                <SunMedium
                  size={20}
                  className="text-white-400 transition-all"
                />
              ) : (
                <MoonStar size={20} className="text-black-500 transition-all" />
              )}
            </button>

            <button className="md:hidden" onClick={() => setOpen(true)}>
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        } glass border-l border-purple-500/20`}
        style={{
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 hover:text-purple-500 transition"
        >
          <HiX size={34} />
        </button>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-14 w-14 rounded-full border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 mb-14"
          >
            {darkMode ? (
              <SunMedium size={24} className="text-yellow-400" />
            ) : (
              <MoonStar size={24} className="text-purple-500" />
            )}
          </button>

          {/* Navigation */}
          <ul className="flex flex-col items-center gap-10">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium cursor-pointer hover:text-purple-500 transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
