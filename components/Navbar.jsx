"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <Link href="/" className="navbarLogo">
          <Image src="/images/profile.png" alt="ST" width={32} height={32} />
          <span>ST</span>
        </Link>
        <div className={`navbarLinks ${open ? "open" : ""}`}>
          {["home", "about", "projects", "experience"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <button
          className="mobileMenuBtn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span style={open ? { transform: "rotate(45deg) translate(4px,4px)" } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: "rotate(-45deg) translate(4px,-4px)" } : {}} />
        </button>
      </div>
    </nav>
  );
}
