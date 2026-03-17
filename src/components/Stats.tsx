'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
    { label: 'Obsessed Members', value: 1000, suffix: '+' },
    { label: 'Elite Transformations', value: 200, suffix: '+' },
    { label: 'Pro Trainers', value: 25, suffix: '+' },
    { label: 'Modern Facilities', value: 5, suffix: '' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

export default function Stats() {
    return (
        <section
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--glass-border)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '4rem 0'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                        >
                            <h2 style={{ fontSize: '4rem', color: 'var(--brand-primary)', marginBottom: 0 }}>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h2>
                            <p style={{
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                                fontWeight: 900,
                                fontSize: '0.9rem',
                                letterSpacing: '2px'
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
