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
                Hey, I'm{" "}
                <span className="font-semibold text-purple-500">
                  Ayushi Rajak
                </span>
                , a Computer Science Engineering student who loves exploring
                ideas, building things, and discovering what technology can
                do. I'm still figuring out where my interests will take me,
                and I see that as an exciting part of the journey. For me,
                learning isn't just about mastering a skill; it's also about
                asking questions, experimenting, and being open to new
                possibilities.
              </p>

              <p
                className="text-xl leading-[2.3rem]"
                style={{ color: "var(--text-light)" }}
              >
                I'm currently an intern at{" "}
                <span className="font-semibold text-purple-500">
                  IISc (Indian Institute of Science)
                </span>
                where I'm beginning a new chapter of learning and
                exploration. I'm learning{" "}
                <span className="font-semibold text-pink-500">CAD</span> to
                broaden my technical skills and explore a different side of
                technology. Alongside this, I continue to strengthen my
                foundations in{" "}
                <span className="font-semibold text-purple-500">
                  web development
                </span>{" "}
                and{" "}
                <span className="font-semibold text-pink-500">
                  Data Structures &amp; Algorithms
                </span>
                , while staying curious about fields like Artificial
                Intelligence, Data Science, and Machine Learning.
              </p>

              <p
                className="text-xl leading-[2.3rem]"
                style={{ color: "var(--text-light)" }}
              >
                I don't have my entire future figured out yet, and I'm okay
                with that. Right now, my goal is to{" "}
                <span className="font-semibold text-purple-500">
                  learn, explore, experiment, and find my passion
                </span>
                . I want to step outside my comfort zone, work on things
                I've never tried before, and discover what genuinely excites
                me. I'm learning to enjoy the process, embrace the unknown,
                and grow one experience at a time.
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
                <h3 className="text-4xl font-bold text-pink-500">∞</h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: "var(--text-light)" }}
                >
                  Things to Explore
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
