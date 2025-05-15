import styles from '@/components/Footer/Footer.module.scss';
import Link from 'next/link';
import { ReactElement } from 'react';
import { navLinks } from '@/data/navLinks';

function getLinksElement(): ReactElement[] {
    return navLinks.map((link, index) => (
        <span key={link.href}>
            <Link href={link.href}>{link.label}</Link>
            {index < navLinks.length - 1 && " | "}
        </span>
    ));
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav>
                {getLinksElement()}
            </nav>
            <p>&copy; {new Date().getFullYear()} Paulo Neis. All rights reserved.</p>

            <small>
                Developed by <a href="https://github.com/PauloRicardoNeis">PauloRicardoNeis</a>
            </small>

            <div className={styles.tech}>
                Built with Next.js · Sass · TypeScript
            </div>
        </footer>
    );
}
