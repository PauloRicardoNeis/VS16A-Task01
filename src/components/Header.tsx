import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" legacyBehavior>
                    <a>MeuSite</a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/" legacyBehavior>
                    <a>Home</a>
                </Link>
                <Link href="/menu2" legacyBehavior>
                    <a>Menu2</a>
                </Link>
                <Link href="/menu3" legacyBehavior>
                    <a>Menu3</a>
                </Link>
            </nav>
        </header>
    );
}
