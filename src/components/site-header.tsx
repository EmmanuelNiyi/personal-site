"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { CV_HREF } from "./ui";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            EN
          </span>
          <span className="brand-name">Emmanuel Niyi-Oriolowo</span>
        </Link>
        <nav className="site-nav">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
          <a className="btn btn-primary btn-sm nav-cv" href={CV_HREF}>
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
