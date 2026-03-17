'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Transformations() {
    return (
        <section id="transformations" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '1rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>RESISTANCE</h2>
                    <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>Proof Beats <span className="text-gradient">Promises</span></h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', height: '500px' }}>
                                <Image src="/transformations/t1_before.png" alt="Before" fill style={{ objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.7)', padding: '2px 10px', fontSize: '0.7rem', fontWeight: 900 }}>BEFORE</div>
                            </div>
                            <div style={{ position: 'relative', height: '500px' }}>
                                <Image src="/transformations/t1_after.png" alt="After" fill style={{ objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'var(--brand-primary)', padding: '2px 10px', fontSize: '0.7rem', fontWeight: 900 }}>AFTER</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Client: Alex R.</h4>
                            <p style={{ color: 'var(--brand-primary)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>12 WEEKS PERFORMANCE PROGRAM</p>
                        </div>
                    </motion.div>

                    {/* Additional placeholders for variety */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', borderRadius: '4px', overflow: 'hidden', opacity: 0.8 }}>
                            <div style={{ position: 'relative', height: '500px', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ opacity: 0.1, fontSize: '5rem', fontWeight: 900 }}>TITAN</span>
                            </div>
                            <div style={{ position: 'relative', height: '500px', backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: 'var(--brand-primary)', fontSize: '1rem', fontWeight: 900 }}>RESULT LOADED</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Client: Sarah J.</h4>
                            <p style={{ color: 'var(--brand-primary)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>ELITE ATHLETE TRACK</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
