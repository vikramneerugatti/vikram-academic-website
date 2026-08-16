import Link from "next/link";

const projects = [
  {
    category: "Industrial IoT",
    title: "IoT-Enabled Smart Factory",
    description:
      "An Industrial IoT initiative focused on real-time production monitoring, sensor-based data acquisition, PLC automation, intelligent segregation and dashboard-based monitoring.",
    technologies: [
      "IoT",
      "PLC",
      "Sensors",
      "Industrial Automation",
      "Cloud",
    ],
  },
  {
    category: "Artificial Intelligence",
    title: "AI-Based Healthcare Applications",
    description:
      "Research initiatives exploring artificial intelligence and machine learning techniques for healthcare prediction, detection, monitoring and decision support.",
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Healthcare",
    ],
  },
  {
    category: "Digital Twin",
    title: "Digital Twin & Industrial IoT",
    description:
      "Research and development focused on connecting physical industrial systems with digital representations for monitoring, simulation and intelligent decision-making.",
    technologies: [
      "Digital Twin",
      "IIoT",
      "Edge Computing",
      "Data Analytics",
    ],
  },
  {
    category: "Research",
    title: "Intelligent Monitoring Systems",
    description:
      "Development of intelligent monitoring solutions using sensors, connected systems and data analytics for real-time observation and decision support.",
    technologies: [
      "IoT",
      "Sensors",
      "AI",
      "Real-Time Monitoring",
    ],
  },
  {
    category: "Emerging Technology",
    title: "Robotics & Automation",
    description:
      "Exploration of robotics, automation and intelligent machines for academic, industrial and practical technology applications.",
    technologies: [
      "Robotics",
      "Automation",
      "IoT",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Academic Innovation",
    title: "IoT & Emerging Technology Projects",
    description:
      "Student and academic projects focused on solving real-world problems through IoT, AI, automation and other emerging technologies.",
    technologies: [
      "IoT",
      "AI",
      "Automation",
      "Innovation",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="group">
            <h1 className="text-lg font-bold group-hover:text-blue-600">
              Dr. Vikram Neerugatti
            </h1>

            <p className="text-xs text-gray-500">
              Academic & Research Profile
            </p>
          </Link>

          <div className="hidden gap-6 text-sm font-medium lg:flex">

            <Link
              href="/about"
              className="hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/research"
              className="hover:text-blue-600"
            >
              Research
            </Link>

            <Link
              href="/projects"
              className="text-blue-600"
            >
              Projects
            </Link>

            <Link
              href="/publications"
              className="hover:text-blue-600"
            >
              Publications
            </Link>

            <Link
              href="/achievements"
              className="hover:text-blue-600"
            >
              Achievements
            </Link>

            <Link
              href="/documents"
              className="hover:text-blue-600"
            >
              Documents
            </Link>

            <Link
              href="/updates"
              className="hover:text-blue-600"
            >
              Updates
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>

          </div>

        </div>
      </nav>


      {/* Header */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Research & Technology Projects
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Selected research, academic and technology development projects
            involving IoT, Artificial Intelligence, Industrial IoT, Digital
            Twin, automation and emerging technologies.
          </p>

        </div>
      </section>


      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              {/* Category */}
              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {project.category}
              </span>


              {/* Title */}
              <h3 className="mt-5 text-xl font-bold leading-7 text-gray-900">
                {project.title}
              </h3>


              {/* Description */}
              <p className="mt-4 flex-1 leading-7 text-gray-600">
                {project.description}
              </p>


              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Project Approach */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Project Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From Research to Real-World Application
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Projects are approached with an emphasis on practical
            implementation, experimentation, data collection, technology
            integration and measurable outcomes.
          </p>


          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="text-2xl font-bold text-blue-600">
                01
              </div>

              <h3 className="mt-4 font-bold">
                Problem Identification
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Identify a relevant academic, industrial or real-world
                problem.
              </p>

            </div>


            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="text-2xl font-bold text-blue-600">
                02
              </div>

              <h3 className="mt-4 font-bold">
                Research & Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Study existing approaches and design an appropriate
                technology solution.
              </p>

            </div>


            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="text-2xl font-bold text-blue-600">
                03
              </div>

              <h3 className="mt-4 font-bold">
                Implementation
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Develop prototypes, experiments, software or hardware
                systems.
              </p>

            </div>


            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="text-2xl font-bold text-blue-600">
                04
              </div>

              <h3 className="mt-4 font-bold">
                Outcome
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Evaluate results and work towards publications, products,
                patents or practical applications.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Research Connection */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-2xl bg-gray-900 px-8 py-12 text-white md:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Research & Collaboration
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Interested in Collaboration?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Academic, research and industry collaborations are welcome in
            areas involving IoT, Artificial Intelligence, Industrial IoT,
            Smart Manufacturing, Digital Twin and emerging technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Contact Me
            </Link>

            <Link
              href="/publications"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              View Publications
            </Link>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t bg-white px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Dr. Vikram Neerugatti.
            All rights reserved.
          </p>

          <Link
            href="/"
            className="hover:text-blue-600"
          >
            Back to Home
          </Link>

        </div>

      </footer>

    </main>
  );
}