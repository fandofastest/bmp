import type { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-16">
      <div className="animate-fade-up">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
