import type { Metadata } from "next";
import "./globals.css";
import "./extra.css";
import "./search.css";
import "./number-cleanup.css";
import "./client-logos.css";
import "./product-visuals.css";
import "./graphics.css";
import "./ecosystem-redesign.css";
import "./detail-sections.css";
import "./brand-logo.css";
import "./icons.css";
import "./visual-story.css";
import "./footer-info.css";
import "./search.css";
import "./mobile-spacing.css";
import "./honeycomb.css";
import "./yellow-sections.css";

export const metadata: Metadata = {
  title: "Software Wizards | Enterprise Software, Built Around You",
  description: "Flexible, secure and integrated ERP solutions for Malaysian government, statutory bodies and enterprises.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Software Wizards | Enterprise Software, Built Around You",
    description: "Malaysian enterprise software innovation since 2002.",
    url: "https://software-wizards-my.elishanurmohdasri.chatgpt.site",
    siteName: "Software Wizards",
    images: [{ url: "https://software-wizards-my.elishanurmohdasri.chatgpt.site/og.png", width: 1200, height: 630, alt: "Software Wizards — Enterprise software, built around you." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Wizards | Enterprise Software, Built Around You",
    description: "Malaysian enterprise software innovation since 2002.",
    images: ["https://software-wizards-my.elishanurmohdasri.chatgpt.site/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
