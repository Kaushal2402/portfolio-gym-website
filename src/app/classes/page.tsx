'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, User, Zap, Flame, Shield, Activity } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData: Record<string, any[]> = {
    'Monday': [
        { time: '06:00 AM', name: 'HIIT Protocol', trainer: 'Sarah Vance', icon: <Zap size={18} /> },
        { time: '08:00 AM', name: 'IRON Mastery', trainer: 'Marcus Steele', icon: <Shield size={18} /> },
        { time: '12:00 PM', name: 'Combat Flow', trainer: 'Sarah Vance', icon: <Flame size={18} /> },
        { time: '05:00 PM', name: 'IRON Mastery', trainer: 'Viktor Drago', icon: <Shield size={18} /> },
        { time: '07:00 PM', name: 'HIIT Protocol', trainer: 'Elena Rossi', icon: <Zap size={18} /> },
    ],
    'Tuesday': [
        { time: '07:00 AM', name: 'Titan Mobility', trainer: 'Elena Rossi', icon: <Activity size={18} /> },
        { time: '09:00 AM', name: 'Combat Flow', trainer: 'Jax Thorne', icon: <Flame size={18} /> },
        { time: '04:00 PM', name: 'HIIT Protocol', trainer: 'Sarah Vance', icon: <Zap size={18} /> },
        { time: '06:00 PM', name: 'IRON Mastery', trainer: 'Marcus Steele', icon: <Shield size={18} /> },
    ],
    'Wednesday': [
        { time: '06:00 AM', name: 'HIIT Protocol', trainer: 'Sarah Vance', icon: <Zap size={18} /> },
        { time: '08:00 AM', name: 'IRON Mastery', trainer: 'Viktor Drago', icon: <Shield size={18} /> },
        { time: '12:00 PM', name: 'Titan Mobility', trainer: 'Elena Rossi', icon: <Activity size={18} /> },
        { time: '05:00 PM', name: 'Combat Flow', trainer: 'Jax Thorne', icon: <Flame size={18} /> },
        { time: '07:00 PM', name: 'IRON Mastery', trainer: 'Marcus Steele', icon: <Shield size={18} /> },
    ],
    'Thursday': [
        { time: '07:00 AM', name: 'Titan Mobility', trainer: 'Elena Rossi', icon: <Activity size={18} /> },
        { time: '09:00 AM', name: 'HIIT Protocol', trainer: 'Sarah Vance', icon: <Zap size={18} /> },
        { time: '05:00 PM', name: 'Combat Flow', trainer: 'Jax Thorne', icon: <Flame size={18} /> },
        { time: '07:00 PM', name: 'IRON Mastery', trainer: 'Viktor Drago', icon: <Shield size={18} /> },
    ],
    'Friday': [
        { time: '06:00 AM', name: 'HIIT Protocol', trainer: 'Elena Rossi', icon: <Zap size={18} /> },
        { time: '08:00 AM', name: 'IRON Mastery', trainer: 'Marcus Steele', icon: <Shield size={18} /> },
        { time: '12:00 PM', name: 'Combat Flow', trainer: 'Sarah Vance', icon: <Flame size={18} /> },
        { time: '05:00 PM', name: 'HIIT Protocol', trainer: 'Jax Thorne', icon: <Zap size={18} /> },
    ],
    'Saturday': [
        { time: '09:00 AM', name: 'Titan Mobility', trainer: 'Elena Rossi', icon: <Activity size={18} /> },
        { time: '11:00 AM', name: 'IRON Mastery', trainer: 'Viktor Drago', icon: <Shield size={18} /> },
        { time: '02:00 PM', name: 'Combat Flow', trainer: 'Jax Thorne', icon: <Flame size={18} /> },
    ],
    'Sunday': [
        { time: '10:00 AM', name: 'Advanced Mobility', trainer: 'Elena Rossi', icon: <Activity size={18} /> },
        { time: '12:00 PM', name: 'Recovery Session', trainer: 'Team Titan', icon: <Activity size={18} /> },
    ]
};

export default function ClassesPage() {
    const [activeDay, setActiveDay] = useState('Monday');

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
                        <h2 style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>OPERATIONS</h2>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1 }}>CLASS <span className="text-gradient">SCHEDULE</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            Meticulously programmed sessions for elite performers. Find your window and claim your place.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timetable Section */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    {/* Day Selector */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        marginBottom: '4rem',
                        padding: '0.4rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '4px',
                        border: '1px solid var(--glass-border)'
                    }}>
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                style={{
                                    padding: '0.8rem 1.2rem',
                                    borderRadius: '2px',
                                    fontSize: '0.75rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: activeDay === day ? 'var(--brand-primary)' : 'transparent',
                                    color: activeDay === day ? 'white' : 'var(--text-muted)',
                                    letterSpacing: '1px',
                                    border: 'none',
                                    flex: '1',
                                    minWidth: '100px'
                                }}
                            >
                                {day.substring(0, 3)}
                            </button>
                        ))}
                    </div>

                    {/* Classes Grid */}
                    <div style={{ minHeight: '400px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                {scheduleData[activeDay].map((item, index) => (
                                    <motion.div
                                        key={`${activeDay}-${index}`}
                                        whileHover={{ x: 5, borderColor: 'var(--brand-primary)' }}
                                        style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '4px',
                                            padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            alignItems: 'center',
                                            gap: '2rem',
                                            transition: 'var(--transition-fast)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ color: 'var(--brand-primary)', backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '12px', borderRadius: '4px' }}>
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 900, letterSpacing: '1px' }}>START TIME</div>
                                                <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>{item.time}</div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ color: 'var(--brand-primary)' }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 900, letterSpacing: '1px' }}>OPERATION</div>
                                                <div style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>{item.name}</div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ color: 'var(--brand-primary)', backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '12px', borderRadius: '4px' }}>
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 900, letterSpacing: '1px' }}>COMMANDER</div>
                                                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{item.trainer}</div>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'center' }}>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '200px',
                                                    padding: '0.8rem 2rem',
                                                    border: '1px solid var(--brand-primary)',
                                                    color: 'var(--brand-primary)',
                                                    fontWeight: 900,
                                                    fontSize: '0.8rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    borderRadius: '2px',
                                                    backgroundColor: 'transparent',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                BOOK SLOT
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Background Texture Overlay */}
            <div style={{
                position: 'fixed',
                bottom: '5%',
                right: '5%',
                fontSize: '20vw',
                fontWeight: 900,
                color: 'var(--text-primary)',
                opacity: 0.01,
                pointerEvents: 'none',
                zIndex: -1,
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap'
            }}>
                SCHEDULE
            </div>

            <Footer />
        </main>
    );
}
