'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Powerlifting', 'Bodybuilding', 'Weight Loss', 'Athletic Performance'];

const transformations = [
    {
        id: 1,
        name: 'Alex R.',
        category: 'Powerlifting',
        before: '/transformations/t1_before.png',
        after: '/transformations/t1_after.png',
        weeks: 12,
        result: '+40kg on Squat, -8kg Body Fat',
        story: 'Alex came to us with a plateau in strength. Through our Elite Performance track, we rebuilt his compound movements from the ground up.'
    },
    {
        id: 2,
        name: 'Sarah J.',
        category: 'Weight Loss',
        before: '/transformations/t2_before.png',
        after: '/transformations/t2_after.png',
        weeks: 16,
        result: '-15kg, Drastic Body Composition Shift',
        story: 'Sarah transformed not just her body, but her entire mindset. She now leads our dawn HIIT sessions as a community ambassador.'
    }
];

export default function TransformationsPage() {
    const [filter, setFilter] = useState('All');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const filtered = transformations.filter(t => filter === 'All' || t.category === filter);
    const selectedItem = transformations.find(t => t.id === selectedId);

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Header */}
            <section className="section-padding" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>RESISTANCE</h2>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1 }}>BATTLE <span className="text-gradient">PROVEN</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            We don't sell hope. We deliver undeniable physical evidence. Browse the hall of dominance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    {/* Filter Bar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.82rem',
                        flexWrap: 'wrap',
                        marginBottom: '4rem'
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '2px',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: filter === cat ? 'var(--brand-primary)' : 'rgba(255,255,255,0.05)',
                                    color: filter === cat ? 'white' : 'var(--text-secondary)',
                                    letterSpacing: '1px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 600px), 1fr))',
                        gap: '2.5rem'
                    }}>
                        {filtered.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={`card-${item.id}`}
                                onClick={() => setSelectedId(item.id)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
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
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: 'var(--bg-primary)' }}>
                                    <div style={{ position: 'relative', height: 'clamp(300px, 40vh, 500px)' }}>
                                        <Image src={item.before} alt="Before" fill style={{ objectFit: 'cover' }} />
                                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.8)', padding: '2px 8px', fontSize: '0.6rem', fontWeight: 900 }}>BEFORE</div>
                                    </div>
                                    <div style={{ position: 'relative', height: 'clamp(300px, 40vh, 500px)' }}>
                                        <Image src={item.after} alt="After" fill style={{ objectFit: 'cover' }} />
                                        <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'var(--brand-primary)', padding: '2px 8px', fontSize: '0.6rem', fontWeight: 900 }}>AFTER</div>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <div style={{ color: 'var(--brand-primary)', fontWeight: 900, fontSize: '0.65rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>{item.category.toUpperCase()}</div>
                                        <h3 style={{ fontSize: '1.25rem' }}>{item.name}</h3>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                        <ZoomIn size={16} />
                                        <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '1px' }}>EXPLORE</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Data Preview */}
            <AnimatePresence>
                {selectedItem && (
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
                            onClick={() => setSelectedId(null)}
                            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.98)', backdropFilter: 'blur(20px)' }}
                        />
                        <motion.div
                            layoutId={`card-${selectedItem.id}`}
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '1200px',
                                maxHeight: '95vh',
                                backgroundColor: 'var(--bg-tertiary)',
                                borderRadius: '8px',
                                overflowY: 'auto',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                border: '1px solid var(--brand-primary)'
                            }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', height: '100%' }}>
                                <div style={{ position: 'relative', height: 'clamp(400px, 70vh, 700px)' }}>
                                    <Image src={selectedItem.before} alt="Before" fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(0,0,0,0.8)', padding: '5px 15px', fontSize: '0.7rem', fontWeight: 900 }}>INITIAL</div>
                                </div>
                                <div style={{ position: 'relative', height: 'clamp(400px, 70vh, 700px)' }}>
                                    <Image src={selectedItem.after} alt="After" fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: 'var(--brand-primary)', padding: '5px 15px', fontSize: '0.7rem', fontWeight: 900 }}>TITAN</div>
                                </div>
                            </div>

                            <div style={{ padding: 'clamp(2rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column' }}>
                                <button
                                    onClick={() => setSelectedId(null)}
                                    style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', cursor: 'pointer', border: 'none', background: 'none', zIndex: 10 }}
                                >
                                    <X size={32} />
                                </button>

                                <div style={{ color: 'var(--brand-primary)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '4px', fontSize: '0.8rem' }}>ANALYSIS REPORT</div>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem', lineHeight: 1 }}>{selectedItem.name}</h2>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '1px' }}>TIMEFRAME</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>{selectedItem.weeks} WEEKS</div>
                                    </div>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '1px' }}>CATEGORY</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand-primary)' }}>{selectedItem.category.toUpperCase()}</div>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid var(--brand-primary)', marginBottom: '2rem' }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.6rem', fontWeight: 900, marginBottom: '0.5rem' }}>KEY RESULTS</div>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>{selectedItem.result}</p>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                                    {selectedItem.story}
                                </p>

                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '3px',
                                        borderRadius: '2px',
                                        marginTop: 'auto',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    START YOUR JOURNEY
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
