'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Membership', href: '/plans' },
        { name: 'Commanders', href: '/trainers' },
        { name: 'Operations', href: '/classes' },
        { name: 'Battle Proven', href: '/transformations' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer style={{ padding: '8rem 0 4rem', borderTop: '1px solid var(--glass-border)', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    marginBottom: '4rem',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: '1', minWidth: '280px' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
                            TITAN<span style={{ color: 'var(--brand-primary)' }}>.</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '400px' }}>
                            The world's most exclusive high-performance gym brand. We don't train bodies; we build dominance.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '4rem',
                        flex: '2'
                    }}>
                        <div>
                            <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '2px' }}>NAVIGATION</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {links.map(link => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        style={{
                                            color: pathname === link.href ? 'var(--brand-primary)' : 'var(--text-muted)',
                                            fontSize: '0.85rem',
                                            fontWeight: pathname === link.href ? 900 : 600,
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        {link.name.toUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '2px' }}>SOCIAL</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>INSTAGRAM</a>
                                <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>TWITTER</a>
                                <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>LINKEDIN</a>
                                <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>YOUTUBE</a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '2px' }}>LOCATION</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 2, fontWeight: 600 }}>
                                707 DOMINANCE WAY<br />
                                IRON DISTRICT, NY 10001<br />
                                <span style={{ color: 'var(--brand-primary)', marginTop: '1rem', display: 'inline-block' }}>+1 (212) TITAN-00</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: '3rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 600 }}>
                        © 2026 TITAN PERFORMANCE GYM. ALL RIGHTS RESERVED.
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>PRIVACY POLICY</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>TERMS OF SERVICE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
