import { identity } from "@/data/identity";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-board items-center justify-between px-6 py-6 font-mono text-[12px] text-ink-soft">
        <span>&copy; {new Date().getFullYear()} {identity.name}</span>
        <span>{identity.location}</span>
      </div>
    </footer>
  );
}