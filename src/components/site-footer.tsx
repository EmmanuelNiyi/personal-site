import Link from "next/link";
import { CV_HREF, EMAIL, GITHUB, KAGGLE, LINKEDIN } from "./ui";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              EN
            </span>
            <span className="brand-name">Emmanuel Niyi-Oriolowo</span>
          </div>
          <p>Data scientist and medical doctor building machine learning for healthcare. Based in Newcastle, UK.</p>
        </div>
        <div>
          <h2 className="footer-heading">Site</h2>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/writing">Writing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Elsewhere</h2>
          <ul className="footer-links">
            <li>
              <a href={GITHUB} target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={KAGGLE} target="_blank" rel="noopener">
                Kaggle
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>Email</a>
            </li>
            <li>
              <a href={CV_HREF}>CV (PDF)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Emmanuel Niyi-Oriolowo</div>
    </footer>
  );
}
