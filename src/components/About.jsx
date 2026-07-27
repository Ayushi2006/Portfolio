import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-32 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <div className="mb-20 lg:mb-24">
            <h2 className="font-heading text-5xl lg:text-6xl font-semibold">
              About <span className="text-purple-500">Me</span>
            </h2>

            <div className="mt-5 h-1 w-24 rounded-full bg-purple-500"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-16 lg:gap-28 items-center">
            {/* Left Side */}
            <div className="max-w-3xl space-y-12 lg:space-y-14">
              <p
                className="text-xl leading-[2.3rem]"
                style={{ color: "var(--text-light)" }}
              >
                My name is{" "}
                <span className="font-semibold text-purple-500">
                  Ayushi Rajak
                </span>
                , and I am a Computer Science Engineering student with a passion
                for creating intuitive and user-friendly web applications. I
                enjoy turning ideas into real projects while continuously
                learning new technologies.
              </p>

              <p
                className="text-xl leading-[2.3rem]"
                style={{ color: "var(--text-light)" }}
              >
                Currently, I am focused on the{" "}
                <span className="font-semibold text-pink-500">MERN Stack</span>{" "}
                and strengthening my problem-solving skills through{" "}
                <span className="font-semibold text-purple-500">
                  Data Structures &amp; Algorithms
                </span>
                . I am excited to explore{" "}
                <span className="font-semibold text-pink-500">
                  Artificial Intelligence
                </span>
                ,{" "}
                <span className="font-semibold text-pink-500">
                  Data Science
                </span>
                , and{" "}
                <span className="font-semibold text-pink-500">
                  Machine Learning
                </span>{" "}
                as I continue to broaden my knowledge and technical skills.
              </p>

              <p
                className="text-xl leading-[2.3rem]"
                style={{ color: "var(--text-light)" }}
              >
                My long-term goal is to become a{" "}
                <span className="font-semibold text-purple-500">
                  Machine Learning Engineer
                </span>
                , combining software engineering and artificial intelligence to
                develop practical and impactful solutions. I look forward to
                furthering my education, building meaningful projects, and
                developing the skills required to contribute to this field.
              </p>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
                <h3 className="text-5xl font-bold text-purple-500">10+</h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: "var(--text-light)" }}
                >
                  Technologies
                </p>
              </div>

              <div className="glass rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-pink-500/40">
                <h3 className="text-5xl font-bold text-pink-500">20+</h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: "var(--text-light)" }}
                >
                  GitHub Repositories
                </p>
              </div>

              <div className="glass rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
                <h3 className="text-5xl font-bold text-purple-500">6</h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: "var(--text-light)" }}
                >
                  Personal Projects
                </p>
              </div>

              <div className="glass rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-pink-500/40">
                <h3 className="text-4xl font-bold text-pink-500">ML</h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: "var(--text-light)" }}
                >
                  Future Goal
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
