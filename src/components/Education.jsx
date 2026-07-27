import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      duration: "2025 – Present",
      degree: "Bachelor of Technology",
      specialization: "Computer Science & Engineering (AI & ML)",
      institution: "S-VYASA Deemed to be University",
      details: "Current CGPA: 9.05",
    },
    {
      duration: "2025 – Present",
      degree: "Bachelor of Science",
      specialization: "Data Science",
      institution: "Indian Institute of Technology Madras",
      details: "Foundation Level",
    },
    {
      duration: "2023 – 2025",
      degree: "Senior Secondary Education",
      specialization: "Science",
      details: "Physics, Chemistry, Mathematics & Computer Science",
      institution: "Kendriya Vidyalaya IISc",
    },
  ];

  return (
    <section
      id="education"
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
          className="mb-24"
        >
          <h2 className="font-heading text-5xl lg:text-6xl">
            My <span className="text-purple-500">Education</span>
          </h2>

          <div className="w-24 h-1 bg-purple-500 rounded-full mt-5 mb-10"></div>

          <p
            className="max-w-3xl text-lg leading-9"
            style={{ color: "var(--text-light)" }}
          >
            My academic journey has provided a strong foundation in computer
            science, software development, and data science while encouraging
            continuous learning through practical application and exploration.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Vertical Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-purple-500/20"></div>

          <div className="space-y-14">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative flex gap-8"
              >
                {/* Icon */}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-purple-500 bg-[var(--bg-secondary)] text-purple-500 shadow-lg">
                  <FaGraduationCap size={20} />
                </div>

                {/* Card */}

                <div className="glass rounded-2xl p-10 flex-1 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-sm uppercase tracking-[0.25em] text-purple-500 font-semibold mb-5">
                    {item.duration}
                  </p>

                  <h3 className="font-heading text-4xl mb-2">
                    {item.degree}
                  </h3>

                  <h4
                    className="text-xl mb-5"
                    style={{ color: "var(--text-light)" }}
                  >
                    {item.specialization}
                  </h4>

                  <p className="text-lg font-medium mb-3">
                    {item.institution}
                  </p>

                  <p
                    className="leading-8"
                    style={{ color: "var(--text-light)" }}
                  >
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;