import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

export default async function VisionMissionPage({
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
      <Section title={copy.visionMission.title} eyebrow={copy.companyName}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="font-heading text-lg font-semibold text-zinc-950">
              {copy.visionMission.visionTitle}
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
              {copy.visionMission.vision.map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-bmp-gold" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="font-heading text-lg font-semibold text-zinc-950">
              {copy.visionMission.missionTitle}
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
              {copy.visionMission.mission.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-bmp-maroon" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </Container>
  );
}
