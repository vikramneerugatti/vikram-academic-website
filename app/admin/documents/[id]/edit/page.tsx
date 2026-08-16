"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function EditDocument() {
  const supabase = createClient();
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research Papers");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [published, setPublished] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDocument() {
      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
        return;
      }

      setTitle(data.title || "");
      setCategory(data.category || "Research Papers");
      setDescription(data.description || "");
      setYear(data.year ? String(data.year) : "");
      setPublished(data.published ?? false);

      setLoading(false);
    }

    loadDocument();
  }, [id]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setError("");

    const { error } = await supabase
      .from("documents")
      .update({
        title,
        category,
        description,
        year: year ? Number(year) : null,
        published,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      setError(error.message);
      setSaving(false);
      return;
    }

    router.push("/admin/documents");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen p-10">
        Loading document...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              Edit Document
            </h1>

            <p className="text-sm text-gray-500">
              Update document information
            </p>
          </div>

          <Link
            href="/admin/documents"
            className="rounded-lg border px-4 py-2 text-sm"
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
              Document Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option>Research Papers</option>
              <option>Journal Publications</option>
              <option>Conference Papers</option>
              <option>Certificates</option>
              <option>FDP / Workshops</option>
              <option>Academic Documents</option>
              <option>Projects</option>
              <option>Patents</option>
              <option>Books / Chapters</option>
              <option>Curriculum / Syllabus</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              rows={5}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Year
            </label>

            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) =>
                setPublished(e.target.checked)
              }
              className="h-4 w-4"
            />

            <span className="text-sm font-medium">
              Published
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
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </section>
    </main>
  );
}
