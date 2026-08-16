"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

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
};

export default function EditPublicationPage() {
  const router = useRouter();
  const params = useParams();

  const [publication, setPublication] =
    useState<Publication | null>(null);

  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [journal, setJournal] = useState("");
  const [year, setYear] = useState("");
  const [doi, setDoi] = useState("");
  const [abstractText, setAbstractText] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [published, setPublished] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  useEffect(() => {
    let cancelled = false;

    async function loadPublication() {
      console.log("EDIT PUBLICATION ID:", id);

      if (!id) {
        setError("Publication ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const supabase = createClient();

        const { data, error } = await supabase
          .from("publications")
          .select(
            "id, title, authors, journal, year, doi, abstract, pdf_url, published"
          )
          .eq("id", id)
          .maybeSingle();

        console.log("PUBLICATION DATA:", data);
        console.log("PUBLICATION ERROR:", error);

        if (cancelled) return;

        if (error) {
          setError(error.message);
          setLoading(false);
          return;
        }

        if (!data) {
          setError("Publication not found.");
          setLoading(false);
          return;
        }

        const record = data as Publication;

        setPublication(record);

        setTitle(record.title ?? "");
        setAuthors(record.authors ?? "");
        setJournal(record.journal ?? "");
        setYear(
          record.year !== null && record.year !== undefined
            ? String(record.year)
            : ""
        );
        setDoi(record.doi ?? "");
        setAbstractText(record.abstract ?? "");
        setPdfUrl(record.pdf_url ?? "");
        setPublished(record.published ?? false);

        setLoading(false);
      } catch (err) {
        console.error("LOAD ERROR:", err);

        if (!cancelled) {
          setError("Unable to load publication.");
          setLoading(false);
        }
      }
    }

    loadPublication();

    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const supabase = createClient();

      const { error } = await supabase
        .from("publications")
        .update({
          title: title.trim(),
          authors: authors.trim(),
          journal: journal.trim(),
          year: year ? Number(year) : null,
          doi: doi.trim(),
          abstract: abstractText.trim(),
          pdf_url: pdfUrl.trim(),
          published,
        })
        .eq("id", id);

      if (error) {
        console.error("UPDATE ERROR:", error);
        setError(error.message);
        setSaving(false);
        return;
      }

      setSuccess(
        "Publication updated successfully."
      );

      setSaving(false);

      setTimeout(() => {
        router.push("/admin/publications");
        router.refresh();
      }, 800);
    } catch (err) {
      console.error("SAVE ERROR:", err);

      setError(
        "An unexpected error occurred while saving."
      );

      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8">
          <h1 className="text-2xl font-bold">
            Edit Publication
          </h1>

          <p className="mt-4 text-gray-500">
            Loading publication...
          </p>
        </div>
      </main>
    );
  }

  if (error && !publication) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8">
          <h1 className="text-2xl font-bold">
            Edit Publication
          </h1>

          <div className="mt-6 rounded-lg bg-red-50 p-4">
            <p className="font-semibold text-red-700">
              Unable to load publication
            </p>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          </div>

          <Link
            href="/admin/publications"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
          >
            Back to Publications
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Edit Publication
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Update your research publication
            </p>
          </div>

          <Link
            href="/admin/publications"
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            ← Back
          </Link>

        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">

        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-8 shadow-sm"
        >

          <div className="space-y-6">

            {/* TITLE */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Publication Title *
              </label>

              <input
                type="text"
                required
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="Enter publication title"
              />
            </div>

            {/* AUTHORS */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Authors
              </label>

              <input
                type="text"
                value={authors}
                onChange={(e) =>
                  setAuthors(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="Enter author names"
              />
            </div>

            {/* JOURNAL */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Journal / Conference
              </label>

              <input
                type="text"
                value={journal}
                onChange={(e) =>
                  setJournal(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="Enter journal or conference name"
              />
            </div>

            {/* YEAR */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Year
              </label>

              <input
                type="number"
                value={year}
                onChange={(e) =>
                  setYear(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="2026"
              />
            </div>

            {/* DOI */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                DOI
              </label>

              <input
                type="text"
                value={doi}
                onChange={(e) =>
                  setDoi(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="10.xxxx/xxxxx"
              />
            </div>

            {/* ABSTRACT */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Abstract
              </label>

              <textarea
                value={abstractText}
                onChange={(e) =>
                  setAbstractText(e.target.value)
                }
                rows={8}
                className="w-full resize-y rounded-lg border px-4 py-3"
                placeholder="Enter publication abstract"
              />
            </div>

            {/* PDF URL */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                PDF URL
              </label>

              <input
                type="url"
                value={pdfUrl}
                onChange={(e) =>
                  setPdfUrl(e.target.value)
                }
                className="w-full rounded-lg border px-4 py-3"
                placeholder="https://..."
              />

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:underline"
                >
                  View Current PDF
                </a>
              )}
            </div>

            {/* PUBLISHED */}

            <div className="rounded-lg border bg-gray-50 p-4">

              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) =>
                    setPublished(e.target.checked)
                  }
                  className="h-4 w-4"
                />

                <div>
                  <p className="font-semibold">
                    Published
                  </p>

                  <p className="text-sm text-gray-500">
                    Show this publication on the public website.
                  </p>
                </div>

              </label>

            </div>

            {/* ERROR */}

            {error && (
              <div className="rounded-lg bg-red-50 p-4">
                <p className="font-semibold text-red-700">
                  Error
                </p>

                <p className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* SUCCESS */}

            {success && (
              <div className="rounded-lg bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  {success}
                </p>
              </div>
            )}

            {/* BUTTONS */}

            <div className="flex items-center gap-4 border-t pt-6">

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : "Save Changes"}
              </button>

              <Link
                href="/admin/publications"
                className="rounded-lg border px-6 py-3 font-semibold hover:bg-gray-50"
              >
                Cancel
              </Link>

            </div>

          </div>

        </form>

      </section>

    </main>
  );
}