import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Astitva Garbhsanskar — Live Online Prenatal Wellness";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4A1230",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
          padding: "60px",
          textAlign: "center",
        }}
      >
        {/* Soft Blush Radial Glow */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "#9B2C6F",
            filter: "blur(120px)",
            opacity: 0.5,
          }}
        />

        {/* Outer Frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #F2C0CD",
            borderRadius: "24px",
            padding: "48px 64px",
            background: "rgba(94, 26, 61, 0.4)",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: "bold",
              letterSpacing: "4px",
              color: "#D5DEC6",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            ASTITVA GARBHSANSKAR
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: "bold",
              color: "#FDF7F1",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            स्वप्नातील बाळ सत्यात
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#F2C0CD",
              marginBottom: 24,
            }}
          >
            Turning the baby of your dreams into reality
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 18,
              color: "#D5DEC6",
              background: "#5E1A3D",
              padding: "10px 24px",
              borderRadius: "999px",
            }}
          >
            <span>Live Daily Zoom Batches</span>
            <span>•</span>
            <span>Prajakta Dhamane & Minal Purkar</span>
            <span>•</span>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
