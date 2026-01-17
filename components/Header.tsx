"use client"

import React from "react"

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>HAYINVEST</div>
      <nav style={styles.nav}>
        <a href="#hero" style={styles.link}>Home</a>
        <a href="#team" style={styles.link}>Team</a>
        <a href="#footer" style={styles.link}>Contact</a>
      </nav>
    </header>
  )
}

// Стиль оформлен как объект CSSProperties для TypeScript
const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    zIndex: 100,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)"
  },
  logo: {
    fontSize: 24,
    fontWeight: 700,
    color: "#3d0f84",
  },
  nav: {
    display: "flex",
    gap: 24,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  }
}
