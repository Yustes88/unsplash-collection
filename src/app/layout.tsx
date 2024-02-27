import { fontSans } from "~/components/ui/fonts";
import { siteConfig } from "~/constants/config";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
