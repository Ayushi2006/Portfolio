import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVite,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-pink-500",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      title: "Backend",
      color: "text-purple-500",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Programming",
      color: "text-pink-500",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      title: "Tools",
      color: "text-purple-500",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode />},
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl lg:text-6xl">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-purple-500 rounded-full mt-5"></div>

          <p
            className="mt-8 text-lg max-w-3xl leading-9"
            style={{ color: "var(--text-light)" }}
          >
            Technologies and tools I've been learning and using to build
            modern full-stack applications while expanding my knowledge
            in software development and artificial intelligence.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="glass rounded-3xl p-8"
            >
              <h3
                className={`text-3xl font-heading mb-8 ${category.color}`}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 p-4 hover:border-purple-500/40 hover:-translate-y-1 transition"
                  >
                    <div className="text-3xl text-purple-400">
                      {skill.icon}
                    </div>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;