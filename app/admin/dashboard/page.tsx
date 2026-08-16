"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Counts = {
  publications: number;
  projects: number;
  achievements: number;
  documents: number;
  updates: number;
};

export default function AdminDashboard() {
  const supabase = createClient();

  const [counts, setCounts] = useState<Counts>({
    publications: 0,
    projects: 0,
    achievements: 0,
    documents: 0,
    updates: 0,
  });

  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email ?? "");
      }

      const [
        publications,
        projects,
        achievements,
        documents,
        updates,
      ] = await Promise.all([
        supabase.from("publications").select("*", { count: "exact", head: true }),
        supabase.from("projects").select("*", { count: "exact", head: true }),
        supabase.from("achievements").select("*", { count: "exact", head: true }),
        supabase.from("documents").select("*", { count: "exact", head: true }),
        supabase.from("updates").select("*", { count: "exact", head: true }),
      ]);

      setCounts({
        publications: publications.count ?? 0,
        projects: projects.count ?? 0,
        achievements: achievements.count ?? 0,
        documents: documents.count ?? 0,
        updates: updates.count ?? 0,
      });
    }

    loadDashboard();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  const cards = [
    {
      title: "Publications",
      count: counts.publications,
      href: "/admin/publications",
      action: "Manage Publications",
    },
    {
      title: "Projects",
      count: counts.projects,
      href: "/admin/projects",
      action: "Manage Projects",
    },
    {
      title: "Achievements",
      count: counts.achievements,
      href: "/admin/achievements",
      action: "Manage Achievements",
    },
    {
      title: "Documents",
      count: counts.documents,
      href: "/admin/documents",
      action: "Manage Documents",
    },
    {
      title: "Updates",
      count: counts.updates,
      href: "/admin/updates",
      action: "Manage Updates",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Dr. Vikram Neerugatti Academic Website
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Logged in as
          </p>

          <p className="mt-1 font-medium text-gray-900">
            {email}
          </p>
        </div>

        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Website Content
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                {card.count}
              </p>

              <Link
                href={card.href}
                className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {card.action}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Quick Actions
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/admin/publications/new"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              + Add Publication
            </Link>

            <Link
              href="/admin/projects/new"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              + Add Project
            </Link>

            <Link
              href="/admin/documents/new"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              + Upload Document
            </Link>

            <Link
              href="/admin/updates/new"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              + Add Update
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
