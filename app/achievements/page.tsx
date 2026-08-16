import Link from "next/link";

const achievements = [
  {
    year: "2026",
    category: "Academic Leadership",
    title: "Program Head – CSE (IoT)",
    description:
      "Academic leadership and coordination of the CSE – IoT program, including curriculum, student development, projects, research and academic activities.",
  },
  {
    year: "2026",
    category: "Research",
    title: "Research & Innovation Initiatives",
    description:
      "Active involvement in research and innovation initiatives involving IoT, Artificial Intelligence, Industrial IoT, Smart Manufacturing and emerging technologies.",
  },
  {
    year: "2026",
    category: "Professional Development",
    title: "AICTE QIP – 3D Printing & Additive Manufacturing",
    description:
      "Selected for an AICTE Quality Improvement Programme course on 3D Printing and Additive Manufacturing at IIT Palakkad.",
  },
  {
    year: "2025",
    category: "Research",
    title: "Minor Research Project",
    description:
      "Research project initiative supported through a sanctioned Minor Research Project, focusing on technology-driven research and innovation.",
  },
  {
    year: "2025",
    category: "Academic Development",
    title: "Research & Student Project Mentoring",
    description:
      "Mentoring students in research, technology development, academic projects, publications and innovation-oriented activities.",
  },
  {
    year: "2025",
    category: "Professional Activities",
    title: "Academic & Institutional Contributions",
    description:
      "Contribution to curriculum development, academic coordination, research activities, professional development and institutional initiatives.",
  },
];

const areas = [
  "Academic Leadership",
  "Research & Innovation",
  "Student Mentoring",
  "Curriculum Development",
  "Professional Development",
  "Industry Collaboration",
];

export default function AchievementsPage() {
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

            <Link href="/achievements" className="text-blue-600">
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
            Achievements
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Academic & Professional Achievements
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Selected academic, research, professional development and
            institutional contributions.
          </p>

        </div>
      </section>


      {/* Achievement Timeline */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="space-y-8">

          {achievements.map((achievement) => (

            <article
              key={`${achievement.year}-${achievement.title}`}
              className="relative rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >

              <div className="flex flex-col gap-5 md:flex-row">

                {/* Year */}
                <div className="md:w-28">

                  <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                    {achievement.year}
                  </span>

                </div>


                {/* Content */}
                <div className="flex-1">

                  <p className="text-sm font-semibold text-blue-600">
                    {achievement.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {achievement.description}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Achievement Areas */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Professional Contributions
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Areas of Contribution
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {areas.map((area) => (

              <div
                key={area}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                  ✓
                </div>

                <h3 className="mt-4 font-bold">
                  {area}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Academic and professional contribution in this area.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Professional Development */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-2xl bg-gray-900 px-8 py-12 text-white md:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Continuous Learning
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professional Development
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Continuous professional development through faculty development
            programmes, quality improvement programmes, research activities,
            technology initiatives and academic collaborations.
          </p>

          <Link
            href="/documents"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            View Documents
          </Link>

        </div>

      </section>


      {/* Research CTA */}
      <section className="border-t bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Explore More
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Explore Research & Publications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Explore research activities, projects and scholarly
            contributions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/research"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Research
            </Link>

            <Link
              href="/publications"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Publications
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
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