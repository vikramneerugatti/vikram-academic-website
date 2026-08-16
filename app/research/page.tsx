import Link from "next/link";

const researchAreas = [
  {
    title: "Internet of Things",
    description:
      "Connected devices, sensors, communication protocols, IoT architectures and intelligent IoT applications.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "AI and ML techniques for prediction, classification, automation and intelligent decision-making.",
  },
  {
    title: "Industrial IoT & Smart Manufacturing",
    description:
      "Industrial automation, real-time monitoring, production analytics and intelligent manufacturing systems.",
  },
  {
    title: "Digital Twin",
    description:
      "Digital representation of physical systems for monitoring, simulation, optimization and intelligent decision-making.",
  },
  {
    title: "Edge Computing",
    description:
      "Real-time data processing, distributed intelligence and edge analytics for connected environments.",
  },
  {
    title: "Robotics & Emerging Technologies",
    description:
      "Robotics, automation, intelligent systems and emerging technologies for practical applications.",
  },
];

const researchThemes = [
  "IoT-Based Intelligent Systems",
  "AI-Based Healthcare Applications",
  "Industrial IoT",
  "Smart Factory Automation",
  "Digital Twin",
  "Edge Computing",
  "Robotics and Automation",
  "Intelligent Monitoring Systems",
  "Emerging Technologies",
];

export default function ResearchPage() {
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
              className="text-blue-600"
            >
              Research
            </Link>

            <Link
              href="/projects"
              className="hover:text-blue-600"
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
            Research
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Research & Innovation
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Research activities focus on the development and application of
            intelligent, connected and emerging technologies for academic,
            industrial and real-world problems.
          </p>

        </div>
      </section>


      {/* Research Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Research Areas
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Areas of Research Interest
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {researchAreas.map((area) => (

            <article
              key={area.title}
              className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                {area.title.charAt(0)}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {area.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {area.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* Research Themes */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Research Themes
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Current Research Directions
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Selected themes representing areas for research, innovation,
            student projects and technology development.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {researchThemes.map((theme) => (

              <span
                key={theme}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm"
              >
                {theme}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* Featured Research */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Featured Research
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Selected Research Initiatives
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <article className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Industrial IoT
            </p>

            <h3 className="mt-3 text-xl font-bold">
              IoT-Enabled Smart Factory
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Exploring sensors, PLC-based automation, real-time production
              monitoring, data acquisition and intelligent manufacturing.
            </p>

            <Link
              href="/projects"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              Explore projects →
            </Link>

          </article>


          <article className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Artificial Intelligence
            </p>

            <h3 className="mt-3 text-xl font-bold">
              AI-Based Healthcare
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Research directions involving machine learning and intelligent
              systems for healthcare prediction, detection and monitoring.
            </p>

            <Link
              href="/publications"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              View publications →
            </Link>

          </article>


          <article className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Emerging Technology
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Digital Twin & Intelligent Systems
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Exploring digital twins, connected systems, intelligent
              monitoring and real-time decision-making environments.
            </p>

            <Link
              href="/projects"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              View projects →
            </Link>

          </article>

        </div>

      </section>


      {/* Publications CTA */}
      <section className="bg-gray-900 px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Research Output
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Publications & Scholarly Work
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore published research papers, journal articles, conference
            papers and other scholarly contributions.
          </p>

          <Link
            href="/publications"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            View Publications
          </Link>

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