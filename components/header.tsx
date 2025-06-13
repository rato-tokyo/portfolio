"use client"

import { useState } from "react"
import { siteConfig } from "@/data/site-data"
import "./header-mobile.css"
import "./header-desktop.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">{siteConfig.title}</div>

        <button className="header-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span className={`header-menu-line ${isMenuOpen ? "header-menu-line--active-1" : ""}`}></span>
          <span className={`header-menu-line ${isMenuOpen ? "header-menu-line--active-2" : ""}`}></span>
          <span className={`header-menu-line ${isMenuOpen ? "header-menu-line--active-3" : ""}`}></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? "header-nav--open" : ""}`}>
          <ul className="header-nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.name} className="header-nav-item">
                <a href={item.href} className="header-nav-link" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
