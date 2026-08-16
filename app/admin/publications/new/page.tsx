"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function NewPublication() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [journal, setJournal] = useState("");
  const [year, setYear] = useState("");
  const [doi, setDoi] = useState("");
  const [abstractText, setAbstractText] = useState("");
  const [published, setPublished] = useState(true);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setError("");

    const { error } = await supabase.from("publications").insert({
      title,
      authors,
      journal,
      year: year ? Number(year) : null,
      doi,
      abstract: abstractText,
      published,
    });

    if (error) {
      console.error(error);
      setError("Unable to save publication.");
      setSaving(false);
      return;
    }

    router.push("/admin/publications");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Add Publication
            </h1>

            <p className="text-sm text-gray-500">
              Add a research publication
            </p>
          </div>

          <Link
            href="/admin/publications"
            className="rounded-lg border px-4 py-2 text-sm font-medium"
          >
            Back
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl bg-white p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Publication Title *
            </label>

            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter publication title"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Authors
            </label>

            <input
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Author 1, Author 2, ..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Journal / Conference
            </label>

            <input
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Journal or conference name"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Year
              </label>

              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                placeholder="2026"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                DOI
              </label>

              <input
                value={doi}
                onChange={(e) => setDoi(e.target.value)}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
                placeholder="10.xxxx/xxxxx"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Abstract
            </label>

            <textarea
              value={abstractText}
              onChange={(e) => setAbstractText(e.target.value)}
              rows={7}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter publication abstract"
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="h-4 w-4"
            />

            <span className="text-sm font-medium">
              Publish this publication
            </span>
          </label>

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Publication"}
          </button>
        </form>
      </section>
    </main>
  );
}
