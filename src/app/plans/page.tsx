'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Star, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const planCategories = [
    'Training Access',
    'Facilities',
    'Support',
    'Extras'
];

const features = [
    { name: 'Gym Floor Access', status: [true, true, true], category: 'Training Access' },
    { name: 'Cardio Zone', status: [true, true, true], category: 'Training Access' },
    { name: 'Free Weights Area', status: [true, true, true], category: 'Training Access' },
    { name: '24/7 Access', status: [false, true, true], category: 'Training Access' },
    { name: 'Group Classes', status: [false, true, true], category: 'Training Access' },
    { name: 'Expert Classes', status: [false, false, true], category: 'Training Access' },

    { name: 'Locker Rooms', status: [true, true, true], category: 'Facilities' },
    { name: 'Sauna & Steam', status: [false, true, true], category: 'Facilities' },
    { name: 'Recovery Lounge', status: [false, true, true], category: 'Facilities' },
    { name: 'Private Suite', status: [false, false, true], category: 'Facilities' },

    { name: 'Intro Session', status: [true, true, true], category: 'Support' },
    { name: 'Monthly Consultation', status: [false, true, true], category: 'Support' },
    { name: 'Nutrition Plan', status: [false, false, true], category: 'Support' },
    { name: '1-on-1 PT', status: [false, false, true], category: 'Support' },

    { name: 'Guest Passes', status: [false, '2 / Month', 'Unlimited'], category: 'Extras' },
    { name: 'Merchandise Discount', status: ['5%', '15%', '30%'], category: 'Extras' },
];

const plans = [
    { name: 'BASIC', price: '49', period: '/mo', icon: <Zap size={24} />, color: 'var(--text-secondary)' },
    { name: 'PRO', price: '99', period: '/mo', icon: <Star size={24} />, color: 'var(--brand-primary)', hot: true },
    { name: 'ELITE', price: '199', period: '/mo', icon: <Shield size={24} />, color: 'var(--accent-orange)' },
];

export default function PlansPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Header */}
            <section className="section-padding" style={{ paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}
                    >
                        INVESTMENT
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1 }}
                    >
                        MEMBERSHIP <span className="text-gradient">TIERS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', lineHeight: 1.6 }}
                    >
                        Choose the level of dominance you are ready to achieve. No long-term contracts, just pure commitment to excellence.
                    </motion.p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '2rem', textAlign: 'left', width: '30%' }}></th>
                                    {plans.map((plan) => (
                                        <th key={plan.name} style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
                                            {plan.hot && (
                                                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--brand-primary)', color: 'white', fontSize: '0.7rem', fontWeight: 900, padding: '4px 12px', borderRadius: '20px', letterSpacing: '1px' }}>
                                                    POPULAR
                                                </div>
                                            )}
                                            <div style={{ color: plan.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{plan.icon}</div>
                                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                                                <span style={{ fontSize: '2.5rem', fontWeight: 900 }}>${plan.price}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {planCategories.map((category) => (
                                    <Fragment key={category}>
                                        <tr>
                                            <td colSpan={4} style={{ padding: '1.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.03)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '2px' }}>
                                                {category}
                                            </td>
                                        </tr>
                                        {features.filter(f => f.category === category).map((feature) => (
                                            <tr key={feature.name} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                                <td style={{ padding: '1.5rem 2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{feature.name}</td>
                                                {feature.status.map((status, idx) => (
                                                    <td key={idx} style={{ padding: '1.5rem', textAlign: 'center' }}>
                                                        {typeof status === 'boolean' ? (
                                                            status ? <Check size={20} color="var(--brand-primary)" style={{ margin: '0 auto' }} /> : <X size={20} color="var(--text-muted)" style={{ margin: '0 auto' }} />
                                                        ) : (
                                                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{status}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                                <tr>
                                    <td style={{ padding: '3rem 2rem' }}></td>
                                    {plans.map((plan) => (
                                        <td key={plan.name} style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                            <motion.button
                                                whileHover={{ scale: 1.05, boxShadow: plan.hot ? '0 0 30px var(--brand-primary)' : '0 0 20px rgba(255,255,255,0.1)' }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    width: '100%',
                                                    padding: '1.2rem',
                                                    backgroundColor: plan.hot ? 'var(--brand-primary)' : 'transparent',
                                                    color: 'white',
                                                    border: plan.hot ? 'none' : '1px solid var(--glass-border)',
                                                    fontWeight: 900,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '2px',
                                                    borderRadius: '2px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                SELECT {plan.name}
                                            </motion.button>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
