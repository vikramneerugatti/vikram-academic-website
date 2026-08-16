import { createClient } from "@/lib/supabase/server";

export default async function PublicationsPage() {
  const supabase = await createClient();

  const { data: publications, error } = await supabase
    .from("publications")
    .select("*")
    .eq("published", true)
    .order("year", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("PUBLICATIONS ERROR:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Research
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Publications
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Selected research publications, journal articles, conference
            papers, and scholarly contributions.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {!publications || publications.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Publications coming soon
            </h2>

            <p className="mt-2 text-gray-500">
              Research publications will be listed here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {publications.map((publication) => (
              <article
                key={publication.id}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold leading-8 text-gray-900">
                      {publication.title}
                    </h2>

                    {publication.authors && (
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        <span className="font-semibold">Authors:</span>{" "}
                        {publication.authors}
                      </p>
                    )}

                    {publication.journal && (
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        <span className="font-semibold">
                          Journal / Conference:
                        </span>{" "}
                        {publication.journal}
                      </p>
                    )}

                    {publication.year && (
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Year:</span>{" "}
                        {publication.year}
                      </p>
                    )}

                    {publication.abstract && (
                      <p className="mt-5 leading-7 text-gray-600">
                        {publication.abstract}
                      </p>
                    )}
                  </div>

                  {publication.doi && (
                    <div className="md:w-40 md:text-right">
                      <a
                        href={`https://doi.org/${publication.doi.replace(
                          "https://doi.org/",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                      >
                        View DOI
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}