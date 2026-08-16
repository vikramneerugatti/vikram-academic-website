import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600">
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

            <Link href="/updates" className="hover:text-blue-600">
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
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Academic & Professional Profile
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Learn more about my academic background, professional interests,
            teaching activities and research focus.
          </p>

        </div>
      </section>


      {/* Profile */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Photo */}
          <div className="flex justify-center md:justify-start">

            <div className="h-72 w-72 overflow-hidden rounded-2xl border-8 border-gray-50 shadow-lg">

              <img
                src="/images/vikram.jpg"
                alt="Dr. Vikram Neerugatti"
                className="h-full w-full object-cover"
              />

            </div>

          </div>


          {/* Introduction */}
          <div className="md:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Professional Profile
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Dr. Vikram Neerugatti
            </h2>

            <p className="mt-2 font-medium text-gray-500">
              Associate Professor | Program Head – CSE (IoT)
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dr. Vikram Neerugatti is an academic professional working in
              Computer Science and Engineering with a focus on Internet of
              Things, Artificial Intelligence, Smart Manufacturing and
              emerging technologies.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              His professional interests include teaching, research,
              innovation, technology development, student mentoring,
              interdisciplinary collaboration and practical applications of
              emerging technologies.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              His work also focuses on connecting academic learning with
              real-world technology applications through research projects,
              industrial applications and emerging technology initiatives.
            </p>

          </div>

        </div>

      </section>


      {/* Expertise */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Areas of Interest
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Internet of Things",
              "Artificial Intelligence",
              "Machine Learning",
              "Industrial IoT",
              "Smart Manufacturing",
              "Digital Twin",
              "Edge Computing",
              "Robotics",
              "Emerging Technologies",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >

                <h3 className="font-semibold text-gray-900">
                  {item}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Teaching, research and technology applications in this
                  domain.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Academic Focus */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Teaching
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Academic & Student Development
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Teaching, curriculum development, student mentoring,
              project guidance and technology-oriented learning.
            </p>

          </div>


          <div className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Research
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Research & Innovation
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Research in IoT, AI, smart manufacturing, digital twins,
              healthcare applications and emerging technologies.
            </p>

          </div>


          <div className="rounded-xl border p-7">

            <p className="text-sm font-semibold text-blue-600">
              Collaboration
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Academic & Industry Collaboration
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Collaboration involving research, technology development,
              innovation and practical industry applications.
            </p>

          </div>

        </div>

      </section>


      {/* Research CTA */}
      <section className="bg-gray-900 px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Research
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Explore Research & Academic Work
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore research interests, projects, publications and other
            academic contributions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/research"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Research
            </Link>

            <Link
              href="/publications"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Publications
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Projects
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