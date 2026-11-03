import { ImageResponse } from "next/og";

import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        gap: 24,
        background: "#FAF7F2",
        color: "#2F3A35",
      }}
    >
      <div
        style={{ display: "flex", width: 120, height: 12, background: "#6B8F71", borderRadius: 6 }}
      />
      <div style={{ fontSize: 76, fontWeight: 700 }}>{SITE_TITLE}</div>
      <div style={{ fontSize: 34, color: "#6B746F", maxWidth: 1000 }}>{SITE_DESCRIPTION}</div>
    </div>,
    size,
  );
}
