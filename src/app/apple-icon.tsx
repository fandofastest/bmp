import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 999,
            border: "14px solid #C9A14A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7A1E2B",
            fontWeight: 900,
            fontSize: 56,
            letterSpacing: 2,
          }}
        >
          BMP
        </div>
      </div>
    ),
    size,
  );
}
