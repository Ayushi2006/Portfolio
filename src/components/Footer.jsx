import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="border-t border-purple-900/40 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div>
            <h1 className="text-2xl font-bold">Ayushi</h1>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/Ayushi2006"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayushi-r"    
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ayushi.rajak11@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ayushi Rajak.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
