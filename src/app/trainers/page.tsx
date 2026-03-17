'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

const trainers = [
    {
        id: 1,
        name: 'Marcus "The Titan" Steele',
        expertise: 'Powerlifting / Hypertrophy',
        experience: '15 Years',
        image: '/trainers/trainer_1.png',
        bio: '15 years of competitive bodybuilding. Former Olympian. He doesn\'t coach; he re-engineers human potential.',
        stats: { strength: 98, endurance: 85, discipline: 100 },
        socials: ['Instagram', 'Twitter']
    },
    {
        id: 2,
        name: 'Sarah "The Machine" Vance',
        expertise: 'Athletic Performance / HIIT',
        experience: '10 Years',
        image: '/trainers/trainer_2.png',
        bio: 'Ex-Special Forces physical lead. Precision and intensity are her only standards. Average is her enemy.',
        stats: { strength: 80, endurance: 99, discipline: 100 },
        socials: ['Instagram', 'LinkedIn']
    },
    {
        id: 3,
        name: 'Viktor "The Wall" Drago',
        expertise: 'Strength / Mental Fortitude',
        experience: '12 Years',
        image: '/trainers/trainer_3.png',
        bio: 'Master of the heavy iron. 1000lb club legend. He builds armor for the body and steel for the mind.',
        stats: { strength: 100, endurance: 75, discipline: 95 },
        socials: ['Instagram', 'Youtube']
    },
    {
        id: 4,
        name: 'Jax "The Relentless" Thorne',
        expertise: 'Bodybuilding / Prep Coaching',
        experience: '8 Years',
        image: '/trainers/trainer_4.png',
        bio: 'Specialist in metabolic conditioning and stage preparation. Known for turning "potential" into "podium".',
        stats: { strength: 90, endurance: 80, discipline: 98 },
        socials: ['Instagram', 'Twitter']
    },
    {
        id: 5,
        name: 'Elena "The Flame" Rossi',
        expertise: 'CrossFit / Mobility',
        experience: '9 Years',
        image: '/trainers/trainer_5.png',
        bio: 'Combining raw explosive power with elite-level mobility. Proof that you can be strong, fast, and unbreakable.',
        stats: { strength: 85, endurance: 95, discipline: 92 },
        socials: ['Instagram', 'Facebook']
    }
];

export default function TrainersPage() {
    const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            <section className="section-padding" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '1rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>COMMANDERS</h2>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1 }}>THE <span className="text-gradient">TITAN</span> COLLECTIVE</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            We don't hire trainers. We recruit leaders who live the standard every single day.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 400px), 1fr))',
                        gap: '2.5rem'
                    }}>
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={trainer.id}
                                layoutId={`trainer-${trainer.id}`}
                                onClick={() => setSelectedTrainer(trainer)}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--glass-border)',
                                    transition: 'var(--transition-slow)'
                                }}
                            >
                                <div style={{ position: 'relative', height: 'clamp(300px, 40vh, 500px)' }}>
                                    <Image src={trainer.image} alt={trainer.name} fill style={{ objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                                    }} />
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                                        <div style={{ color: 'var(--brand-primary)', fontWeight: 900, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            {trainer.expertise}
                                        </div>
                                        <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{trainer.name}</h3>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>XP: {trainer.experience}</span>
                                    <span style={{ color: 'var(--brand-primary)', fontWeight: 900, fontSize: '0.7rem' }}>VIEW DOSSIER →</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Dossier Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTrainer(null)}
                            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
                        />
                        <motion.div
                            layoutId={`trainer-${selectedTrainer.id}`}
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '1000px',
                                maxHeight: '95vh',
                                backgroundColor: 'var(--bg-tertiary)',
                                borderRadius: '8px',
                                overflowY: 'auto',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                border: '1px solid var(--brand-primary)'
                            }}
                        >
                            <div style={{ position: 'relative', height: 'clamp(350px, 60vh, 600px)' }}>
                                <Image src={selectedTrainer.image} alt={selectedTrainer.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)', display: 'flex', flexDirection: 'column' }}>
                                <button
                                    onClick={() => setSelectedTrainer(null)}
                                    style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', cursor: 'pointer', zIndex: 10 }}
                                >
                                    <X size={32} />
                                </button>

                                <div style={{ color: 'var(--brand-primary)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '4px', fontSize: '0.8rem' }}>TRAINER DOSSIER</div>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1 }}>{selectedTrainer.name}</h2>

                                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '0.3rem' }}>EXPERTISE</div>
                                        <div style={{ fontWeight: 700 }}>{selectedTrainer.expertise}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '0.3rem' }}>EXPERIENCE</div>
                                        <div style={{ fontWeight: 700 }}>{selectedTrainer.experience}</div>
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                    {selectedTrainer.bio}
                                </p>

                                <div style={{ marginBottom: '3rem' }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '2px' }}>PERFORMANCE STATS</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {Object.entries(selectedTrainer.stats).map(([key, val]) => (
                                            <div key={key}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                                                    <span>{key}</span>
                                                    <span>{val}%</span>
                                                </div>
                                                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${val}%` }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        style={{ height: '100%', backgroundColor: 'var(--brand-primary)', borderRadius: '2px' }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        borderRadius: '2px',
                                        marginTop: 'auto',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    BOOK PRIVATE SESSION
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
