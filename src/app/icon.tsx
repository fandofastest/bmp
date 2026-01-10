import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 16,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            border: "6px solid #C9A14A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7A1E2B",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          BMP
        </div>
      </div>
    ),
    size,
  );
}
