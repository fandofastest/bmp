import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
              "radial-gradient(circle at 20% 30%, rgba(201,161,74,0.16), transparent 40%), radial-gradient(circle at 85% 70%, rgba(122,30,43,0.12), transparent 45%)",
          }}
        />

        <div
          style={{
            width: 980,
            border: "1px solid rgba(24,24,27,0.12)",
            borderRadius: 28,
            padding: 52,
            display: "flex",
            gap: 42,
            alignItems: "center",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 999,
              border: "10px solid #C9A14A",
              boxShadow: "0 18px 50px rgba(122,30,43,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7A1E2B",
              fontWeight: 800,
              fontSize: 52,
              letterSpacing: 2,
            }}
          >
            BMP
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
                fontSize: 44,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Corporate Profile
            </div>
            <div style={{ color: "#4b5563", fontSize: 18, lineHeight: 1.4 }}>
              UMKM development • Packaging plants • F&B supply chain
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
