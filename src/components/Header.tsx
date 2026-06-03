"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun1, Moon, HambergerMenu, CloseSquare } from "iconsax-react";

export default function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [scrolled, setScrolled] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // initialize theme from localStorage or prefers-color-scheme
        const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (saved === "dark") setTheme("dark");
        else if (saved === "light") setTheme("light");
        else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.removeAttribute("data-theme");
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    function toggleTheme() {
        // trigger smooth icon animation
        setAnimating(true);

        // Delay theme change slightly to sync with animation
        setTimeout(() => {
            setTheme((t) => (t === "dark" ? "light" : "dark"));
        }, 150);

        // Reset animation state
        setTimeout(() => setAnimating(false), 600);
    }

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 50);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        function onViewportChange(e: MediaQueryListEvent | MediaQueryList) {
            if (e.matches) setMobileMenuOpen(false);
        }
        onViewportChange(mq);
        mq.addEventListener("change", onViewportChange);
        return () => mq.removeEventListener("change", onViewportChange);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#research", label: "Research" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <header className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo/Brand */}
                    <div className="navbar-brand md:hidden">
                        <Link href="/" className="brand-link">
                            <div className="brand-initial">B</div>
                            <span className="brand-text">Biniyam</span>
                        </Link>
                    </div>

                    <div className="navbar-spacer hidden md:block" aria-hidden="true" />

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="nav-item">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="navbar-actions">
                        {/* Theme Toggle */}
                        <button
                            aria-label="toggle theme"
                            onClick={toggleTheme}
                            className="theme-toggle"
                        >
                            <span className={`theme-icon ${animating ? 'animate-spin' : ''}`}>
                                {theme === "dark" ? (
                                    <Moon size="20" color="#e1e7ef" className="icon-moon" />
                                ) : (
                                    <Sun1 size="20" color="#f97316" className="icon-sun" />
                                )}
                            </span>
                        </button>

                        {/* Resume Button */}
                        <Link href="/Biniyam Zergaw Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                            Resume
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="toggle mobile menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="mobile-menu-btn md:hidden"
                        >
                            {mobileMenuOpen ? (
                                <CloseSquare size="24" color="currentColor" />
                            ) : (
                                <HambergerMenu size="24" color="currentColor" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <nav className="mobile-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="mobile-nav-item"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/Biniyam Zergaw Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-resume-btn"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Resume PDF
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
