import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const featuredProject = {
    title: "Essen",
    description:
      "A MERN stack web application built as part of my learning journey, featuring user authentication, profile management, RESTful APIs, and a responsive React interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Ayushi2006/Essen",
  };

  const projects = [
    {
      title: "Willow",
      description:
        "A journaling and digital scrapbook website built to practice responsive web design, clean layouts, and creating an intuitive user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ayushi2006/Willow",
    },
    {
      title: "Supply Mission",
      description:
        "A browser-based helicopter game developed using Matter.js and p5.js to learn physics simulation, animations, and interactive gameplay.",
      tech: ["JavaScript", "Matter.js", "p5.js"],
      github: "https://github.com/Ayushi2006/Supply-mission1",
    },
    {
      title: "Trex Runner",
      description:
        "A recreation of Google's offline dinosaur game created to practice JavaScript, animations, collision detection, and keyboard interactions.",
      tech: ["JavaScript"],
      github: "https://github.com/Ayushi2006/Trex",
    },
    {
      title: "Fitness Tracker CLI",
      description:
        "A command-line application built with Python and MySQL to practice database management while tracking workouts and fitness records.",
      tech: ["Python", "MySQL"],
      github: "https://github.com/Ayushi2006/fitness-tracker-cli",
    },
    {
      title: "Fiddle Faddle",
      description:
        "A fun browser-based game created to explore JavaScript concepts, animations, and event-driven programming.",
      tech: ["JavaScript"],
      github: "https://github.com/Ayushi2006/Fiddle_Faddle",
    },
  ];

  return (
    <section
      id="projects"
      className="py-36"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl lg:text-6xl">
            Featured <span className="text-purple-500">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-purple-500 rounded-full mt-5 mb-10"></div>

          <p
            className="max-w-3xl text-lg leading-9"
            style={{ color: "var(--text-light)" }}
          >
            A collection of projects I've built while learning web development,
            programming, and problem-solving. Each project reflects my progress,
            curiosity, and hands-on experience with different technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-12 lg:p-14 mb-16 hover:-translate-y-1 transition-all duration-300"
        >
          <p className="uppercase tracking-[0.35em] text-purple-500 text-sm font-semibold mb-5">
            Featured Project
          </p>

          <h3 className="font-heading text-5xl lg:text-6xl mb-7">
            {featuredProject.title}
          </h3>

          <p
            className="leading-10 text-lg max-w-4xl mb-10"
            style={{ color: "var(--text-light)" }}
          >
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {featuredProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-200/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={featuredProject.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-purple-500 px-7 py-3 rounded-xl hover:bg-purple-600 transition"
          >
            <FaGithub size={20} />
            View Repository
          </a>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-12 lg:gap-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-2xl p-8 lg:p-10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-heading text-4xl mb-5">{project.title}</h3>

              <p
                className="leading-9 text-base mb-8 flex-grow"
                style={{ color: "var(--text-light)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-200/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-purple-500 px-5 py-2.5 rounded-lg hover:bg-purple-600 transition-all duration-300 w-fit mt-auto"
              >
                <FaGithub size={20} />
                View Repository
              </a>
            </motion.div>
          ))}
        </div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-28 text-center"
        >
          <p
            className="text-xl leading-9 mb-8"
            style={{ color: "var(--text-light)" }}
          >
            To explore more of my projects, experiments, and learning journey,
            feel free to visit my GitHub profile.
          </p>

          <a
            href="https://github.com/Ayushi2006"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-purple-500 px-9 py-4 rounded-xl hover:bg-purple-600 transition"
          >
            <FaGithub size={20} />
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
