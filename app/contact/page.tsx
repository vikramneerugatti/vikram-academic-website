import Link from "next/link";

export default function ContactPage() {
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

            <Link href="/updates" className="hover:text-blue-600">
              Updates
            </Link>

            <Link href="/contact" className="text-blue-600">
              Contact
            </Link>

          </div>

        </div>
      </nav>


      {/* Header */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Get in Touch
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            For academic discussions, research collaboration, student
            projects, professional activities and technology-related
            enquiries, please feel free to get in touch.
          </p>

        </div>
      </section>


      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Profile */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm lg:col-span-1">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
              VN
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Dr. Vikram Neerugatti
            </h2>

            <p className="mt-3 text-gray-600">
              Associate Professor
            </p>

            <p className="mt-1 text-gray-600">
              Department of CSE
            </p>

            <p className="mt-1 text-gray-600">
              Faculty of Engineering & Technology
            </p>

            <p className="mt-1 text-gray-600">
              Jain (Deemed-to-be University), Bangalore
            </p>

          </div>


          {/* Contact Details */}
          <div className="lg:col-span-2">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Phone */}
              <div className="rounded-xl border bg-white p-7 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Phone
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Call
                </h3>

                <a
                  href="tel:+919490620406"
                  className="mt-3 block text-gray-600 hover:text-blue-600"
                >
                  +91 9490620406
                </a>

              </div>


              {/* WhatsApp */}
              <div className="rounded-xl border bg-white p-7 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  WhatsApp
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/919490620406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-gray-600 hover:text-blue-600"
                >
                  +91 9490620406
                </a>

              </div>


              {/* Official Email */}
              <div className="rounded-xl border bg-white p-7 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Official Email
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  University Email
                </h3>

                <a
                  href="mailto:vikram.n@jainuniversity.ac.in"
                  className="mt-3 block break-all text-gray-600 hover:text-blue-600"
                >
                  vikram.n@jainuniversity.ac.in
                </a>

              </div>


              {/* Personal Email */}
              <div className="rounded-xl border bg-white p-7 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Personal Email
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Email
                </h3>

                <a
                  href="mailto:vikramneerugatti@gmail.com"
                  className="mt-3 block break-all text-gray-600 hover:text-blue-600"
                >
                  vikramneerugatti@gmail.com
                </a>

              </div>


              {/* LinkedIn */}
              <div className="rounded-xl border bg-white p-7 shadow-sm md:col-span-2">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Professional Profile
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  LinkedIn
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Connect with me on LinkedIn for professional networking,
                  academic activities, research collaboration and technology
                  updates.
                </p>

                <a
                  href="https://www.linkedin.com/in/vikram-neerugatti-90368917/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  View LinkedIn Profile →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Collaboration */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl bg-gray-900 px-8 py-12 text-white md:px-12">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Research Collaboration
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Let's Collaborate
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              I am open to academic and research collaborations in areas
              including Internet of Things, Artificial Intelligence,
              Industrial IoT, Smart Manufacturing, Digital Twin, Edge
              Computing, Robotics and emerging technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="mailto:vikram.n@jainuniversity.ac.in"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                Send Email
              </a>

              <a
                href="https://wa.me/919490620406"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
              >
                WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/vikram-neerugatti-90368917/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800"
              >
                LinkedIn
              </a>

            </div>

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