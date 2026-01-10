import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 30%, rgba(201,161,74,0.16), transparent 40%), radial-gradient(circle at 85% 70%, rgba(122,30,43,0.12), transparent 45%)",
          }}
        />

        <div
          style={{
            width: 980,
            border: "1px solid rgba(24,24,27,0.12)",
            borderRadius: 28,
            padding: 56,
            display: "flex",
            gap: 48,
            alignItems: "center",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: 999,
              border: "10px solid #C9A14A",
              boxShadow: "0 18px 50px rgba(122,30,43,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7A1E2B",
              fontWeight: 800,
              fontSize: 56,
              letterSpacing: 2,
            }}
          >
            BMP
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#7A1E2B",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              PT Brilliand Makmur Perkasa
            </div>
            <div
              style={{
                color: "#111827",
                fontSize: 48,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Corporate Company Profile
            </div>
            <div style={{ color: "#4b5563", fontSize: 20, lineHeight: 1.4 }}>
              Strategic partnerships for UMKM development, industrial packaging plants,
              and food & beverage supply chain.
            </div>
            <div style={{ color: "#C9A14A", fontSize: 16, fontWeight: 700 }}>
              Pilar Ekonomi Bangsa
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
