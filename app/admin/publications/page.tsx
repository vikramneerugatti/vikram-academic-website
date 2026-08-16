"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

type Publication = {
  id: string;
  title: string | null;
  authors: string | null;
  journal: string | null;
  year: number | null;
  doi: string | null;
  abstract: string | null;
  pdf_url: string | null;
  published: boolean | null;
  created_at: string | null;
};

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPublications() {
    try {
      setLoading(true);
      setError("");

      const supabase = createClient();

      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .eq("published", true)
        .order("year", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("PUBLICATIONS ERROR:", error);
        setError(error.message);
        setLoading(false);
        return;
      }

      setPublications(data ?? []);
      setLoading(false);
    } catch (err) {
      console.error("PUBLICATIONS FETCH ERROR:", err);
      setError("Unable to load publications.");
      setLoading(false);
    }
  }

  async function deletePublication(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this publication?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const supabase = createClient();

      const { error } = await supabase
        .from("publications")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("DELETE PUBLICATION ERROR:", error);
        alert(error.message);
        return;
      }

      // Remove deleted publication immediately from the screen
      setPublications((current) =>
        current.filter((publication) => publication.id !== id)
      );

      alert("Publication deleted successfully.");
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Unable to delete publication.");
    }
  }

  useEffect(() => {
    loadPublications();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
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

            <Link
              href="/admin/publications/new"
              className="inline-flex w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              + Add Publication
            </Link>

          </div>

        </div>
      </section>

      {/* Publications */}

      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* Loading */}

        {loading && (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <p className="text-gray-500">
              Loading publications...
            </p>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="rounded-xl bg-white p-10 shadow-sm">

            <h2 className="text-xl font-semibold text-red-600">
              Unable to load publications
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {error}
            </p>

            <button
              onClick={loadPublications}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Try Again
            </button>

          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          publications.length === 0 && (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">

              <h2 className="text-xl font-semibold text-gray-900">
                Publications coming soon
              </h2>

              <p className="mt-2 text-gray-500">
                Research publications will be listed here.
              </p>

            </div>
          )}

        {/* Publications List */}

        {!loading &&
          !error &&
          publications.length > 0 && (
            <div className="space-y-6">

              {publications.map((publication) => (

                <article
                  key={publication.id}
                  className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >

                  <div className="flex flex-col gap-5 md:flex-row md:justify-between">

                    {/* Publication information */}

                    <div className="flex-1">

                      <h2 className="text-xl font-bold leading-8 text-gray-900">
                        {publication.title}
                      </h2>

                      {publication.authors && (
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          <span className="font-semibold">
                            Authors:
                          </span>{" "}
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
                          <span className="font-semibold">
                            Year:
                          </span>{" "}
                          {publication.year}
                        </p>
                      )}

                      {publication.abstract && (
                        <p className="mt-5 leading-7 text-gray-600">
                          {publication.abstract}
                        </p>
                      )}

                    </div>

                    {/* Actions */}

                    <div className="flex flex-col gap-3 md:w-48">

                      {/* DOI */}

                      {publication.doi && (
                        <a
                          href={`https://doi.org/${publication.doi.replace(
                            "https://doi.org/",
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-blue-600 px-4 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
                        >
                          View DOI
                        </a>
                      )}

                      {/* PDF */}

                      {publication.pdf_url && (
                        <a
                          href={publication.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-purple-600 px-4 py-2 text-center text-sm font-semibold text-purple-600 hover:bg-purple-50"
                        >
                          View PDF
                        </a>
                      )}

                      {/* Edit */}

                      <Link
                        href={`/admin/publications/${publication.id}/edit`}
                        className="rounded-lg border border-green-600 px-4 py-2 text-center text-sm font-semibold text-green-600 hover:bg-green-50"
                      >
                        Edit
                      </Link>

                      {/* Delete */}

                      <button
                        onClick={() =>
                          deletePublication(publication.id)
                        }
                        className="rounded-lg border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          )}

      </section>

    </main>
  );
}