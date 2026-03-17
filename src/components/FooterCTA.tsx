'use client';

import { motion } from 'framer-motion';

export default function FooterCTA() {
    return (
        <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                style={{
                    backgroundColor: '#000',
                    padding: '10rem 0',
                    textAlign: 'center',
                    borderTop: '1px solid var(--glass-border)'
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '2rem', lineHeight: 0.9 }}>
                            READY TO BECOME <br />
                            <span className="text-gradient">UNSTOPPABLE?</span>
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 4rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            The elite don't wait for permission. They take action. Join the collective today.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 50px var(--brand-primary)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'var(--brand-primary)',
                                color: 'white',
                                padding: '1.5rem 4rem',
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                borderRadius: '2px'
                            }}
                        >
                            Start Your Journey
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Extreme Background Text */}
            <div style={{
                position: 'absolute',
                bottom: '-5%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '25vw',
                fontWeight: 900,
                color: 'var(--text-primary)',
                opacity: 0.02,
                pointerEvents: 'none',
                zIndex: 0,
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap'
            }}>
                NO EXCUSES
            </div>
        </section>
    );
}
