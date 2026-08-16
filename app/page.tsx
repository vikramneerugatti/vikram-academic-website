import Link from "next/link";

const researchAreas = [
  {
    title: "Internet of Things",
    description:
      "IoT systems, connected devices, sensing, communication and intelligent applications.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "AI/ML applications, predictive systems, data-driven decision making and intelligent solutions.",
  },
  {
    title: "Industrial IoT & Smart Manufacturing",
    description:
      "Industrial automation, real-time monitoring, smart factories and data-driven manufacturing.",
  },
  {
    title: "Digital Twin",
    description:
      "Digital representations of physical systems for monitoring, simulation and intelligent decision making.",
  },
  {
    title: "Edge Computing",
    description:
      "Distributed intelligence, edge analytics and real-time processing for IoT environments.",
  },
  {
    title: "Robotics & Emerging Technologies",
    description:
      "Robotics, automation, intelligent systems and emerging technology applications.",
  },
];

const projects = [
  {
    title: "IoT-Enabled Smart Factory",
    description:
      "Industrial IoT architecture for real-time production monitoring, sensing, automation and intelligent decision making.",
  },
  {
    title: "AI-Based Healthcare Applications",
    description:
      "Research and development of AI-based approaches for healthcare monitoring, prediction and intelligent analysis.",
  },
  {
    title: "Digital Twin & Industrial IoT",
    description:
      "Exploring digital twins, connected industrial systems and intelligent manufacturing environments.",
  },
];

const highlights = [
  {
    number: "20+",
    label: "Years of Experience",
  },
  {
    number: "IoT",
    label: "Program & Research Focus",
  },
  {
    number: "AI",
    label: "Artificial Intelligence",
  },
  {
    number: "IIoT",
    label: "Smart Manufacturing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="group">
            <h1 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
              Dr. Vikram Neerugatti
            </h1>

            <p className="text-xs text-gray-500">
              Academic & Research Profile
            </p>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">

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

          <Link
            href="/contact"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:block"
          >
            Contact
          </Link>

        </div>
      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">

          {/* LEFT SIDE */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Associate Professor | Program Head – CSE (IoT)
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
              Dr. Vikram
              <br />

              <span className="text-blue-600">
                Neerugatti
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Researcher, educator and technology enthusiast working across
              Internet of Things, Artificial Intelligence, Smart
              Manufacturing and emerging technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/about"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                View Profile
              </Link>

              <Link
                href="/research"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Explore Research
              </Link>

              <Link
                href="/documents"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Documents
              </Link>

            </div>

          </div>


          {/* RIGHT SIDE - PHOTO */}

          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute -inset-4 rounded-full bg-blue-100 blur-2xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white shadow-xl md:h-96 md:w-96">

                <img
                  src="/images/vikram.jpg"
                  alt="Dr. Vikram Neerugatti"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK HIGHLIGHTS
      ===================================================== */}

      <section className="border-b bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 md:grid-cols-4">

          {highlights.map((item) => (

            <div
              key={item.label}
              className="px-6 py-8 text-center"
            >

              <p className="text-3xl font-bold text-blue-600">
                {item.number}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Academic & Professional Profile
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Dr. Vikram Neerugatti is an Associate Professor and Program Head
            working in Computer Science and Engineering with a focus on
            Internet of Things, Artificial Intelligence, Smart Manufacturing
            and emerging technologies.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            His academic and professional interests include research,
            innovation, technology development, student projects,
            interdisciplinary collaboration and practical applications of
            emerging technologies.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-block font-semibold text-blue-600 hover:underline"
          >
            Read more about me →
          </Link>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Research
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Research Areas
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Research interests span connected systems, intelligent
            technologies, industrial automation and emerging applications.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {researchAreas.map((area) => (

              <div
                key={area.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                  {area.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {area.description}
                </p>

              </div>

            ))}

          </div>

          <Link
            href="/research"
            className="mt-10 inline-block font-semibold text-blue-600 hover:underline"
          >
            View all research →
          </Link>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Selected academic, research and technology development projects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.title}
              className="rounded-xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-md"
            >

              <p className="text-sm font-semibold text-blue-600">
                Research Project
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {project.description}
              </p>

              <Link
                href="/projects"
                className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                View project →
              </Link>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PUBLICATIONS
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Research Output
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Publications
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                Explore research publications, journal articles, conference
                papers and scholarly contributions.
              </p>

            </div>

            <Link
              href="/publications"
              className="font-semibold text-blue-600 hover:underline"
            >
              View all publications →
            </Link>

          </div>

          <div className="mt-10 rounded-xl border bg-white p-8">

            <p className="text-gray-600">
              Publications are maintained through the academic administration
              dashboard and are displayed on the public website.
            </p>

            <Link
              href="/publications"
              className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Browse Publications
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Resources
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Academic Documents
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Access selected academic documents, research resources,
              presentations, reports and other professional materials.
            </p>

            <Link
              href="/documents"
              className="mt-7 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Browse Documents
            </Link>

          </div>

          <div className="rounded-2xl bg-gray-50 p-8">

            <div className="space-y-5">

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <p className="font-semibold">
                  Research & Publications
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Research-related academic resources.
                </p>
              </div>

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <p className="font-semibold">
                  Academic Presentations
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Presentations, lectures and professional materials.
                </p>
              </div>

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <p className="font-semibold">
                  Reports & Resources
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Selected academic and professional documents.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="bg-gray-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let&apos;s Connect
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            For research collaboration, academic activities, student
            projects, professional enquiries and technology initiatives.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            Contact Me
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t bg-white px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()} Dr. Vikram Neerugatti.
            All rights reserved.
          </p>

          <div className="flex justify-center gap-5 md:justify-end">

            <Link
              href="/publications"
              className="hover:text-blue-600"
            >
              Publications
            </Link>

            <Link
              href="/documents"
              className="hover:text-blue-600"
            >
              Documents
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}