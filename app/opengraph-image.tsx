import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";
import { site } from "@/data/site";

export const alt = `${site.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gilroyBold = readFile(join(process.cwd(), "app/fonts/Gilroy-Bold.ttf"));

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#10211f",
          color: "#f3f5f1",
          display: "flex",
          fontFamily: "Gilroy",
          height: "100%",
          width: "100%",
          padding: "64px 70px",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "2px solid #f37859",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "42px 46px",
            width: "100%",
          }}
        >
          <div style={{ color: "#f37859", display: "flex", fontSize: 30, letterSpacing: "0.08em" }}>
            SS.
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 70, letterSpacing: "-0.04em", lineHeight: 1 }}>
              {profile.name}
            </div>
            <div style={{ color: "#f37859", display: "flex", fontSize: 46, letterSpacing: "-0.03em", marginTop: 18 }}>
              Software Engineer
            </div>
          </div>
          <div style={{ color: "#c1ccc7", display: "flex", fontSize: 26 }}>
            Product interfaces · Backend services · {profile.location}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gilroy",
          data: await gilroyBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
