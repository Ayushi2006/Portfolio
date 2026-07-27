import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-36 flex items-center"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl lg:text-6xl">
            Get In <span className="text-purple-500">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-5 mb-10"></div>

          <p
            className="max-w-3xl mx-auto text-lg leading-9"
            style={{ color: "var(--text-light)" }}
          >
            As I continue learning and building new projects, I'm always open to
            connecting with other developers, exploring internship
            opportunities, or simply having a conversation about technology.
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 lg:p-14 max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {/* Email */}

            <a
              href="mailto:ayushi.rajak11@gmail.com"
              className="flex items-center justify-between rounded-2xl border border-purple-500/15 px-6 py-5 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-2xl text-purple-500" />

                <div>
                  <p className="font-semibold text-lg">Email</p>

                  <p style={{ color: "var(--text-light)" }}>
                    ayushi.rajak11@gmail.com
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-purple-500" />
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/Ayushi2006"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-purple-500/15 px-6 py-5 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <FaGithub className="text-2xl text-purple-500" />

                <div>
                  <p className="font-semibold text-lg">GitHub</p>

                  <p style={{ color: "var(--text-light)" }}>Ayushi2006</p>
                </div>
              </div>

              <FaArrowRight className="text-purple-500" />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/ayushi-r"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-purple-500/15 px-6 py-5 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <FaLinkedin className="text-2xl text-purple-500" />

                <div>
                  <p className="font-semibold text-lg">LinkedIn</p>

                  <p style={{ color: "var(--text-light)" }}>Ayushi R</p>
                </div>
              </div>

              <FaArrowRight className="text-purple-500" />
            </a>
          </div>

          {/* Bottom CTA */}

          <div className="mt-14 text-center">
            <p
              className="font-head text-2sm mb-8"
              style={{ color: "var(--text-light)" }}
            >
              Whether it's a project, internship opportunity, or an interesting
              idea, I'd be happy to connect and explore new possibilities.
            </p>

            <a
              href="mailto:ayushi.rajak11@example.com"
              className="inline-flex items-center gap-x-2 rounded-sm bg-purple-500 px-5 py-2 hover:bg-purple-300 transition-all duration-300"
            >
              <FaEnvelope />
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
