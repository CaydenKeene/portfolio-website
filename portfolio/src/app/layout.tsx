import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Cayden Keene | Portfolio",
  description: "Portfolio website of Cayden Keene - Computer Science Student at UF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="no-scrollbar h-screen overflow-y-scroll">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
