import "./globals.css";

export const metadata = {
  title: "Midnight Coast Studio",
  description: "Midnight precision for daytime closings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-midnight text-sand">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-silver px-6 py-4 flex justify-between">
            <div className="font-light tracking-wide">Midnight Coast Studio</div>
            <nav className="flex gap-4 text-sm">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/workflow">Workflow</a>
              <a href="/onboarding">Onboarding</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
              <a href="/start-a-file" className="text-silver">Start a File</a>
            </nav>
          </header>
          <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">{children}</main>
          <footer className="border-t border-silver px-6 py-4 text-xs text-sand/70">
            Midnight Coast Studio · Midnight precision for daytime closings · Rockport / Aransas Pass, Texas
          </footer>
        </div>
      </body>
    </html>
  );
}
