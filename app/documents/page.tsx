import { createClient } from "@/lib/supabase/server";

export default async function DocumentsPage() {
  const supabase = await createClient();

  const { data: documents, error } = await supabase
    .from("documents")
    .select("*")
    .eq("published", true)
    .order("year", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Documents
          </h1>

          <p className="mt-6 text-red-600">
            Database error: {error.message}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Documents
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Academic documents, research papers, certificates,
            presentations, project reports and other resources.
          </p>

        </div>
      </section>


      {/* Documents */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        {!documents || documents.length === 0 ? (

          <div className="rounded-xl bg-white p-10 text-center shadow-sm">

            <h2 className="text-xl font-semibold text-gray-900">
              Documents coming soon
            </h2>

            <p className="mt-2 text-gray-500">
              Public documents will be listed here.
            </p>

          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2">

            {documents.map((document) => (

              <article
                key={document.id}
                className="flex flex-col rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >

                {/* Document information */}
                <div className="flex-1">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {document.category || "Document"}
                      </span>

                      <h2 className="mt-4 text-xl font-bold text-gray-900">
                        {document.title}
                      </h2>

                    </div>

                    {document.year && (
                      <span className="shrink-0 text-sm font-medium text-gray-500">
                        {document.year}
                      </span>
                    )}

                  </div>


                  {/* Description */}
                  {document.description && (
                    <p className="mt-4 leading-7 text-gray-600">
                      {document.description}
                    </p>
                  )}

                </div>


                {/* View button */}
                {document.file_url && (
                  <div className="mt-6 border-t pt-5">

                    <a
                      href={document.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View / Download
                    </a>

                  </div>
                )}

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}