'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const content = {
  tr: { nav: ['ANASAYFA', 'KOLEKSİYON', 'UYGULAMA VİDEOLARI', 'HİKÂYEMİZ', 'İLETİŞİM', 'NEREDEYİZ?'], place: 'İstanbul, Türkiye' },
  en: { nav: ['HOME', 'COLLECTION', 'APPLICATION VIDEOS', 'OUR STORY', 'CONTACT', 'WHERE ARE WE?'], place: 'Istanbul, Turkey' },
};

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [open, setOpen] = useState(false);
  const t = content[lang];
  return <main className="replica">
    <div className="quilt" aria-hidden="true" /><div className="wash" aria-hidden="true" />
    <header className="replica-header">
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menü" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'replica-nav open' : 'replica-nav'} aria-label="Ana menü">
        {t.nav.map((item, i) => <a className={i === 0 ? 'selected' : ''} href={i === 0 ? '#top' : '#contact'} onClick={() => setOpen(false)} key={item}>{item}</a>)}
      </nav>
      <div className="lang-pill" aria-label="Dil seçimi">
        <button className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')} aria-label="Türkçe"><span>🇹🇷</span></button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-label="English"><span>🇬🇧</span></button>
      </div>
    </header>
    <section className="centerpiece" id="top">
      <div className="logo-frame"><div className="logo-inner"><h1>Nanna<sup>®</sup></h1></div></div>
      <p className="tag">TUFTING · ISTANBUL</p>
    </section>
    <footer className="replica-footer" id="contact">
      <div><a href="mailto:info@nanna.com.tr">info@nanna.com.tr</a><span>{t.place}</span></div>
      <div className="socials">
        <a href="https://www.instagram.com/nannatufting" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.25"/><circle className="icon-dot" cx="17.4" cy="6.7" r="1"/></svg></a>
        <a href="https://www.facebook.com/nannatufting" aria-label="Facebook"><svg className="facebook-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.8l.45-3.2H13.7V7.75c0-.93.28-1.56 1.63-1.56H17V3.32A22 22 0 0 0 14.55 3c-2.43 0-4.1 1.48-4.1 4.2v2.6H7.7V13h2.75v8h3.25Z"/></svg></a>
      </div>
      <small>© 2026 Nanna. All rights reserved.</small>
    </footer>
  </main>;
}
