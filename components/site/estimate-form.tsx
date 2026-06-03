"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { smsHref } from "@/lib/site";

const projects = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Finishing",
  "Home Addition",
  "Siding",
  "Roofing",
  "Windows & Doors",
  "Whole-Home Remodel",
  "Something else",
];

export function EstimateForm() {
  const [name, setName] = useState("");
  const [town, setTown] = useState("");
  const [project, setProject] = useState(projects[0]);
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let msg = "Hi Snina Siders! I'd like a free estimate.";
    if (name.trim()) msg += ` My name is ${name.trim()}.`;
    if (project) msg += ` Project: ${project}.`;
    if (town.trim()) msg += ` Location: ${town.trim()}.`;
    if (details.trim()) msg += ` Details: ${details.trim()}`;
    window.location.href = smsHref(msg);
  }

  const field =
    "w-full rounded-xl border border-[#C9A24B]/20 bg-neutral-900/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#C9A24B]/15 bg-card p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-9"
    >
      <h3 className="mb-6 font-display text-2xl text-foreground">
        Request a free estimate
      </h3>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="Jane Homeowner"
          />
        </div>
        <div>
          <label htmlFor="town" className="mb-2 block text-sm font-semibold text-foreground">
            Town
          </label>
          <input
            id="town"
            name="town"
            type="text"
            autoComplete="address-level2"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className={field}
            placeholder="Bridgewater, NJ"
          />
        </div>
        <div>
          <label htmlFor="project" className="mb-2 block text-sm font-semibold text-foreground">
            Project type
          </label>
          <select
            id="project"
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className={`${field} cursor-pointer`}
          >
            {projects.map((p) => (
              <option key={p} className="bg-neutral-900">
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="details" className="mb-2 block text-sm font-semibold text-foreground">
            A few details <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${field} resize-none`}
            placeholder="Roughly what you're hoping to do, timeline, etc."
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold py-4 text-base font-bold text-[#1b1408] shadow-[0_12px_34px_-12px_rgba(201,162,75,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <MessageSquare className="h-5 w-5" />
          Send my text to Snina Siders
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Opens your messaging app with a pre-written text. We typically reply the same business day.
        </p>
      </div>
    </form>
  );
}
