"use client";

import { useMemo, useState } from "react";
import type { SiteCopy } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export function ContactForm({ copy, lang }: { copy: SiteCopy; lang: Lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const formAction =
    "https://docs.google.com/forms/d/e/1FAIpQLSdtFo5dZUmkNEnnWHPjsgITzpn9jaRyt1hSU12WNEGXTSo__w/formResponse";
  const entry = {
    name: "entry.109833042",
    email: "entry.501223136",
    message: "entry.752911324",
  } as const;

  const disabled = useMemo(() => {
    return (
      status === "submitting" ||
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    );
  }, [name, email, message, status]);

  const sendingLabel = lang === "en" ? "Sending..." : "Mengirim...";
  const errorLabel =
    lang === "en" ? "Failed to send. Please try again." : "Gagal mengirim. Silakan coba lagi.";

  return (
    <form
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        if (disabled) return;

        setStatus("submitting");

        const body = new URLSearchParams({
          [entry.name]: name,
          [entry.email]: email,
          [entry.message]: message,
        });

        try {
          await fetch(formAction, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body,
          });

          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } catch {
          setStatus("error");
        }
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
          {status === "submitting"
            ? sendingLabel
            : copy.contact.formSubmit}
        </button>

        {status === "success" ? (
          <p className="text-sm text-zinc-700">{copy.contact.formSuccess}</p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-bmp-maroon">{errorLabel}</p>
        ) : null}
      </div>
    </form>
  );
}
