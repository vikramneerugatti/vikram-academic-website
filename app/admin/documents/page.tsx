"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type DocumentRecord = {
  id: string;
  title: string;
  category: string | null;
  description: string | null;
  file_url: string | null;
  file_name: string | null;
  year: number | null;
  published: boolean;
};

export default function AdminDocuments() {
  const supabase = createClient();

  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDocuments() {
    setLoading(true);

    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("DOCUMENT LOAD ERROR:", error);
      setLoading(false);
      return;
    }

    setDocuments(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  async function deleteDocument(document: DocumentRecord) {
    const confirmed = window.confirm(
      `Delete "${document.title}"?`
    );

    if (!confirmed) return;

    if (document.file_name) {
      const { error: storageError } = await supabase.storage
        .from("documents")
        .remove([document.file_name]);

      if (storageError) {
        console.error("STORAGE DELETE ERROR:", storageError);
      }
    }

    const { error } = await supabase
      .from("documents")
      .delete()
      .eq("id", document.id);

    if (error) {
      console.error("DATABASE DELETE ERROR:", error);
      alert("Unable to delete document.");
      return;
    }

    loadDocuments();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-10">
        Loading documents...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              Documents
            </h1>

            <p className="text-sm text-gray-500">
              Manage public documents and files
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin/dashboard"
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/documents/new"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
            >
              + Upload Document
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {documents.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center">
            <h2 className="text-xl font-semibold">
              No documents yet
            </h2>

            <p className="mt-2 text-gray-500">
              Upload your first document.
            </p>

            <Link
              href="/admin/documents/new"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Upload Document
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Document
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Category
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Year
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Status
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {documents.map((document) => (
                    <tr
                      key={document.id}
                      className="border-b last:border-b-0"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium">
                          {document.title}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {document.file_name}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {document.category || "—"}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {document.year || "—"}
                      </td>

                      <td className="px-6 py-4">
                        {document.published ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Published
                          </span>
                        ) : (
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                            Draft
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-4">
                          {/* VIEW */}
                          {document.file_url && (
                            <a
                              href={document.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-blue-600 hover:underline"
                            >
                              View
                            </a>
                          )}

                          {/* EDIT */}
                          <Link
                            href={`/admin/documents/${document.id}/edit`}
                            className="text-sm font-semibold text-green-600 hover:underline"
                          >
                            Edit
                          </Link>

                          {/* DELETE */}
                          <button
                            onClick={() =>
                              deleteDocument(document)
                            }
                            className="text-sm font-semibold text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}