import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__inner container">
                {/* Desktop Links (centered) */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button className="nav-link" onClick={() => handleNav(link.href)}>
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="btn btn-primary"
                            style={{ padding: '9px 22px', fontSize: '0.85rem' }}
                            download="Ronit_Resume.pdf"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="mobile-menu"
                initial={false}
                animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
            >
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button className="nav-link" onClick={() => handleNav(link.href)}>
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a href="/resume.pdf" className="btn btn-primary" download="Ronit_Resume.pdf">Resume</a>
                    </li>
                </ul>
            </motion.div>
        </motion.nav>
    )
}
