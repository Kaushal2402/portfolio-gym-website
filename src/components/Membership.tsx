'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Basic',
        price: '49',
        features: ['Access to Gym Floor', 'Locker Room Access', 'Introductory Trainer Session', 'Standard Equipment'],
        popular: false,
    },
    {
        name: 'Pro',
        price: '99',
        features: ['Full Access 24/7', 'All Group Classes', 'Monthly Trainer Consultation', 'Recovery Lounge Access', 'Premium Equipment'],
        popular: true,
    },
    {
        name: 'Elite',
        price: '199',
        features: ['1-on-1 Personalized Coaching', 'Custom Nutrition Planning', 'Private Recovery Suite', 'Advanced Performance Tracking', 'VIP Event Access'],
        popular: false,
    },
];

export default function Membership() {
    return (
        <section id="plans" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '1rem', color: 'var(--brand-primary)', letterSpacing: '8px', marginBottom: '1rem' }}>MEMBERSHIP</h2>
                    <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>Choose Your <span className="text-gradient">Weapon</span></h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                borderColor: 'var(--brand-primary)',
                                boxShadow: plan.popular ? '0 0 50px rgba(204, 0, 0, 0.3)' : '0 0 30px rgba(255, 255, 255, 0.05)'
                            }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                border: plan.popular ? '2px solid var(--brand-primary)' : '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                padding: '3rem 2rem',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'var(--transition-slow)'
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--brand-primary)',
                                    padding: '4px 20px',
                                    borderRadius: '20px',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.name}</h4>
                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '3.5rem', fontWeight: 900 }}>${plan.price}</span>
                                <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>/ Month</span>
                            </div>

                            <div style={{ flex: 1, marginBottom: '2.5rem' }}>
                                {plan.features.map((feature) => (
                                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <Check size={18} color="var(--brand-primary)" />
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/plans">
                                <motion.button
                                    whileHover={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        border: '1px solid var(--brand-primary)',
                                        color: plan.popular ? 'white' : 'var(--brand-primary)',
                                        backgroundColor: plan.popular ? 'var(--brand-primary)' : 'transparent',
                                        fontWeight: 900,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        borderRadius: '2px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Text Overlay */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-5%',
                fontSize: '15vw',
                fontWeight: 900,
                color: 'var(--text-primary)',
                opacity: 0.03,
                pointerEvents: 'none',
                zIndex: -1,
                fontFamily: 'var(--font-heading)',
            }}>
                LEVEL UP
            </div>
        </section>
    );
}
