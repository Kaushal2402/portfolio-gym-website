'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Flame, Activity } from 'lucide-react';

const classes = [
    {
        name: 'HIIT Protocol',
        icon: <Zap size={40} />,
        desc: 'High Intensity Interval Training that shreds fat and boosts VO2 max. Not for the faint of heart.',
        time: '45 MINS'
    },
    {
        name: 'IRON Mastery',
        icon: <Shield size={40} />,
        desc: 'Strength training focused on compound movements and progressive overload. Build the foundation.',
        time: '60 MINS'
    },
    {
        name: 'Combat Flow',
        icon: <Flame size={40} />,
        desc: 'Mixed martial arts inspired conditioning. Speed, power, and mental sharpess combined.',
        time: '50 MINS'
    },
    {
        name: 'Titan Mobility',
        icon: <Activity size={40} />,
        desc: 'Advanced stretching and structural alignment to ensure your body performs at peak longevity.',
        time: '40 MINS'
    }
];

export default function Classes() {
    return (
        <section id="classes" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="flex-between" style={{ marginBottom: '5rem' }}>
                    <div className="mobile-text-center">
                        <h2 style={{ fontSize: '1rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>OPERATIONS</h2>
                        <h3 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>Elite <span className="text-gradient">Workouts</span></h3>
                    </div>
                    <p style={{ maxWidth: '400px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Our classes are meticulously designed to challenge every energy system and build a complete athlete.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {classes.map((cls, index) => (
                        <motion.div
                            key={cls.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, borderColor: 'var(--brand-primary)' }}
                            style={{
                                backgroundColor: 'var(--bg-tertiary)',
                                padding: '3rem',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                transition: 'var(--transition-slow)'
                            }}
                        >
                            <div style={{ color: 'var(--brand-primary)', marginBottom: '2rem' }}>
                                {cls.icon}
                            </div>
                            <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{cls.name}</h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
                                {cls.desc}
                            </p>
                            <div style={{
                                display: 'inline-block',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: '4px 15px',
                                fontSize: '0.75rem',
                                fontWeight: 900,
                                letterSpacing: '1px',
                                borderRadius: '2px'
                            }}>
                                {cls.time}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
