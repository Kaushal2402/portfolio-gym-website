'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const splitText = (text: string) => {
    return text.split("").map((char, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.33, 1, 0.68, 1]
            }}
            style={{ display: 'inline-block' }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    ));
};

export default function Hero() {
    return (
        <section className="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Background Image with Parallax */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '110%', // Extra height for parallax
                    zIndex: -1,
                }}
            >
                <Image
                    src="/hero_bg.png"
                    alt="Intense Gym Workout"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,0.95))',
                    }}
                />
            </motion.div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(4rem, 15vw, 10rem)',
                        letterSpacing: '-2px',
                        marginBottom: '1rem',
                        lineHeight: 0.8
                    }}>
                        {splitText("BUILT. NOT BORN.")}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        style={{
                            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: '10px',
                            marginBottom: '3rem'
                        }}
                    >
                        This is where limits die.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--brand-primary)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'var(--brand-primary)',
                                color: 'white',
                                padding: '1.2rem 3rem',
                                fontSize: '1.1rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                borderRadius: '2px'
                            }}
                        >
                            Join the Elite
                        </motion.button>

                        <Link href="/plans">
                            <motion.button
                                whileHover={{ scale: 1.05, border: '1px solid var(--brand-primary)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    padding: '1.2rem 3rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    borderRadius: '2px',
                                    cursor: 'pointer'
                                }}
                            >
                                View Plans
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Background Text Overlay */}
            <motion.div
                animate={{ x: [0, -20, 0], opacity: [0.05, 0.08, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    fontSize: '20vw',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    opacity: 0.05,
                    pointerEvents: 'none',
                    zIndex: 0,
                    fontFamily: 'var(--font-heading)',
                    whiteSpace: 'nowrap'
                }}
            >
                DOMINANCE POWER RELENTLESS
            </motion.div>
        </section>
    );
}
