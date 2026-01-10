"use client";

import { useMemo, useState } from "react";
import type { SiteCopy } from "@/lib/content";

export function ContactForm({ copy }: { copy: SiteCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const disabled = useMemo(() => {
    return name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0;
  }, [name, email, message]);

  return (
    <form
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="font-heading text-base font-semibold text-zinc-950">
        {copy.contact.formTitle}
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1">
          <span className="text-xs font-semibold tracking-wide text-zinc-700">
            {copy.contact.formName}
          </span>
          <input
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition-colors focus:border-bmp-gold/70"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold tracking-wide text-zinc-700">
            {copy.contact.formEmail}
          </span>
          <input
            type="email"
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition-colors focus:border-bmp-gold/70"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold tracking-wide text-zinc-700">
            {copy.contact.formMessage}
          </span>
          <textarea
            className="min-h-32 resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-bmp-gold/70"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-bmp-maroon px-5 text-sm font-semibold text-white shadow-sm shadow-bmp-maroon/20 transition-colors hover:bg-bmp-maroon/90 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:shadow-none"
        >
          {copy.contact.formSubmit}
        </button>

        {submitted ? (
          <p className="text-sm text-zinc-700">{copy.contact.formSuccess}</p>
        ) : null}
      </div>
    </form>
  );
}
