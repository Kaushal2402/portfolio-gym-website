'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Header Section */}
            <section className="section-padding" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>ENLISTMENT</h2>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1 }}>CLAIM YOUR <span className="text-gradient">PLACE</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            We don't take everyone. If you're ready to leave average behind, fill out waitlist dossier below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 600px), 1fr))',
                        gap: 'clamp(2rem, 5vw, 5rem)',
                        alignItems: 'start'
                    }}>
                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        >
                            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '2.5rem', textTransform: 'uppercase' }}>Elite Applicant <span style={{ color: 'var(--brand-primary)' }}>Form</span></h3>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '1px' }}>FULL NAME</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            color: 'white',
                                            borderRadius: '2px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '1px' }}>EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            color: 'white',
                                            borderRadius: '2px',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '1px' }}>PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            color: 'white',
                                            borderRadius: '2px',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '1px' }}>YOUR MISSION / GOAL</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How will you achieve dominance?"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            padding: '1rem',
                                            color: 'white',
                                            borderRadius: '2px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            resize: 'none'
                                        }}
                                    />
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '1.2rem',
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '3px',
                                        cursor: 'pointer',
                                        marginTop: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '1rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    SUBMIT DOSSIER <Send size={18} />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div style={{ marginBottom: '4rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', letterSpacing: '2px' }}>HEADQUARTERS</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                                        <div style={{ color: 'var(--brand-primary)', backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '12px', borderRadius: '4px' }}>
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '0.3rem' }}>LOCATION</div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4 }}>
                                                707 Dominance Way<br />Iron District, NY 10001
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                                        <div style={{ color: 'var(--brand-primary)', backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '12px', borderRadius: '4px' }}>
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '0.3rem' }}>CONTACT COMMS</div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>+1 (212) TITAN-00</div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                                        <div style={{ color: 'var(--brand-primary)', backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '12px', borderRadius: '4px' }}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '0.3rem' }}>DIRECT SECURE</div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 700, wordBreak: 'break-all' }}>hq@titan-performance.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div style={{
                                height: 'clamp(250px, 40vh, 350px)',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                position: 'relative'
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.455648!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(1) opacity(0.8)' }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Background Text Overlay */}
            <div style={{
                position: 'fixed',
                bottom: '5%',
                right: '-5%',
                fontSize: '25vw',
                fontWeight: 900,
                color: 'var(--text-primary)',
                opacity: 0.02,
                pointerEvents: 'none',
                zIndex: -1,
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap'
            }}>
                ENLIST
            </div>

            <Footer />
        </main>
    );
}
