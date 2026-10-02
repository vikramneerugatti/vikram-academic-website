"use client";

import Link from "next/link";
import { useState } from "react";

export const dynamic = "force-dynamic";

type EventItem = {
  title: string;
  type: string;
  date: string;
  status: "Upcoming" | "Completed";
  desc: string;
  topics: string[];
  fees: { cat: string; fee: string }[];
  dates?: { label: string; date: string }[];
  contact: string;
};

const eventsData: EventItem[] = [
  {
    title: "Five Days Online FDP On IoT Metaverse",
    type: "FDP",
    date: "18 January 2027 - 20 January 2027",
    status: "Upcoming",
    desc: "Focuses on the convergence of IoT and Metaverse technologies, exploring how real-world data connects with cloud ecosystems, AI, and digital twins.",
    topics: ["Next-Generation IoT Systems", "Metaverse & Spatial Computing", "IoT-Metaverse Integration", "Digital Twins", "Edge AI", "Cybersecurity & Privacy"],
    fees: [{ cat: "External Faculty", fee: "₹350" }, { cat: "External Students", fee: "₹150" }, { cat: "Jain Members", fee: "Free" }],
    contact: "Prof. Basavaraju  (+91 99647 24949)"
  },
  {
    title: "DIGITAL TWIN - Five Days IoT Workshop",
    type: "Workshop",
    date: "22 February 2027 - 26 February 2027",
    status: "Upcoming",
    desc: "An intensive five-day workshop focused on understanding and applying Digital Twin frameworks in smart environments using cloud platforms and simulation tools.",
    topics: ["IoT Architecture", "Sensor & Cloud Pipelines", "Real-time Synchronization", "Predictive Maintenance", "Team Mini-Project Showcase"],
    fees: [{ cat: "All Categories", fee: "Free" }],
    contact: "Dr. Srinivasa Rao P (+91 99850 32966)"
  },
  {
    title: "BEYOND PROMPT - Three Days Online SDP On Agentic AI",
    type: "SDP",
    date: "13 October 2027 - 15 October 2027",
    status: "Upcoming",
    desc: "Takes students past traditional prompting into autonomous AI systems that reason, plan, use tools, and collaborate securely.",
    topics: ["Generative to Agentic Evolution", "Building Your First AI Agent", "Reason, Plan, Decide & Act", "Tools, Memory, RAG & Workflows", "Multi-Agent Systems"],
    fees: [{ cat: "All Registered Participants", fee: "Free" }],
    contact: "Dr. Kumaresan (+91 99443 50506)"
  },
  {
    title: "ARDUINO DAY 2027 - Learn. Explore. Innovate",
    type: "Workshop",
    date: "27 March 2027",
    status: "Upcoming",
    desc: "A one-day maker celebration focused on Arduino-based prototyping, embedded system components, and real-time automation streams.",
    topics: ["Introduction to Arduino Boards", "Architecture, Pins & Interfaces", "Arduino IDE Workflow", "Hardware Interfacing Demo", "Project Expo & Awards"],
    fees: [{ cat: "External Faculty", fee: "Free" }, { cat: "External Students", fee: "₹150" }, { cat: "Jain Members", fee: "Free" }],
    dates: [{ label: "Early Registration", date: "1st March 2027" }, { label: "Late Registration", date: "24th March 2027" }],
    contact: "Prof. Udaygiri Prasad & Prof. Lavanya (+91 91773 65767)"
  },
  {
    title: "RESEARCH - A - THON 2.0 - Three Week Research Program",
    type: "Program",
    date: "2 April 2027 - 20 April 2027",
    status: "Upcoming",
    desc: "A team-based research challenge guiding scholars through problem identification, literature reviews, methodology validation, and paper development.",
    topics: ["Orientation & Problem Identification", "Domain Draw & Literature Review", "Research Presentation & Evaluation", "Refinement & Validation Planning", "Paper Development Pipeline"],
    fees: [{ cat: "External Faculty", fee: "Free" }, { cat: "External Students", fee: "₹150" }, { cat: "Jain Members", fee: "Free" }],
    dates: [{ label: "Early Enrolment", date: "15th March 2027" }, { label: "Late Deadline", date: "28th March 2027" }],
    contact: "Dr. Panguranga Rao & Dr. Vijay Kumar A (+91 8073 254 459)"
  }
];

export default function IoTEventsPage() {
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Completed">("All");

  const filteredEvents = eventsData.filter(
    (ev) => filter === "All" || ev.status === filter
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Vikram Neerugatti <span className="text-cyan-400 text-sm font-medium ml-1">IoT Hub</span>
          </Link>
          <Link href="/" className="text-sm text-slate-400 transition hover:text-white">
            ← Home
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🌐</div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">JAIN University • CSE-IoT</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Internet of Things Events</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            Symposiums, Faculty Development Programs (FDPs), and student innovation tracks under the Computer Science & IoT Department.
          </p>
        </div>

        {/* FILTER CONTROLS */}
        <div className="mt-12 flex justify-center space-x-2">
          {(["All", "Upcoming", "Completed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === tab
                  ? "bg-cyan-400 text-slate-950 shadow-lg"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>

        {/* EVENTS LIST */}
        <div className="mt-12 space-y-8">
          {filteredEvents.map((item, index) => (
            <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-8 backdrop-blur">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.status === "Upcoming" ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-slate-800 text-slate-400"
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs uppercase font-mono text-cyan-400">{item.type}</span>
                  </div>
                  <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white">{item.title}</h2>
                  <p className="mt-1 text-xs text-slate-400">📅 {item.date}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">About</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Topics Covered</h3>
                    <ul className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 text-sm text-slate-400">
                      {item.topics.map((t, i) => (
                        <li key={i} className="flex items-center"><span className="text-cyan-400 mr-2 font-mono">▸</span>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-slate-950/50 p-4 border border-white/5 space-y-4 text-xs">
                  {item.dates && (
                    <div>
                      <h4 className="text-slate-500 font-semibold mb-1 uppercase tracking-wider">Deadlines</h4>
                      {item.dates.map((d, i) => (
                        <div key={i} className="flex justify-between border-b border-white/5 pb-1 mb-1"><span className="text-slate-400">{d.label}:</span><span className="text-cyan-400">{d.date}</span></div>
                      ))}
                    </div>
                  )}
                  <div>
                    <h4 className="text-slate-500 font-semibold mb-1 uppercase tracking-wider">Registration Fees</h4>
                    {item.fees.map((f, i) => (
                      <div key={i} className="flex justify-between items-center bg-slate-900/40 p-1.5 rounded-lg mb-1"><span className="text-slate-300">{f.cat}</span><span className={f.fee === "Free" ? "text-emerald-400 font-semibold" : "text-white"}>{f.fee}</span></div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/5 text-[11px]">
                    <span className="text-slate-500 font-semibold block uppercase tracking-wider mb-0.5">Contact</span>
                    <p className="text-slate-300">{item.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Vikram Neerugatti • JAIN University
        </div>
      </footer>
    </main>
  );
}