import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center transition-all duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl flex flex-col gap-6"
        >
          <p className="text-purple-500 text-2xl font-medium">Hello, I'm</p>

          <h1 className="font-heading text-5xl lg:text-7xl leading-tight">
            <span className="text-pink-500">Ayushi Rajak</span>
          </h1>

          <h2
            className="font-heading text-3xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            Computer Science Engineering Student
          </h2>

          <p
            className="font-body leading-8 max-w-lg text-lg"
            style={{ color: "var(--text-light)" }}
          >
            Learning full-stack web development, building projects, and
            continuously improving my programming skills.
          </p>

          <div className="flex gap-6 pt-4 min-h-[30px]">
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-flex items-center outline-btn px-8 py-4 rounded-lg font-medium"
            >
              View Projects
            </Link>

            {/* inline-flex items-center gap-3 border border-purple-500 px-7 py-3 rounded-xl hover:bg-purple-600 transition */}

            {/* <button className="min-w-[120px] outline-btn px-8 py-4 rounded-lg font-medium">
              Resume
            </button> */}
            <a
              href="/Ayushi Rajak_Resume.pdf"
              download="Ayushi Rajak_Resume.pdf"
              className="inline-flex items-center gap-3 border border-purple-500 px-8 py-4 rounded-xl hover:bg-purple-600 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[480px] w-[360px] overflow-hidden rounded-[50%] border-2 border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-all duration-300">
            <img
              src={profile}
              alt="Ayushi Rajak"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
