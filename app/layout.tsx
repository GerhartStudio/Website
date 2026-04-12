import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerhart Studio | Minecraft Plugin Development",
  description:
    "Gerhart Studio crafts high-performance Minecraft plugins that bring your server to life. Explore our plugins, meet the team, and level up your server today.",
  keywords: [
    "Minecraft",
    "plugins",
    "Spigot",
    "Paper",
    "Bukkit",
    "Gerhart Studio",
    "server",
    "development",
  ],
  openGraph: {
    title: "Gerhart Studio | Minecraft Plugin Development",
    description:
      "High-performance Minecraft plugins crafted with passion. Power up your server.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
