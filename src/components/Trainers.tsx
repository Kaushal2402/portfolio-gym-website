'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const trainers = [
    {
        name: 'Marcus "The Titan" Steele',
        specialty: 'Powerlifting / Hypertrophy',
        bio: '15 years of competitive bodybuilding. Former Olympian. He doesn\'t coach; he re-engineers human potential.',
        image: '/trainers/trainer_1.png'
    },
    {
        name: 'Sarah "The Machine" Vance',
        specialty: 'Athletic Performance / HIIT',
        bio: 'Ex-Special Forces physical lead. Precision and intensity are her only standards. Average is her enemy.',
        image: '/trainers/trainer_2.png'
    },
    {
        name: 'Viktor "The Wall" Drago',
        specialty: 'Strength / Mental Fortitude',
        bio: 'Master of the heavy iron. 1000lb club legend. He builds armor for the body and steel for the mind.',
        image: '/trainers/trainer_3.png'
    }
];

export default function Trainers() {
    return (
        <section id="trainers" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '1rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>COMMANDERS</h2>
                    <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>The <span className="text-gradient">Elite</span> Few</h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                position: 'relative',
                                height: '600px',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                    padding: '3rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <div style={{ color: 'var(--brand-primary)', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                    {trainer.specialty}
                                </div>
                                <h4 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>{trainer.name}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{trainer.bio}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
