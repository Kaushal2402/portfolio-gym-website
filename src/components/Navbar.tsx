'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Plans', href: '/plans' },
    { name: 'Commanders', href: '/trainers' },
    { name: 'Operations', href: '/classes' },
    { name: 'Battle Proven', href: '/transformations' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const closeMenu = () => setIsOpen(false);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.95)' : (isOpen ? 'rgba(5, 5, 5, 1)' : 'transparent'),
                backdropFilter: (isScrolled || isOpen) ? 'blur(20px)' : 'none',
                padding: isScrolled ? '0.8rem 0' : '1.5rem 0',
                borderBottom: (isScrolled || isOpen) ? '1px solid var(--glass-border)' : '1px solid rgba(255,255,255,0.05)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className="logo" style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '2px' }} onClick={closeMenu}>
                    TITAN<span style={{ color: 'var(--brand-primary)' }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                style={{
                                    textTransform: 'uppercase',
                                    fontSize: '0.75rem',
                                    fontWeight: 900,
                                    letterSpacing: '2px',
                                    color: isActive ? 'var(--brand-primary)' : 'var(--text-primary)',
                                    opacity: isActive ? 1 : 0.7,
                                    transition: 'var(--transition-fast)',
                                    position: 'relative',
                                    padding: '0.5rem 0'
                                }}
                            >
                                <motion.span whileHover={{ opacity: 1, color: 'var(--brand-primary)' }}>
                                    {link.name}
                                </motion.span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            backgroundColor: 'var(--brand-primary)'
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <Link href="/contact" onClick={closeMenu}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--brand-primary)', color: 'white' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.7rem 1.8rem',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '1px solid var(--brand-primary)',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                fontSize: '0.75rem',
                                letterSpacing: '2px',
                                borderRadius: '2px',
                                cursor: 'pointer'
                            }}
                        >
                            ENLIST
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-only">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        style={{
                            overflow: 'hidden',
                            backgroundColor: 'rgba(5, 5, 5, 1)',
                            borderTop: '1px solid var(--glass-border)',
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 99
                        }}
                    >
                        <div className="container" style={{ padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        style={{
                                            textTransform: 'uppercase',
                                            fontSize: '1.5rem',
                                            fontWeight: 900,
                                            letterSpacing: '3px',
                                            color: isActive ? 'var(--brand-primary)' : 'white',
                                            padding: '0.8rem 0',
                                            width: '100%',
                                            textAlign: 'center',
                                            borderBottom: isActive ? '1px solid var(--brand-primary)' : '1px solid transparent'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link href="/contact" onClick={closeMenu} style={{ width: '100%', maxWidth: '400px', marginTop: '2rem' }}>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        borderRadius: '2px',
                                        border: 'none'
                                    }}
                                >
                                    GET STARTED
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--brand-primary)',
                    scaleX,
                    transformOrigin: '0%'
                }}
            />
        </nav>
    );
}
