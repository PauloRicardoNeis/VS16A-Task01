'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';
import { navLinks } from '@/data/navLinks';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <button
                className={styles.toggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} onClick={() => setIsOpen(false)}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
