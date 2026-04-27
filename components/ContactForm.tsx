"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  organization: string;
  email: string;
  country: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  country: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(false);

    if (!form.name || !form.organization || !form.email || !form.country || !form.message) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please provide a valid business email address.");
      return;
    }

    setError("");

    // Placeholder form handler:
    // Connect this function to your API route, CRM, or email provider.
    // Example integration points: app/api/contact/route.ts, HubSpot, Salesforce, or SendGrid.
    await new Promise((resolve) => setTimeout(resolve, 400));

    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { key: "name", label: "Name", type: "text", required: true },
          { key: "organization", label: "Organization", type: "text", required: true },
          { key: "email", label: "Email", type: "email", required: true },
          { key: "country", label: "Country", type: "text", required: true },
        ].map((field) => (
          <label key={field.key} className="text-sm font-medium text-slate-700">
            {field.label} {field.required && <span className="text-rose-600">*</span>}
            <input
              type={field.type}
              required={field.required}
              value={form[field.key as keyof FormState]}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, [field.key]: event.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blueTech transition focus:ring-2"
            />
          </label>
        ))}
      </div>

      <label className="block text-sm font-medium text-slate-700">
        What are you looking for?
        <select
          value={form.interest}
          onChange={(event) => setForm((prev) => ({ ...prev, interest: event.target.value }))}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blueTech transition focus:ring-2"
        >
          <option value="">Select an option</option>
          <option>Digital Transformation Advisory</option>
          <option>IT Governance</option>
          <option>AI Adoption</option>
          <option>Core Banking / Systems Modernization</option>
          <option>MicroFinance-as-a-Service</option>
          <option>Strategic Partnership</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Message <span className="text-rose-600">*</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blueTech transition focus:ring-2"
        />
      </label>

      {error && <p className="text-sm text-rose-700">{error}</p>}
      {submitted && (
        <p className="text-sm text-inclusion">
          Thank you. Your message has been captured in this demo form.
        </p>
      )}

      <button
        type="submit"
        className="inline-flex rounded-full bg-blueTech px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy"
      >
        Start a Conversation
      </button>
    </form>
  );
}
