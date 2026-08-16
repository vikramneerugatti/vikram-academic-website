import Link from "next/link";

const updates = [
  {
    date: "2026",
    category: "Academic",
    title: "Academic & Research Activities",
    description:
      "Ongoing academic, research, student mentoring and technology development activities across IoT, Artificial Intelligence and emerging technologies.",
  },
  {
    date: "2026",
    category: "Professional Development",
    title: "AICTE QIP – 3D Printing & Additive Manufacturing",
    description:
      "Selected for a Quality Improvement Programme on 3D Printing and Additive Manufacturing at IIT Palakkad.",
  },
  {
    date: "2026",
    category: "Research",
    title: "Industrial IoT & Smart Manufacturing",
    description:
      "Research and technology development activities focusing on IoT-enabled smart manufacturing, industrial monitoring and automation.",
  },
  {
    date: "2026",
    category: "Research",
    title: "Digital Twin Research",
    description:
      "Exploring Digital Twin technologies and their applications in Industrial IoT, intelligent monitoring and smart manufacturing.",
  },
  {
    date: "2026",
    category: "Academic",
    title: "Student Research & Project Development",
    description:
      "Guiding students in research projects, data collection, experimentation, publications and innovation-oriented activities.",
  },
];

export default function UpdatesPage() {
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

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/research" className="hover:text-blue-600">
              Research
            </Link>

            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>

            <Link href="/publications" className="hover:text-blue-600">
              Publications
            </Link>

            <Link href="/achievements" className="hover:text-blue-600">
              Achievements
            </Link>

            <Link href="/documents" className="hover:text-blue-600">
              Documents
            </Link>

            <Link href="/updates" className="text-blue-600">
              Updates
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

          </div>

        </div>
      </nav>


      {/* Header */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Updates
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Latest Academic & Research Updates
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Recent academic activities, research initiatives, professional
            development and technology-related updates.
          </p>

        </div>
      </section>


      {/* Updates */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="space-y-6">

          {updates.map((update) => (

            <article
              key={update.title}
              className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >

              <div className="flex flex-col gap-5 md:flex-row">

                {/* Date */}
                <div className="md:w-28">

                  <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    {update.date}
                  </span>

                </div>


                {/* Content */}
                <div className="flex-1">

                  <p className="text-sm font-semibold text-blue-600">
                    {update.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {update.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {update.description}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Research Updates */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Research Activity
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Current Focus
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold text-blue-600">
                Industrial IoT
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Smart Manufacturing
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Development of IoT-based approaches for industrial monitoring,
                automation and production data collection.
              </p>

            </div>


            <div className="rounded-xl bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold text-blue-600">
                Artificial Intelligence
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Intelligent Applications
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Exploring AI and machine learning approaches for practical
                applications in healthcare and other domains.
              </p>

            </div>


            <div className="rounded-xl bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold text-blue-600">
                Emerging Technologies
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Digital Twin & Robotics
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Exploring Digital Twin, robotics, automation and other
                emerging technologies.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Connect */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-2xl bg-gray-900 px-8 py-12 text-white md:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Stay Connected
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Explore Academic Work
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore research, projects, publications, achievements and
            academic resources.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/research"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Research
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Projects
            </Link>

            <Link
              href="/publications"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Publications
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