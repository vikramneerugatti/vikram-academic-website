"use client";

import Link from "next/link";
import { useState } from "react";

type EventItem = {
  title: string;
  type: "Workshop" | "FDP" | "SDP" | "Program";
  date: string;
  status: "Upcoming" | "Completed";
  description: string;
  objectives: string[];
  topics: string[];
  fees: { category: string; amount: string }[];
  importantDates?: { label: string; date: string }[];
  contacts: { name: string; role: string; phone?: string }[];
};

const iotEventsData: EventItem[] = [
  {
    title: "Five Days Online Faculty Development Program (FDP) On IoT Metaverse",
    type: "FDP",
    date: "18 January 2026 - 20 January 2026",
    status: "Completed",
    description: "Focuses on the convergence of IoT and Metaverse technologies, exploring how real-world IoT data connects with cloud ecosystems, AI, digital twins, and immersive virtual layouts.",
    objectives: [
      "Introduce the foundations of IoT, Metaverse, XR (AR/VR/MR), spatial computing, and digital twins.",
      "Explain how sensors, actuators, gateways, networks, and cloud platforms support immersive digital environments.",
      "Provide insights into cybersecurity, privacy, identity, and responsible technology adoption."
    ],
    topics: [
      "Next-Generation IoT and Smart Systems",
      "Metaverse, XR, and Spatial Computing",
      "IoT–Metaverse Integration & Immerse Expo",
      "Digital Twins for Physical Systems",
      "Edge AI and Intelligent IoT",
      "IoT–Metaverse Cybersecurity and Digital Privacy"
    ],
    fees: [
      { category: "External Faculty", amount: "₹350" },
      { category: "External Students", amount: "₹150" },
      { category: "Jain Faculty & Students", amount: "Free" }
    ],
    contacts: [
      { name: "Dr. Vikram Neerugatti", role: "Convener & Program Head, CSE-IoT", phone: "+91 8074481964" },
      { name: "Mr. Basavaraju D R", role: "Assistant Professor", phone: "+91 9964724949" }
    ]
  },
  {
    title: "DIGITAL TWIN - Five Days IoT Workshop",
    type: "Workshop",
    date: "22 February 2026 - 26 February 2026",
    status: "Completed",
    description: "An intensive five-day immersive challenge focused on understanding and building Digital Twin frameworks in smart environments using cloud integration and physical prototyping tracks.",
    objectives: [
      "Build a strong foundational framework in Digital Twin technology and hardware systems integration.",
      "Explore real-time state synchronization, remote predictive maintenance, and data pipelines.",
      "Apply multi-platform sensor architectures to clean data streams for automation profiles."
    ],
    topics: [
      "IoT Architecture Frameworks",
      "Sensor Deployment & Cloud Pipelines",
      "Real-time Data Synchronization Profiles",
      "Predictive Maintenance Systems Analysis",
      "End-to-End Team Prototyping Mini-Project"
    ],
    fees: [
      { category: "External Faculty / Industry", amount: "Free" },
      { category: "External Students", amount: "Free" },
      { category: "Jain Faculty & Students", amount: "Free" }
    ],
    contacts: [
      { name: "Dr. Vikram Neerugatti", role: "Program Head, CSE-IoT", phone: "+91 8074481964" }
    ]
  },
  {
    title: "BEYOND PROMPT - Three Days Online Student Development Program (SDP) On Agentic AI",
    type: "SDP",
    date: "13 October 2026 - 15 October 2026",
    status: "Completed",
    description: "Takes engineering students past standard generative prompts into the landscape of autonomous, goal-driven AI architectures that can plan, execute tools, and operate within loops safely.",
    objectives: [
      "Introduce students to the foundational paradigm leap from generative prompting to Agentic execution loops.",
      "Explore multi-agent orchestration frameworks, short/long term system memory components, and RAG architectures.",
      "Promote actionable engineering safety layers for building secure, deterministic tool integrations."
    ],
    topics: [
      "Generative AI to Agentic AI Paradigm Evolution",
      "Building Your First Autonomous AI Agent Workspace",
      "Reasoning Engine execution chains (Plan, Decide, Act)",
      "Tools Integration, System Memory Management, and RAG",
      "Building Orchestrated Multi-Agent Autonomous Teams"
    ],
    fees: [
      { category: "All Registered Participants", amount: "Free" },
      { category: "Jain University Members", amount: "Free" }
    ],
    contacts: [
      { name: "Dr. Vikram Neerugatti", role: "Convener & Program Head, CSE-IoT", phone: "+91 8074481964" }
    ]
  },
  {
    title: "ARDUINO DAY 2027 - Learn. Explore. Innovate",
    type: "Workshop",
    date: "27 March 2027",
    status: "Upcoming",
    description: "A comprehensive, one-day celebration and technical maker event focusing completely on hardware design, embedded architecture assembly, and live sensor deployment profiles.",
    objectives: [
      "Introduce practical Arduino development configurations, board architectures, and microcontrollers.",
      "Explain system interface pins, digital-to-analog converter bindings, and processing cycles.",
      "Provide an active tech-expo showroom floor for engineering student design reviews and project evaluations."
    ],
    topics: [
      "Introduction to Arduino Microcontroller Families",
      "Architecture Subsystems, I/O Pins, and Interfaces",
      "Arduino IDE Development Lifecycle and Basic Scripting",
      "Live Hardware Sensor Interfacing Demonstrations",
      "Prebuilt Interactive Project Exposures & Tech Awards"
    ],
    fees: [
      { category: "External Faculty", amount: "Free" },
      { category: "External Students", amount: "Scale: ₹150" },
      { category: "Jain Faculty & Students", amount: "Free" }
    ],
    importantDates: [
      { label: "Early Registration Closes", date: "1st March 2027" },
      { label: "Late Registration Deadline", date: "24th March 2027" }
    ],
    contacts: [
      { name: "Dr. Vikram Neerugatti", role: "Convener & CoE-IoT Lead", phone: "+91 8074481964" },
      { name: "Dr. P T Sivasankar", role: "Program Head, CSBS", phone: "Via Dept." }
    ]
  },
  {
    title: "RESEARCH - A - THON 2.0 - Three Week Research Program Workshop",
    type: "Program",
    date: "2 April 2027 - 20 April 2027",
    status: "Upcoming",
    description: "A structured, deep-dive team research format designed to guide scholars and students from basic exploration tracks directly down into formal paper composition and publishing streams.",
    objectives: [
      "Spur structural research mindset development across open industrial problem domains.",
      "Provide clean documentation strategies for extracting actionable data gaps via deep literature parsing.",
      "Offer formal editing and verification review boards composed of expert academic chairs."
    ],
    topics: [
      "Research Orientation Frameworks & Problem Statements",
      "Dynamic Domain Draw Mechanics and Structural Swaps",
      "Deep Literature Parsing and Data Inconsistency Mapping",
      "Technical Review Submissions and Proof-of-Concept Verification",
      "Full Comprehensive Research Paper Production Pipelines"
    ],
    fees: [
      { category: "External Faculty Members", amount: "Free" },
      { category: "External Research Students", amount: "₹150" },
      { category: "Jain University Cohorts", amount: "Free" }
    ],
    importantDates: [
      { label: "Early Track Enrolment", date: "15th March 2027" },
      { label: "Final Selection Gate", date: "28th March 2027" }
    ],
    contacts: [
      { name: "Dr. Vikram Neerugatti", role: "Professor & Program Head, CSE-IoT", phone: "+91 8074481964" },
      { name: "Mr. Basavaraju D R", role: "Assistant Professor", phone: "+91 9964724949" }
    ]
  }
];

export default function IoTEventsPage() {
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Completed">("All");

  const filteredEvents = iotEventsData.filter(
    (ev) => filter === "All" || ev.status === filter
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVIGATION */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Pagat Neerugatti <span className="text-cyan-400 text-sm font-medium ml-1">IoT Hub</span>
          </Link>
          <Link href="/" className="text-sm text-slate-400 transition hover:text-white">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🌐</div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            JAIN (Deemed-to-be University) • CSE-IoT
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Internet of Things Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 leading-relaxed">
            Technical symposiums, Faculty Development Programs (FDPs), and student innovation workshops 
            organized under the Program of Computer Science and Internet of Things (IoT).
          </p>
        </div>

        {/* TABS FILTER */}
        <div className="mt-12 flex justify-center space-x-2">
          {(["All", "Upcoming", "Completed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === tab
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                  : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              }`}
            >