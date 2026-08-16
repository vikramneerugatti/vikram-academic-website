"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function NewDocument() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research Papers");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [published, setPublished] = useState(true);

  const [file, setFile] = useState<File | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setError("Please select a file.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const fileExtension =
        file.name.split(".").pop()?.toLowerCase() || "file";

      const safeFileName = file.name
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9._-]/g, "");

      const filePath = `${Date.now()}-${safeFileName}`;

      // Upload file
      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        throw new Error(uploadError.message);
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("documents")
        .getPublicUrl(filePath);

      // Save document information
      const { error: databaseError } = await supabase
        .from("documents")
        .insert({
          title,
          category,
          description,
          year: year ? Number(year) : null,
          file_url: publicUrl,
          file_name: filePath,
          published,
        });

      if (databaseError) {
        console.error(databaseError);

        // Remove uploaded file if database insert fails
        await supabase.storage
          .from("documents")
          .remove([filePath]);

        throw new Error(databaseError.message);
      }

      router.push("/admin/documents");
      router.refresh();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to upload document."
      );

      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              Upload Document
            </h1>

            <p className="text-sm text-gray-500">
              Upload a document to your academic website
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
              Document Title *
            </label>

            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Example: Research Proposal 2026"
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
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Brief description of the document"
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
              placeholder="2026"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Select File *
            </label>

            <input
              type="file"
              required
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
              className="w-full rounded-lg border p-3"
            />

            {file && (
              <p className="mt-2 text-sm text-gray-500">
                Selected: {file.name}
              </p>
            )}
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
              Publish this document
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
            {saving ? "Uploading..." : "Upload Document"}
          </button>
        </form>
      </section>
    </main>
  );
}
