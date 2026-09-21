"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, FileDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { identity } from "@/data/identity";

const NAV_LINKS = [
  { href: "/", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line" style={{ backgroundColor: 'var(--header-bg)' }}>
      <div className="flex flex-1 justify-center">
        <div className="flex max-w-7xl flex-1 items-center justify-between px-6 py-5">
          {/* Left side: name with sidebar alignment */}
          <div className="w-80">
            <Link href="/" className="font-display text-2xl tracking-tight">
              {identity.name}
            </Link>
          </div>

          {/* Right side: nav and socials */}
          <nav className="flex items-center gap-6">
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
        </div>
      </div>
    </header>
  );
}