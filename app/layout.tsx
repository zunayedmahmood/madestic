import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Madestic — Digital Execution Studio",
  description: "Madestic builds software, automation, AI workflows, strategy systems, and premium digital experiences for ambitious businesses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
