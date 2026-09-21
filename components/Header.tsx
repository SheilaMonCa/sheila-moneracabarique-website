"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, FileDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { identity } from "@/data/identity";

const NAV_LINKS = [
  { href: "/", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-line" style={{ backgroundColor: 'var(--header-bg)' }}>
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-7xl flex-1 flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            {/* Left side: name with sidebar alignment */}
            <div className="w-auto md:w-80">
              <Link href="/" className="font-display text-2xl tracking-tight">
                {identity.name}
              </Link>
            </div>

            {/* Desktop nav and socials */}
            <nav className="hidden items-center gap-6 md:flex">
              <ul className="flex items-center gap-5 font-mono text-base">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={active ? "transition-colors" : "text-ink-soft transition-colors hover:text-ink"}
                        style={active ? { color: "var(--signal)" } : {}}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-3 border-l border-line pl-5">
                <a
                  href={identity.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <Github size={17} />
                </a>
                <a
                  href={identity.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={identity.socialLinks.resume}
                  download
                  aria-label="Download resume"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <FileDown size={17} />
                </a>
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="text-ink-soft transition-colors hover:text-ink"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown panel */}
          {mobileOpen && (
            <div className="border-t border-line px-6 py-5 md:hidden">
              <ul className="flex flex-col gap-4 font-mono text-base">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={active ? "transition-colors" : "text-ink-soft transition-colors hover:text-ink"}
                        style={active ? { color: "var(--signal)" } : {}}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 flex items-center gap-5 border-t border-line pt-5">
                <a
                  href={identity.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <Github size={19} />
                </a>
                <a
                  href={identity.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <Linkedin size={19} />
                </a>
                <a
                  href={identity.socialLinks.resume}
                  download
                  aria-label="Download resume"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  <FileDown size={19} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}