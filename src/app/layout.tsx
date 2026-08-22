import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jujutsushenanigans.robloxwikihub.com"),
  title: "Jujutsu Shenanigans Wiki — PvP Combo Builder, Codes & Tier List",
  description: "Comprehensive Jujutsu Shenanigans guide — Character PvP Tier List, Combo Builder, Awakening Guide, and Active Codes.",
  keywords: ["Jujutsu Shenanigans", "Jujutsu Shenanigans codes", "Jujutsu Shenanigans combos", "Jujutsu Shenanigans wiki", "Roblox"],
  alternates: {
    canonical: "https://jujutsushenanigans.robloxwikihub.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jujutsu Shenanigans Wiki",
    description: "Comprehensive Jujutsu Shenanigans guide — Character PvP Tier List, Combo Builder, Awakening Guide.",
    url: "https://jujutsushenanigans.robloxwikihub.com",
    siteName: "Jujutsu Shenanigans Wiki",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-purple-400 hover:text-purple-300">
              Jujutsu Shenanigans Wiki
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/codes" className="hover:text-purple-400">Codes</a>
              <a href="/tier-list" className="hover:text-purple-400">Tier List</a>
              <a href="/combo-calculator" className="hover:text-purple-400">⚡ Combos</a>
              <a href="/awakening-guide" className="hover:text-purple-400">🌀 Awakenings</a>
              <a href="/beginner-guide" className="hover:text-purple-400">📖 Guide</a>
              <a href="https://robloxwikihub.com" className="text-xs text-slate-400 hover:text-slate-200 bg-slate-800 px-3 py-1.5 rounded-full">Roblox Wiki Hub</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
          <p>© 2026 Jujutsu Shenanigans Wiki — Part of <a href="https://robloxwikihub.com" className="underline hover:text-slate-400">Roblox Wiki Hub Network</a>. Unofficial guide.</p>
        </footer>
      </body>
    </html>
  );
}
