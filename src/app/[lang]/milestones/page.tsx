import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

export default async function MilestonesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return null;

  const typedLang = lang as Lang;
  const copy = getCopy(typedLang);

  return (
    <Container>
      <Section title={copy.milestones.title} eyebrow={copy.companyName}>
        <ol className="relative ml-3 grid gap-6 border-l border-zinc-200">
          {copy.milestones.items.map((m) => (
            <li key={m.year} className="pl-8">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-bmp-gold ring-4 ring-white" />
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="font-heading text-lg font-semibold text-zinc-950">
                  {m.year}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </Container>
  );
}
